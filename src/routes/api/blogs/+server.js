import { error, json } from '@sveltejs/kit';
import { securityMiddleware } from '$lib/security/securityMiddleware.js';
import { securityMonitor, SecurityEvents } from '$lib/security/securityMonitor.js';
import { fetchMarkdownBlogs } from '$lib/utils/blogs.js';

export const GET = async ({ getClientAddress, request }) => {
	const clientIP = getClientAddress();
	const userAgent = request.headers.get('user-agent') || '';

	try {
		// Security validation
		const validation = securityMiddleware.validateRequest(request);
		if (!validation.valid) {
			securityMonitor.logEvent(SecurityEvents.RATE_LIMIT_EXCEEDED, {
				endpoint: 'api/blogs',
				ip: clientIP,
				reason: validation.error,
				userAgent
			});
			throw error(validation.status || 403, validation.error);
		}

		try {
			const blogs = await fetchMarkdownBlogs();

			// Sanitize blog metadata to prevent XSS
			const sanitizedBlogs = blogs.map((blog) => ({
				...blog,
				meta: {
					...blog.meta,
					author: sanitizeString(blog.meta.author),
					description: sanitizeString(blog.meta.description),
					tags: Array.isArray(blog.meta.tags)
						? blog.meta.tags.map((tag) => sanitizeString(tag))
						: [],
					title: sanitizeString(blog.meta.title)
				}
			}));

			const sortedBlogs = sanitizedBlogs.sort((a, b) => {
				const dateA = a.meta.date ? new Date(a.meta.date) : new Date(0);
				const dateB = b.meta.date ? new Date(b.meta.date) : new Date(0);
				return dateB - dateA;
			});

			// Log successful API call
			securityMonitor.logEvent(SecurityEvents.SUCCESSFUL_GENERATION, {
				blogCount: sortedBlogs.length,
				endpoint: 'api/blogs',
				ip: clientIP,
				userAgent
			});

			return json(sortedBlogs, {
				headers: {
					'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
					'X-Content-Type-Options': 'nosniff'
				}
			});
		} catch (fetchError) {
			securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
				endpoint: 'api/blogs',
				error: fetchError.message || 'Failed to fetch blogs',
				ip: clientIP,
				userAgent
			});

			throw error(500, 'Failed to fetch blogs');
		}
	} catch (err) {
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			endpoint: 'api/blogs',
			error: err.message || 'Unknown error',
			ip: clientIP,
			userAgent
		});

		if (err.status) {
			throw err;
		}

		throw error(500, 'Internal server error');
	}
};

// Sanitize string to prevent XSS
function sanitizeString(str) {
	if (typeof str !== 'string') return '';
	return str
		.replace(/[<>&"']/g, (match) => {
			const entities = {
				"'": '&#x27;',
				'"': '&quot;',
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;'
			};
			return entities[match];
		})
		.trim();
}
