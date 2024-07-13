<script>
	import SocialButtons from '$lib/components/layout/header/SocialButtons.svelte';
	import VanishingHeader from '$components/layout/header/VanishingHeader.svelte';
	import { navItems } from '$lib/config.js';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import List from '~icons/ph/list';
	import X from '~icons/ph/x';
	import ThemeSwitcher from '$lib/components/button/ThemeSwitcher.svelte';

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
		<ThemeSwitcher />
		<nav class="nav pad" class:nav--scrolldown={scrollY > 0} aria-label="primary menu">
			<ul class="nav-list">
				{#each navItems as navItem}
					<li class="nav-list__item" class:active-page={$page.url.pathname === `${navItem.path}`}>
						<a class="item" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}

				<button
					class="hamburger"
					aria-label="navigation button"
					type="button"
					on:click={openNav}
					on:keydown={openNav}>
					<List color="var(--colorText)" height="32" width="32" />
				</button>
			</ul>
		</nav>
	</header>
</VanishingHeader>

<div bind:this={navOverlayEle} class="overlay">
	<button
		class="closebtn"
		aria-label="close nav menu"
		type="button"
		on:click={closeNav}
		on:keydown={closeNav}>
		<X color="var(--colorBlack)" height="32" width="32" />
	</button>
	<div class="overlay-content">
		{#each navItems as navItem}
			<a
				class="overlay-item text-xl"
				class:active-page--mobile={$page.url.pathname === `${navItem.path}`}
				href={navItem.path}
				on:click={closeNav}>
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

	::view-transition-group(indicator2) {
		animation: 0.3s linear both border;
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

		background: transparent;
	}

	.nav--scrolldown {
		background: color-mix(in srgb, var(--colorBgLayout) 100%, transparent);
		backdrop-filter: blur(5px);
		color: var(--colorText);
		border: 1px solid var(--colorBorder);
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
		view-transition-name: indicator2;
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

	.nav:has(a:hover) a:not(:hover) {
		opacity: 0.7;
		text-shadow: none;
		transition: var(--transition);
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
		justify-content: center;
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
		justify-self: flex-end;
	}

	.header {
		position: relative;
		overflow: hidden;
		user-select: none;
		view-transition-name: header;
	}

	.nav-list__item::before {
		content: '';
		position: absolute;
		margin: auto;
		background: transparent;
		transition: var(--transition);
		width: 0;
	}
</style>
