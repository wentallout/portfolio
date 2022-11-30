<script>
	import { navItems } from '$lib/config.js';
	import List from '~icons/ph/list';
	import VanishingHeader from '$lib/components/Layout/VanishingHeader.svelte';
	import { page } from '$app/stores';
	let scrollY;
</script>

<svelte:window bind:scrollY />

<VanishingHeader duration="350ms" offset={50} tolerance={5}>
	<header>
		<nav class="nav" class:nav-scrolldown={scrollY > 0}>
			<ul class="nav-list">
				{#each navItems as navItem}
					<li class:active-page={$page.url.pathname === `${navItem.path}`} class="nav-list__item">
						<a class="item" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}

				<li class="nav-mobile">
					<List color="var(--neutral-100)" width="32" height="32" />
				</li>
			</ul>
		</nav>
	</header>
</VanishingHeader>

<style>
	.active-page {
		background-color: var(--primary-500);
		color: var(--text);
	}

	.active-page:hover {
		color: var(--neutral-900) !important;
	}

	.nav-list__item:hover {
		color: var(--primary-500);
	}

	.nav {
		width: 100%;
		display: flex;
		max-width: 100vw;

		/* FONT */
		font-size: var(--font-size-base);
		font-weight: 500;
		color: var(--neutral-100);
		/* --- */

		background-color: var(--primary-900);
	}

	.nav-scrolldown {
		background-color: rgba(0, 34, 38, 0.7) !important;
		backdrop-filter: blur(1px);
		box-shadow: 0 2px 4px rgba(45, 35, 66, 0.35), 0 7px 13px -3px rgba(45, 35, 66, 0.25);
		color: var(--neutral-100);
	}

	.nav-list {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0;
	}

	.nav-list__item {
		display: none;
	}

	.nav-mobile {
		/* FLEX */
		display: flex;
		justify-content: center;
		/* --- */

		width: 100%;
		padding: var(--space-xs);
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.nav {
			padding: 0 17vw;
		}
		.nav-list__item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;

			line-height: 1;
		}

		.nav-mobile {
			display: none;
		}
	}

	.item {
		padding: var(--space-s);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
