class BlogStore {
	all = $state([]);

	set(blogs) {
		this.all = blogs;
	}
}

export const blogs = new BlogStore();
