<script>
	import { fly } from 'svelte/transition';

	import { theme, toggleTheme } from '$lib/stores/themeStore.js';
	import { Sun, Moon } from '$lib/assets/icons/icons';
</script>

<button class="pill" aria-label="Toggle theme" type="button" onclick={toggleTheme}>
	<div
		class="circle"
		class:circle--left={$theme === 'dark'}
		class:circle--right={$theme === 'light'}>
		{#if $theme === 'dark'}
			<div>
				<Moon class="icon" color="var(--color-text)" height="16" width="16" />
			</div>
		{:else if $theme === 'light'}
			<div>
				<Sun class="icon" color="var(--color-text)" height="16" width="16" />
			</div>
		{/if}
	</div>
</button>

<style lang="postcss">
	.pill {
		--pillWidth: 48px;
		width: var(--pillWidth);

		display: flex;

		border-radius: var(--border-radius);
		border: 1px solid var(--color-text-quaternary);
		overflow: hidden;
		background-color: var(--color-bg-container);
		height: fit-content;
		z-index: var(--z-index-max);
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		transition: var(--transition);
		padding: 2px;

		&:hover {
			filter: brightness(110%);
		}
	}

	.circle {
		height: calc(var(--pillWidth) / 2);
		aspect-ratio: 1/1;
		border-radius: 50%;
		background-color: var(--color-bg-elevated);
		box-shadow: var(--boxShadow);
		display: flex;
		justify-content: center;
		align-items: center;

		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

		&:hover {
			border: 1px solid var(--color-primary-hover);
		}
	}

	.circle--left {
		transform: translateX(0);
	}

	.circle--right {
		transform: translateX(calc(var(--pillWidth) / 2 - 6px));
	}
</style>
