<script>
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';

	import TextAa from '~icons/ph/text-aa';
	import Brain from '~icons/ph/brain';

	import Lightbulb from '~icons/ph/lightbulb';

	import Palette from '~icons/ph/palette';
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<section>
	<SectionTitle sectionTitle="Typography" let:sectionIcon>
		<TextAa {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		<BlogCard
			blogTitle="How to pick the perfect type scale for your next design"
			blogLink="/blog/typescale"
			blogDate="2022"
		/>

		<BlogCard
			blogTitle="Typography best patterns"
			blogLink="/blog/typography-best-patterns"
			blogDate="2022"
		/>
	</BlogListContainer>
</section>

<section>
	<SectionTitle sectionTitle="Tips" let:sectionIcon>
		<Lightbulb {...sectionIcon} />
	</SectionTitle>

	<BlogListContainer>
		<BlogCard
			blogTitle="UX Portfolio DOs and DONTs"
			blogLink="/blog/ux-portfolio"
			blogDate="2022"
		/>

		<BlogCard blogTitle="Understand UX vs UI" blogLink="/blog/ux-vs-ui" blogDate="2022" />
	</BlogListContainer>
</section>

<!-- <SectionTitle sectionTitle="Color" let:sectionIcon>
	<Palette {...sectionIcon} />
</SectionTitle>

<BlogListContainer>
	<BlogCard blogTitle="wip" blogLink="/" blogDate="wip" />
	<BlogCard blogTitle="wip" blogLink="/" blogDate="wip" />
</BlogListContainer> -->
<style>
	section {
		margin-bottom: var(--space-2xl);
	}
</style>
