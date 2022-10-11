<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="xl-text">{data.title}</h1>
	<p class="small-text date">Published: {data.date} by Nguyen Dang Khoa</p>

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
</article>

<style>
	.info {
		display: block;
	}

	.date {
		display: block;
		font-weight: 300;
		color: var(--neutral-700);
		margin: 0;
	}

	.category {
		font-weight: 300;
		color: var(--neutral-700);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		gap: var(--space-s);
	}

	.category__link {
		display: inline-block;
	}
</style>
