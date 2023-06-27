import config from '$lib/config';
export const prerender = true;

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
							<pubDate>${new Date(blog.meta.date).toDateString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
