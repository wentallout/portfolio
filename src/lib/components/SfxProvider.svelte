<script lang="ts">
	/**
	 * SfxProvider — mount once in +layout.
	 * Demonstrates https://svelte.dev/tutorial/svelte/media-elements
	 * via bound <audio> elements, but delegates playback to `sfx` store
	 * so any component can call `sfx.playShoot()` without holding refs.
	 *
	 * Also auto-plays on revolver events as a fallback if callers forget.
	 */
	import { onMount } from 'svelte';
	import { sfx } from '#lib/stores/sfx.svelte.js';

	let shootEl: HTMLAudioElement;
	let reloadEl: HTMLAudioElement;

	// media-elements bindings (per tutorial) — keep refs in sync
	let shootTime = $state(0);
	let reloadTime = $state(0);
	let shootDuration = $state(0);
	let reloadDuration = $state(0);
	let shootPaused = $state(true);
	let reloadPaused = $state(true);

	// keep DOM volume in sync when sfx.volume changes (one-way, no bind loop)
	$effect(() => {
		if (shootEl) shootEl.volume = sfx.volume;
		if (reloadEl) reloadEl.volume = sfx.volume;
	});

	onMount(() => {
		sfx.init(shootEl, reloadEl);

		// Single source of truth for SFX — all sounds triggered via revolver events.
		// TargetCursor no longer calls sfx directly to avoid double playback.
		const onShoot = () => sfx.playShoot();
		const onReload = () => sfx.playReload();
		window.addEventListener('revolver:shoot', onShoot as EventListener);
		window.addEventListener('revolver:reload-start', onReload as EventListener);
		return () => {
			window.removeEventListener('revolver:shoot', onShoot as EventListener);
			window.removeEventListener('revolver:reload-start', onReload as EventListener);
		};
	});
</script>

<!-- Hidden global audio elements — preload + media bindings (https://svelte.dev/tutorial/svelte/media-elements) -->
<audio
	bind:this={shootEl}
	bind:currentTime={shootTime}
	bind:duration={shootDuration}
	bind:paused={shootPaused}
	preload="auto"
	src={sfx.sources.shoot}
	aria-hidden="true"
	style="display:none">
</audio>

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
