<script>
	export let data;
	import Tag from '$lib/components/Common/Tag.svelte';

	let categories = [];

	data.blogs.forEach((blog) => {
		if (blog.meta.categories.length) {
			blog.meta.categories.forEach((category) => {
				if (!categories.includes(category)) {
					categories.push(category);
				}
			});
		}
	});
</script>

<div class="category">
	{#each categories as category}
		<a href="/blog/category/{category}">
			<Tag>
				{category}
			</Tag>
		</a>
	{/each}
</div>

<style>
	.category {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
		margin-bottom: var(--space-m);
	}
</style>
