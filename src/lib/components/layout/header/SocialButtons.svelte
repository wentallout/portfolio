<script>
	import ExLink from '$components/common/ExLink.svelte';
	import {
		EnvelopeSimple,
		GitHubLogo,
		InstagramLogo,
		LinkedinLogo,
		Phone
	} from '$lib/assets/icons/icons';

	let { style = '' } = $props();
</script>

<div {style} class="social-links">
	<ExLink ariaLabel="phone number" href="tel:+84929066331">
		<Phone class="icon" color="var(--color-text)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="email" href="mailto:wentallout@gmail.com">
		<EnvelopeSimple class="icon" color="var(--color-text)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="linkedin" href="https://www.linkedin.com/in/wentallout">
		<LinkedinLogo class="icon" color="var(--color-text)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="instagram" href="https://www.instagram.com/wentallout">
		<InstagramLogo class="icon" color="var(--color-text)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="github" href="https://github.com/wentallout">
		<GitHubLogo class="icon" color="var(--color-text)" height="32" width="32" />
	</ExLink>
</div>

<style>
	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-small);
		flex-direction: row;
	}
</style>
