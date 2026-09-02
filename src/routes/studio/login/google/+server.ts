import { NEON_AUTH_BASE_URL } from '$app/env/private';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const redirectTo = url.searchParams.get('redirect') ?? '/studio';
	const base = NEON_AUTH_BASE_URL ?? process.env.VITE_NEON_AUTH_URL!;
	const origin = url.origin;
	const callbackURL = new URL(redirectTo, origin).href;
	// Call Better Auth sign-in/social to get the init URL (server-side, no CORS)
	const res = await fetch(`${base.replace(/\/$/, '')}/sign-in/social`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ provider: 'google', callbackURL })
	});
	const json: any = await res.json().catch(() => ({}));
	const target = json?.url ?? json?.data?.url;
	if (target) throw redirect(302, target);
	throw redirect(302, `/studio/login?error=${encodeURIComponent(json?.error ?? 'No redirect URL')}&redirect=${encodeURIComponent(redirectTo)}`);
};
