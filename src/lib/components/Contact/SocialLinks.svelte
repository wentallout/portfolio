<script>
	import Envelope from '~icons/ph/envelope';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import FigmaLogo from '~icons/ph/figma-logo';
	import GitHubLogo from '~icons/ph/github-logo';
	import RedditLogo from '~icons/ph/reddit-logo';

	import Phone from '~icons/ph/phone';
</script>

<div class="social">
	<div class="social__others base-text">
		<a class="social__address" href="tel:+84929066331">
			<Phone color="var(--primary-600)" width="32" height="32" />
			<p>+84 929 066 331</p>
		</a>

		<a class="social__address" href="mailto:wentallout@gmail.com">
			<Envelope color="var(--primary-600)" width="32" height="32" />
			<p>wentallout@gmail.com</p>
		</a>
		<a
			class="social__address"
			href="https://www.figma.com/team_invite/redeem/CRNTQKDT0VQTLYjw7cEogQ">
			<LinkedinLogo color="var(--primary-600)" width="32" height="32" />
			<p>LinkedIn</p>
		</a>

		<a class="social__address" href="https://www.linkedin.com/in/wentallout">
			<FigmaLogo color="var(--primary-600)" width="32" height="32" />
			<p>Figma</p>
		</a>

		<a class="social__address" href="https://github.com/wentallout">
			<GitHubLogo color="var(--primary-600)" width="32" height="32" />
			<p>GitHub</p>
		</a>

		<a class="social__address" href="https://www.reddit.com/user/wentallout">
			<RedditLogo color="var(--primary-600)" width="32" height="32" />
			<p>Reddit</p>
		</a>
	</div>
</div>

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
	.social__address {
		display: flex;
		flex-direction: row;
		align-items: center;
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
