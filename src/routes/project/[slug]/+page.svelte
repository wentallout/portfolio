<script>
	import End from '$lib/components/Common/End.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="xl-text project-title">{data.title}</h1>
	<p class="small-text project-date">Project created: {data.date}</p>
	<svelte:component this={data.content} />
	<End />
</article>

<style>
	.info {
		display: block;
	}

	.project-title {
		text-transform: capitalize;
	}

	.project-date {
		display: block;
		font-weight: 300;
		color: var(--neutral-800);
	}
</style>
