<script>
	import SocialButtons from '$lib/components/Contact/SocialButtons.svelte';
	import { navItems } from '$lib/config.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import List from '~icons/ph/list';
	import X from '~icons/ph/x';

	import VanishingHeader from '$lib/components/Layout/VanishingHeader.svelte';

	let scrollY;

	let navOverlayEle;

	function openNav() {
		navOverlayEle.style.height = '100%';
	}
	function closeNav() {
		navOverlayEle.style.height = '0%';
	}

	let headerEle;

	onMount(() => {
		const navigationHeight = headerEle.offsetHeight;

		document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');
	});
</script>

<svelte:window bind:scrollY />

<VanishingHeader duration="300ms" offset={50} tolerance={5}>
	<header class="header" bind:this={headerEle}>
		<nav aria-label="primary menu" class="nav" class:nav-scrolldown={scrollY > 0}>
			<ul class="nav-list">
				{#each navItems as navItem}
					<li class="nav-list__item" class:active-page={$page.url.pathname === `${navItem.path}`}>
						<a class="item" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}

				<li class="hamburger" on:click={openNav} on:keydown={openNav}>
					<List color="var(--text-color)" width="32" height="32" />
				</li>
			</ul>
		</nav>
	</header>
</VanishingHeader>

<div bind:this={navOverlayEle} class="overlay">
	<div class="closebtn" on:click={closeNav} on:keydown={closeNav}>
		<X color="var(--bg-500)" width="32" height="32" />
	</div>
	<div class="overlay-content">
		{#each navItems as navItem}
			<a
				class="overlay-item xl-text"
				class:active-page={$page.url.pathname === `${navItem.path}`}
				on:click={closeNav}
				href={navItem.path}>
				{navItem.title}</a>
		{/each}
		<div class="overlay-item social">
			<SocialButtons />
		</div>
	</div>
</div>

<style>
	.active-page {
		color: var(--primary-500) !important;
	}

	.overlay-item.active-page:after {
		content: '◆';
		margin-left: auto;
	}

	.nav {
		/* FONT */
		font-size: var(--font-size-base);
		font-weight: 500;
		color: var(--text-color);
		/* --- */
		width: 100%;
		display: flex;

		transition: ease-in-out 0.1s;
	}

	.nav-scrolldown {
		background-color: rgba(0, 0, 0, 0.7) !important;
		backdrop-filter: blur(5px);
		color: var(--text-color);
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

	.nav-list__item:hover {
		font-weight: 600;
		scale: 1.2;
	}

	.hamburger {
		/* FLEX */
		display: flex;
		justify-content: center;
		/* --- */

		width: 100vw;
		max-width: 100vw;
		padding: var(--space-xs);
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.nav {
			padding: 0 var(--page-padding);
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
		transition: var(--transition);
	}

	/* ---OVERLAY--- */

	.overlay {
		height: 0%;
		width: 100%;
		position: fixed;
		z-index: var(--z-index-max);
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(5px);
		overflow-y: hidden;
		transition: var(--transition);
		font-weight: 300;
	}

	.overlay-content {
		position: relative;
		top: var(--scroll-padding);

		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.overlay-item {
		padding: var(--space-l) 0;

		color: var(--text-color);

		/* FLEX */
		display: flex;
		align-items: center;
		/* --- */

		/* SIZE */
		width: 100%;
		height: var(--scroll-padding);
		/* --- */

		padding-left: var(--page-padding);
		padding-right: var(--page-padding);

		outline: 1px solid transparent;
		font-weight: 500;
	}

	.overlay-item:hover,
	.overlay-item:focus {
		font-weight: 600;
		background: var(--black);
	}

	.closebtn {
		position: absolute;
		display: flex;

		width: 100%;
		height: var(--scroll-padding);
		justify-content: center;
		align-items: center;

		background-color: var(--primary-500);
		top: 0;
		cursor: pointer;

		/* padding: var(--space-xs); */
		cursor: pointer;
	}

	@media screen and (max-height: 450px) {
		.overlay {
			overflow-y: auto;
		}
	}

	.social {
		border-top: 1px solid var(--text-color-disabled);
		padding-top: var(--space-2xl);
	}
</style>
