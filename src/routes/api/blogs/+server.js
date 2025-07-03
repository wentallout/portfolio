import { json } from '@sveltejs/kit';
import { fetchMarkdownBlogs } from '$lib/utils/blogs.js';

export const GET = async ({ request }) => {
	try {
		const blogs = await fetchMarkdownBlogs();
		const sortedBlogs = blogs.sort((a, b) => {
			const dateA = a.meta.date ? new Date(a.meta.date) : new Date(0);
			const dateB = b.meta.date ? new Date(b.meta.date) : new Date(0);
			return dateB - dateA;
		});
		return json(sortedBlogs);
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), {
			headers: { 'Content-Type': 'application/json' },
			status: 500
		});
	}
};
