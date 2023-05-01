<script>
	import { fly } from 'svelte/transition';

	import Sun from '~icons/ph/sun';

	import Moon from '~icons/ph/moon';

	import { theme, toggleTheme } from '$lib/stores/themeStore.js';
</script>

<button class="toggle" on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }} class="toggle__icon">
			<Sun color="#fff" width="24" height="24" />
		</div>
	{:else}
		<div in:fly={{ y: -10 }} class="toggle__icon">
			<Moon color="#fff" width="24" height="24" />
		</div>
	{/if}
</button>

<style lang="postcss">
	.toggle {
		padding: var(--space-xs);
		background: none;

		border: 0;

		overflow: visible;
		position: fixed;
		top: 0;
		right: 0;
		z-index: 98;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.toggle:hover {
		cursor: pointer;
	}
</style>
