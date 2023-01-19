<script>
	import BlogListContainer from '$lib/components/Blog/BlogListContainer.svelte';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import TextAa from '~icons/ph/text-aa';
	import Smiley from '~icons/ph/smiley';
	import GraduationCap from '~icons/ph/graduation-cap';
	import Lightbulb from '~icons/ph/lightbulb';
	import Palette from '~icons/ph/palette';
	import Gift from '~icons/ph/gift';
	import FastForward from '~icons/ph/fast-forward';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import { Tabs, TabList, TabPanel, Tab } from '$lib/components/Tabs/tabs.js';
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<PageTitle pageTitle="Blog" />

<Tabs>
	<TabList>
		<Tab>Fundamental</Tab>
		<Tab>Tips</Tab>
		<Tab>UX</Tab>
		<Tab>Color</Tab>
		<Tab>Typography</Tab>
		<Tab>Freebies</Tab>
	</TabList>

	<TabPanel>
		<section>
			<SectionTitle sectionTitle="Fundamental" let:sectionIcon>
				<GraduationCap {...sectionIcon} />
			</SectionTitle>

			<BlogListContainer>
				{#each data.blogs as blog}
					{#if blog.meta.categories.length}
						{#if blog.meta.categories.includes('fundamental')}
							<BlogCard
								blogTitle={blog.meta.title}
								blogLink={blog.path}
								blogDate={blog.meta.date} />
						{/if}
					{/if}
				{/each}
			</BlogListContainer>
		</section>
	</TabPanel>

	<TabPanel>
		<section>
			<SectionTitle sectionTitle="Tips" let:sectionIcon>
				<Lightbulb {...sectionIcon} />
			</SectionTitle>

			<BlogListContainer>
				{#each data.blogs as blog}
					{#if blog.meta.categories.length}
						{#if blog.meta.categories.includes('tips')}
							<BlogCard
								blogTitle={blog.meta.title}
								blogLink={blog.path}
								blogDate={blog.meta.date} />
						{/if}
					{/if}
				{/each}
			</BlogListContainer>
		</section>
	</TabPanel>

	<TabPanel>
		<section>
			<SectionTitle sectionTitle="UX" let:sectionIcon>
				<Smiley {...sectionIcon} />
			</SectionTitle>

			<BlogListContainer>
				{#each data.blogs as blog}
					{#if blog.meta.categories.length}
						{#if blog.meta.categories.includes('ux')}
							<BlogCard
								blogTitle={blog.meta.title}
								blogLink={blog.path}
								blogDate={blog.meta.date} />
						{/if}
					{/if}
				{/each}
			</BlogListContainer>
		</section>
	</TabPanel>

	<TabPanel>
		<section>
			<SectionTitle sectionTitle="Color" let:sectionIcon>
				<Palette {...sectionIcon} />
			</SectionTitle>

			<BlogListContainer>
				{#each data.blogs as blog}
					{#if blog.meta.categories.length}
						{#if blog.meta.categories.includes('color')}
							<BlogCard
								blogTitle={blog.meta.title}
								blogLink={blog.path}
								blogDate={blog.meta.date} />
						{/if}
					{/if}
				{/each}
			</BlogListContainer>
		</section>
	</TabPanel>

	<TabPanel>
		<section>
			<SectionTitle sectionTitle="Typography" let:sectionIcon>
				<TextAa {...sectionIcon} />
			</SectionTitle>

			<BlogListContainer>
				{#each data.blogs as blog}
					{#if blog.meta.categories.length}
						{#if blog.meta.categories.includes('typography')}
							<BlogCard
								blogTitle={blog.meta.title}
								blogLink={blog.path}
								blogDate={blog.meta.date} />
						{/if}
					{/if}
				{/each}
			</BlogListContainer>
		</section>
	</TabPanel>

	<TabPanel>
		<section>
			<SectionTitle sectionTitle="Freebies" let:sectionIcon>
				<Gift {...sectionIcon} />
			</SectionTitle>

			<BlogListContainer>
				{#each data.blogs as blog}
					{#if blog.meta.categories.length}
						{#if blog.meta.categories.includes('freebies')}
							<BlogCard
								blogTitle={blog.meta.title}
								blogLink={blog.path}
								blogDate={blog.meta.date} />
						{/if}
					{/if}
				{/each}
			</BlogListContainer>
		</section>
	</TabPanel>
</Tabs>

<style>
</style>
