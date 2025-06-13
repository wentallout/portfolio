<script>
	import Comments from '$components/blogs/BlogComments.svelte';
	import PostContainer from '$components/blogs/BlogContainer.svelte';
	import PostInfo from '$components/blogs/BlogInfo.svelte';
	import BlogPrevNext from '$components/blogs/BlogPrevNext.svelte';
	import SEO from '$components/seo/SEO.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<SEO path={`/blogs/${data.slug}`} title={data.title} />

<article>
	<PostInfo {data} hasCategory="true" />

	<PostContainer>
		<data.content />
	</PostContainer>
	<BlogPrevNext prev={data.prevBlog} next={data.nextBlog} />
	<Comments category="Blogs" />
</article>
