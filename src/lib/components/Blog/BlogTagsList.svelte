<script>
	export let data;
	import Tag from '$components/Common/Tag.svelte';

	const categories = new Set(data.blogs.flatMap((blog) => blog.meta.categories));

	let uniqueCategories = Array.from(categories);
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
		gap: var(--spaceSmall);
		margin-bottom: var(--spaceM);
	}
</style>
