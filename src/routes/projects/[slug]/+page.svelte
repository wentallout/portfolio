<script>
	import Comments from '$components/blogs/BlogComments.svelte';
	import PostContainer from '$components/blogs/BlogContainer.svelte';
	import PostInfo from '$components/blogs/BlogInfo.svelte';
	import SEO from '$components/seo/SEO.svelte';
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<SEO title={data.title} />

<article>
	<PostInfo {data} />

	<PostContainer>
		<data.content />
	</PostContainer>

	<Comments category="Projects" />
</article>
