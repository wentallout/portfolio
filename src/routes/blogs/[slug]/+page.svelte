<script lang="ts">
	import Comments from '#lib/components/blogs/BlogComments.svelte';
	import PostContainer from '#lib/components/blogs/BlogContainer.svelte';
	import PostInfo from '#lib/components/blogs/BlogInfo.svelte';
	import SEO from '#lib/components/seo/SEO.svelte';
	import { getPostBySlug } from '#lib/remotes/blogs.remote.js';
	import { page } from '$app/state';
	import { defaultAlt, siteUrl } from '#lib/constants/personal.js';

	let { params } = $props();
	const data = await getPostBySlug({ slug: params.slug, preview: page.url.searchParams.get('preview') });
	const seoDesc = data.seoDescription ?? (data as any).excerpt ?? '';
	const ogUrl = `${siteUrl}/blogs/${data.slug}/og.png`;
</script>

<SEO
	path={`/blogs/${data.slug}`}
	title={data.title}
	metadescription={seoDesc}
	article={true}
	datePublished={data.publishedAt ?? data.date}
	lastUpdated={data.updatedAt ?? data.date}
	timeToRead={data.readingTime ?? 0}
	ogImage={{ url: ogUrl, alt: data.title }}
	ogSquareImage={{ url: ogUrl, alt: defaultAlt }}
	twitterImage={{ url: ogUrl, alt: data.title }}
	featuredImage={{ url: ogUrl, caption: data.title, width: 1200, height: 630 }}
	breadcrumbs={[
		{ title: 'Home', url: '/' },
		{ title: 'Blogs', url: '/blogs' },
		{ title: data.title, url: `/blogs/${data.slug}` }
	]}
/>

<article class="w-full bg-background relative">
	<PostInfo {data} hasTags={true} />

	<PostContainer>
		{@html data.contentHtml}
	</PostContainer>

	<Comments category="Blogs" />
</article>
