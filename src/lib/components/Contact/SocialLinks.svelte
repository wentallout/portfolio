<script>
	import Envelope from '~icons/ph/envelope';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import Phone from '~icons/ph/phone';
	import FigmaLogo from '~icons/ph/figma-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	import RedditLogo from '~icons/ph/reddit-logo';
	import Handshake from '~icons/ph/handshake';

	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	let icon = {
		color: 'var(--primary-600)',
		width: '32',
		height: '32'
	};
</script>

<section>
	<SectionTitle sectionTitle="Social" let:sectionIcon>
		<Handshake {...sectionIcon} />
	</SectionTitle>

	<div class="social">
		<address class="social__list small-text">
			<a class="social__address" href="tel:+84929066331">
				<Phone {...icon} />
				<p>+84 929 066 331</p>
			</a>

			<a class="social__address" href="mailto:wentallout@gmail.com" target="_blank">
				<Envelope {...icon} />
				<p>wentallout@gmail.com</p>
			</a>
			<a class="social__address" href="https://www.linkedin.com/in/wentallout" target="_blank">
				<LinkedinLogo {...icon} />
				<p>LinkedIn</p>
			</a>

			<a
				class="social__address"
				href="https://www.figma.com/team_invite/redeem/CRNTQKDT0VQTLYjw7cEogQ"
				target="_blank">
				<FigmaLogo {...icon} />
				<p>Figma</p>
			</a>

			<a class="social__address" href="https://github.com/wentallout" target="_blank">
				<GitHubLogo {...icon} />
				<p>GitHub</p>
			</a>

			<a class="social__address" href="https://www.reddit.com/user/wentallout" target="_blank">
				<RedditLogo {...icon} />
				<p>Reddit</p>
			</a>
		</address>
	</div>
</section>

<style>
	.social {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: var(--space-m);
		box-shadow: var(--box-shadow);
		padding: var(--space-m);
		border-radius: var(--border-radius);
		border: var(--border);
	}

	.social__list {
		width: 100%;
	}

	.social__address {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		border-radius: var(--border-radius);
		padding: 8px 12px;
	}

	.social__address:hover {
		background-color: var(--neutral-300);
	}

	.social__address p {
		margin-left: var(--space-s);
	}

	@media (min-width: 768px) {
		.social {
			flex-direction: row;
		}
	}
</style>
