<script>
	import Phone from '~icons/ph/phone';
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Envelope from '~icons/ph/envelope';

	import LinkedinLogo from '~icons/ph/linkedin-logo';
</script>

<div class="social-links">
	<ExLink href="https://www.linkedin.com/in/wentallout/">
		<LinkedinLogo class="icon" height="32" width="32" color="var(--text-color)" />
	</ExLink>
	<ExLink href="tel:+84929066331">
		<Phone class="icon" height="32" width="32" color="var(--text-color)" />
	</ExLink>
	<ExLink href="mailto:wentallout@gmail.com">
		<Envelope class="icon" height="32" width="32" color="var(--text-color)" />
	</ExLink>
</div>

<style>
	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-s);
		flex-direction: row;
		/* z-index: 1; */
	}
</style>
