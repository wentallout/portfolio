import { createAuthClient } from '@neondatabase/neon-js/auth';

const url =
	// @ts-ignore Vite client env
	(import.meta.env.VITE_NEON_AUTH_URL as string | undefined) ??
	// @ts-ignore
	(import.meta.env.PUBLIC_NEON_AUTH_URL as string | undefined) ??
	'https://ep-royal-wind-azksgssw.neonauth.c-3.ap-southeast-1.aws.neon.tech/neondb/auth';

let _client: ReturnType<typeof createAuthClient> | null = null;
function getClient() {
	if (_client) return _client;
	try {
		// SDK 0.7.0-beta prefers string, older prefers { baseURL }
		_client = createAuthClient(url as never);
	} catch {
		try {
			// @ts-ignore fallback object form
			_client = createAuthClient({ baseURL: url } as never);
		} catch (e) {
			console.error('[auth] createAuthClient failed', e, url);
			throw e;
		}
	}
	return _client;
}
export const authClient = getClient();
