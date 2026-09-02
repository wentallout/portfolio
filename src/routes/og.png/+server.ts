import { ImageResponse } from '@ethercorps/sveltekit-og';
import SiteOg from '#lib/og/SiteOg.svelte';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	return new ImageResponse(
		SiteOg,
		{
			width: 1200,
			height: 630,
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
