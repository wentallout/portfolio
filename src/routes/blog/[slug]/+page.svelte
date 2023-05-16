<script>
	import Comments from '$components/Blog/Comments.svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import PostContainer from '$components/Common/PostContainer.svelte';
	import PostInfo from '$components/Blog/PostInfo.svelte';
	export let data;
</script>

<SEO title={data.title} />

<article>
	<PostInfo hasCategory="true" {data} />

	<PostContainer>
		<svelte:component this={data.content} />
	</PostContainer>

	<Comments category="Blogs" />
</article>
