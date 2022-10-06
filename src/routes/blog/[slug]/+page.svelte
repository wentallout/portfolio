<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="large-text">{data.title}</h1>
	<span class="small-text date">Published: {data.date}</span>
	<svelte:component this={data.content} />
</article>

<style>
	.info {
		display: block;
	}

	.date {
		display: block;
		font-weight: 300;
	}
</style>
