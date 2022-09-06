<script>
	export let article = false;
	export let author;
	export let twitterUsername;
	export let image;
	export let timeToRead = 0;

	/*
	 * When there is an equivalent og tag present, Twitter takes that so check OpenGraph before
	 * adding additional tags, unless you want to override OpenGraph.
	 */
</script>

<svelte:head>
	<meta property="twitter:title" content="Portfolio - Nguyen Dang Khoa" />
	{#if image}
		<meta property="twitter:image" content={image.url} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />

	{#if twitterUsername}
		<meta name="twitter:creator" content={`@${twitterUsername}`} />
		<meta name="twitter:site" content={`@${twitterUsername}`} />
	{/if}
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content={author} />
	{#if article && timeToRead > 0}
		<meta name="twitter:label2" content="Est. reading time" />
		<meta name="twitter:data2" content={timeToRead !== 1 ? `${timeToRead} minutes` : '1 minute'} />
	{/if}
</svelte:head>
