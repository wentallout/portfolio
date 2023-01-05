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
		color: 'var(--primary-500)',
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
				</div>
			</ExLink>

			<ExLink href="mailto:wentallout@gmail.com">
				<div class="social__address">
					<Envelope {...icon} />
				</div>
			</ExLink>

			<ExLink href="https://www.linkedin.com/in/wentallout">
				<div class="social__address">
					<LinkedinLogo {...icon} />
				</div>
			</ExLink>

			<ExLink href="https://www.figma.com/@wentallout">
				<div class="social__address">
					<FigmaLogo {...icon} />
				</div>
			</ExLink>

			<ExLink href="https://github.com/wentallout">
				<div class="social__address">
					<GitHubLogo {...icon} />
				</div>
			</ExLink>

			<ExLink href="https://www.instagram.com/wentallout/saved">
				<div class="social__address">
					<InstagramLogo {...icon} />
				</div>
			</ExLink>

			<ExLink href="https://www.reddit.com/user/wentallout">
				<div class="social__address">
					<RedditLogo {...icon} />
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
		border-bottom: 0;
		overflow: hidden;
	}

	.social__list {
		display: flex;
		flex-direction: row;
		gap: var(--space-m);
	}

	.social__address {
		padding: var(--space-s) var(--space-m);

		transition: var(--transition);
		border-radius: var(--border-radius-light);
		background-color: var(--bg);
		width: 80px;
		height: 80px;
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.social__address:hover {
		background-color: var(--neutral-800);
	}

	@media (min-width: 768px) {
		.social {
			flex-direction: row;
		}
	}
</style>
