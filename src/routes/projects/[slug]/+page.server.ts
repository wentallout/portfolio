import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const load: PageServerLoad = async ({ params, url }) => {
	const slug = params.slug;
	const preview = url.searchParams.get('preview');
	const secret = process.env.CMS_PREVIEW_SECRET ?? '';
	const sql = neon(DATABASE_URL);
	const rows = await sql`SELECT id, slug, title, excerpt, content_html, content_json, published_at, updated_at, status, seo_title, seo_description, og_image_url, cover_image_url, reading_time, repo_url, demo_url, tech_stack FROM projects WHERE slug = ${slug} LIMIT 1`;
	if (rows.length === 0) throw error(404, `Project "${slug}" not found`);
	const r = rows[0] as Record<string, unknown>;
	const status = String(r.status);
	const isPublished = status === 'published';
	if (!isPublished) {
		if (!preview || !secret) throw error(404, `Project "${slug}" not found`);
		const crypto = await import('node:crypto');
		const expected = crypto.createHmac('sha256', secret).update(String(r.id)).digest('hex').slice(0, 32);
		if (preview !== expected) throw error(404, `Project "${slug}" not found`);
	}
	return {
		title: String(r.seo_title ?? r.title),
		slug: String(r.slug),
		date: r.published_at ? String(r.published_at) : String(r.updated_at),
		contentHtml: String(r.content_html),
		content: null as unknown,
		seoDescription: String(r.seo_description ?? r.excerpt ?? ''),
		publishedAt: r.published_at ? String(r.published_at) : null,
		updatedAt: String(r.updated_at),
		readingTime: Number(r.reading_time ?? 0),
		repoUrl: r.repo_url ? String(r.repo_url) : null,
		demoUrl: r.demo_url ? String(r.demo_url) : null,
		techStack: (r.tech_stack as string[] | null) ?? [],
		source: 'db' as const
	};
};
