import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ ARCJET_KEY: { schema: (input) => input ?? '' } });
