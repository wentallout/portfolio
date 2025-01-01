import { error, json } from '@sveltejs/kit';
import { aj } from '$lib/server/arcjet.ts';

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
