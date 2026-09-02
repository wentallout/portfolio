import { query } from '$app/server';
import { neon } from '@neondatabase/serverless';
import { CMS_PREVIEW_SECRET, DATABASE_URL } from '$app/env/private';
import { error } from '@sveltejs/kit';
import * as z from 'zod';

export const getBlogs = query(async () => {
	const sql = neon(DATABASE_URL);
	const rows = (await sql`SELECT p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.updated_at, p.status, p.cover_image_url, COALESCE(array_agg(t.slug) FILTER (WHERE t.slug IS NOT NULL), '{}') as tags FROM posts p LEFT JOIN posts_to_tags pt ON pt.post_id = p.id LEFT JOIN tags t ON t.id = pt.tag_id WHERE p.status = 'published' GROUP BY p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.updated_at, p.status, p.cover_image_url ORDER BY p.published_at DESC NULLS LAST, p.updated_at DESC`) as Record<string, unknown>[];

	return rows.map((r) => {
		const tags = (r.tags as string[]) ?? [];
		return {
			meta: {
				title: r.title as string,
				date: r.published_at as string,
				description: (r.seo_description as string) ?? (r.excerpt as string),
				coverImage: r.cover_image_url as string | null,
				tags,
				categories: tags
			},
			path: `/blogs/${r.slug}`
		};
	});
});

export const getBlogsByTag = query(z.string(), async (tag) => {
	const sql = neon(DATABASE_URL);
	// Try tags first, fallback to categories for legacy
	let tagRows = await sql`SELECT id FROM tags WHERE slug = ${tag} LIMIT 1`;
	let table: 'tags' | 'categories' = 'tags';
	if (tagRows.length === 0) {
		const catRows = await sql`SELECT id FROM categories WHERE slug = ${tag} LIMIT 1`;
		if (catRows.length === 0) return { blogs: [] as ReturnType<typeof mapRow>[], tag };
		tagRows = catRows;
		table = 'categories';
	}
	const tagId = (tagRows[0] as { id: string }).id;
	let rows: Record<string, unknown>[];
	if (table === 'tags') {
		rows = (await sql`SELECT p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.cover_image_url FROM posts p JOIN posts_to_tags pt ON pt.post_id = p.id WHERE pt.tag_id = ${tagId} AND p.status='published' ORDER BY p.published_at DESC`) as Record<string, unknown>[];
	} else {
		rows = (await sql`SELECT p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.cover_image_url FROM posts p JOIN posts_to_categories pc ON pc.post_id = p.id WHERE pc.category_id = ${tagId} AND p.status='published' ORDER BY p.published_at DESC`) as Record<string, unknown>[];
	}
	function mapRow(r: Record<string, unknown>) {
		return {
			meta: {
				title: r.title as string,
				date: r.published_at as string,
				description: (r.seo_description as string) ?? (r.excerpt as string),
				coverImage: r.cover_image_url as string | null,
				tags: [tag],
				categories: [tag]
			},
			path: `/blogs/${r.slug}`
		};
	}
	const blogs = rows.map(mapRow);
	return { blogs, tag, category: tag };
});

export const getPostBySlug = query(
	z.object({ slug: z.string(), preview: z.string().nullish() }),
	async ({ slug, preview }) => {
		const secret = CMS_PREVIEW_SECRET ?? '';

		const sql = neon(DATABASE_URL);
		const rows = await sql`SELECT id, slug, title, excerpt, content_html, content_json, published_at, updated_at, scheduled_at, status, seo_title, seo_description, og_image_url, cover_image_url, reading_time FROM posts WHERE slug = ${slug} LIMIT 1`;
		if (rows.length === 0) throw error(404, `Blog "${slug}" not found`);
		const r = rows[0] as Record<string, unknown>;
		const status = String(r.status);
		const isPublished = status === 'published';
		const isScheduled = r.scheduled_at && new Date(String(r.scheduled_at)) <= new Date();
		if (!isPublished && !isScheduled) {
			if (!preview || !secret) throw error(404, `Blog "${slug}" not found`);
			const crypto = await import('node:crypto');
			const expected = crypto.createHmac('sha256', secret).update(String(r.id)).digest('hex').slice(0, 32);
			if (preview !== expected) throw error(404, `Blog "${slug}" not found`);
		}
		let tags: string[] = [];
		try {
			const tagRows = await sql`SELECT t.slug FROM tags t JOIN posts_to_tags pt ON pt.tag_id = t.id WHERE pt.post_id = ${r.id}`;
			tags = (tagRows as { slug: string }[]).map((x) => x.slug);
			if (tags.length === 0) {
				const catRows = await sql`SELECT c.slug FROM categories c JOIN posts_to_categories pc ON pc.category_id = c.id WHERE pc.post_id = ${r.id}`;
				tags = (catRows as { slug: string }[]).map((x) => x.slug);
			}
		} catch {}
		return {
			title: String(r.seo_title ?? r.title),
			slug: String(r.slug),
			date: r.published_at ? String(r.published_at) : String(r.updated_at),
			tags,
			categories: tags,
			contentHtml: String(r.content_html),
			content: null as unknown,
			seoDescription: String(r.seo_description ?? r.excerpt ?? ''),
			publishedAt: r.published_at ? String(r.published_at) : null,
			updatedAt: String(r.updated_at),
			readingTime: Number(r.reading_time ?? 0),
			source: 'db' as const
		};
	}
);
