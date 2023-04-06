<script>
	import SEO from '$lib/components/SEO/SEO.svelte';
	import Line from '$lib/components/Common/Line.svelte';
	import ContentContainer from '$lib/components/Common/ContentContainer.svelte';
	import Tag from '$lib/components/Common/Tag.svelte';
	export let data;
	import Time from 'svelte-time';
</script>

<SEO title={data.title} />

<article class="info">
	{#if data.categories.length}
		<div class="category">
			{#each data.categories as category}
				<a class="content-tag" href="/blog/category/{category}">
					<Tag>
						{category}
					</Tag>
				</a>
			{/each}
		</div>
	{/if}
	<div class="date small-text">Published: <Time relative timestamp={data.date} /></div>
	<h1>{data.title}</h1>

	<Line />

	<ContentContainer>
		<svelte:component this={data.content} />
	</ContentContainer>
</article>

<style>
	.content-tag:after {
		content: none !important;
	}

	.info {
		display: block;
	}

	.date {
		display: block;
		margin: 0;
		color: var(--text-color-low);
	}

	.category {
		color: var(--text-color-low);
		gap: var(--space-xs);
		margin: 0;
		margin-bottom: var(--space-s);
	}
</style>
