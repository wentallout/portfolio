import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const blogs = await response.json();
	return {
		blogs
	};
};
