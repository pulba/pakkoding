import type { APIRoute } from 'astro';
import { verifyFirebaseToken } from '../../../lib/firebase-admin';
import { turso, initDb } from '../../../lib/db';
export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { idToken } = await request.json();
    if (!idToken) {
      return new Response(JSON.stringify({ error: "Missing token" }), { status: 400 });
    }

    // Verifikasi JWT
    const decodedToken = await verifyFirebaseToken(idToken);
    if (!decodedToken) {
      return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
    }

    const uid = decodedToken.uid || decodedToken.sub;
    const email = decodedToken.email || '';
    const name = decodedToken.name || '';
    const picture = decodedToken.picture || '';

    // Pastikan tabel ada
    await initDb();

    // Cek apakah user sudah ada di Turso
    const result = await turso.execute({
      sql: 'SELECT * FROM users WHERE id = ?',
      args: [uid as string]
    });

    if (result.rows.length === 0) {
      // User baru, masukkan ke database
      await turso.execute({
        sql: 'INSERT INTO users (id, email, name, avatar, completed_lessons, created_at) VALUES (?, ?, ?, ?, ?, ?)',
        args: [uid as string, email as string, name as string, picture as string, '[]', Date.now()]
      });
    }

    // Set cookie sesi selama 1 minggu
    // (Dalam praktiknya ID token Firebase kadaluarsa dalam 1 jam, tapi untuk demo ini
    // kita simpan saja di cookie. Pustaka jose bisa mendeteksi `exp` token).
    cookies.set('session', idToken, {
      path: '/',
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Login Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
};
