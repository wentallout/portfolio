<script>
	import ExLink from '$components/common/ExLink.svelte';

	import {
		LinkedinLogo,
		Phone,
		InstagramLogo,
		GitHubLogo,
		EnvelopeSimple
	} from '$lib/assets/icons/icons';
	/** @type {{style?: string}} */
	let { style = '' } = $props();
</script>

<div {style} class="social-links">
	<ExLink ariaLabel="phone number" href="tel:+84929066331">
		<Phone class="icon" color="var(--colorText)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="email" href="mailto:wentallout@gmail.com">
		<EnvelopeSimple class="icon" color="var(--colorText)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="linkedin" href="https://www.linkedin.com/in/wentallout">
		<LinkedinLogo class="icon" color="var(--colorText)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="instagram" href="https://www.instagram.com/wentallout">
		<InstagramLogo class="icon" color="var(--colorText)" height="32" width="32" />
	</ExLink>
	<ExLink ariaLabel="github" href="https://github.com/wentallout">
		<GitHubLogo class="icon" color="var(--colorText)" height="32" width="32" />
	</ExLink>
</div>

<style>
	.social-links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spaceS);
		flex-direction: row;
	}
</style>
