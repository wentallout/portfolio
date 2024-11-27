// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.svx`);
	const { date, title } = post.metadata;
	const content = post.default;

	return {
		content,
		date,
		title
	};
}
