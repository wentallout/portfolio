<script>
	import Comments from '$components/blog/BlogComments.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import PostContainer from '$components/blog/BlogContainer.svelte';
	import PostInfo from '$components/blog/BlogInfo.svelte';
	export let data;
	import PrevNextBlog from '$components/blog/BlogPrevNext.svelte';
</script>

<SEO title={data.title} />

<article>
	<PostInfo hasCategory="true" {data} />

	<PostContainer>
		<svelte:component this={data.content} />
	</PostContainer>
	<PrevNextBlog />
	<Comments category="Blogs" />
</article>
