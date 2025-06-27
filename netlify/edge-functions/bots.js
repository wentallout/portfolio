import agents from '../../agents.json' assert { type: 'json' };

export default async (request) => {
  const ua = request.headers.get('user-agent') || '';
  let isBot = false;
  for (const agent of agents) {
    if (ua.toLowerCase().includes(agent.toLowerCase())) {
      isBot = true;
      break;
    }
  }
  if (isBot) {
    return new Response('Blocked by Netlify Edge Function', { status: 401 });
  }
  // Allow all other requests
  return;
};

export const config = {
  path: '*', // Apply to all routes
};
