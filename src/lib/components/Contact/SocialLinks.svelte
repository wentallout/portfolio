<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
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
			<ExLink href="tel:+84929066331">
				<div class="social__address">
					<Phone {...icon} />
					<p>+84 929 066 331</p>
				</div>
			</ExLink>

			<ExLink href="mailto:wentallout@gmail.com">
				<div class="social__address">
					<Envelope {...icon} />
					<p>wentallout@gmail.com</p>
				</div>
			</ExLink>

			<ExLink href="https://www.linkedin.com/in/wentallout">
				<div class="social__address">
					<LinkedinLogo {...icon} />
					<p>LinkedIn</p>
				</div>
			</ExLink>

			<ExLink href="https://www.figma.com/team_invite/redeem/CRNTQKDT0VQTLYjw7cEogQ">
				<div class="social__address">
					<FigmaLogo {...icon} />
					<p>Figma</p>
				</div>
			</ExLink>

			<ExLink href="https://github.com/wentallout">
				<div class="social__address">
					<GitHubLogo {...icon} />
					<p>GitHub</p>
				</div>
			</ExLink>

			<ExLink href="https://www.reddit.com/user/wentallout">
				<div class="social__address">
					<RedditLogo {...icon} />
					<p>Reddit</p>
				</div>
			</ExLink>
		</address>
	</div>
</section>

<style>
	.social {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: var(--space-m);
		padding: var(--space-m);
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
		transition: 0.3s;
	}

	.social__address:hover {
		box-shadow: var(--box-shadow-hover);
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
