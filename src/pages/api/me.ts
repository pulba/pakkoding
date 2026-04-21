import type { APIRoute } from 'astro';
export const prerender = false;

export const GET: APIRoute = ({ locals }) => {
  const user = locals.user;
  
  if (!user) {
    return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
  }

  return new Response(JSON.stringify({ 
    authenticated: true, 
    user 
  }), { status: 200 });
};
