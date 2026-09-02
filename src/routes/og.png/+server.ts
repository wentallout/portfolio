import { ImageResponse } from '@ethercorps/sveltekit-og';
import SiteOg from '#lib/og/SiteOg.svelte';
import { GoogleFont, resolveFonts } from '@ethercorps/sveltekit-og/fonts';
import type { RequestHandler } from './$types';

// Pre-rendered static OG per https://sveltekit-og.dev/docs/advanced-usage/pre-rendering#single-static-route
// This generates a static PNG at build time (build/og.png) and is served with immutable cache.
export const prerender = true;

export const GET: RequestHandler = async () => {
	let fonts: Awaited<ReturnType<typeof resolveFonts>> | undefined;
	try {
		fonts = await resolveFonts([new GoogleFont('Inter', { weight: 500, name: 'Inter' })]);
	} catch {
		fonts = undefined;
	}

	return new ImageResponse(
		SiteOg,
		{
			width: 1200,
			height: 630,
			...(fonts ? { fonts } : {}),
			headers: {
				'Cache-Control': 'public, immutable, max-age=31536000'
			}
		},
		{
			title: 'Tailor-made websites for your business — Khoa Nguyen',
			description: 'Professional UI/UX Designer and Frontend Developer since 2022',
			siteUrl: 'wentallout.io.vn'
		}
	);
};
