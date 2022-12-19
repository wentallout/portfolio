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
	<h1 class="xl-text project-title rainbow">{data.title}</h1>
	<p class="small-text project-date">Updated: <Time relative timestamp={data.date} /></p>
	<svelte:component this={data.content} />
	<End />
</article>

<style>
	.info {
		display: block;
	}

	.project-title {
		text-transform: capitalize;
		color: var(--brand-color);
	}

	.project-date {
		display: block;
		font-weight: 300;
		color: var(--text-low);
	}
</style>
