<script>
	import BlogTag from '$lib/components/Common/BlogTag.svelte';
	import End from '$lib/components/Common/End.svelte';
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
				<a class="blog-tag" href="/blog/category/{category}">
					<BlogTag>
						{category}
					</BlogTag>
				</a>
			{/each}
		</div>
	{/if}

	<svelte:component this={data.content} />

	<End />
</article>

<style>
	.blog-tag:after {
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
