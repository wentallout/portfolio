<script>
	import SocialButtons from '$components/Contact/SocialButtons.svelte';
	import VanishingHeader from '$lib/components/Layout/Header/VanishingHeader.svelte';
	import { navItems } from '$lib/config.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import List from '~icons/ph/list';
	import X from '~icons/ph/x';

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
		<nav class="nav global-container" class:nav--scrolldown={scrollY > 0} aria-label="primary menu">
			<ul class="nav-list">
				{#each navItems as navItem}
					<li class="nav-list__item" class:active-page={$page.url.pathname === `${navItem.path}`}>
						<a class="item" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}

				<button
					aria-label="navigation button"
					type="button"
					class="hamburger"
					on:click={openNav}
					on:keydown={openNav}>
					<List color="var(--colorText)" width="32" height="32" />
				</button>
			</ul>
		</nav>
	</header>
</VanishingHeader>

<div class="overlay" bind:this={navOverlayEle}>
	<button
		aria-label="close nav menu"
		type="button"
		class="closebtn"
		on:click={closeNav}
		on:keydown={closeNav}>
		<X color="var(--colorBlack)" width="32" height="32" />
	</button>
	<div class="overlay-content global-container">
		{#each navItems as navItem}
			<a
				class="overlay-item text-xl"
				class:active-page--mobile={$page.url.pathname === `${navItem.path}`}
				on:click={closeNav}
				href={navItem.path}>
				{navItem.title}
			</a>
		{/each}
		<div class="overlay-item social">
			<SocialButtons />
		</div>
	</div>
</div>

<style lang="postcss">
	:root {
		view-transition-name: none;
	}

	::view-transition-group(indicator) {
		animation-duration: 0.3s;
	}

	.active-page::after {
		view-transition-name: indicator;
	}

	.nav {
		/* FONT */
		font-size: var(--fontSizeBase);
		font-weight: var(--fontWeightMid);
		color: var(--colorText);
		/* --- */
		width: 100%;
		display: flex;

		border-bottom-left-radius: var(--borderRadius);
		border-bottom-right-radius: var(--borderRadius);
		transition: background var(--transition);
	}

	.nav--scrolldown {
		background: color-mix(in srgb, var(--colorBgLayout) 50%, transparent);
		backdrop-filter: blur(5px);
		color: var(--colorText);
	}

	.active-page {
		position: relative;
		color: var(--colorPrimary) !important;
		border-top: 1px solid inherit;

		/*  */
	}

	.active-page::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		inset: 0 -10px 30px;
		background: radial-gradient(ellipse at top, currentColor, transparent 50%);
	}

	.active-page--mobile {
		color: var(--colorPrimary) !important;
		border-left: 4px solid inherit;
	}

	.nav-list {
		display: flex;
		flex-direction: row;
		width: 100%;

		margin: 0;
		overflow: visible;
	}

	.nav-list__item {
		display: none;
		overflow: visible;

		transition: scale linear 0.3s;

		&:hover {
			font-weight: var(--fontWeightLarge);
			scale: 1.1;
			color: var(--colorPrimaryHover);
		}
	}

	.hamburger {
		/* FLEX */
		display: flex;
		justify-content: center;
		/* --- */

		width: 100%;
		padding: var(--spaceXS);
		cursor: pointer;
	}

	@media (min-width: 768px) {
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
		padding: var(--spaceS);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	/* ---OVERLAY--- */

	.overlay {
		height: 0%;
		width: 100%;

		position: fixed;
		z-index: var(--zIndexMax);
		top: 0;
		left: 0;

		background: color-mix(in srgb, var(--colorBgLayout) 50%, transparent);
		backdrop-filter: blur(5px);
		overflow: hidden;
		transition: var(--transition);
		font-weight: var(--fontWeightXS);
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
		padding: var(--spaceL) 0;

		color: var(--colorWhite);

		/* FLEX */
		display: flex;
		align-items: center;
		/* --- */

		/* SIZE */
		width: 100%;
		height: var(--scroll-padding);
		/* --- */

		outline: 1px solid transparent;
		font-weight: var(--fontWeightMid);

		color: var(--colorText);
	}

	.overlay-item:hover,
	.overlay-item:focus {
		outline: var(--primary-500);
	}

	.closebtn {
		position: absolute;
		display: flex;

		width: 100%;
		height: var(--scroll-padding);
		justify-content: center;
		align-items: center;

		background-color: var(--colorPrimary);
		top: 0;
		cursor: pointer;

		/* padding: var(--spaceXS); */
		cursor: pointer;
	}

	@media screen and (max-height: 450px) {
		.overlay {
			overflow-y: auto;
		}
	}

	.social {
		border-top: 1px solid var(--colorBorder);
		justify-self: flex-end;
	}

	.header {
		position: relative;
		overflow: hidden;
	}

	.nav-list__item::before {
		content: '';
		position: absolute;
		margin: auto;
		background: transparent;
		transition: var(--transition);
		pointer-events: none;
		width: 0;
	}

	/* .nav-list__item:hover::before {
		width: 100%;
		inset: 0 -10px 30px;
		background: radial-gradient(ellipse at top, currentcolor, transparent 50%);
	} */
</style>
