import { json, error } from '@sveltejs/kit';
import { fetchMarkdownBlogs } from '$lib/utils/blogs.js';
import { securityMiddleware } from '$lib/security/securityMiddleware.js';
import { securityMonitor, SecurityEvents } from '$lib/security/securityMonitor.js';

export const GET = async ({ request, getClientAddress }) => {
	const clientIP = getClientAddress();
	const userAgent = request.headers.get('user-agent') || '';
	
	try {
		// Security validation
		const validation = securityMiddleware.validateRequest(request);
		if (!validation.valid) {
			securityMonitor.logEvent(SecurityEvents.RATE_LIMIT_EXCEEDED, {
				ip: clientIP,
				userAgent,
				endpoint: 'api/blogs',
				reason: validation.error
			});
			throw error(validation.status || 403, validation.error);
		}

		try {
			const blogs = await fetchMarkdownBlogs();
			
			// Sanitize blog metadata to prevent XSS
			const sanitizedBlogs = blogs.map(blog => ({
				...blog,
				meta: {
					...blog.meta,
					title: sanitizeString(blog.meta.title),
					description: sanitizeString(blog.meta.description),
					author: sanitizeString(blog.meta.author),
					tags: Array.isArray(blog.meta.tags) 
						? blog.meta.tags.map(tag => sanitizeString(tag))
						: []
				}
			}));
			
			const sortedBlogs = sanitizedBlogs.sort((a, b) => {
				const dateA = a.meta.date ? new Date(a.meta.date) : new Date(0);
				const dateB = b.meta.date ? new Date(b.meta.date) : new Date(0);
				return dateB - dateA;
			});
			
			// Log successful API call
			securityMonitor.logEvent(SecurityEvents.SUCCESSFUL_GENERATION, {
				ip: clientIP,
				userAgent,
				endpoint: 'api/blogs',
				blogCount: sortedBlogs.length
			});
			
			return json(sortedBlogs, {
				headers: {
					'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
					'X-Content-Type-Options': 'nosniff'
				}
			});
			
		} catch (fetchError) {
			securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
				ip: clientIP,
				userAgent,
				endpoint: 'api/blogs',
				error: fetchError.message || 'Failed to fetch blogs'
			});
			
			throw error(500, 'Failed to fetch blogs');
		}
		
	} catch (err) {
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			ip: clientIP,
			userAgent,
			endpoint: 'api/blogs',
			error: err.message || 'Unknown error'
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
				'<': '&lt;',
				'>': '&gt;',
				'&': '&amp;',
				'"': '&quot;',
				"'": '&#x27;'
			};
			return entities[match];
		})
		.trim();
