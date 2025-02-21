<script>
	import { page } from '$app/stores';
	import ThemeSwitcher from '$components/button/ThemeSwitcher.svelte';
	import SocialButtons from '$components/layout/header/SocialButtons.svelte';
	import VanishingHeader from '$components/layout/header/VanishingHeader.svelte';
	import { List, X } from '$lib/assets/icons/icons';
	import { navItems } from '$lib/config.js';
	import { onMount } from 'svelte';
	let scrollY = $state();
	let navOverlayEle = $state();

	function openNav() {
		navOverlayEle.style.height = '100%';
	}
	function closeNav() {
		navOverlayEle.style.height = '0%';
	}

	let headerEle = $state();

	onMount(() => {
		const navigationHeight = headerEle.offsetHeight;
		document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');
	});
</script>

<svelte:window bind:scrollY />

<VanishingHeader duration="300ms" offset={50} tolerance={5}>
	<header bind:this={headerEle} class="header">
		<ThemeSwitcher />
		<nav class="nav g-container" class:nav--scrolldown={scrollY > 0} aria-label="primary menu">
			<ul class="navlist">
				{#each navItems as navItem}
					<li class="navlist__item" class:active-page={$page.url.pathname === `${navItem.path}`}>
						<a class="item" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<button
			class="hamburger"
			class:nav--scrolldown={scrollY > 0}
			aria-label="navigation button"
			onclick={openNav}
			onkeydown={openNav}
			type="button">
			<List color="var(--colorText)" height="32" width="32" />
		</button>
	</header>
</VanishingHeader>

<div bind:this={navOverlayEle} class="overlay">
	<button
		class="closebtn"
		aria-label="close nav menu"
		onclick={closeNav}
		onkeydown={closeNav}
		type="button">
		<X color="var(--colorBlack)" height="32" width="32" />
	</button>
	<div class="overlay-content">
		{#each navItems as navItem}
			<a
				class="overlay-item text-xl"
				class:active-page--mobile={$page.url.pathname === `${navItem.path}`}
				href={navItem.path}
				onclick={closeNav}>
				{navItem.title}
			</a>
		{/each}
		<div class="overlay-item social">
			<SocialButtons />
		</div>
	</div>
</div>

<style lang="postcss">
	::view-transition-group(indicator) {
		animation-duration: 0.3s;
	}

	.nav {
		/* FONT */
		font-size: var(--fontSizeBase);
		font-weight: var(--fontWeightMid);
		color: var(--colorText);
		text-box: trim-both cap alphabetic;
		/* --- */

		width: 100%;
		display: flex;
		border-bottom-left-radius: var(--borderRadius);
		border-bottom-right-radius: var(--borderRadius);
		transition: background var(--transition);
		background: transparent;
		will-change: padding;
	}

	.nav--scrolldown {
		background-color: hsl(from var(--colorBgLayout) h s l / 80%);

		backdrop-filter: blur(5px);
		color: var(--colorText);
		border: 1px solid var(--colorBorderSecondary);
		box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
	}

	.active-page {
		position: relative;
		border-bottom: 1px solid transparent;
		color: var(--colorPrimary);
	}

	.active-page::after {
		view-transition-name: indicator;
		content: '';
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		inset: 0 -10px 30px;
		background: radial-gradient(ellipse at top, var(--colorPrimaryActive), transparent 50%);
	}

	.active-page--mobile {
		color: var(--colorPrimaryActive) !important;
		border-left: 4px solid var(--colorPrimaryActive);
	}

	.navlist {
		display: flex;
		flex-direction: row;
		width: 100%;

		margin: 0;
		overflow: visible;
	}

	.navlist__item {
		display: none;
		transition: linear 0.3s;
		text-shadow:
			-1px -1px 0 var(--colorBgLayout),
			1px -1px 0 var(--colorBgLayout),
			-1px 1px 0 var(--colorBgLayout),
			1px 1px 0 var(--colorBgLayout);

		&:hover {
			font-weight: var(--fontWeightLarge);
			color: var(--colorPrimaryHover);
			border-bottom: 1px solid var(--colorPrimaryHover);
		}
	}

	/* .nav:has(a:hover) a:not(:hover) {
		opacity: 0.7;
		text-shadow: none;
		transition: var(--transition);
	} */

	.hamburger {
		/* FLEX */
		display: flex;
		justify-content: center;
		/* --- */

		width: 100%;
		padding: var(--spaceXS);
		cursor: pointer;
		transition: var(--transition);
	}

	@media (min-width: 768px) {
		.navlist__item {
			display: flex;
			justify-content: center;
			align-items: center;

			flex-grow: 1;
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
		flex-grow: 1;
	}

	/* ---OVERLAY--- */

	.overlay {
		height: 0%;
		width: 100%;

		position: fixed;
		z-index: var(--zIndexMax);
		top: 0;
		left: 0;

		background: color-mix(in srgb, var(--colorBgLayout) 70%, transparent);
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
		height: calc(100% - var(--scroll-padding)); /* Subtract the top padding */
		justify-content: flex-start; /* Changed from center to flex-start */
		align-items: center;
	}

	.overlay-item {
		padding: var(--spaceL) var(--spaceM);

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
		margin-top: auto; /* This pushes the social buttons to the bottom */
	}

	.header {
		position: relative;
		overflow: hidden;
		user-select: none;
		view-transition-name: header;
	}

	.navlist__item::before {
		content: '';
		position: absolute;
		margin: auto;
		background: transparent;
		transition: var(--transition);
		width: 0;
	}
</style>
