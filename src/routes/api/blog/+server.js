import { json } from '@sveltejs/kit';
import { fetchMarkdownBlogs } from '$lib/utils/blog.js';

export const GET = async () => {
	try {
		const blogs = await fetchMarkdownBlogs();

		// Ensure that blogs have a date property before sorting
		const sortedBlogs = blogs.sort((a, b) => {
			const dateA = a.meta.date ? new Date(a.meta.date) : new Date(0);
			const dateB = b.meta.date ? new Date(b.meta.date) : new Date(0);
			return dateB - dateA;
		});

		return json(sortedBlogs);
	} catch (error) {
		console.log(error);
		return {
			body: { error: 'Failed to fetch blogs' },
			status: 500
		};
	}
};
