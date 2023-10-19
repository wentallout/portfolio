<script>
	import PageTitle from '$components/Common/PageTitle.svelte';
	import SocialLinks from '$components/Contact/SocialLinks.svelte';
	import ContactForm from '$components/Contact/ContactForm.svelte';

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
	import SEO from '$components/SEO/SEO.svelte';

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

<SocialLinks />
