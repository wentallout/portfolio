import * as sitemap from 'super-sitemap/sveltekit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const GET: RequestHandler = async ({ params }) => {
	const sql = neon(DATABASE_URL);
	const b = await sql`SELECT slug FROM posts WHERE status='published' ORDER BY published_at DESC`;
	const p = await sql`SELECT slug FROM projects WHERE status='published' ORDER BY published_at DESC`;
	const blogSlugs = (b as { slug: string }[]).map((r) => r.slug);
	const projectSlugs = (p as { slug: string }[]).map((r) => r.slug);
	if (blogSlugs.length > 0 && projectSlugs.length > 0) {
		return await sitemap.response({
			excludeRoutePatterns: [/^\/blogs\/tags\/.*/, /^\/blogs\/category\/.*/],
			origin: 'https://wentallout.io.vn',
			page: (params as { page?: string }).page,
			paramValues: {
				'/blogs/[slug]': blogSlugs,
				'/projects/[slug]': projectSlugs
			}
		});
	}
	return new Response('Not found', { status: 404 });
};
