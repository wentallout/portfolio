<script>
	import Line from '$lib/components/Common/Line.svelte';
	import PostContainer from '$lib/components/Common/PostContainer.svelte';

	export let data;
	import Time from 'svelte-time';
	import SEO from '$lib/components/SEO/SEO.svelte';
	import Comments from '$lib/components/Blog/Comments.svelte';
</script>

<SEO title={data.title} />

<article class="info">
	<div class="small-text project-date">Updated: <Time relative timestamp={data.date} /></div>
	<h1>{data.title}</h1>
	<Line />
	<PostContainer>
		<svelte:component this={data.content} />
	</PostContainer>

	<Comments category="Projects" />
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
