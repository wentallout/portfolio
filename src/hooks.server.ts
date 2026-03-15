import type { Handle } from '@sveltejs/kit';
import { createHandler } from 'svelte-kit-bot-block'

import { error, type RequestEvent } from '@sveltejs/kit';

export const handle = createHandler();

// export const handle: Handle = async ({ event, resolve }) => {
// 	const response = await resolve(event, {
// 		preload: ({ type }) => {
// 			return type === 'font' || type === 'js' || type === 'css';
// 		}
// 	});

// 	// Continue with the route
// 	return response;
// };
