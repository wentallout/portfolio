import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const GET: RequestHandler = async ({ params }) => {
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT * FROM projects WHERE id = ${params.id} LIMIT 1`;
	if (rows.length === 0) throw error(404, 'Not found');
	return json(rows[0]);
};

export const PUT: RequestHandler = async ({ params, request, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const body = await request.json();
	const sql = neon(DATABASE_URL);
	await sql`UPDATE projects SET slug=${body.slug}, title=${body.title}, excerpt=${body.excerpt}, content_json=${JSON.stringify(body.contentJson)}::jsonb, content_html=${body.contentHtml}, content_markdown=${body.contentMarkdown}, status=${body.status}::entry_status, published_at=${body.publishedAt ? new Date(body.publishedAt).toISOString() : null}::timestamptz, scheduled_at=${body.scheduledAt ? new Date(body.scheduledAt).toISOString() : null}::timestamptz, seo_title=${body.seoTitle}, seo_description=${body.seoDescription}, seo_keywords=${body.seoKeywords}::text[], canonical_url=${body.canonicalUrl}, og_image_url=${body.ogImageUrl}, cover_image_url=${body.coverImageUrl}, cover_image_alt=${body.coverImageAlt}, noindex=${!!body.noindex}, featured=${!!body.featured}, repo_url=${body.repoUrl ?? null}, demo_url=${body.demoUrl ?? null}, tech_stack=${body.techStack ?? null}::text[], updated_at=${new Date().toISOString()}::timestamptz WHERE id=${params.id}`;
	return json({ ok: true });
};

export const DELETE: RequestHandler = async ({ params, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const sql = neon(DATABASE_URL);
	await sql`DELETE FROM projects WHERE id=${params.id}`;
	return json({ ok: true });
};
