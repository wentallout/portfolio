import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.svx`);
		const content = post.default;

		const { categories, date, title } = post.metadata;

		return {
			categories,
			content,
			date,
			slug: params.slug,
			title
		};
	} catch (err) {
		console.log(err);
		throw error(404);
	}
}
