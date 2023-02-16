<script>
	import Marquee from '$lib/components/Common/Marquee.svelte';
	import SocialButtons from '$lib/components/Contact/SocialButtons.svelte';
	import { navItems } from '$lib/config.js';
</script>

<Marquee />
<footer>
	<div class="footer-container small-text">
		<ul class="nav-list">
			{#each navItems as navItem}
				<li class="nav-list-item">
					<a href={navItem.path}>{navItem.title}</a>
				</li>
			{/each}
		</ul>

		<SocialButtons />

		<div class="other-info small-text">
			Copyright © 2022-2023 Nguyen Dang Khoa - All Rights Reserved.
		</div>
		<div class="secret small-text">
			I declare war on anybody standing in the way of what I dream for.
		</div>
	</div>
</footer>

<style>
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

		background-color: var(--black-400);

		background-image: linear-gradient(135deg, var(--black-400) 25%, transparent 25%),
			linear-gradient(225deg, var(--black-400) 25%, transparent 25%),
			linear-gradient(45deg, var(--black-400) 25%, transparent 25%),
			linear-gradient(315deg, var(--black-400) 25%, var(--black-300) 25%);
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
		font-weight: 500;
		transition: 0.3s;
	}

	.nav-list-item a:hover {
		color: var(--primary-500);
	}

	footer {
		position: relative;
	}
</style>
