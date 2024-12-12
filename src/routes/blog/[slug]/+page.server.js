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
			title
		};
	} catch (err) {
		throw error(404, 'Not Found');
	}
}
