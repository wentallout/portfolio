<script>
	import Tag from '$components/common/Tag.svelte';
	import { SvelteSet } from 'svelte/reactivity';

	let { data } = $props();

	const categories = $derived(new SvelteSet(data.blogs.map((blog) => blog.meta.categories).flat()));

	const uniqueCategories = $derived(Array.from(categories).sort((a, b) => a.localeCompare(b)));
</script>

<div class="flex flex-wrap gap-2 text-sm font-sans">
	{#each uniqueCategories as category (category)}
		<a href="/blogs/category/{category}">
			<Tag>
				{category}
			</Tag>
		</a>
	{/each}
</div>
