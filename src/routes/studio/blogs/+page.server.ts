
import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ url }) => {
	const q = url.searchParams.get('q') ?? '';
	const status = url.searchParams.get('status') ?? '';
	const page = Number(url.searchParams.get('page') ?? '1');
	const limit = 20;
	const offset = (page - 1) * limit;
	const sql = neon(DATABASE_URL);
	let rows: unknown[];
	let total = 0;
	if (q) {
		const like = `%${q}%`;
		if (status) {
			rows = await sql`SELECT id, slug, title, status, published_at, updated_at FROM posts WHERE (title ILIKE ${like} OR slug ILIKE ${like}) AND status = ${status}::entry_status ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			const c = await sql`SELECT count(*) as count FROM posts WHERE (title ILIKE ${like} OR slug ILIKE ${like}) AND status = ${status}::entry_status`;
			total = Number((c as { count: string }[])[0].count);
		} else {
			rows = await sql`SELECT id, slug, title, status, published_at, updated_at FROM posts WHERE title ILIKE ${like} OR slug ILIKE ${like} ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			const c = await sql`SELECT count(*) as count FROM posts WHERE title ILIKE ${like} OR slug ILIKE ${like}`;
			total = Number((c as { count: string }[])[0].count);
		}
	} else {
		if (status) {
			rows = await sql`SELECT id, slug, title, status, published_at, updated_at FROM posts WHERE status = ${status}::entry_status ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			const c = await sql`SELECT count(*) as count FROM posts WHERE status = ${status}::entry_status`;
			total = Number((c as { count: string }[])[0].count);
		} else {
			rows = await sql`SELECT id, slug, title, status, published_at, updated_at FROM posts ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			const c = await sql`SELECT count(*) as count FROM posts`;
			total = Number((c as { count: string }[])[0].count);
		}
	}
	return { items: rows as { id: string; slug: string; title: string; status: string; published_at: string | null; updated_at: string }[], total, page, q, status };
};

