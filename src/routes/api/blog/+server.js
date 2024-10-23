import { fetchMarkdownBlogs } from '$lib/utils/blog.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBlogs = await fetchMarkdownBlogs();

	const sortedBlogs = allBlogs.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	// Add index to each blog post
	const indexedBlogs = sortedBlogs.map((blog, index) => ({
		...blog,
		index
	}));

	return json(indexedBlogs);
};


