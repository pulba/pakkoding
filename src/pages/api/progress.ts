import type { APIRoute } from 'astro';
import { turso } from '../../lib/db';
export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const user = locals.user;
    
    // Harus login untuk menyimpan progres
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { lessonId, isCompleted } = await request.json();
    
    if (!lessonId) {
      return new Response(JSON.stringify({ error: "Missing lessonId" }), { status: 400 });
    }

    let completedLessons = [...user.completed_lessons];
    
    if (isCompleted && !completedLessons.includes(lessonId)) {
      completedLessons.push(lessonId);
    } else if (!isCompleted && completedLessons.includes(lessonId)) {
      completedLessons = completedLessons.filter(id => id !== lessonId);
    }

    // Update di Turso DB
    await turso.execute({
      sql: 'UPDATE users SET completed_lessons = ? WHERE id = ?',
      args: [JSON.stringify(completedLessons), user.id]
    });

    return new Response(JSON.stringify({ success: true, completedLessons }), { status: 200 });
  } catch (error) {
    console.error("Progress API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
};
