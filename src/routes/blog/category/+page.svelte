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
		width: fit-content;
		background-color: var(--bg);

		color: var(--accent-500);
		transition: var(--transition);
		border-radius: var(--border-radius-light);
	}

	.category__link:hover {
		color: var(--accent-300);
		background-color: var(--neutral-900);
		text-decoration: underline;
	}
</style>
