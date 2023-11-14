<script>
	import { fly } from 'svelte/transition';
	import Sun from '~icons/ph/sun';
	import Moon from '~icons/ph/moon';
	import { theme, toggleTheme } from '$lib/stores/themeStore.js';
</script>

<button class="toggle" type="button" on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div class="toggle__icon text-xs" in:fly|global={{ y: -10 }}>
			<Moon width="24" height="24" class="icon" color="var(--colorText)" />
			<div>Dark</div>
		</div>
	{:else}
		<div class="toggle__icon text-xs" in:fly|global={{ y: 10 }}>
			<Sun width="24" height="24" class="icon" color="var(--colorText)" />
			<div>Light</div>
		</div>
	{/if}
</button>

<style lang="postcss">
	.toggle {
		padding: var(--spaceXS);
		aspect-ratio: 1/1;
		width: 48px;
		border: 0;

		overflow: visible;
		position: fixed;
		top: 0;
		right: 0;
		z-index: var(--zIndexMax);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--colorBgElevated);
		border-radius: 0 0 0 16px;

		box-shadow: var(--boxShadow);

		&:hover {
			cursor: pointer;
		}
	}

	@media (min-width: 768px) {
		.toggle {
			width: 64px;
		}
	}

	.toggle__icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
