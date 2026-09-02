import { ImageResponse } from '@ethercorps/sveltekit-og';
import ProjectOg from '#lib/og/ProjectOg.svelte';
import { GoogleFont, resolveFonts } from '@ethercorps/sveltekit-og/fonts';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';

export const prerender = false;

function prettifySlug(s: string) {
	return s
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

export const GET: RequestHandler = async ({ params }) => {
	const slug = params.slug;
	if (!slug || !/^[a-z0-9-]+$/.test(slug)) throw error(404, 'Not found');

	let data: { title: string; description: string; techStack: string[] } | null = null;

	if (DATABASE_URL) {
		try {
			const sql = neon(DATABASE_URL);
			const rows = (await sql`SELECT title, seo_title, seo_description, excerpt, tech_stack FROM projects WHERE slug = ${slug} LIMIT 1`) as Record<string, unknown>[];
			if (rows.length > 0) {
				const r = rows[0];
				data = {
					title: String(r.seo_title ?? r.title ?? prettifySlug(slug)),
					description: String(r.seo_description ?? r.excerpt ?? '').slice(0, 160),
					techStack: (r.tech_stack as string[] | null) ?? []
				};
			}
		} catch (e: unknown) {
			if (e && typeof e === 'object' && 'status' in e && (e as { status: number }).status === 404) throw e;
		}
	}

	if (!data) {
		if (!DATABASE_URL) {
			data = {
				title: prettifySlug(slug),
				description: `Preview for /projects/${slug} — add DATABASE_URL to show real data.`,
				techStack: ['SvelteKit', 'Preview']
			};
		} else {
			throw error(404, `Project "${slug}" not found`);
		}
	}

	let fonts: Awaited<ReturnType<typeof resolveFonts>> | undefined;
	try {
		fonts = await resolveFonts([new GoogleFont('Inter', { weight: 500, name: 'Inter' })]);
	} catch {
		fonts = undefined;
	}

	return new ImageResponse(
		ProjectOg,
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
			techStack: data.techStack,
			siteUrl: 'wentallout.io.vn'
		}
	);
};
