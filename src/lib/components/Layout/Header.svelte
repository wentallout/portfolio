<script>
	import { transform } from 'dom7';
	import { navItems } from '$lib/config.js';
	import List from '~icons/ph/list';
	import X from '~icons/ph/x';

	import VanishingHeader from '$lib/components/Layout/VanishingHeader.svelte';
	import { page } from '$app/stores';

	let scrollY;

	let navOverlayEle;

	function openNav() {
		navOverlayEle.style.height = '100%';
	}
	function closeNav() {
		navOverlayEle.style.height = '0%';
	}
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

				<li on:click={openNav} on:keydown={openNav} class="hamburger">
					<List color="var(--neutral-100)" width="32" height="32" />
				</li>
			</ul>
		</nav>
	</header>
</VanishingHeader>

<div bind:this={navOverlayEle} class="overlay">
	<div class="closebtn" on:click={closeNav} on:keydown={closeNav}>
		<X color="var(--primary-900)" width="32" height="32" />
	</div>
	<div class="overlay-content">
		{#each navItems as navItem}
			<a class="overlay-item xl-text" on:click={closeNav} href={navItem.path}>{navItem.title}</a>
		{/each}
	</div>
</div>

<style>
	.active-page {
		background-color: var(--primary-600);
		color: var(--black);
	}

	.active-page:hover {
		color: var(--neutral-900) !important;
	}

	.nav-list__item:hover {
		color: var(--primary-600);
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

		background-color: transparent;
		transition: 0.3s;
	}

	.nav-scrolldown {
		background-color: rgba(0, 0, 0, 0.7) !important;
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

	.hamburger {
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

		.hamburger {
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

	/* OVERLAY */

	.overlay {
		height: 0%;
		width: 100%;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.9);
		overflow-y: hidden;
		transition: 0.2s;
		font-weight: 500;
	}

	.overlay-content {
		position: relative;
		top: 60px;

		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.overlay-item {
		padding: var(--space-s) 0;

		color: var(--neutral-200);
		display: block;
		transition: 0.3s;
		width: 100%;
		padding-left: 20vw;

		outline: 1px solid transparent;

		/* display: flex;
		
		

		justify-content: flex-start;
		align-items: center; */
	}

	.overlay-item:hover,
	.overlay-item:focus {
		color: var(--primary-600);
		outline: 1px solid var(--primary-600);
	}

	.closebtn {
		position: absolute;
		display: flex;

		width: 100%;
		justify-content: center;
		align-items: center;

		background-color: var(--primary-600);
		top: 0;
		cursor: pointer;

		padding: var(--space-xs);
		cursor: pointer;
	}

	@media screen and (max-height: 450px) {
		.overlay {
			overflow-y: auto;
		}
	}
</style>
