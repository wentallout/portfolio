<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let prevBlog: { path: string; meta: { title: string } } | null = null;
	let nextBlog: { path: string; meta: { title: string } } | null = null;

	onMount(() => {
		let unsubscribe: () => void;

		fetch('/api/blog')
			.then((response) => response.json())
			.then((blogs) => {
				unsubscribe = page.subscribe((value) => {
					const currentIndex = blogs.findIndex((blog) => blog.path === value.url.pathname);

					if (currentIndex > 0) {
						prevBlog = {
							path: blogs[currentIndex - 1].path,
							meta: { title: blogs[currentIndex - 1].meta.title }
						};
					}

					if (currentIndex < blogs.length - 1) {
						nextBlog = {
							path: blogs[currentIndex + 1].path,
							meta: { title: blogs[currentIndex + 1].meta.title }
						};
					}
				});
			});

		return () => {
			if (unsubscribe) unsubscribe();
		};
	});
</script>

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
		padding: var(--space-xs) var(--space-small);
		transition: var(--transition);
		display: flex;
		gap: var(--space-small);
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
