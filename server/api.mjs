import { randomBytes } from 'node:crypto';
import { query, transaction } from './db.mjs';
import {
  ApiError, digest, hashPassword, verifyPassword, validatePassword, sessionToken,
  setSessionCookie, checkMutation, text, emailAddress, validateRating, nextAssessmentDate,
} from './security.mjs';

const utcNow = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(body));
}

async function bodyOf(req) {
  if (req.method === 'GET') return {};
  let raw = req.body;
  if (raw === undefined) {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 65536) throw new ApiError(413, 'Päring on liiga suur.');
      chunks.push(chunk);
    }
    raw = Buffer.concat(chunks).toString('utf8');
  }
  if (typeof raw === 'string' || Buffer.isBuffer(raw)) {
    if (Buffer.byteLength(raw) > 65536) throw new ApiError(413, 'Päring on liiga suur.');
    try { raw = JSON.parse(String(raw) || '{}'); }
    catch { throw new ApiError(400, 'Päringu JSON ei ole korrektne.'); }
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new ApiError(400, 'Päringu sisu ei ole korrektne.');
  return raw;
}

export function questionPayload(row) {
  return {
    id: String(row.question_id ?? row.id), category: row.category, title: row.title, subskills: row.subskills,
    levels: { 1: row.level_1, 2: row.level_2, 3: row.level_3 },
  };
}

function userPayload(row) {
  return {
    id: String(row.id), name: row.name, email: row.email, role: row.role,
    clubId: String(row.club_id), club: row.club_name,
  };
}

async function requireUser(req, admin = false) {
  const token = sessionToken(req);
  if (!token) throw new ApiError(401, 'Palun logi sisse.');
  const [user] = await query(`SELECT u.*, c.name AS club_name FROM kt_sessions s
    JOIN kt_users u ON u.id = s.user_id JOIN kt_clubs c ON c.id = u.club_id
    WHERE s.token_hash = ? AND s.expires_at > UTC_TIMESTAMP() AND u.active = 1`, [digest(token)]);
  if (!user) throw new ApiError(401, 'Seanss on aegunud. Palun logi uuesti sisse.');
  if (admin && user.role !== 'admin') throw new ApiError(403, 'Selleks on vaja administraatori õigust.');
  return user;
}

async function issueSession(req, res, userId) {
  const token = randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 604800000).toISOString().slice(0, 19).replace('T', ' ');
  await query('INSERT INTO kt_sessions (token_hash,user_id,expires_at) VALUES (?,?,?)', [digest(token), userId, expires]);
  setSessionCookie(req, res, token);
}

async function limitAuth(req, email) {
  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const window = Math.floor(Date.now() / 900000);
  for (const [key, limit] of [[`ip:${ip}`, 40], [`email:${email}`, 15]]) {
    const bucket = digest(`${key}:${window}`);
    await query(`INSERT INTO kt_rate_limits (bucket,hits,expires_at) VALUES (?,1,DATE_ADD(UTC_TIMESTAMP(), INTERVAL 30 MINUTE))
      ON DUPLICATE KEY UPDATE hits = hits + 1`, [bucket]);
    const [row] = await query('SELECT hits FROM kt_rate_limits WHERE bucket = ?', [bucket]);
    if (row.hits > limit) throw new ApiError(429, 'Liiga palju katseid. Proovi 15 minuti pärast uuesti.');
  }
  await query('DELETE FROM kt_rate_limits WHERE expires_at < UTC_TIMESTAMP() LIMIT 50');
  await query('DELETE FROM kt_sessions WHERE expires_at < UTC_TIMESTAMP() LIMIT 50');
}

async function questions(clubId, connection) {
  return (await query(`SELECT * FROM kt_questions WHERE club_id = ? AND active = 1 ORDER BY sort_order,id`, [clubId], connection)).map(questionPayload);
}

async function assessmentData(id, connection) {
  const [row] = await query('SELECT * FROM kt_assessments WHERE id = ?', [id], connection);
  if (!row) throw new ApiError(404, 'Hindamist ei leitud.');
  const rows = await query('SELECT * FROM kt_answers WHERE assessment_id = ? ORDER BY question_id', [id], connection);
  return {
    id: String(row.id), kind: row.kind, status: row.status, average: row.average,
    date: row.completed_at?.slice(0, 10) || null, dueDate: row.due_at,
    comment: row.comment || '', questions: rows.map(questionPayload),
    answers: Object.fromEntries(rows.filter((a) => a.rating !== null).map((a) => [String(a.question_id), a.rating])),
    answeredAt: Object.fromEntries(rows.filter((a) => a.answered_at).map((a) => [String(a.question_id), a.answered_at])),
  };
}

