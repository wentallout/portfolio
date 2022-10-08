<script>
	export let data;

	let categories = [];

	// Extract unique categories from data

	data.blogs.forEach((blog) => {
		if (blog.meta.categories.length) {
			blog.meta.categories.forEach((category) => {
				if (!categories.includes(category)) {
					categories.push(category);
				}
			});
		}
	});

	categories.sort();
</script>

<div class="category">
	{#each categories as category}
		<a class="category__link" href="/blog/category/{category}">{category}</a>
	{/each}
</div>

<style>
	.category {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
	}
	.category__link {
		padding: var(--space-xs);
		border-radius: var(--border-radius);
		width: fit-content;
		background-color: var(--neutral-200);

		border: 1px solid transparent;
		color: var(--accent-500);
	}

	.category__link:hover {
		border: 1px solid var(--accent-500);
		color: var(--accent-300);
	}
</style>
