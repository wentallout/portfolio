<script>
	import List from '~icons/ph/list';
	import { navItems } from '$lib/config.js';
	import { page } from '$app/stores';

	let hideMobileMenu = true;

	const handleMobileIconClick = () => (hideMobileMenu = !hideMobileMenu);

	let scrollY;

	$: console.log(scrollY);
</script>

<svelte:window bind:scrollY />
<header class:reduced-header={scrollY > 40} class="main-header base-text">
	<nav>
		<ul class="nav__list">
			<li class:reduced-list={scrollY > 40} id="burger-nav" on:click={handleMobileIconClick}>
				<a class="nav__list-item" on:click|preventDefault href={'#'}>
					<List color="var(--neutral-100)" width="32" height="32" />
				</a>
			</li>

			{#each navItems as navItem}
				<li
					class:reduced-list={scrollY > 40}
					class={`navbar-list${hideMobileMenu ? ' hidden-mobile' : ''}`}>
					{#if $page.url.pathname === `${navItem.path}`}
						<a class="nav__list-item active-page" href={navItem.path}>
							{navItem.title}
						</a>
					{:else}
						<a on:click={handleMobileIconClick} class="nav__list-item" href={navItem.path}>
							{navItem.title}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.reduced-header {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		transition: all 0.3s;
		background-color: rgba(0, 0, 0, 0.8) !important;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	.reduced-list {
		min-height: 2rem;
	}

	.main-header {
		max-width: 100vw;
		color: var(--neutral-100);
		background-color: #000;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 98;
	}

	.hidden-mobile {
		display: none;
	}

	nav ul li {
		display: flex;
		min-height: 4rem;
		margin-left: 0;
		width: 100%;
	}

	.nav__list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		margin: 0;
	}

	.nav__list-item {
		color: var(--neutral-100);
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (hover: hover) {
		.nav__list-item:hover {
			color: var(--neutral-900);
			background-color: var(--primary-500);
			transition: 0.3s;
		}
	}

	@media (min-width: 768px) {
		.hidden-mobile {
			display: flex;
		}

		#burger-nav {
			display: none;
		}

		.main-header {
			padding-left: 17vw;
			padding-right: 17vw;
		}

		.nav__list {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: center;
		}

		.nav__list-item {
			width: 100%;
		}
	}
	.active-page {
		color: var(--primary-500) !important;
		pointer-events: none;
		position: relative;
	}

	@media (min-width: 768px) {
		.active-page::after {
			position: absolute;
			content: '';
			width: 100%;
			left: 0;
			bottom: 0;
			border-bottom: 4px solid var(--primary-500);
		}
	}
</style>
