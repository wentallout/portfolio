import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	try {
		// Fetch the current post and all blog metadata concurrently
		const postModulePromise = import(`../${params.slug}.svx`);
		const allBlogsPromise = fetch('/api/blogs'); // Assumes /api/blogs returns [{ slug, title, date?, ... }]

		const [postModule, allBlogsResponse] = await Promise.all([postModulePromise, allBlogsPromise]);

		if (!allBlogsResponse.ok) {
			console.error(
				`Failed to fetch blog list: ${allBlogsResponse.status} ${await allBlogsResponse.text()}`
			);
			// Decide if you want to throw an error or proceed without prev/next
			// For now, let's proceed but log the error.
		}

		let allBlogs = [];
		if (allBlogsResponse.ok) {
			allBlogs = await allBlogsResponse.json();
			// Ensure allBlogs is an array. Add sorting if needed, e.g., by date.
			// Example: allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
		}

		const content = postModule.default;
		const { categories, date, title } = postModule.metadata;

		// Find current, previous, and next blog posts
		const currentIndex = allBlogs.findIndex((p) => p.slug === params.slug);
		const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
		const nextBlog =
			currentIndex < allBlogs.length - 1 && currentIndex !== -1 ? allBlogs[currentIndex + 1] : null;

		return {
			categories,
			content,
			date,
			nextBlog: nextBlog ? { slug: nextBlog.slug, title: nextBlog.title } : null,
			prevBlog: prevBlog ? { slug: prevBlog.slug, title: prevBlog.title } : null,
			slug: params.slug,
			title
		};
	} catch (err) {
		console.error(`Error loading post ${params.slug}:`, err);
		throw error(404, `Could not load post: ${params.slug}`);
	}
}
