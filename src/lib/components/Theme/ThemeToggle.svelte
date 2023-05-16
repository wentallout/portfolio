<script>
	import { fly } from 'svelte/transition';

	import Sun from '~icons/ph/sun';

	import Moon from '~icons/ph/moon';

	import { theme, toggleTheme } from '$lib/stores/themeStore.js';
</script>

<button type="button" class="toggle" on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }} class="toggle__icon">
			<Sun class="icon" color="var(--colorText)" width="24" height="24" />
		</div>
	{:else}
		<div class="toggle__icon" in:fly={{ y: -10 }}>
			<Moon class="icon" color="var(--colorText)" width="24" height="24" />
		</div>
	{/if}
</button>

<style>
	.toggle {
		padding: var(--spaceXS);

		border: 0;
		border-radius: 100%;

		overflow: visible;
		position: fixed;
		top: 0;
		right: 0;
		z-index: var(--zIndexMax);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: transparent;
	}

	.toggle__icon {
		color: var(--colorPrimaryHover);
	}

	.toggle:hover {
		cursor: pointer;
	}
</style>
