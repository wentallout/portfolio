<script>
	import ExLink from '$components/Common/ExLink.svelte';
	import FigmaLogo from '~icons/ph/figma-logo';
	import RedditLogo from '~icons/ph/reddit-logo';
	import Handshake from '~icons/ph/handshake';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import InstagramLogo from '~icons/ph/instagram-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

	let icon = {
		color: 'var(--colorText)',
		width: '24',
		height: '24'
	};
</script>

<section>
	<SectionTitle sectionTitle="Social" let:sectionIcon>
		<Handshake {...sectionIcon} />
	</SectionTitle>

	<div class="social text-small">
		<address class="social__list">
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
		/* padding: 0 var(--spaceM); */
		width: 100%;
		margin-bottom: var(--spaceM);
		border-bottom: 0;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.social {
			flex-direction: row;
		}
	}

	.social__list {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		gap: var(--spaceM);
	}

	.social__address {
		padding: var(--spaceS);
		transition: var(--transition);
		background-color: var(--colorBgContainer);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--colorBorder);
	}

	.social__address:hover {
		background-color: var(--colorBgElevated);
	}
</style>
