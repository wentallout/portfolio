import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	ARCJET_KEY: { schema: (input) => input ?? '' },
	CMS_ADMIN_EMAIL: { schema: (input) => input ?? '' },
	CMS_PREVIEW_SECRET: { schema: (input) => input ?? '' },
	CMS_ALLOWED_IPS: { schema: (input) => input ?? '' },
	DATABASE_URL: { schema: (input) => input ?? '' },
	DATABASE_URL_UNPOOLED: { schema: (input) => input ?? '' },
	NEON_AUTH_BASE_URL: { schema: (input) => input ?? '' },
	NEON_AUTH_JWKS_URL: { schema: (input) => input ?? '' }
});
