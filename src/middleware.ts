import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // Hanya proses middleware untuk API routes
  // Halaman statis tidak butuh akses cookies/headers
  if (!url.pathname.startsWith('/api/')) {
    return next();
  }

  const sessionCookie = context.cookies.get('session')?.value;
  
  if (sessionCookie) {
    try {
      const { verifyFirebaseToken } = await import('./lib/firebase-admin');
      const { turso, initDb } = await import('./lib/db');
      
      const decodedToken = await verifyFirebaseToken(sessionCookie);
      
      if (decodedToken) {
        const uid = decodedToken.uid || decodedToken.sub;
        
        await initDb();
        const result = await turso.execute({
          sql: 'SELECT * FROM users WHERE id = ?',
          args: [uid as string]
        });
        
        if (result.rows.length > 0) {
          const userRow = result.rows[0];
          context.locals.user = {
            id: userRow.id as string,
            email: userRow.email as string,
            name: userRow.name as string,
            avatar: userRow.avatar as string,
            completed_lessons: JSON.parse((userRow.completed_lessons as string) || '[]')
          };
        }
      }
    } catch (err) {
      console.error("Middleware Error:", err);
    }
  }

  return next();
});
