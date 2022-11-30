<script>
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';

	import TextAa from '~icons/ph/text-aa';

	import GraduationCap from '~icons/ph/graduation-cap';

	import Brain from '~icons/ph/brain';

	import Lightbulb from '~icons/ph/lightbulb';

	import Palette from '~icons/ph/palette';

	import FastForward from '~icons/ph/fast-forward';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';

	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTitle pageTitle="Blog" />
<section>
	<SectionTitle sectionTitle="Fundamental" let:sectionIcon>
		<GraduationCap {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		{#each data.blogs as blog}
			{#if blog.meta.categories.length}
				{#if blog.meta.categories.includes('fundamental')}
					<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
				{/if}
			{/if}
		{/each}
	</BlogListContainer>
</section>

<section>
	<SectionTitle sectionTitle="UX" let:sectionIcon>
		<Brain {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		{#each data.blogs as blog}
			{#if blog.meta.categories.length}
				{#if blog.meta.categories.includes('ux')}
					<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
				{/if}
			{/if}
		{/each}
	</BlogListContainer>
</section>

<section>
	<SectionTitle sectionTitle="Typography" let:sectionIcon>
		<TextAa {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		{#each data.blogs as blog}
			{#if blog.meta.categories.length}
				{#if blog.meta.categories.includes('typography')}
					<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
				{/if}
			{/if}
		{/each}
	</BlogListContainer>
</section>

<section>
	<SectionTitle sectionTitle="Time Saver" let:sectionIcon>
		<FastForward {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		{#each data.blogs as blog}
			{#if blog.meta.categories.length}
				{#if blog.meta.categories.includes('tool')}
					<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
				{/if}
			{/if}
		{/each}
	</BlogListContainer>
</section>

<section>
	<SectionTitle sectionTitle="Tips" let:sectionIcon>
		<Lightbulb {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		{#each data.blogs as blog}
			{#if blog.meta.categories.length}
				{#if blog.meta.categories.includes('tips')}
					<BlogCard blogTitle={blog.meta.title} blogLink={blog.path} blogDate={blog.meta.date} />
				{/if}
			{/if}
		{/each}
	</BlogListContainer>
</section>

<style>
</style>
