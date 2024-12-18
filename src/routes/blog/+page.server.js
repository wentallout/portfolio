export const load = async ({ fetch }) => {
	const response = await fetch(`/api/blog`);
	const blogs = await response.json();

	return {
		blogs
	};
};
