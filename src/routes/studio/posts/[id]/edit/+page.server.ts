import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ params }) => {
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT * FROM posts WHERE id = ${params.id} LIMIT 1`;
	if (rows.length === 0) throw error(404, 'Post not found');
	return { post: rows[0] as Record<string, unknown> };
};
