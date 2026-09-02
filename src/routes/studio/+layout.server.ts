import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, locals }) => {
	const pathname = url.pathname;
	// /studio/login is public
	if (pathname === '/studio/login' || pathname.startsWith('/studio/login/')) {
		return { user: locals.user ?? null };
	}
	// Allow verifier exchange — let client handle getSession() before auth check
	if (url.searchParams.has('neon_auth_session_verifier')) {
		return { user: locals.user ?? null, needsVerifierExchange: true };
	}
	if (!locals.user) {
		throw redirect(302, `/studio/login?redirect=${encodeURIComponent(pathname)}`);
	}
	if (locals.user.role !== 'admin') {
		// for open-source repo, env not set => deny, show 403
		throw redirect(302, `/studio/login?error=unauthorized`);
	}
	return { user: locals.user };
};
