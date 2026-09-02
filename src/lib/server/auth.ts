import * as jose from 'jose';
// @ts-ignore
import { NEON_AUTH_JWKS_URL, NEON_AUTH_BASE_URL, CMS_ADMIN_EMAIL } from '$app/env/private';

let jwks: ReturnType<typeof jose.createRemoteJWKSet> | null = null;

function getJwks() {
	const url = NEON_AUTH_JWKS_URL;
	if (!url) return null;
	if (!jwks) jwks = jose.createRemoteJWKSet(new URL(url));
	return jwks;
}

export type AuthUser = { id: string; email: string; name?: string };

export async function verifyToken(token: string): Promise<AuthUser | null> {
	const jwksSet = getJwks();
	if (jwksSet) {
		try {
			const { payload } = await jose.jwtVerify(token, jwksSet, {});
			const sub = String(payload.sub ?? '');
			const email = String((payload as Record<string, unknown>).email ?? (payload as Record<string, unknown>).email_address ?? '');
			if (sub && email) return { id: sub, email: email.toLowerCase(), name: String(payload.name ?? '') };
		} catch {
			// not a JWT — fall through to session fetch
		}
	}
	// Fallback: treat token as Better Auth session token — verify via auth server
	const base = NEON_AUTH_BASE_URL;
	if (base) {
		try {
			const res = await fetch(`${base.replace(/\/$/, '')}/api/auth/get-session`, {
				headers: { cookie: `better-auth.session_token=${token}; __Secure-better-auth.session_token=${token}` },
				cache: 'no-store'
			});
			if (res.ok) {
				const json = (await res.json()) as { user?: { id: string; email: string; name?: string }; session?: unknown };
				if (json?.user?.email) return { id: json.user.id, email: json.user.email.toLowerCase(), name: json.user.name ?? '' };
			}
		} catch {}
	}
	return null;
}

export function isAdminEmail(email: string): boolean {
	const allow = (CMS_ADMIN_EMAIL ?? '').toLowerCase().trim();
	if (!allow) return false; // deny-all if not configured (safe for open-source)
	// allow comma-separated
	const list = allow.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
	return list.includes(email.toLowerCase());
}

export function getTokenFromRequest(request: Request): string | null {
	const auth = request.headers.get('authorization');
	if (auth?.startsWith('Bearer ')) return auth.slice(7);
	const cookie = request.headers.get('cookie') ?? '';
	// Better Auth default cookies + Neon variants + generic jwt
	const names = [
		'better-auth.session_token',
		'__Secure-better-auth.session_token',
		'better-auth.session-token',
		'__Secure-better-auth.session-token',
		'neon_auth_token',
		'__neon_auth_token',
		'neon-auth.session_token',
		'session_token',
		'auth_token',
		'jwt'
	];
	for (const n of names) {
		const re = new RegExp('(?:^|;\\s*)' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]+)');
		const m = cookie.match(re);
		if (m) return decodeURIComponent(m[1]);
	}
	// Fallback: try to extract JWT-looking cookie value (contains two dots)
	const parts = cookie.split(';').map((s) => s.trim());
	for (const p of parts) {
		const v = p.split('=')[1];
		if (v && v.split('.').length === 3 && v.length > 40) {
			try {
				const dec = decodeURIComponent(v);
				if (dec.split('.').length === 3) return dec;
			} catch {}
		}
	}
	return null;
}
