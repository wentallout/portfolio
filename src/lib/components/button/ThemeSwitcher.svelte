<script>
	import { fly } from 'svelte/transition';
	import Sun from '~icons/ph/sun';
	import Moon from '~icons/ph/moon';
	import { theme, toggleTheme } from '$lib/stores/themeStore.js';
</script>

<button class="pill" type="button" on:click={toggleTheme} aria-label="Toggle theme">
	<div
		class="circle"
		class:circle--left={$theme === 'dark'}
		class:circle--right={$theme === 'light'}>
		{#if $theme === 'dark'}
			<div aria-label="dark mode">
				<Moon width="16" height="16" class="icon" color="var(--colorText)" />
			</div>
		{:else if $theme === 'light'}
			<div aria-label="light mode">
				<Sun width="16" height="16" class="icon" color="var(--colorText)" />
			</div>
		{/if}
	</div>
</button>

<style lang="postcss">
	.pill {
		--pillWidth: 48px;
		width: var(--pillWidth);

		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: var(--borderRadius);
		border: 1px solid var(--colorText);
		overflow: hidden;
		background-color: var(--colorBgContainer);
		height: fit-content;
		z-index: var(--zIndexMax);
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		transition: var(--transition);
		padding: 2px;
	}

	.pill:hover {
		filter: brightness(120%);
	}

	.circle {
		height: calc(var(--pillWidth) / 2);
		aspect-ratio: 1/1;
		border-radius: 50%;
		background-color: var(--colorBgElevated);
		box-shadow: var(--boxShadow);
		display: flex;
		justify-content: center;
		align-items: center;

		transition: var(--transition);
	}

	.circle--left {
		transform: translateX(0);
	}

	.circle--right {
		transform: translateX(calc(var(--pillWidth) / 2 - 6px));
	}
</style>
