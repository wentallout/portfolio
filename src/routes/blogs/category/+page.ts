import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`/api/blogs`);
	const blogs = await response.json();
	return {
		blogs
	};
};
