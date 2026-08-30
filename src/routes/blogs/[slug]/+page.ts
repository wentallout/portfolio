import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../${params.slug}.svx`);
		const { categories, date, title } = post.metadata as {
			categories: string[];
			date: string;
			title: string;
		};
		const content = post.default as unknown;
		return {
			categories,
			content,
			date,
			slug: params.slug,
			title
		};
	} catch {
		error(404, `Blog "${params.slug}" not found`);
	}
};
