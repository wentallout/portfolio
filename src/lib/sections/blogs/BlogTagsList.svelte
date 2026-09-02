<script lang="ts">
	import Tag from '#lib/components/common/Tag.svelte';
	import { SvelteSet } from 'svelte/reactivity';

	let { data } = $props();

	const tags = $derived(
		new SvelteSet(
			data.blogs
				.map((blog: { meta: { tags?: string[]; categories?: string[] } }) =>
					blog.meta.tags ?? blog.meta.categories ?? []
				)
				.flat()
				.filter(Boolean)
		)
	);

	const uniqueTags = $derived(Array.from(tags).sort((a, b) => a.localeCompare(b)));
</script>

<div class="flex flex-wrap gap-2 text-sm font-sans">
	{#each uniqueTags as tag (tag)}
		<a href="/blogs/tags/{tag}">
			<Tag>
				{tag}
			</Tag>
		</a>
	{/each}
</div>
