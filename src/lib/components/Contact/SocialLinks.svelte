<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Envelope from '~icons/ph/envelope';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import Phone from '~icons/ph/phone';
	import FigmaLogo from '~icons/ph/figma-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	import RedditLogo from '~icons/ph/reddit-logo';
	import Handshake from '~icons/ph/handshake';

	import InstagramLogo from '~icons/ph/instagram-logo';

	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	let icon = {
		color: 'var(--primary-400)',
		width: '32',
		height: '32'
	};
</script>

<section>
	<SectionTitle sectionTitle="Social" let:sectionIcon>
		<Handshake {...sectionIcon} />
	</SectionTitle>

	<div class="social small-text">
		<address class="social__list">
			<ExLink href="tel:+84929066331">
				<div class="social__address">
					<Phone {...icon} />
					<p>+84 929 066 331</p>
				</div>
			</ExLink>

			<ExLink href="mailto:wentallout@gmail.com">
				<div class="social__address">
					<Envelope {...icon} />
					<p>Email</p>
				</div>
			</ExLink>

			<ExLink href="https://www.linkedin.com/in/wentallout">
				<div class="social__address">
					<LinkedinLogo {...icon} />
					<p>LinkedIn</p>
				</div>
			</ExLink>

			<ExLink href="https://www.linkedin.com/in/wentallout">
				<div class="social__address">
					<InstagramLogo {...icon} />
					<p>Instagram</p>
				</div>
			</ExLink>

			<ExLink href="https://www.figma.com/@wentallout">
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
		/* FLEX */
		display: flex;
		flex-direction: row;

		/* padding: 0 var(--space-m); */
		width: 100%;

		margin-bottom: var(--space-m);

		background-color: var(--bg);

		border-bottom: 0;
		overflow: visible;

		border-radius: var(--border-radius-light);

		box-shadow: var(--box-shadow);
		overflow: hidden;
	}

	.social__list {
		width: 100%;
	}

	.social__address {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		align-items: center;
		padding: var(--space-s) var(--space-m);

		transition: 0.3s;

		width: 100%;
		font-weight: 500;
	}

	.social__address:hover {
		background-color: var(--neutral-900);
		color: var(--primary-400);
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
