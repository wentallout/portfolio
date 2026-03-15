export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const { categories, date, title } = post.metadata;
	const content = post.default;

	return {
		categories,
		content,
		date,
		title
	};
}
