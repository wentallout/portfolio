import type { Handle } from '@sveltejs/kit';

import { error, type RequestEvent } from '@sveltejs/kit';
import { aj } from './lib/server/arcjet';

export const handle: Handle = async ({ event, resolve }) => {
	// Ignore routes that extend the Arcjet rules - they will call `.protect` themselves
	const filteredRoutes = ['/api/rate-limited', '/rate-limited'];
	if (filteredRoutes.includes(event.url.pathname)) {
		// return - route will handle protection
		return resolve(event);
	}

	// Ensure every other route is protected with shield
	const decision = await aj.protect(event);
	if (decision.isDenied()) {
		return error(403, 'Forbidden');
	}

	const response = await resolve(event, {
		preload: ({ type }) => {
			return type === 'font' || type === 'js' || type === 'css';
		}
	});

	// Continue with the route
	return response;
};
