import { json } from '@sveltejs/kit';
import { fetchMarkdownBlogs } from '$lib/utils/blogs.js';

// Simple in-memory rate limiting (per instance, resets on cold start)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 20;
const ipRequestCounts = new Map();

export const GET = async ({ request }) => {
	const userAgent = request.headers.get('user-agent') || '';
	const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown';

	// Block Node.js bots
	if (/node/i.test(userAgent)) {
		return new Response(JSON.stringify({ error: 'Blocked: Suspicious user agent' }), {
			status: 429,
			headers: { 'Content-Type': 'application/json' }
		});
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

	try {
		const blogs = await fetchMarkdownBlogs();
		const sortedBlogs = blogs.sort((a, b) => {
			const dateA = a.meta.date ? new Date(a.meta.date) : new Date(0);
			const dateB = b.meta.date ? new Date(b.meta.date) : new Date(0);
			return dateB - dateA;
		});
		return json(sortedBlogs);
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
