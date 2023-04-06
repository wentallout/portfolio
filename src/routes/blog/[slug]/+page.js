export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const content = post.default;

	const { title, date, categories } = post.metadata;

	return {
		content,
		title,
		date,
		categories
	};
}
