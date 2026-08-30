import { getBlogSlugs } from '#lib/utils/blogs.js';
import { getProjectSlugs } from '#lib/utils/projects.js';
import * as sitemap from 'super-sitemap/sveltekit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	const blogSlugs = await getBlogSlugs();
	const projectSlugs = await getProjectSlugs();
	if (blogSlugs && projectSlugs) {
		return await sitemap.response({
			excludeRoutePatterns: [/^\/blogs\/category\/.*/],
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
