import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const GET: RequestHandler = async ({ params }) => {
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT * FROM posts WHERE id = ${params.id} LIMIT 1`;
	if (rows.length === 0) throw error(404, 'Not found');
	return json(rows[0]);
};

export const PUT: RequestHandler = async ({ params, request, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const body = await request.json();
	const sql = neon(DATABASE_URL);
	const fields: Record<string, unknown> = {
		slug: body.slug,
		title: body.title,
		excerpt: body.excerpt,
		content_json: JSON.stringify(body.contentJson),
		content_html: body.contentHtml,
		content_markdown: body.contentMarkdown,
		status: body.status,
		published_at: body.publishedAt ? new Date(body.publishedAt).toISOString() : null,
		scheduled_at: body.scheduledAt ? new Date(body.scheduledAt).toISOString() : null,
		seo_title: body.seoTitle,
		seo_description: body.seoDescription,
		seo_keywords: body.seoKeywords,
		canonical_url: body.canonicalUrl,
		og_image_url: body.ogImageUrl,
		cover_image_url: body.coverImageUrl,
		cover_image_alt: body.coverImageAlt,
		noindex: body.noindex,
		featured: body.featured,
		updated_at: new Date().toISOString()
	};
	// build dynamic set via raw sql for simplicity
	await sql`UPDATE posts SET slug=${fields.slug}, title=${fields.title}, excerpt=${fields.excerpt}, content_json=${fields.content_json}::jsonb, content_html=${fields.content_html}, content_markdown=${fields.content_markdown}, status=${fields.status}::entry_status, published_at=${fields.published_at}::timestamptz, scheduled_at=${fields.scheduled_at}::timestamptz, seo_title=${fields.seo_title}, seo_description=${fields.seo_description}, seo_keywords=${fields.seo_keywords}::text[], canonical_url=${fields.canonical_url}, og_image_url=${fields.og_image_url}, cover_image_url=${fields.cover_image_url}, cover_image_alt=${fields.cover_image_alt}, noindex=${fields.noindex}, featured=${fields.featured}, updated_at=${fields.updated_at}::timestamptz WHERE id=${params.id}`;
	return json({ ok: true });
};

export const DELETE: RequestHandler = async ({ params, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const sql = neon(DATABASE_URL);
	await sql`DELETE FROM posts WHERE id=${params.id}`;
	return json({ ok: true });
};
