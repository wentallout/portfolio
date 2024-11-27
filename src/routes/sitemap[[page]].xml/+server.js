import { getBlogSlugs } from '$lib/utils/blog.js';
import { getProjectSlugs } from '$lib/utils/project.js';
import * as sitemap from 'super-sitemap';

export const GET = async ({ params }) => {
	let blogSlugs = await getBlogSlugs();

	let projectSlugs = await getProjectSlugs();

	return await sitemap.response({
		excludeRoutePatterns: ['/blog/category/*'],
		origin: 'https://wentallout.io.vn',
		page: params.page,
		paramValues: {
			'/blog/[slug]': blogSlugs,
			'/project/[slug]': projectSlugs
		}
	});
};
