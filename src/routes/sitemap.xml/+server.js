const pages = [
	'/project',
	'/blog',
	'/resource',
	'/contact',
	'/resource/music',
	'/resource/tool',
	'/resource/experiment',
	'/rss.xml',
	'/sitemap.xml'
];

import config from '$lib/config';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, fetch }) {
	const blogsResponse = await fetch('api/blog');
	const blogs = await blogsResponse.json();

	const body = sitemap(blogs, pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (blogs, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${config.siteUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${config.siteUrl}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}
  ${blogs
		.map(
			(blog) =>
				`
  <url>
    <loc>${config.siteUrl}${blog.path}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${new Date(blog.meta.date).toDateString()}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
