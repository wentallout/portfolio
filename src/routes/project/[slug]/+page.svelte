<script>
	import Toc from '$lib/components/Common/Toc.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<article class="info">
	<h1 class="large-text">{data.title}</h1>
	<span class="small-text date">Published: {data.date}</span>
	<Toc />
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
