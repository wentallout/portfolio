<script>
	import Toc from '$lib/components/Common/Toc.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="xl-text project-name">{data.title}</h1>
	<p class="small-text project-date">Published: {data.date} by Nguyen Dang Khoa</p>
	<Toc />
	<svelte:component this={data.content} />
</article>

<style>
	.info {
		display: block;
	}

	.project-date {
		display: block;
		font-weight: 300;
		color: var(--neutral-700);
	}
</style>
