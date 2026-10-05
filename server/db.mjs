import mysql from 'mysql2/promise';

let pool;

export function databaseOptions(env = process.env) {
  const required = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];
  if (required.some((key) => !env[key])) {
    const error = new Error('Andmebaasi keskkonnamuutujad on seadistamata.');
    error.code = 'DB_NOT_CONFIGURED';
    throw error;
  }
  return {
    host: env.DB_HOST,
    port: Number(env.DB_PORT || 3306),
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    charset: 'utf8mb4',
    timezone: 'Z',
    dateStrings: true,
    decimalNumbers: true,
    connectTimeout: 8000,
    connectionLimit: 3,
    maxIdle: 1,
    idleTimeout: 10000,
    waitForConnections: true,
    queueLimit: 20,
    ssl: env.DB_SSL === 'false' ? undefined : {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2',
      ...(env.DB_SSL_CA ? { ca: env.DB_SSL_CA.replaceAll('\\n', '\n') } : {}),
    },
  };
}

export function getPool() {
  if (!pool) {
    pool = mysql.createPool(databaseOptions());
  }
  return pool;
}

export async function query(sql, params = [], connection = getPool()) {
  const [rows] = await connection.execute(sql, params);
  return rows;
}

export async function transaction(work) {
  const connection = await getPool().getConnection();
  try {
    await connection.beginTransaction();
    const result = await work(connection);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
