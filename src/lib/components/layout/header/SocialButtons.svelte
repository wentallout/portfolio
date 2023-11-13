<script>
	import Phone from '~icons/ph/phone';
	import ExLink from '$components/common/ExLink.svelte';
	import Envelope from '~icons/ph/envelope';

	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import InstagramLogo from '~icons/ph/instagram-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	export let style = '';
</script>

<div {style} class="social-links">
	<ExLink ariaLabel="phone number" href="tel:+84929066331">
		<Phone class="icon" height="32" width="32" color="var(--colorText)" />
	</ExLink>
	<ExLink ariaLabel="email" href="mailto:wentallout@gmail.com">
		<Envelope class="icon" height="32" width="32" color="var(--colorText)" />
	</ExLink>
	<ExLink ariaLabel="linkedin" href="https://www.linkedin.com/in/wentallout">
		<LinkedinLogo class="icon" height="32" width="32" color="var(--colorText)" />
	</ExLink>
	<ExLink ariaLabel="instagram" href="https://www.instagram.com/wentallout">
		<InstagramLogo class="icon" height="32" width="32" color="var(--colorText)" />
	</ExLink>
	<ExLink ariaLabel="github" href="https://github.com/wentallout">
		<GitHubLogo class="icon" height="32" width="32" color="var(--colorText)" />
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
