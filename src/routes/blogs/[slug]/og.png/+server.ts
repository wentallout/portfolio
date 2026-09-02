import { ImageResponse } from '@ethercorps/sveltekit-og';
import BlogOg from '#lib/og/BlogOg.svelte';
import { GoogleFont, resolveFonts } from '@ethercorps/sveltekit-og/fonts';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

// Dynamic OG for blogs — runtime on Netlify Functions (Node)
// per https://sveltekit-og.dev/docs/runtime/netlify
// https://sveltekit-og.dev/docs/advanced-usage/local-assets — use `?inline` for small logos, `read()` for large assets
export const prerender = false;

// For full pre-rendering, see https://sveltekit-og.dev/docs/advanced-usage/pre-rendering#dynamic-paths
// export const prerender = true;
// export const entries: import('./$types').EntryGenerator = async () => {
//   try {
//     const sql = neon(DATABASE_URL);
//     const rows = await sql`SELECT slug FROM posts WHERE status='published'` as { slug: string }[];
//     return rows.map((r) => ({ slug: r.slug }));
//   } catch { return []; }
// };

function prettifySlug(s: string) {
	return s
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

export const GET: RequestHandler = async ({ params }) => {
	const slug = params.slug;
	if (!slug || !/^[a-z0-9-]+$/.test(slug)) throw error(404, 'Not found');

	let data: { title: string; description: string; date: string; readingTime: number; tags: string[] } | null = null;

	// Try DB — fall back to dev dummy so `http://localhost:1111/blogs/<slug>/og.png` still renders without DATABASE_URL
	if (DATABASE_URL) {
		try {
			const sql = neon(DATABASE_URL);
			const rows = (await sql`SELECT id, title, seo_title, seo_description, excerpt, published_at, updated_at, reading_time, cover_image_url FROM posts WHERE slug = ${slug} LIMIT 1`) as Record<string, unknown>[];
			if (rows.length > 0) {
				const r = rows[0];
				let tags: string[] = [];
				try {
					const tagRows = await sql`SELECT t.slug FROM tags t JOIN posts_to_tags pt ON pt.tag_id = t.id WHERE pt.post_id = ${r.id}`;
					tags = (tagRows as { slug: string }[]).map((x) => x.slug);
					if (tags.length === 0) {
						const catRows = await sql`SELECT c.slug FROM categories c JOIN posts_to_categories pc ON pc.category_id = c.id WHERE pc.post_id = ${r.id}`;
						tags = (catRows as { slug: string }[]).map((x) => x.slug);
					}
				} catch {}
				data = {
					title: String(r.seo_title ?? r.title ?? prettifySlug(slug)),
					description: String(r.seo_description ?? r.excerpt ?? '').slice(0, 160),
					date: String(r.published_at ?? r.updated_at ?? ''),
					readingTime: Number(r.reading_time ?? 0),
					tags
				};
			}
		} catch (e: unknown) {
			// SvelteKit 404 should propagate, otherwise fall through to dummy
			if (e && typeof e === 'object' && 'status' in e && (e as { status: number }).status === 404) throw e;
		}
	}

	// Dev / missing-DB fallback or slug not found in DB — still render image (helps `pnpm dev` without DB)
	if (!data) {
		if (!DATABASE_URL) {
			data = {
				title: prettifySlug(slug),
				description: `Preview for /blogs/${slug} — add DATABASE_URL to show real data.`,
				date: new Date().toISOString(),
				readingTime: 5,
				tags: ['preview']
			};
		} else {
			throw error(404, `Blog "${slug}" not found`);
		}
	}

	let fonts: Awaited<ReturnType<typeof resolveFonts>> | undefined;
	try {
		fonts = await resolveFonts([new GoogleFont('Inter', { weight: 500, name: 'Inter' })]);
	} catch {
		fonts = undefined;
	}

	return new ImageResponse(
		BlogOg,
		{
			width: 1200,
			height: 630,
			...(fonts ? { fonts } : {}),
			headers: {
				'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
				'Content-Type': 'image/png'
			}
		},
		{
			title: data.title,
			description: data.description,
			date: data.date,
			tags: data.tags,
			siteUrl: 'wentallout.io.vn'
		}
	);
};
