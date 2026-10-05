import { randomBytes, scrypt, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';

const derive = promisify(scrypt);
export const cookieName = 'karli_session';

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function digest(value) {
  return createHash('sha256').update(value).digest('hex');
}

export function validatePassword(password) {
  if (typeof password !== 'string' || password.length < 10 || Buffer.byteLength(password) > 256) {
    throw new ApiError(422, 'Parool peab olema vähemalt 10 märki pikk.');
  }
  return password;
}

export async function hashPassword(password) {
  validatePassword(password);
  const salt = randomBytes(16).toString('hex');
  const result = await derive(password, salt, 64);
  return `scrypt:${salt}:${result.toString('hex')}`;
}

export async function verifyPassword(password, hash) {
  if (typeof password !== 'string' || Buffer.byteLength(password) > 256) return false;
  const [method, salt, encoded] = String(hash).split(':');
  if (method !== 'scrypt' || !salt || !/^[a-f0-9]{128}$/.test(encoded || '')) return false;
  const result = await derive(password, salt, 64);
  return timingSafeEqual(result, Buffer.from(encoded, 'hex'));
}

export function sessionToken(req) {
  const cookies = String(req.headers.cookie || '').split(';');
  const match = cookies.find((part) => part.trim().startsWith(`${cookieName}=`));
  const token = match?.trim().slice(cookieName.length + 1);
  return /^[a-f0-9]{64}$/.test(token || '') ? token : null;
}

export function setSessionCookie(req, res, token, clear = false) {
  const secure = process.env.VERCEL || req.headers['x-forwarded-proto'] === 'https';
  res.setHeader('Set-Cookie', `${cookieName}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${clear ? 0 : 604800}${secure ? '; Secure' : ''}`);
}

export function checkMutation(req) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return;
  if (req.headers['x-karli-client'] !== 'web') throw new ApiError(403, 'Päring ei ole lubatud.');
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) {
    throw new ApiError(415, 'Päringu sisu peab olema JSON-vormingus.');
  }
  const origin = req.headers.origin;
  if (origin) {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const expected = (process.env.APP_ORIGIN || `${req.headers['x-forwarded-proto'] || 'http'}://${host}`).replace(/\/+$/, '');
    if (origin !== expected) throw new ApiError(403, 'Päringu päritolu ei ole lubatud.');
  }
}

export function text(value, name, max = 190) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > max) {
    throw new ApiError(422, `${name} puudub või on liiga pikk.`);
  }
  return value.trim();
}

export function emailAddress(value) {
  const email = text(value, 'E-posti aadress', 190).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ApiError(422, 'E-posti aadress ei ole korrektne.');
  return email;
}

export function validateRating(value) {
  if (typeof value !== 'number' || ![1, 1.5, 2, 2.5, 3].includes(value)) {
    throw new ApiError(422, 'Hinne peab olema 1, 1,5, 2, 2,5 või 3.');
  }
  return value;
}

export function nextAssessmentDate(completed) {
  const date = new Date(`${String(completed).slice(0, 10)}T12:00:00Z`);
  const originalDay = date.getUTCDate();
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() + 3);
  const lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
  date.setUTCDate(Math.min(originalDay, lastDay));
  return date.toISOString().slice(0, 10);
}
