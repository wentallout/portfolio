<script>
	import Tag from '$components/common/Tag.svelte';

	let { data } = $props();

	const categories = new Set(data.blogs.map((blog) => blog.meta.categories).flat());

	let uniqueCategories = Array.from(categories).sort((a, b) => a.localeCompare(b));
</script>

<div class="category">
	{#each uniqueCategories as category}
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
		gap: var(--space-xs);
		margin-bottom: var(--space-mid);
	}
</style>
