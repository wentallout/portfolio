import arcjet, { detectBot, shield, tokenBucket } from '@arcjet/sveltekit';
import { error, json } from '@sveltejs/kit';

const aj = arcjet({
	characteristics: ['ip.src'], // Track requests by IP
	key: process.env.ARCJET_KEY, // Get your site key from https://app.arcjet.com
	rules: [
		// Shield protects your app from common attacks e.g. SQL injection
		shield({ mode: 'LIVE' }),
		// Create a bot detection rule
		detectBot({
			// Block all bots except search engine crawlers. See
			// https://arcjet.com/bot-list
			allow: ['CATEGORY:SEARCH_ENGINE'],
			mode: 'LIVE' // Blocks requests. Use "DRY_RUN" to log only
		}),
		// Create a token bucket rate limit. Other algorithms are supported.
		tokenBucket({
			capacity: 10, // Bucket capacity of 10 tokens
			interval: 10, // Refill every 10 seconds
			mode: 'LIVE',
			refillRate: 5 // Refill 5 tokens per interval
		})
	]
});

export async function GET(event) {
	const decision = await aj.protect(event, { requested: 5 }); // Deduct 5 tokens from the bucket
	console.log('Arcjet decision', decision);

	if (decision.isDenied()) {
		if (decision.reason.isRateLimit()) {
			return error(429, 'Too Many Requests');
		} else if (decision.reason.isBot()) {
			return error(403, 'No Bots Allowed');
		} else {
			return error(403, 'Forbidden');
		}
	}

	return json({ message: 'Hello World' });
}
