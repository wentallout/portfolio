<script lang="ts">
	import Comments from '#lib/components/blogs/BlogComments.svelte';
	import PostContainer from '#lib/components/blogs/BlogContainer.svelte';
	import PostInfo from '#lib/components/blogs/BlogInfo.svelte';
	import SEO from '#lib/components/seo/SEO.svelte';
	import { defaultAlt, siteUrl } from '#lib/constants/personal.js';
	/** @type {{data: any}} */
	let { data } = $props();
	const ogUrl = `${siteUrl}/projects/${data.slug}/og.png`;
</script>

<SEO
	path={`/projects/${data.slug}`}
	title={data.title}
	metadescription={data.seoDescription ?? ''}
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
		{ title: 'Projects', url: '/projects' },
		{ title: data.title, url: `/projects/${data.slug}` }
	]}
/>

<article class="w-full bg-background relative">
	<PostInfo {data} />

	<PostContainer>
		{@html data.contentHtml}
		{#if data.repoUrl || data.demoUrl || data.techStack?.length}
			<div class="mt-8 border-t pt-6 space-y-2">
				{#if data.techStack?.length}<p class="text-sm text-muted-foreground">Stack: {data.techStack.join(' · ')}</p>{/if}
				<div class="flex gap-3 text-sm">
					{#if data.repoUrl}<a href={data.repoUrl} target="_blank" class="underline">Repo ↗</a>{/if}
					{#if data.demoUrl}<a href={data.demoUrl} target="_blank" class="underline">Live demo ↗</a>{/if}
				</div>
			</div>
		{/if}
	</PostContainer>

	<Comments category="Projects" />
</article>
