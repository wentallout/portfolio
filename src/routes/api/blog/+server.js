// src/routes/api/Blogs/+server.js
import { fetchMarkdownBlogs } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBlogs = await fetchMarkdownBlogs();

	const sortedBlogs = allBlogs.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedBlogs);
};
