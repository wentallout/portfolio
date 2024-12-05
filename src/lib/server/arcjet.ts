import arcjet, { shield, detectBot } from '@arcjet/sveltekit';
import { env } from '$env/dynamic/private';

export const aj = arcjet({
	key: env.ARCJET_KEY!,
	rules: [
		shield({ mode: 'LIVE' }),
		detectBot({
			mode: 'LIVE',
			allow: [
				'CATEGORY:SEARCH_ENGINE',
				'GOOGLE_LIGHTHOUSE',
				'AHREFS_CRAWLER',
				'GOOGLE_ADSENSE',
				'GOOGLE_ADSENSE_GOOGLEBOT'
			]
		})
	]
});