async function history(userId, kind = null) {
  const rows = await query(`SELECT id FROM kt_assessments WHERE user_id = ? AND status = 'completed'
    ${kind ? 'AND kind = ?' : ''} ORDER BY completed_at,id`, kind ? [userId, kind] : [userId]);
  const result = [];
  for (const row of rows) result.push(await assessmentData(row.id));
  return result;
}

async function member(user, id) {
  const [target] = await query('SELECT * FROM kt_users WHERE id = ? AND club_id = ? AND active = 1', [id, user.club_id]);
  if (!target) throw new ApiError(404, 'Liiget ei leitud.');
  return target;
}

async function memberList(clubId) {
  return (await query(`SELECT u.id,u.name,u.email,
    (SELECT average FROM kt_assessments a WHERE a.user_id = u.id AND a.kind='self' AND a.status='completed' ORDER BY completed_at DESC,id DESC LIMIT 1) AS average,
    (SELECT completed_at FROM kt_assessments a WHERE a.user_id = u.id AND a.kind='self' AND a.status='completed' ORDER BY completed_at DESC,id DESC LIMIT 1) AS last,
    (SELECT due_at FROM kt_assessments a WHERE a.user_id = u.id AND a.kind='self' AND a.status='completed' ORDER BY completed_at DESC,id DESC LIMIT 1) AS dueDate,
    EXISTS(SELECT 1 FROM kt_assessments a WHERE a.user_id=u.id AND a.status='draft') AS hasDraft
    FROM kt_users u WHERE u.club_id=? AND u.active=1 ORDER BY u.name`, [clubId])).map((row) => ({ ...row, id: String(row.id), last: row.last?.slice(0, 10) || null }));
}

async function appState(user) {
  const selfHistory = await history(user.id, 'self');
  const adminHistory = await history(user.id, 'admin');
  const [draft] = await query('SELECT id FROM kt_assessments WHERE draft_key = ?', [`self:${user.id}:${user.id}`]);
  const [club] = await query('SELECT invite_code FROM kt_clubs WHERE id=?', [user.club_id]);
  return {
    user: userPayload(user), questions: await questions(user.club_id), history: selfHistory,
    feedback: adminHistory, draft: draft ? await assessmentData(draft.id) : null,
    members: user.role === 'admin' ? await memberList(user.club_id) : [],
    inviteCode: user.role === 'admin' ? club.invite_code : '',
  };
}

async function startAssessment(user, targetId, kind) {
  const target = kind === 'admin' ? await member(user, targetId) : user;
  return transaction(async (connection) => {
    // Lock the member before draft creation to prevent concurrent duplicate drafts.
    await query('SELECT id FROM kt_users WHERE id=? FOR UPDATE', [target.id], connection);
    const key = `${kind}:${target.id}:${user.id}`;
    const [existing] = await query('SELECT id FROM kt_assessments WHERE draft_key=?', [key], connection);
    if (existing) return assessmentData(existing.id, connection);
    const source = await query('SELECT * FROM kt_questions WHERE club_id=? AND active=1 ORDER BY sort_order,id', [target.club_id], connection);
    if (!source.length) throw new ApiError(422, 'Klubil ei ole veel küsimusi.');
    const inserted = await query('INSERT INTO kt_assessments (user_id,assessor_id,kind,draft_key) VALUES (?,?,?,?)', [target.id, user.id, kind, key], connection);
    for (const q of source) {
      await query(`INSERT INTO kt_answers (assessment_id,question_id,category,title,subskills,level_1,level_2,level_3)
        VALUES (?,?,?,?,?,?,?,?)`, [inserted.insertId, q.id, q.category, q.title, q.subskills, q.level_1, q.level_2, q.level_3], connection);
    }
    return assessmentData(inserted.insertId, connection);
  });
}

