<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
	<slot />
</button>

<style>
	button {
		background: none;
		border: none;
		border-bottom: 2px solid transparent;
		border-radius: 0;
		margin: 0;
		color: var(--neutral-600);
		font-weight: 500;
		font-size: var(--font-size-large);
		padding: var(--space-2xs) var(--space-s);
		transition: var(--transition);
	}

	button:hover {
		cursor: pointer;
	}

	.selected {
		border-bottom: 2px solid var(--primary-500);
		font-weight: 600;
		color: var(--primary-500);
	}
</style>
