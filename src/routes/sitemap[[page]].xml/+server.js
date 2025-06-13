import { getBlogSlugs } from '$lib/utils/blogs.js';
import { getProjectSlugs } from '$lib/utils/projects.js';
import * as sitemap from 'super-sitemap';

export const GET = async ({ params }) => {
	let blogSlugs = await getBlogSlugs();

	let projectSlugs = await getProjectSlugs();

	return await sitemap.response({
		excludeRoutePatterns: ['/blogs/category/*'],
		origin: 'https://wentallout.io.vn',
		page: params.page,
		paramValues: {
			'/blogs/[slug]': blogSlugs,
			'/projects/[slug]': projectSlugs
		}
	});
};
