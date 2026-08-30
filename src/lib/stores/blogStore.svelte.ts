import type { BlogEntry } from '#lib/utils/blogs.js';

class BlogStore {
	all = $state<BlogEntry[]>([]);

	set(blogs: BlogEntry[]) {
		this.all = blogs;
	}
}

export const blogs = new BlogStore();
