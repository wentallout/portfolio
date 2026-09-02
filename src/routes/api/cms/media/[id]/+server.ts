import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const DELETE: RequestHandler = async ({ params, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT id FROM media WHERE id = ${params.id} LIMIT 1`;
	if (rows.length === 0) throw error(404, 'Not found');
	await sql`DELETE FROM media WHERE id = ${params.id}`;
	return json({ ok: true });
};

export const PATCH: RequestHandler = async ({ params, request, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const body = await request.json();
	const sql = neon(DATABASE_URL);
	await sql`UPDATE media SET alt = ${body.alt ?? null} WHERE id = ${params.id}`;
	return json({ ok: true });
};
