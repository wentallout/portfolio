<script>
	import ContactForm from '$components/contact/ContactForm.svelte';
	import Breadcrumb from '$components/other/Breadcrumb.svelte';
	import SEO from '$components/seo/SEO.svelte';
	import { META_DESCRIPTIONS, PAGE_TITLES } from '$lib/constants/labels';

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

<div class="w-full bg-background relative">
	<div class="px-6 py-4 border-grid-b bg-background">
		<Breadcrumb minDepth={1} />
	</div>
	<ContactForm />
</div>
