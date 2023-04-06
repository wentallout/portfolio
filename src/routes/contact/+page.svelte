<script>
	import Faq from '$lib/components/Contact/Faq.svelte';
	import PageTitle from '$lib/components/Common/PageTitle.svelte';
	import SocialLinks from '$lib/components/Contact/SocialLinks.svelte';
	import ContactForm from '$lib/components/Contact/ContactForm.svelte';

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
	import SEO from '$lib/components/SEO/SEO.svelte';

	const seoProps = {
		breadcrumbs,
		title: 'Contact',
		metadescription: 'Get in touch with Khoa.',
		slug: 'contact'
	};
</script>

<SEO {...seoProps} />

<PageTitle pageTitle="Contact" decoImageUrl="/images/contact.svg" />

<ContactForm />

<SocialLinks />

<Faq />
