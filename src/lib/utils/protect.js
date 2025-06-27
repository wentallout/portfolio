// src/lib/utils/protect.js
// Reusable protection utility for SvelteKit endpoints

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20;
const ipRequestCounts = new Map();
const BLOCKED_USER_AGENTS = [/node/i, /python/i, /curl/i, /wget/i];

/**
 * Checks if the request should be blocked due to user agent or rate limit.
 * @param {Request} request - The incoming request object
 * @returns {Response|null} - Returns a Response if blocked, or null if allowed
 */
export function protectRequest(request) {
	const userAgent = request.headers.get('user-agent') || '';
	const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown';

	// Block suspicious user agents
	for (const pattern of BLOCKED_USER_AGENTS) {
		if (pattern.test(userAgent)) {
			return new Response(JSON.stringify({ error: 'Blocked: Suspicious user agent' }), {
				status: 429,
				headers: { 'Content-Type': 'application/json' }
			});
		}
	}

	// Rate limiting
	const now = Date.now();
	const entry = ipRequestCounts.get(ip) || { count: 0, start: now };
	if (now - entry.start < RATE_LIMIT_WINDOW_MS) {
		if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
			return new Response(JSON.stringify({ error: 'Too many requests' }), {
				status: 429,
				headers: { 'Content-Type': 'application/json' }
			});
		}
		entry.count++;
	} else {
		entry.count = 1;
		entry.start = now;
	}
	ipRequestCounts.set(ip, entry);

	return null; // Not blocked
}
