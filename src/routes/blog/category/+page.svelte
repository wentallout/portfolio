<script>
	import BlogTag from '$lib/components/Common/BlogTag.svelte';
	export let data;
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import Folder from '~icons/ph/folder';

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

	categories.sort();
</script>

<SectionTitle sectionTitle="Category" let:sectionIcon>
	<Folder {...sectionIcon} />
</SectionTitle>

<div class="category">
	{#each categories as category}
		<a href="/blog/category/{category}">
			<BlogTag>
				{category}
			</BlogTag>
		</a>
	{/each}
</div>

<style>
	.category {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);
	}
</style>
