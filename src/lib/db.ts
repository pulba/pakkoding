import { createClient } from "@libsql/client/web";

const getEnv = (key: string) => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  return import.meta.env[key];
};

const tursoUrl = getEnv('TURSO_DATABASE_URL');
const tursoAuthToken = getEnv('TURSO_AUTH_TOKEN');

export const turso = createClient({
  url: tursoUrl,
  authToken: tursoAuthToken,
});

// Cache: tabel hanya dibuat sekali per instance
let dbInitialized = false;

// Fungsi untuk memastikan tabel ada (dijalankan sekali saat API pertama dipanggil)
export async function initDb() {
  if (dbInitialized) return;
  
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL,
      name TEXT,
      avatar TEXT,
      completed_lessons TEXT DEFAULT '[]',
      created_at INTEGER
    )
  `);
  
  dbInitialized = true;
}
