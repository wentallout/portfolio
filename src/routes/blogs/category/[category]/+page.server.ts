import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/blogs`);
	const allBlogs = await response.json();
	const blogs = (allBlogs as Array<{ meta: { categories: string[] } }>).filter((post) =>
		post.meta.categories?.includes(category)
	);
	return {
		blogs,
		category
	};
};
