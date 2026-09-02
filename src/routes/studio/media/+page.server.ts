import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ url }) => {
	const page = Number(url.searchParams.get('page') ?? '1');
	const limit = 24;
	const offset = (page - 1) * limit;
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT id, key, url, alt, bytes, mime, created_at FROM media ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
	const c = await sql`SELECT count(*) as count FROM media`;
	const total = Number((c as { count: string }[])[0].count);
	return { items: rows as { id: string; key: string; url: string; alt: string | null; bytes: number | null; mime: string | null; created_at: string }[], total, page };
};
