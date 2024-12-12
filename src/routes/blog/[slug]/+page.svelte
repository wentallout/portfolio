<script>
	import Comments from '$components/blog/BlogComments.svelte';
	import PostContainer from '$components/blog/BlogContainer.svelte';
	import PostInfo from '$components/blog/BlogInfo.svelte';
	import BlogPrevNext from '$components/blog/BlogPrevNext.svelte';
	import SEO from '$components/seo/SEO.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<SEO title={data.title} />

<article>
	<PostInfo {data} hasCategory="true" />

	<PostContainer>
		<data.content />
	</PostContainer>
	<BlogPrevNext />
	<Comments category="Blogs" />
</article>
