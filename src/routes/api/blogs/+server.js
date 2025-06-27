import { json } from '@sveltejs/kit';
import { fetchMarkdownBlogs } from '$lib/utils/blogs.js';
import { protectRequest } from '$lib/utils/protect.js';

export const GET = async ({ request }) => {
	const protection = protectRequest(request);
	if (protection) return protection;

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
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
