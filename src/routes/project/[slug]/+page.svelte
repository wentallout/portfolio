<script>
	import ContentContainer from '$lib/components/Common/ContentContainer.svelte';

	export let data;
	import Time from 'svelte-time';
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="rainbow">{data.title}</h1>
	<div class="small-text project-date">Updated: <Time relative timestamp={data.date} /></div>
	<ContentContainer>
		<svelte:component this={data.content} />
	</ContentContainer>
</article>

<style>
	.info {
		display: block;
	}

	.project-date {
		display: block;
		font-weight: 300;
		color: var(--text-color-low);
	}
</style>
