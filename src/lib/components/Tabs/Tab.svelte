<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class="large-text" class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
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

		padding: var(--space-2xs) var(--space-s);
		transition: var(--transition);
		font-family: 'Fancy';
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
