import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../${params.slug}.svx`);
		const { date, title } = post.metadata as { date: string; title: string };
		const content = post.default as unknown;
		return {
			content,
			date,
			slug: params.slug,
			title
		};
	} catch {
		error(404, `Project "${params.slug}" not found`);
	}
};
