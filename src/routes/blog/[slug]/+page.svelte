<script>
	import End from '$lib/components/Common/End.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="xl-text">{data.title}</h1>
	<p class="date xs-text">Published: {data.date}</p>

	{#if data.categories.length}
		<div class="category">
			<div>Categories:</div>
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
		font-weight: 300;
		color: var(--neutral-800);
		margin: 0;
	}

	.category {
		font-weight: 300;
		color: var(--neutral-800);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		gap: var(--space-xs);
	}

	.category__link {
		display: inline;
		font-weight: 300 !important;
		color: var(--accent-600);
	}
</style>
