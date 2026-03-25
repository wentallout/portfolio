<script>
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/stores/themeStore.svelte.js';
	import { Sun, Moon } from '$lib/assets/icons/icons';
	import { haptic } from '$lib/actions/haptics';
</script>

<button 
	use:haptic={'selection'} 
	class="pill" 
	aria-label="Toggle theme" 
	type="button" 
	onclick={() => theme.toggle()}
>
	<div
		class="circle"
		class:circle--left={theme.current === 'dark'}
		class:circle--right={theme.current === 'light'}>
		{#if theme.current === 'dark'}
			<div in:fade={{ duration: 150 }}>
				<Moon class="icon" color="var(--color-text)" height="16" width="16" />
			</div>
		{:else}
			<div in:fade={{ duration: 150 }}>
				<Sun class="icon" color="var(--color-text)" height="16" width="16" />
			</div>
		{/if}
	</div>
</button>

<style lang="postcss">
	.pill {
		--ease-out-custom: cubic-bezier(0.23, 1, 0.32, 1);
		--pillWidth: 48px;
		width: var(--pillWidth);
		display: flex;
		border-radius: 999px;
		border: 1px solid var(--color-border);
		overflow: hidden;
		background-color: var(--color-bg-layout);
		height: fit-content;
		z-index: 100;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		transition: 
			transform 160ms var(--ease-out-custom),
			background-color 200ms var(--ease-out-custom),
			border-color 200ms var(--ease-out-custom);
		padding: 3px;
		cursor: pointer;

		&:hover {
			border-color: var(--color-text-secondary);
			background-color: var(--color-bg-container);
		}

		&:active {
			transform: translate(-50%, -50%) scale(0.92);
		}
	}

	.circle {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		background-color: var(--color-bg-elevated);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 250ms var(--ease-out-custom);
		pointer-events: none;
	}

	.circle--left {
		transform: translateX(0);
	}

	.circle--right {
		transform: translateX(20px);
	}

	.icon {
		display: block;
	}
</style>
