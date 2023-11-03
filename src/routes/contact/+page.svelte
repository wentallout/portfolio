<script>
	import PageTitle from '$components/common/PageTitle.svelte';

	import ContactForm from '$components/contact/ContactForm.svelte';

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Contact',
			slug: 'contact'
		}
	];
	import SEO from '$components/seo/SEO.svelte';

	const seoProps = {
		breadcrumbs,
		title: 'Contact',
		metadescription: 'Get in touch with Khoa.',
		slug: 'contact'
	};
</script>

<SEO {...seoProps} />

<PageTitle pageTitle="Contact" />

<ContactForm />
