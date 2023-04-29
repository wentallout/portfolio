<script>
	import { fly } from 'svelte/transition';

	import Sun from '~icons/ph/sun';

	import Moon from '~icons/ph/moon';

	import { theme, toggleTheme } from '$lib/stores/themeStore.js';
</script>

<button class="toggle" on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }} class="toggle__icon">
			<Sun color="var(--text-color)" width="24" height="24" />
		</div>
	{:else}
		<div in:fly={{ y: -10 }} class="toggle__icon">
			<Moon color="var(--text-color)" width="24" height="24" />
		</div>
	{/if}
</button>

<style>
	.toggle {
		padding: 0;
		background: none;
		border: none;
		overflow: visible;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.toggle:hover {
		cursor: pointer;
	}

	.toggle__icon {
	}
</style>
