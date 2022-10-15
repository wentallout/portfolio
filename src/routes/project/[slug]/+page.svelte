<script>
	import Comment from './../../../lib/components/Common/Comment.svelte';

	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>

<article class="info">
	<h1 class="xl-text">{data.title}</h1>
	<p class="small-text project-date">Published: {data.date} by Nguyen Dang Khoa</p>

	<svelte:component this={data.content} />
</article>

<Comment />

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
