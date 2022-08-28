<script>
	import { navItems } from '$lib/config.js';
	import { page } from '$app/stores';

	let hideMobileMenu = true;
	// Mobile menu click event handler
	const handleMobileIconClick = () => (hideMobileMenu = !hideMobileMenu);

	import { List } from 'phosphor-svelte';
</script>

<header class="main-header base-text">
	<nav>
		<ul class="nav__list">
			<li id="burger-nav" on:click={handleMobileIconClick}>
				<a class="nav__list-item" href={'#'}>
					<List color="var(--white)" size="32" />
				</a>
			</li>

			{#each navItems as navItem}
				<li class={`navbar-list${hideMobileMenu ? ' hidden-mobile' : ''}`}>
					{#if $page.url.pathname === `${navItem.path}`}
						<a class="nav__list-item active-page" href={navItem.path}>
							{navItem.title}
						</a>
					{:else}
						<a class="nav__list-item" href={navItem.path}>
							{navItem.title}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.hidden-mobile {
		display: none;
	}

	.main-header {
		max-width: 100vw;
		color: var(--white);
		background-color: #000;

		width: 100%;
	}

	nav ul li {
		display: flex;
		min-height: 3.5rem;
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
		color: var(--white);
		background-color: #000;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.1px solid var(--black);
	}

	@media (hover: hover) {
		.nav__list-item:hover {
			color: var(--black);
			background-color: var(--primary);
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
		color: var(--primary) !important;
		pointer-events: none;
	}
</style>
