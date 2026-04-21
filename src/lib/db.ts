import { createClient } from "@libsql/client/web";

const tursoUrl = process.env.TURSO_DATABASE_URL || import.meta.env.TURSO_DATABASE_URL;
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN || import.meta.env.TURSO_AUTH_TOKEN;

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
