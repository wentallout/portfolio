import config from '$lib/config';
import { securityMiddleware } from '$lib/security/securityMiddleware.js';
import { securityMonitor, SecurityEvents } from '$lib/security/securityMonitor.js';
import { error } from '@sveltejs/kit';

/**
 * Generates a RSS feed in XML format containing the blog posts.
 *
 * @param {Object} fetch - the fetch function used to make HTTP requests
 * @param {Object} request - the request object
 * @param {Function} getClientAddress - function to get client IP
 * @return {Response} - a Response object containing the XML representation of the RSS feed
 */
export async function GET({ fetch, request, getClientAddress }) {
	const clientIP = getClientAddress();
	const userAgent = request.headers.get('user-agent') || '';
	
	try {
		// Security validation
		const validation = securityMiddleware.validateRequest(request);
		if (!validation.valid) {
			securityMonitor.logEvent(SecurityEvents.RATE_LIMIT_EXCEEDED, {
				ip: clientIP,
				userAgent,
				endpoint: 'rss.xml',
				reason: validation.error
			});
			throw error(validation.status || 403, validation.error);
		}
	
		const response = await fetch('api/blogs');
		if (!response.ok) {
			throw new Error('Failed to fetch blogs');
		}
		const blogs = await response.json();

		const headers = { 
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
			'X-Content-Type-Options': 'nosniff'
		};

		// Sanitize blog data to prevent XML injection
		const sanitizedBlogs = blogs.map(blog => ({
			...blog,
			meta: {
				...blog.meta,
				title: escapeXml(blog.meta.title || 'Untitled'),
				description: escapeXml(blog.meta.description || '')
			},
			path: escapeXml(blog.path || '')
		}));

		const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.siteTitle}</title>
				<description>${config.description}</description>
				<link>${config.siteUrl}</link>
				<atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
				${sanitizedBlogs
					.map(
						(blog) => `
						<item>
							<title>${blog.meta.title}</title>
							<description>${blog.meta.description}</description>
							<link>${escapeXml(config.siteUrl)}${blog.path}</link>
							<guid isPermaLink="true">${escapeXml(config.siteUrl)}${blog.path}</guid>
							<pubDate>${buildRFC822Date(new Date(blog.meta.date).toString())}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
		`.trim();

		// Log successful RSS generation
		securityMonitor.logEvent(SecurityEvents.SUCCESSFUL_GENERATION, {
			ip: clientIP,
			userAgent,
			endpoint: 'rss.xml',
			blogCount: sanitizedBlogs.length
		});

		return new Response(xml, { headers });
		
	} catch (err) {
		securityMonitor.logEvent(SecurityEvents.GENERATION_ERROR, {
			ip: clientIP,
			userAgent,
			endpoint: 'rss.xml',
			error: err.message || 'Unknown error'
		});
		
		if (err.status) {
			throw err;
		}
		
		throw error(500, 'Failed to generate RSS feed');
	}
}

// XML escape function to prevent injection
function escapeXml(unsafe) {
	if (typeof unsafe !== 'string') return '';
	return unsafe.replace(/[<>&'"]/g, function (c) {
		switch (c) {
			case '<': return '&lt;';
			case '>': return '&gt;';
			case '&': return '&amp;';
			case '\'': return '&apos;';
			case '"': return '&quot;';
			default: return c;
		}
	});
}

function addLeadingZero(num) {
	num = num.toString();
	while (num.length < 2) num = '0' + num;
	return num;
}

function buildRFC822Date(dateString) {
	const dayStrings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const monthStrings = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const timeStamp = Date.parse(dateString);
	const date = new Date(timeStamp);

	const day = dayStrings[date.getDay()];
	const dayNumber = addLeadingZero(date.getDate());
	const month = monthStrings[date.getMonth()];
	const year = date.getFullYear();
	const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:00`;
	const timezone = date.getTimezoneOffset() === 0 ? 'GMT' : 'BST';

	//Wed, 02 Oct 2002 13:00:00 GMT
	return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`;
}
