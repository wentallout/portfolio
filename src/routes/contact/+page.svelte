<script>
	import SocialLinks from '$lib/components/Contact/SocialLinks.svelte';
	import ContactForm from '$lib/components/Contact/ContactForm.svelte';

	// ---SEO---
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
		metadescription: 'Get in touch with Khoa - Vietnamese UI/UX Designer',
		slug: 'contact',
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100'
	};
	// ---SEO END---
</script>

<SEO {...seoProps} />

<div class="container">
	<section>
		<ContactForm />
	</section>

	<section>
		<SocialLinks />
	</section>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	section {
		margin-bottom: var(--space-2xl);
	}
</style>
