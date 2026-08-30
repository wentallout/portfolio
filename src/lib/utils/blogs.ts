export type BlogMeta = {
	title?: string;
	date?: string;
	description?: string;
	categories?: string[];
	tags?: string[];
	[key: string]: unknown;
};

export type BlogEntry = {
	meta: BlogMeta;
	path: string;
};

export const fetchMarkdownBlogs = async (): Promise<BlogEntry[]> => {
	const allBlogFiles = import.meta.glob<{ metadata: BlogMeta }>('/src/routes/blogs/*.svx');
	const iterableBlogFiles = Object.entries(allBlogFiles);
	return await Promise.all(
		iterableBlogFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: BlogMeta };
			const blogPath = path.slice(11, -4);
			return {
				meta: metadata,
				path: blogPath
			};
		})
	);
};

export const getBlogSlugs = async (): Promise<string[] | undefined> => {
	const allBlogs = await fetchMarkdownBlogs();
	if (allBlogs.length > 0) {
		return allBlogs.map((blog) => blog.path.replace(/^\/blogs\//, ''));
	}
	return undefined;
};
