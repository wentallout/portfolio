<script>
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';

	import TextAa from '~icons/ph/text-aa';
	import Brain from '~icons/ph/brain';
	import Palette from '~icons/ph/palette';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<SectionTitle sectionTitle="Typography" let:sectionIcon>
	<TextAa {...sectionIcon} />
</SectionTitle>

<BlogListContainer>
	<BlogCard
		blogTitle="How to pick the perfect type scale for your next design"
		blogLink="/blog/typescale"
		blogDate="20/9/2022" />
</BlogListContainer>

<!-- <SectionTitle sectionTitle="Color" let:sectionIcon>
	<Palette {...sectionIcon} />
</SectionTitle>

<BlogListContainer>
	<BlogCard blogTitle="wip" blogLink="/" blogDate="wip" />
	<BlogCard blogTitle="wip" blogLink="/" blogDate="wip" />
</BlogListContainer> -->

<SectionTitle sectionTitle="Tips" let:sectionIcon>
	<Brain {...sectionIcon} />
</SectionTitle>

<BlogListContainer>
	<BlogCard
		blogTitle="UX Portfolio DOs and DONTs"
		blogLink="/blog/ux-portfolio"
		blogDate="22/09/2022" />
</BlogListContainer>
