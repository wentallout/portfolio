<script lang="ts">
	import ContactForm from '#lib/components/contact/ContactForm.svelte';
	import Breadcrumb from '#lib/components/other/Breadcrumb.svelte';
	import SEO from '#lib/components/seo/SEO.svelte';
	import { META_DESCRIPTIONS, PAGE_TITLES } from '#lib/constants/labels.js';

	const breadcrumbs = [
		{
			name: PAGE_TITLES.home,
			slug: ''
		},
		{
			name: PAGE_TITLES.contact,
			slug: 'contact'
		}
	];

	const seoProps = {
		breadcrumbs,
		metadescription: META_DESCRIPTIONS.contact,
		slug: 'contact',
		title: PAGE_TITLES.contact
	};
</script>

<SEO {...seoProps} />

<div class="flex flex-col gap-10 md:gap-16 w-full">
	<div class="px-6 py-4 border border-border bg-background">
		<Breadcrumb minDepth={1} />
	</div>
	<ContactForm as="h1" />
</div>
