<script>
	import {
		clickSound,
		hoverSound,
		mutedStore,
		playSound,
		setMuted
	} from '$lib/stores/soundStore.svelte';
	import { onMount } from 'svelte';

	// Use Svelte 5 runes for reactivity
	let isMuted = $state(false);

	// Subscribe to the muted store and update the local state
	$effect(() => {
		const unsubscribe = mutedStore.subscribe((value) => {
			isMuted = value;
		});

		// Cleanup subscription when component is destroyed
		return unsubscribe;
	});

	onMount(() => {
		// For click sounds
		const handleClick = (e) => {
			if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
				playSound(clickSound);
			}
		};

		// For hover sounds
		const handleHover = (e) => {
			if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
				playSound(hoverSound);
			}
		};

		// Add event listeners
		document.addEventListener('click', handleClick);
		document.addEventListener('mouseover', handleHover);

		// Cleanup listeners on unmount
		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('mouseover', handleHover);
		};
	});

	function toggleMuted() {
		setMuted(!isMuted);
	}
</script>

<button
	class="sound-toggle"
	aria-label={isMuted ? 'Unmute sounds' : 'Mute sounds'}
	onclick={toggleMuted}
	type="button">
	{#if isMuted}
		🔇
	{:else}
		🔊
	{/if}
</button>

<style>
	.sound-toggle {
		position: fixed;
		bottom: var(--space-xs);
		left: var(--space-xs);
		background: var(--color-bg-layout);
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: var(--border-radius-light);
		z-index: 100;
	}
</style>
