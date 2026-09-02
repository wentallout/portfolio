import type { HandleClientError } from '@sveltejs/kit/hooks';

/**
 * Client-side error capture.
 * - Logs to console
 * - Forwards to /api/log with keepalive so errors survive page unload
 * - Never throws / never blocks UI
 */
export const handleError: HandleClientError = async ({ error, event }) => {
	const raw = error as unknown;
	const message =
		raw instanceof Error ? raw.message : String((raw as { message?: string })?.message ?? 'Unknown client error');
	const stack = raw instanceof Error ? raw.stack : undefined;

	// Always surface in console for local debugging
	console.error('[client error]', { message, stack, event });

	// Avoid recursing if the error *is* the logging endpoint itself
	const href = typeof window !== 'undefined' ? window.location.href : '';
	if (href.includes('/api/log')) {
		return { message: 'Something went wrong' };
	}

	// Fire-and-forget to server log endpoint — don't await SvelteKit plumbing,
	// but use keepalive so it survives navigation/unload.
	try {
		const payload = {
			type: 'client_error',
			message,
			stack,
			url: typeof window !== 'undefined' ? window.location.href : (event as unknown as { url?: URL })?.url?.toString() ?? '',
			userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
			timestamp: new Date().toISOString()
		};

		// Don't await — and never let logging break the app
		void fetch('/api/log', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(payload),
			keepalive: true
		}).catch(() => {});
	} catch {
		// ignore
	}

	return {
		message: 'Something went wrong'
	};
};
