export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const { date, title } = post.metadata;
	const content = post.default;

	return {
		content,
		// fallow-ignore-next-line unused-load-data-key
		date,
		slug: params.slug,
		title
	};
}
