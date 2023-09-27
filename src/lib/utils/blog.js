/**
 * Fetches markdown blogs.
 *
 * @return {Array} An array of objects containing metadata and path of each blog.
 */
export const fetchMarkdownBlogs = async () => {
	const allBlogFiles = import.meta.glob('/src/routes/blog/*.svx');

	const iterableBlogFiles = Object.entries(allBlogFiles);

	const allBlogs = await Promise.all(
		iterableBlogFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const blogPath = path.slice(11, -4);

			return {
				meta: metadata,
				path: blogPath
			};
		})
	);

	return allBlogs;
};
