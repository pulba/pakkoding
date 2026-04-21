import type { APIRoute } from 'astro';
export const prerender = false;

export const POST: APIRoute = ({ cookies }) => {
  cookies.delete('session', { path: '/' });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
