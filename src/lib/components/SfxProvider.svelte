<script lang="ts">
	/**
	 * SfxProvider — mount once in +layout.
	 * Demonstrates https://svelte.dev/tutorial/svelte/media-elements
	 * via bound <audio> elements, but delegates playback to `sfx` store
	 * so any component can call `sfx.playReload()` without holding refs.
	 *
	 * NOTE: gunshot sound was removed — no sound plays on `revolver:shoot`.
	 */
	import { onMount } from 'svelte';
	import { sfx } from '#lib/stores/sfx.svelte.js';

	let reloadEl: HTMLAudioElement;

	// media-elements bindings (per tutorial) — keep refs in sync
	let reloadTime = $state(0);
	let reloadDuration = $state(0);
	let reloadPaused = $state(true);

	// keep DOM volume in sync when sfx.volume changes (one-way, no bind loop)
	$effect(() => {
		if (reloadEl) reloadEl.volume = sfx.volume;
	});

	onMount(() => {
		sfx.init(reloadEl);

		// Single source of truth for SFX — reload sound triggered via revolver events.
		const onReload = () => sfx.playReload();
		window.addEventListener('revolver:reload-start', onReload as EventListener);
		return () => {
			window.removeEventListener('revolver:reload-start', onReload as EventListener);
		};
	});
</script>

<!-- Hidden global audio element — preload + media bindings (https://svelte.dev/tutorial/svelte/media-elements) -->
<audio
	bind:this={reloadEl}
	bind:currentTime={reloadTime}
	bind:duration={reloadDuration}
	bind:paused={reloadPaused}
	preload="auto"
	src={sfx.sources.reload}
	aria-hidden="true"
	style="display:none">
</audio>
