import type { RequestHandler } from './$types';
import { createLogger } from '#lib/server/logger.js';

/**
 * POST /api/log — ingest client-side errors forwarded by hooks.client.ts
 *
 * Body: { type: 'client_error', message, stack?, url?, userAgent?, timestamp? }
 * Returns 204 on success. Validates minimally; re-emits as
 * structured server log so any log shipper can pick it up.
 */

const MAX_BODY = 10_000; // 10kb

export const POST: RequestHandler = async ({ request }) => {
	let raw = '';
	try {
		raw = await request.text();
		if (raw.length > MAX_BODY) {
			return new Response('Payload too large', { status: 413 });
		}
		if (!raw) return new Response(null, { status: 204 });

		const data = JSON.parse(raw) as Record<string, unknown>;

		// Basic validation — don't trust client
		const message = typeof data.message === 'string' ? data.message.slice(0, 2_000) : 'unknown client error';
		const stack = typeof data.stack === 'string' ? data.stack.slice(0, 8_000) : undefined;
		const url = typeof data.url === 'string' ? data.url.slice(0, 2_000) : undefined;
		const userAgent = typeof data.userAgent === 'string' ? data.userAgent.slice(0, 500) : undefined;
		const type = typeof data.type === 'string' ? data.type : 'client_error';

		// Use requestId from header if client propagated it, else generate a short one
		const requestId = request.headers.get('x-request-id') ?? `client-${crypto.randomUUID().slice(0, 8)}`;

		createLogger(requestId).warn(message, {
			type,
			stack,
			url,
			userAgent,
			timestamp: data.timestamp,
			path: url ? (() => { try { return new URL(url).pathname; } catch { return url; } })() : undefined
		});

		return new Response(null, { status: 204 });
	} catch (err) {
		// Don't leak — just log server-side
		createLogger().warn('Failed to ingest client log', {
			error: err instanceof Error ? err.message : String(err),
			raw: raw.slice(0, 500)
		});
		return new Response(null, { status: 204 });
	}
};

export const GET: RequestHandler = async () => {
	return new Response('Method not allowed', { status: 405 });
};
