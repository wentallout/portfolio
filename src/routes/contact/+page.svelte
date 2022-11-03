<script>
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
		metadescription: 'Get in touch with Khoa - UI/UX Designer from Ho Chi Minh City',
		slug: 'contact',
		datePublished: '2077-07-07T14:19:33.000+0100',
		lastUpdated: '2077-07-07T14:19:33.000+0100'
	};
	// ---SEO END---
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<SEO {...seoProps} />

<ContactForm />

<SocialLinks />
