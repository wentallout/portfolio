import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.svx`);
		const content = post.default;

		const { title, date, categories } = post.metadata;

		return {
			content,
			title,
			date,
			categories
		};
	} catch (err) {
		throw error(404);
	}
}
