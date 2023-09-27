import config from '$lib/config';
export const prerender = true;

function formatDateToRFC822(inputDate) {
	// Parse the input date in the "Sat Sep 23 2023" format
	const parsedDate = new Date(inputDate);

	// Format it to RFC-822 date-time format
	const options = {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short'
	};
	const rfc822Date = parsedDate.toLocaleDateString('en-US', options);

	return rfc822Date;
}

/**
 * Generates a RSS feed in XML format containing the blog posts.
 *
 * @param {Object} fetch - the fetch function used to make HTTP requests
 * @return {Response} - a Response object containing the XML representation of the RSS feed
 */
export async function GET({ fetch }) {
	const response = await fetch('api/blog');
	const blogs = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.siteTitle}</title>
				<description>${config.description}</description>
				<link>${config.siteUrl}</link>
				<atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
				${blogs
					.map(
						(blog) => `
						<item>
							<title>${blog.meta.title}</title>
							<link>${config.siteUrl}${blog.path}</link>
							<guid isPermaLink="true">${config.siteUrl}${blog.path}</guid>
							<pubDate>${formatDateToRFC822(new Date(blog.meta.date))}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
