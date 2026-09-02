import arcjet, { shield, detectBot, slidingWindow, tokenBucket } from '@arcjet/sveltekit';

/**
 * Arcjet protections for portfolio.
 * - Shield: OWASP attack protection (SQLi, XSS, path traversal etc)
 * - Bot detection: block automated clients on sensitive routes
 * - Rate limiting: DDoS + brute-force mitigation
 *
 * Fail-open on Arcjet errors for availability, but log and optionally fail-closed for CMS.
 */

// ARCJET_KEY is defined in src/env.ts via defineEnvVars and also in process.env at runtime
const key = (process.env.ARCJET_KEY as string | undefined) || '';

// Helper: no-op protect when key missing (dev or misconfig)
function makeNoop() {
	return {
		protect: async () => ({
			isDenied: () => false,
			reason: { isRateLimit: () => false, isBot: () => false, isShield: () => false },
			results: []
		})
	} as unknown as ReturnType<typeof arcjet>;
}

export const ajGlobal = key
	? arcjet({
			key,
			characteristics: ['ip.src'],
			rules: [
				shield({ mode: 'LIVE' }),
				// Global DDoS: 100 req / min per IP via sliding window
				slidingWindow({ mode: 'LIVE', interval: 60, max: 100 }),
				// Soft bot check globally: allow search engines
				detectBot({
					mode: 'LIVE',
					allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:MONITOR', 'CATEGORY:PREVIEW']
				})
			]
		})
	: makeNoop();

// Stricter for /studio and /api/cms — 30 req/min, no bots at all
export const ajStudio = key
	? arcjet({
			key,
			characteristics: ['ip.src'],
			rules: [
				shield({ mode: 'LIVE' }),
				slidingWindow({ mode: 'LIVE', interval: 60, max: 30 }),
				// Secondary token bucket for burst protection: 10 immediate, refill 5 per 10s
				tokenBucket({ mode: 'LIVE', interval: 10, refillRate: 5, capacity: 10 }),
				detectBot({ mode: 'LIVE', allow: [] })
			]
		})
	: makeNoop();

// Very strict for login — brute force protection
// 5 attempts per 15 minutes per IP, plus shield + bot block
export const ajLogin = key
	? arcjet({
			key,
			characteristics: ['ip.src'],
			rules: [
				shield({ mode: 'LIVE' }),
				slidingWindow({ mode: 'LIVE', interval: 900, max: 5 }),
				detectBot({ mode: 'LIVE', allow: [] })
			]
		})
	: makeNoop();

// Alias for CMS mutation endpoints (uploads, posts/projects writes)
// Even stricter burst control: 20 writes per 5 min
export const ajCmsWrite = key
	? arcjet({
			key,
			characteristics: ['ip.src'],
			rules: [
				shield({ mode: 'LIVE' }),
				slidingWindow({ mode: 'LIVE', interval: 300, max: 20 }),
				tokenBucket({ mode: 'LIVE', interval: 60, refillRate: 5, capacity: 10 }),
				detectBot({ mode: 'LIVE', allow: [] })
			]
		})
	: makeNoop();
