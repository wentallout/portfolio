import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const sql = neon(DATABASE_URL);
		const tagFilter = url.searchParams.get('tag') ?? url.searchParams.get('category');
		let rows: Record<string, unknown>[];
		if (tagFilter) {
			rows = (await sql`SELECT p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.updated_at, p.status, p.cover_image_url, COALESCE(array_agg(t.slug) FILTER (WHERE t.slug IS NOT NULL), '{}') as tags FROM posts p LEFT JOIN posts_to_tags pt ON pt.post_id = p.id LEFT JOIN tags t ON t.id = pt.tag_id WHERE p.status = 'published' AND EXISTS (SELECT 1 FROM posts_to_tags pt2 JOIN tags t2 ON t2.id = pt2.tag_id WHERE pt2.post_id = p.id AND t2.slug = ${tagFilter}) GROUP BY p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.updated_at, p.status, p.cover_image_url ORDER BY p.published_at DESC NULLS LAST, p.updated_at DESC`) as Record<string, unknown>[];
		} else {
			rows = (await sql`SELECT p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.updated_at, p.status, p.cover_image_url, COALESCE(array_agg(t.slug) FILTER (WHERE t.slug IS NOT NULL), '{}') as tags FROM posts p LEFT JOIN posts_to_tags pt ON pt.post_id = p.id LEFT JOIN tags t ON t.id = pt.tag_id WHERE p.status = 'published' GROUP BY p.slug, p.title, p.excerpt, p.seo_description, p.published_at, p.updated_at, p.status, p.cover_image_url ORDER BY p.published_at DESC NULLS LAST, p.updated_at DESC`) as Record<string, unknown>[];
		}
		const mapped = rows.map((r: Record<string, unknown>) => {
			const tags = (r.tags as string[]) ?? [];
			return {
				meta: {
					title: r.title,
					date: r.published_at,
					description: r.seo_description ?? r.excerpt,
					coverImage: r.cover_image_url,
					tags,
					// backward compat: category alias
					categories: tags
				},
				path: `/blogs/${r.slug}`
			};
		});
		return Response.json(mapped);
	} catch (error) {
		const err = error as Error;
		return new Response(JSON.stringify({ error: String(err), stack: err.stack }), {
			headers: { 'Content-Type': 'application/json' },
			status: 500
		});
	}
};
