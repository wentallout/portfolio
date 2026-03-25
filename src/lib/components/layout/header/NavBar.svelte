<script>
	import { page } from '$app/state';
	import ThemeSwitcher from '$components/button/ThemeSwitcher.svelte';
	import SocialButtons from '$components/layout/header/SocialButtons.svelte';
	import VanishingHeader from '$components/layout/header/VanishingHeader.svelte';
	import { List, X } from '$lib/assets/icons/icons';
	import { haptic } from '$lib/actions/haptics';
	import { navItems } from '$lib/config.js';
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let scrollY = $state(0);
	let navOverlayOpen = $state(false);

	function openNav() {
		navOverlayOpen = true;
	}
	function closeNav() {
		navOverlayOpen = false;
	}

	let headerEle = $state();

	$effect(() => {
		if (headerEle) {
			const navigationHeight = headerEle.offsetHeight;
			document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 'px');
		}
	});
</script>

<svelte:window bind:scrollY />

<VanishingHeader duration="300ms" offset={50} tolerance={5}>
	<header bind:this={headerEle} class="header">
		<ThemeSwitcher />

		<nav class="nav g-container" class:nav--scrolldown={scrollY > 0} aria-label="primary menu">
			<ul class="navlist">
				{#each navItems as navItem (navItem.path)}
					<li class="navlist__item" class:active-page={page.url.pathname === `${navItem.path}`}>
						<a use:haptic={'selection'} class="item" href={navItem.path}>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<button
			class="hamburger"
			class:nav--scrolldown={scrollY > 0}
			aria-label="open navigation menu"
			onclick={openNav}
			use:haptic={'medium'}
			type="button">
			<List color="var(--color-text)" height="32" width="32" />
		</button>
	</header>
</VanishingHeader>

{#if navOverlayOpen}
	<div class="overlay" transition:fade={{ duration: 200 }}>
		<button
			class="closebtn"
			aria-label="close nav menu"
			onclick={closeNav}
			use:haptic={'medium'}
			type="button">
			<X color="var(--color-black)" height="32" width="32" />
		</button>
		<div class="overlay-content">
			{#each navItems as navItem, i (navItem.path)}
				<a
					use:haptic={'selection'}
					class="overlay-item text-xl"
					class:active-page--mobile={page.url.pathname === `${navItem.path}`}
					href={navItem.path}
					onclick={closeNav}
					transition:fly={{ y: 20, duration: 300, delay: 100 + i * 50, easing: quintOut }}>
					{navItem.title}
				</a>
			{/each}
			<div class="overlay-item social" transition:fly={{ y: 20, duration: 300, delay: 100 + navItems.length * 50, easing: quintOut }}>
				<SocialButtons />
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	::view-transition-group(indicator) {
		animation-duration: 0.3s;
	}

	.header {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		position: relative;
		overflow: hidden;
		user-select: none;
		view-transition-name: header;
	}

	.nav {
		font-size: var(--font-size-base);
		font-weight: var(--fontWeightMid);
		color: var(--color-text);
		width: 100%;
		display: flex;
		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
		transition: background 200ms var(--ease-out-custom);
		background: transparent;
	}

	.nav--scrolldown {
		background-color: hsl(from var(--color-bg-layout) h s l / 80%);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.active-page {
		color: var(--color-primary);
	}

	.active-page::after {
		view-transition-name: indicator;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		inset: 0 -10px 30px;
		background: radial-gradient(ellipse at top, var(--color-primary-active), transparent 50%);
		pointer-events: none;
	}

	.active-page--mobile {
		color: var(--color-primary-active) !important;
		background: rgba(var(--color-primary-rgb), 0.1);
	}

	.navlist {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 0;
	}

	.navlist__item {
		display: none;
		position: relative;
		transition: transform 200ms var(--ease-out-custom);

		&:hover {
			transform: translateY(-2px);
		}
		
		&:active {
			transform: scale(0.95);
		}
	}

	.hamburger {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: var(--space-xs);
		cursor: pointer;
		background: none;
		border: none;
		transition: transform 160ms var(--ease-out-custom);

		&:active {
			transform: scale(0.9);
		}
	}

	@media (min-width: 768px) {
		.navlist__item {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-grow: 1;
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
		flex-grow: 1;
		transition: color 200ms var(--ease-out-custom);

		&:hover {
			color: var(--color-primary-hover);
		}
	}

	.overlay {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: var(--z-index-max);
		top: 0;
		left: 0;
		background: color-mix(in srgb, var(--color-bg-layout) 90%, transparent);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		display: flex;
		flex-direction: column;
	}

	.overlay-content {
		padding-top: var(--scroll-padding);
		display: flex;
		flex-direction: column;
		width: 100%;
		flex-grow: 1;
		align-items: center;
		overflow-y: auto;
	}

	.overlay-item {
		padding: var(--space-large) var(--space-mid);
		display: flex;
		align-items: center;
		width: 100%;
		font-weight: var(--fontWeightMid);
		color: var(--color-text);
		transition: background 200ms var(--ease-out-custom);

		&:active {
			background: rgba(var(--color-text-rgb), 0.05);
		}
	}

	.closebtn {
		position: absolute;
		display: flex;
		width: 100%;
		height: var(--scroll-padding);
		justify-content: center;
		align-items: center;
		background-color: var(--color-primary);
		top: 0;
		border: none;
		cursor: pointer;
		transition: transform 160ms var(--ease-out-custom);
		z-index: 10;

		&:active {
			transform: scale(0.95);
		}
	}

	.social {
		border-top: 1px solid var(--color-border);
		margin-top: auto;
		justify-content: center;
	}
</style>