async function editableAssessment(user, id, connection) {
  const [row] = await query(`SELECT a.* FROM kt_assessments a JOIN kt_users u ON u.id=a.user_id
    WHERE a.id=? AND a.assessor_id=? AND u.club_id=? FOR UPDATE`, [id, user.id, user.club_id], connection);
  if (!row || (row.kind === 'admin' && user.role !== 'admin')) throw new ApiError(404, 'Hindamist ei leitud.');
  if (row.status !== 'draft') throw new ApiError(409, 'Lõpetatud hindamist ei saa muuta.');
  return row;
}

export function assertComplete(rows) {
  if (!rows.length || rows.some((row) => row.rating === null)) {
    throw new ApiError(422, 'Enne lõpetamist tuleb vastata kõigile küsimustele.');
  }
  rows.forEach((row) => validateRating(row.rating));
  return rows.reduce((sum, row) => sum + row.rating, 0) / rows.length;
}

export default async function handler(req, res) {
  try {
    checkMutation(req);
    const path = new URL(req.url, 'http://localhost').pathname.replace(/^\/api/, '') || '/';
    const body = await bodyOf(req);
    const method = req.method;

    if (method === 'GET' && path === '/health') {
      await query('SELECT 1');
      await query('SELECT id FROM kt_users LIMIT 1');
      return send(res, 200, { ok: true });
    }

    if (method === 'POST' && ['/auth/login', '/auth/register'].includes(path)) {
      const email = emailAddress(body.email);
      await limitAuth(req, email);
      if (path === '/auth/register') {
        const name = text(body.name, 'Nimi', 160);
        validatePassword(body.password);
        const code = text(body.inviteCode, 'Kutsekood', 80).toUpperCase();
        const [club] = await query('SELECT * FROM kt_clubs WHERE invite_code=?', [code]);
        if (!club) throw new ApiError(422, 'Kutsekood ei ole kehtiv. Küsi koodi klubi juhendajalt.');
        const passwordHash = await hashPassword(body.password);
        const inserted = await query('INSERT INTO kt_users (club_id,name,email,password_hash) VALUES (?,?,?,?)', [club.id, name, email, passwordHash]);
        await issueSession(req, res, inserted.insertId);
        return send(res, 201, { ok: true });
      }
      const [user] = await query('SELECT * FROM kt_users WHERE email=? AND active=1', [email]);
      // Keep password hashing work comparable for unknown accounts.
      const hash = user?.password_hash || `scrypt:${'0'.repeat(32)}:${'0'.repeat(128)}`;
      if (!await verifyPassword(body.password, hash) || !user) throw new ApiError(401, 'E-post või parool ei ole õige.');
      await issueSession(req, res, user.id);
      return send(res, 200, { ok: true });
    }

    if (method === 'POST' && path === '/auth/logout') {
      const token = sessionToken(req);
      if (token) await query('DELETE FROM kt_sessions WHERE token_hash=?', [digest(token)]);
      setSessionCookie(req, res, '', true);
      return send(res, 200, { ok: true });
    }

    const user = await requireUser(req, path.startsWith('/admin/'));
    if (method === 'GET' && path === '/state') return send(res, 200, await appState(user));
    if (method === 'PUT' && path === '/profile') {
      await query('UPDATE kt_users SET name=? WHERE id=?', [text(body.name, 'Nimi', 160), user.id]);
      return send(res, 200, { ok: true });
    }
    if (method === 'POST' && path === '/assessments/start') {
      return send(res, 200, { assessment: await startAssessment(user, user.id, 'self') });
    }
    const assessmentRoute = path.match(/^\/assessments\/(\d+)\/(answer|comment|complete)$/);
    if (assessmentRoute) {
      const [, id, action] = assessmentRoute;
      if (action === 'answer' && method === 'PUT') {
        const rating = validateRating(body.rating);
        const questionId = text(String(body.questionId || ''), 'Küsimus', 20);
        await transaction(async (connection) => {
          await editableAssessment(user, id, connection);
          const result = await query('UPDATE kt_answers SET rating=?,answered_at=UTC_TIMESTAMP() WHERE assessment_id=? AND question_id=?', [rating, id, questionId], connection);
          if (!result.affectedRows) throw new ApiError(422, 'Küsimus ei kuulu sellesse hindamisse.');
        });
        return send(res, 200, { ok: true });
      }
      if (action === 'comment' && method === 'PUT') {
        const comment = typeof body.comment === 'string' ? body.comment.trim() : '';
        if (comment.length > 3000) throw new ApiError(422, 'Kommentaar on liiga pikk.');
        await transaction(async (connection) => {
          await editableAssessment(user, id, connection);
          await query('UPDATE kt_assessments SET comment=? WHERE id=?', [comment, id], connection);
        });
        return send(res, 200, { ok: true });
      }
      if (action === 'complete' && method === 'POST') {
        await transaction(async (connection) => {
          // Repeated completion is safe after a lost network response.
          const [owned] = await query(`SELECT a.* FROM kt_assessments a JOIN kt_users u ON u.id=a.user_id
            WHERE a.id=? AND a.assessor_id=? AND u.club_id=? FOR UPDATE`, [id, user.id, user.club_id], connection);
          if (!owned || (owned.kind === 'admin' && user.role !== 'admin')) throw new ApiError(404, 'Hindamist ei leitud.');
          if (owned.status === 'completed') return;
          const rows = await query('SELECT rating FROM kt_answers WHERE assessment_id=?', [id], connection);
          const average = assertComplete(rows);
          const now = utcNow();
          await query(`UPDATE kt_assessments SET status='completed',draft_key=NULL,average=?,completed_at=?,due_at=? WHERE id=?`, [average, now, nextAssessmentDate(now), id], connection);
        });
        return send(res, 200, { assessment: await assessmentData(id) });
      }
    }

    const memberRoute = path.match(/^\/admin\/members\/(\d+)(\/start)?$/);
    if (memberRoute) {
      const [, id, start] = memberRoute;
      const target = await member(user, id);
      if (method === 'POST' && start) return send(res, 200, { assessment: await startAssessment(user, id, 'admin') });
      if (method === 'GET' && !start) {
        const [draft] = await query('SELECT id FROM kt_assessments WHERE draft_key=?', [`admin:${target.id}:${user.id}`]);
        return send(res, 200, { history: await history(target.id), draft: draft ? await assessmentData(draft.id) : null });
      }
    }

    const questionRoute = path.match(/^\/admin\/questions(?:\/(\d+))?$/);
    if (questionRoute && ['PUT', 'POST'].includes(method)) {
      const [, id] = questionRoute;
      const title = text(body.title, 'Küsimuse nimi');
      const levels = [1, 2, 3].map((level) => text(body.levels?.[level], `Taseme ${level} kirjeldus`, 4000));
      if (method === 'PUT' && id) {
        const [owned] = await query('SELECT id FROM kt_questions WHERE id=? AND club_id=?', [id, user.club_id]);
        if (!owned) throw new ApiError(404, 'Küsimust ei leitud.');
        await query('UPDATE kt_questions SET title=?,level_1=?,level_2=?,level_3=? WHERE id=? AND club_id=?', [title, ...levels, id, user.club_id]);
        return send(res, 200, { ok: true });
      }
      if (method === 'POST' && !id) {
        const category = text(body.category, 'Teema', 160);
        const order = await query('SELECT COALESCE(MAX(sort_order),0)+1 AS position FROM kt_questions WHERE club_id=?', [user.club_id]);
        const inserted = await query('INSERT INTO kt_questions (club_id,category,title,subskills,level_1,level_2,level_3,sort_order) VALUES (?,?,?,?,?,?,?,?)', [user.club_id, category, title, '', ...levels, order[0].position]);
        return send(res, 201, { id: String(inserted.insertId) });
      }
    }
    return send(res, 404, { error: 'Seda päringut ei leitud.' });
  } catch (error) {
    if (error instanceof ApiError) return send(res, error.status, { error: error.message });
    if (error.code === 'ER_DUP_ENTRY') return send(res, 409, { error: 'Selle e-posti aadressiga konto on juba olemas.' });
    // Log only the error category, never connection strings, passwords or SQL values.
    console.error('Karli API:', error.code || error.name || 'Error');
    return send(res, 503, { error: error.code === 'DB_NOT_CONFIGURED'
      ? 'Teenuse seadistamine on pooleli. Palun proovi hiljem uuesti.'
      : 'Andmete salvestamise teenus ei ole praegu kättesaadav. Proovi uuesti.' });
  }
}
