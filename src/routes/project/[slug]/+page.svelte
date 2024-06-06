<script>
	import PostContainer from '$components/blog/BlogContainer.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import Comments from '$components/blog/BlogComments.svelte';
	import PostInfo from '$components/blog/BlogInfo.svelte';
	export let data;
</script>

<SEO title={data.title} />

<article>
	<PostInfo {data} />

	<PostContainer>
		<svelte:component this={data.content} />
	</PostContainer>

	<Comments category="Projects" />
</article>
