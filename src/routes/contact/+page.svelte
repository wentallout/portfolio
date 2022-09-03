<script>
	import SocialLinks from '$lib/components/Contact/SocialLinks.svelte';

	import ContactForm from '$lib/components/Contact/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="container">
	<ContactForm />
	<SocialLinks />
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}
</style>
