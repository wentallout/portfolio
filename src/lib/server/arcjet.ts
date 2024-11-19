import arcjet, { shield, detectBot } from '@arcjet/sveltekit';
import { env } from '$env/dynamic/private';

export const aj = arcjet({
	key: env.ARCJET_KEY!,
	rules: [
		shield({ mode: 'LIVE' }),
		detectBot({
			mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
			// Block all bots except search engine crawlers. See the full list of bots
			// for other options: https://arcjet.com/bot-list
			allow: ['CATEGORY:SEARCH_ENGINE']
		})
	]
});
