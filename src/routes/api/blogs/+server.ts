import { fetchMarkdownBlogs } from '#lib/utils/blogs.js';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	try {
		const blogs = await fetchMarkdownBlogs();
		const sortedBlogs = blogs.sort((a, b) => {
			const dateA = a.meta.date ? new Date(a.meta.date as string) : new Date(0);
			const dateB = b.meta.date ? new Date(b.meta.date as string) : new Date(0);
			return dateB.getTime() - dateA.getTime();
		});
		return Response.json(sortedBlogs);
	} catch (error) {
		const err = error as Error;
		return new Response(JSON.stringify({ error: String(err), stack: err.stack }), {
			headers: { 'Content-Type': 'application/json' },
			status: 500
		});
	}
};
