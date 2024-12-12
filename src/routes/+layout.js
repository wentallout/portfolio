import { browser } from '$app/environment';

export function load({ url }) {
	const pathname = url.pathname;

	return {
		pathname
	};
}
