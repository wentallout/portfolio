<script>
	import Line from '$components/Common/Line.svelte';
	import PostContainer from '$components/Common/PostContainer.svelte';

	export let data;
	import Time from 'svelte-time';
	import SEO from '$components/SEO/SEO.svelte';
	import Comments from '$components/Blog/Comments.svelte';
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
		color: var(--colorTextSecondary);
	}
</style>
