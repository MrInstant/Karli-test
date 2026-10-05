import { readFile } from 'node:fs/promises';
import mysql from 'mysql2/promise';
import { databaseOptions } from '../server/db.mjs';
import { hashPassword } from '../server/security.mjs';

const connection = await mysql.createConnection(databaseOptions());
const action = process.argv[2] || 'check';

try {
  if (action === 'migrate') {
    for (const file of ['database/schema.sql', 'database/seed.sql']) {
      const sql = await readFile(file, 'utf8');
      for (const statement of sql.split(';').map((part) => part.trim()).filter(Boolean)) await connection.query(statement);
      console.log(`Käivitatud: ${file}`);
    }
  } else if (action === 'check') {
    const [rows] = await connection.query('SELECT 1 AS ok, DATABASE() AS database_name');
    const [tables] = await connection.query("SHOW TABLES LIKE 'kt_%'");
    console.log(JSON.stringify({ ok: rows[0].ok === 1, database: rows[0].database_name, tables: tables.length }, null, 2));
  } else if (action === 'admin') {
    const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME = 'Klubi administraator' } = process.env;
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) throw new Error('ADMIN_EMAIL ja ADMIN_PASSWORD on vajalikud.');
    const passwordHash = await hashPassword(ADMIN_PASSWORD);
    const [club] = await connection.query('SELECT id FROM kt_clubs WHERE invite_code=? LIMIT 1', ['TALLINN2026']);
    if (!club.length) throw new Error('Käivita enne npm run db:migrate.');
    await connection.query(`INSERT INTO kt_users (club_id,name,email,password_hash,role) VALUES (?,?,?,?, 'admin')
      ON DUPLICATE KEY UPDATE name=VALUES(name),password_hash=VALUES(password_hash),role='admin'`, [club[0].id, ADMIN_NAME, ADMIN_EMAIL, passwordHash]);
    console.log('Administraatori konto on loodud või uuendatud.');
  } else {
    throw new Error(`Tundmatu tegevus: ${action}`);
  }
} finally {
  await connection.end();
}
