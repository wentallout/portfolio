export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const { categories, date, title } = post.metadata;
	const content = post.default;

	return {
		// fallow-ignore-next-line unused-load-data-key
		categories,
		content,
		// fallow-ignore-next-line unused-load-data-key
		date,
		slug: params.slug,
		title
	};
}
