<script>
	import PostContainer from '$components/common/PostContainer.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import Comments from '$components/comments/Comments.svelte';
	import PostInfo from '$components/blog/PostInfo.svelte';
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
