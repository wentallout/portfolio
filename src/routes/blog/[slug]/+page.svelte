<script>
	import End from '$lib/components/Common/End.svelte';
	export let data;
	import Time from 'svelte-time';
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="xl-text">{data.title}</h1>
	<p class="date xs-text">Published: <Time relative timestamp={data.date} /></p>

	{#if data.categories.length}
		<div class="category">
			<div class="category__title">Categories:</div>
			{#each data.categories as category}
				<a class="category__link" href="/blog/category/{category}">
					{category}
				</a>
			{/each}
		</div>
	{/if}

	<svelte:component this={data.content} />

	<End />
</article>

<style>
	.info {
		display: block;
	}

	.date {
		display: block;
		margin: 0;
		color: var(--text-low);
	}
	.category__title {
		display: inline;
		color: var(--text-low);
	}
	.category {
		color: var(--text-low);

		gap: var(--space-xs);
		margin: 0;
	}
</style>
