<script>
	import { page } from '$app/state';

	let blogs = $state([]);
	let prevBlog = $state();
	let nextBlog = $state();

	// Fetch blogs once on component mount
	let blogsLoaded = $state(false);

	async function loadBlogs() {
		const response = await fetch('/api/blogs');
		blogs = await response.json();
		blogsLoaded = true;
	}
	loadBlogs();

	// Reactively update prevBlog and nextBlog when blogs or page changes
	$effect(() => {
		const currentPath = page.url.pathname;
		const currentIndex = blogs.findIndex((blog) => blog.path === currentPath);

		prevBlog = null;
		nextBlog = null;

		if (currentIndex > 0) {
			prevBlog = {
				meta: { title: blogs[currentIndex - 1].meta.title },
				path: blogs[currentIndex - 1].path
			};
		}
		if (currentIndex >= 0 && currentIndex < blogs.length - 1) {
			nextBlog = {
				meta: { title: blogs[currentIndex + 1].meta.title },
				path: blogs[currentIndex + 1].path
			};
		}
	});
</script>

{#if blogsLoaded}
	<div class="prevnext text-small">
		{#if prevBlog}
			<a class="prevnext__btn" href={prevBlog.path}>
				<div class="prevnext__sign">← Previous</div>
				<div class="prev__text prevnext__title">
					{prevBlog.meta.title}
				</div>
			</a>
		{/if}

		{#if nextBlog}
			<a class="prevnext__btn next" href={nextBlog.path}>
				<div class="prevnext__sign">Next →</div>
				<div class="next__text prevnext__title">
					{nextBlog.meta.title}
				</div>
			</a>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.prevnext {
		--min: 16ch;
		--gap: 0;
		border: 1px solid var(--color-border);
		display: grid;
		grid-gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
		overflow: hidden;
		border-right: 0;
		border-radius: var(--border-radius);
	}
	.prevnext__btn {
		position: relative;
		text-decoration: none !important;
		padding: var(--space-xs) var(--space-s);
		transition: var(--transition);
		display: flex;
		gap: var(--space-s);
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		min-height: 132px;
		border-right: 1px solid var(--color-border);

		&:hover {
			background-color: var(--color-bg-elevated);
			color: var(--color-primary-hover);
		}
	}
	.prevnext__sign {
		color: var(--color-text-secondary);
		font-weight: 300;
		font-size: var(--font-size-xs);
	}
	.prevnext__title {
		font-weight: 500;
	}
	.next {
		align-items: flex-end;
	}
</style>
