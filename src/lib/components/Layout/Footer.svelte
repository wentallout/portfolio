<script>
	import Envelope from '~icons/ph/envelope';
	import { navItems } from '$lib/config.js';
	import LinkedinLogo from '~icons/ph/linkedin-logo';
	import Phone from '~icons/ph/phone';
	import ExLink from '$lib/components/Common/ExLink.svelte';

	let w;
	let h;
</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} />
<footer>
	<div class="footer-container small-text">
		<ul class="nav-list">
			{#each navItems as navItem}
				<li class="nav-list-item">
					<a href={navItem.path}>{navItem.title}</a>
				</li>
			{/each}
		</ul>
		<div class="footer__social">
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
		<div class="other-info">Screen: {w} x {h}</div>
	</div>
</footer>

<style>
	.other-info {
		margin-top: var(--space-s);
		color: var(--text-color-low);
	}

	footer {
		/* Flex */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		padding: var(--space-2xl) var(--space-xs);

		/* Position */
		position: relative;

		/* Width */
		max-width: 100vw;

		background-color: var(--bg);
	}

	footer::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		pointer-events: none;

		z-index: 0;

		background: linear-gradient(
			180deg,
			var(--page-bg) 0%,
			rgba(18, 18, 18, 0.5) 12%,
			rgba(18, 18, 18, 0.1) 30%,
			rgba(18, 18, 18, 0) 40%
		);
	}

	.footer__social {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: var(--space-s);
	}

	.footer-container {
		display: flex;
		flex-direction: column;
		color: var(--text-color);
		font-weight: 300;
	}

	@media (min-width: 768px) {
		footer {
			padding: var(--space-xl) 20vw;
		}
	}

	.nav-list {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		margin: 0;

		margin-bottom: var(--space-l);
		flex-wrap: wrap;
	}

	.nav-list-item {
		display: flex;
		padding-left: 0;
		padding-right: var(--space-xs);
	}

	.nav-list-item a {
		font-family: var(--fancy-font);
		transition: 0.3s;
	}

	.nav-list-item a:hover {
		color: var(--primary-500);
	}

	footer {
		position: relative;
	}
</style>
