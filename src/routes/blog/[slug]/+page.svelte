<script>
	import ContentContainer from '$lib/components/Common/ContentContainer.svelte';
	import Tag from '$lib/components/Common/Tag.svelte';
	export let data;
	import Time from 'svelte-time';
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="rainbow">{data.title}</h1>
	<div class="date small-text">Published: <Time relative timestamp={data.date} /></div>

	{#if data.categories.length}
		<div class="category">
			<div class="category__title">Categories:</div>
			{#each data.categories as category}
				<a class="content-tag" href="/blog/category/{category}">
					<Tag>
						{category}
					</Tag>
				</a>
			{/each}
		</div>
	{/if}

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
	.category__title {
		display: inline;
		color: var(--text-color-low);
	}
	.category {
		color: var(--text-color-low);

		gap: var(--space-xs);
		margin: 0;
	}
</style>
