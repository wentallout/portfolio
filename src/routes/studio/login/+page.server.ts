import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		authUrl: process.env.NEON_AUTH_BASE_URL ?? process.env.VITE_NEON_AUTH_URL ?? ''
	};
};
