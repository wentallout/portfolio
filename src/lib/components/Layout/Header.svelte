<script>
	import { navItems } from '$lib/config.js';
	import List from '~icons/ph/list';
	import X from '~icons/ph/x';

	import VanishingHeader from '$lib/components/Layout/VanishingHeader.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
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

				<li on:click={openNav} on:keydown={openNav} class="nav-mobile">
					<List color="var(--neutral-100)" width="32" height="32" />
				</li>
			</ul>
		</nav>
	</header>
</VanishingHeader>

<div bind:this={navOverlayEle} class="overlay">
	<div class="closebtn" on:click={closeNav} on:keydown={closeNav}>
		<X color="var(--neutral-100)" width="32" height="32" />
	</div>
	<div class="overlay-content">
		{#each navItems as navItem}
			<a on:click={closeNav} href={navItem.path}>{navItem.title}</a>
		{/each}
	</div>
</div>

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

	/* OVERLAY */

	.overlay {
		height: 0%;
		width: 100%;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.9);
		overflow-y: hidden;
		transition: 0.2s;
	}

	.overlay-content {
		position: relative;
		top: 10%;
		width: 100%;
		text-align: center;
		margin-top: 30px;
	}

	.overlay a {
		padding: var(--space-s);
		text-decoration: none;
		font-size: 36px;
		color: var(--neutral-600);
		display: block;
		transition: 0.3s;
	}

	.overlay a:hover,
	.overlay a:focus {
		color: var(--primary-300);
		outline: 1px solid var(--primary-300);
	}

	.closebtn {
		position: absolute;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		/* height: 60px; */
		background-color: var(--primary-500);
		top: 0;
		cursor: pointer;
		/* right: 45px; */

		padding: var(--space-xs);
		cursor: pointer;
	}

	@media screen and (max-height: 450px) {
		.overlay {
			overflow-y: auto;
		}
		.overlay a {
			font-size: 20px;
		}
	}
</style>
