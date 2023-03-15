<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Marquee from '$lib/components/Common/Marquee.svelte';
	import SocialButtons from '$lib/components/Contact/SocialButtons.svelte';
	import { navItems } from '$lib/config.js';
</script>

<Marquee />
<footer>
	<div class="footer-container small-text">
		<div class="list-container">
			<div class="list">
				<div class="list__title">Browse</div>
				<ul class="nav-list">
					{#each navItems as navItem}
						<li class="nav-list-item">
							<a href={navItem.path}>{navItem.title}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="list">
				<div class="list__title">Contact</div>
				<ul class="nav-list">
					<li class="nav-list-item">
						<div>Ho Chi Minh City, Vietnam</div>
					</li>
					<li class="nav-list-item focus">
						<ExLink href="mailto:wentallout@gmail.com">wentallout@gmail.com</ExLink>
					</li>
					<li class="nav-list-item focus">
						<ExLink href="tel:+84929066331">+84 929 066 331</ExLink>
					</li>
				</ul>
			</div>
		</div>

		<SocialButtons />

		<div class="other-info small-text">Copyright © 2023</div>
		<div class="secret small-text">
			I declare war on anybody standing in the way of what I dream for.
		</div>
	</div>
</footer>

<style>
	.focus {
		color: var(--accent-500);
	}

	.list-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
	}

	.list__title {
		font-family: 'Fancy';
		font-size: var(--font-size-base);
	}

	.other-info {
		user-select: none;
		margin-top: var(--space-s);
		color: var(--text-color-low);
	}

	.secret {
		color: transparent;
		transition: var(--transition);
	}

	.other-info:hover + .secret {
		color: var(--primary-500);
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

		background-color: var(--bg-400);

		background-image: linear-gradient(135deg, var(--bg-500) 25%, transparent 25%),
			linear-gradient(225deg, var(--bg-500) 25%, transparent 25%),
			linear-gradient(45deg, var(--bg-500) 25%, transparent 25%),
			linear-gradient(315deg, var(--bg-500) 25%, var(--bg-400) 25%);
		background-position: 40px 0, 40px 0, 0 0, 0 0;
		background-size: 40px 40px;
		background-repeat: repeat;
	}

	footer::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		pointer-events: none;

		background: linear-gradient(
			0deg,
			var(--page-bg) 0%,
			rgba(18, 18, 18, 0.5) 12%,
			rgba(18, 18, 18, 0.1) 30%,
			rgba(18, 18, 18, 0) 40%
		);
	}

	.footer-container {
		display: flex;
		flex-direction: column;
		color: var(--text-color);
		font-weight: 300;
	}

	@media (min-width: 768px) {
		footer {
			padding: var(--space-xl) var(--page-padding);
		}
	}

	.nav-list {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: flex-start;
		margin: 0;
		margin-bottom: var(--space-l);
		flex-wrap: wrap;
		gap: var(--space-2xs);
	}

	.nav-list-item {
		display: flex;
		padding-left: 0;
		padding-right: var(--space-xs);
	}

	.nav-list-item a {
		font-weight: 400;
		transition: 0.3s;
		color: var(--text-color-low);
	}

	.nav-list-item a:hover {
		color: var(--primary-500);
	}

	footer {
		position: relative;
	}
</style>
