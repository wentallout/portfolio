<script>
	import PageTitle from '$components/common/PageTitle.svelte';
	import ContactForm from '$components/contact/ContactForm.svelte';
	import SEO from '$components/seo/SEO.svelte';

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

	const seoProps = {
		breadcrumbs,
		metadescription: 'Get in touch with Khoa.',
		slug: 'contact',
		title: 'Contact'
	};
</script>

<SEO {...seoProps} />

<PageTitle pageTitle="Contact" />

<ContactForm />
