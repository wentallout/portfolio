<script>
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
		background-color: var(--bg);
		box-shadow: var(--box-shadow);
		border: 1px solid transparent;
		color: var(--accent-500);
		transition: 0.3s;
	}

	.category__link:hover {
		border: 1px solid var(--accent-500);
		box-shadow: var(--box-shadow-hover);
		text-decoration: underline;
	}
</style>
