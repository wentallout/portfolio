<script>
	import Comments from '$lib/components/Comments/Comments.svelte';
	import SEO from '$components/SEO/SEO.svelte';
	import PostContainer from '$components/Common/PostContainer.svelte';
	import PostInfo from '$components/Blog/PostInfo.svelte';
	export let data;
	import PrevNextBlog from '$components/Blog/PrevNextBlog.svelte';
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
