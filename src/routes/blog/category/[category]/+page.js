export const load = async ({ fetch, params }) => {
	const { category } = params;
	const response = await fetch(`/api/blog`);
	const allBlogs = await response.json();

	const blogs = allBlogs.filter((post) => post.meta.categories.includes(category));

	return {
		category,
		blogs
	};
};
