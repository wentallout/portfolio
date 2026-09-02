import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const GET: RequestHandler = async ({ url, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const page = Number(url.searchParams.get('page') ?? '1');
	const limit = Math.min(Number(url.searchParams.get('limit') ?? '24'), 100);
	const offset = (page - 1) * limit;
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT id, key, url, alt, width, height, bytes, mime, created_at FROM media ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`;
	const c = await sql`SELECT count(*) as count FROM media`;
	const total = Number((c as { count: string }[])[0].count);
	return json({ items: rows, total, page, limit });
};

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const form = await request.formData();
	const file = form.get('file') as File | null;
	const alt = (form.get('alt') as string) ?? null;
	if (!file) return json({ error: 'No file' }, { status: 400 });
	if (file.size > 5 * 1024 * 1024) return json({ error: 'File too large (5MB)' }, { status: 400 });
	if (!file.type.startsWith('image/')) return json({ error: 'Only images' }, { status: 400 });
	const buf = Buffer.from(await file.arrayBuffer());
	const dataUrl = `data:${file.type};base64,${buf.toString('base64')}`;
	const key = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
	const sql = neon(DATABASE_URL);
	// try to get image dimensions via probe is not available server-side without sharp; store null for now
	const rows = await sql`INSERT INTO media (key, url, alt, width, height, bytes, mime, uploaded_by) VALUES (${key}, ${dataUrl}, ${alt}, ${null}, ${null}, ${file.size}, ${file.type}, ${locals.user.id}) RETURNING id, url, key`;
	const inserted = (rows as { id: string; url: string; key: string }[])[0];
	return json({ id: inserted.id, url: inserted.url, key: inserted.key }, { status: 201 });
};
