<script>
	import Comments from '$components/blog/BlogComments.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import PostContainer from '$components/blog/BlogContainer.svelte';
	import PostInfo from '$components/blog/BlogInfo.svelte';
	import BlogPrevNext from '$components/blog/BlogPrevNext.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<SEO title={data.title} />

<article>
	<PostInfo hasCategory="true" {data} />

	<PostContainer>
		<data.content />
	</PostContainer>
	<BlogPrevNext />
	<Comments category="Blogs" />
</article>
