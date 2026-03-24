<script>
	import Tag from '$components/common/Tag.svelte';

	let { data } = $props();

	const categories = $derived(new Set(data.blogs.map((blog) => blog.meta.categories).flat()));

	const uniqueCategories = $derived(Array.from(categories).sort((a, b) => a.localeCompare(b)));
</script>

<div class="category">
	{#each uniqueCategories as category}
		<a href="/blogs/category/{category}">
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
