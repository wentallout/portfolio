
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const GET: RequestHandler = async ({ url }) => {
	const q = url.searchParams.get('q')?.trim() ?? '';
	const status = url.searchParams.get('status');
	const page = Number(url.searchParams.get('page') ?? '1');
	const limit = Math.min(Number(url.searchParams.get('limit') ?? '20'), 100);
	const offset = (page - 1) * limit;
	const type = url.searchParams.get('type') ?? 'posts'; // posts|projects

	const sql = neon(DATABASE_URL);
	const table = type === 'projects' ? 'projects' : 'posts';

	let rows: unknown[];
	let countRows: unknown[];
	if (q) {
		const like = `%${q}%`;
		if (status) {
			rows = await sql`SELECT id, slug, title, excerpt, status, published_at, updated_at FROM ${sql.unsafe(table)} WHERE (title ILIKE ${like} OR slug ILIKE ${like}) AND status = ${status}::entry_status ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			countRows = await sql`SELECT count(*) as c FROM ${sql.unsafe(table)} WHERE (title ILIKE ${like} OR slug ILIKE ${like}) AND status = ${status}::entry_status`;
		} else {
			rows = await sql`SELECT id, slug, title, excerpt, status, published_at, updated_at FROM ${sql.unsafe(table)} WHERE title ILIKE ${like} OR slug ILIKE ${like} ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			countRows = await sql`SELECT count(*) as c FROM ${sql.unsafe(table)} WHERE title ILIKE ${like} OR slug ILIKE ${like}`;
		}
	} else {
		if (status) {
			rows = await sql`SELECT id, slug, title, excerpt, status, published_at, updated_at FROM ${sql.unsafe(table)} WHERE status = ${status}::entry_status ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			countRows = await sql`SELECT count(*) as c FROM ${sql.unsafe(table)} WHERE status = ${status}::entry_status`;
		} else {
			rows = await sql`SELECT id, slug, title, excerpt, status, published_at, updated_at FROM ${sql.unsafe(table)} ORDER BY updated_at DESC LIMIT ${limit} OFFSET ${offset}`;
			countRows = await sql`SELECT count(*) as c FROM ${sql.unsafe(table)}`;
		}
	}
	const total = Number((countRows as { c: string }[])[0]?.c ?? 0);
	return json({ items: rows, total, page, limit });
};

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const body = await request.json();
	const { slug, title, excerpt, contentJson, contentHtml, contentMarkdown, status, publishedAt, scheduledAt, seoTitle, seoDescription, seoKeywords, canonicalUrl, ogImageUrl, coverImageUrl, coverImageAlt, noindex, featured, repoUrl, demoUrl, techStack } = body;
	const table = body.type === 'project' ? 'projects' : 'posts';
	const sql = neon(DATABASE_URL);
	// basic validation
	if (!slug || !title || !contentJson || !contentHtml) return json({ error: 'Missing required fields' }, { status: 400 });
	const idRows = await sql`INSERT INTO ${sql.unsafe(table)} (slug, title, excerpt, content_json, content_html, content_markdown, status, published_at, scheduled_at, author_id, seo_title, seo_description, seo_keywords, canonical_url, og_image_url, cover_image_url, cover_image_alt, noindex, featured ${table === 'projects' ? sql`, repo_url, demo_url, tech_stack` : sql``}) VALUES (${slug}, ${title}, ${excerpt ?? null}, ${JSON.stringify(contentJson)}::jsonb, ${contentHtml}, ${contentMarkdown ?? null}, ${status ?? 'draft'}::entry_status, ${publishedAt ? new Date(publishedAt).toISOString() : null}::timestamptz, ${scheduledAt ? new Date(scheduledAt).toISOString() : null}::timestamptz, ${locals.user.id}, ${seoTitle ?? null}, ${seoDescription ?? null}, ${seoKeywords ?? null}::text[], ${canonicalUrl ?? null}, ${ogImageUrl ?? null}, ${coverImageUrl ?? null}, ${coverImageAlt ?? null}, ${!!noindex}, ${!!featured} ${table === 'projects' ? sql`, ${repoUrl ?? null}, ${demoUrl ?? null}, ${techStack ?? null}::text[]` : sql``}) RETURNING id, slug`;
	return json({ id: (idRows as { id: string }[])[0].id, slug: (idRows as { slug: string }[])[0].slug }, { status: 201 });
};

