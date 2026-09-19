<script lang="ts">
	/**
	 * SfxProvider — mount once in +layout.
	 *
	 * Global SFX wiring for `@rexa-developer/tiks`:
	 * 1. `sfx.init()` — creates the shared Web Audio engine (autoplay-safe,
	 *    respects prefers-reduced-motion, persisted mute).
	 * 2. `bindTiks()` — enables declarative `data-tiks="click|toggle|..."`.
	 * 3. One delegated click listener — every button/link/toggle plays the
	 *    right sound with zero per-component edits.
	 * 4. Event bridge — `window.dispatchEvent(new CustomEvent('sfx:success'))`
	 *    plays a sound from anywhere (server actions, toasts, async results).
	 *
	 * Per-element control:
	 * - `data-sfx="success"` — override sound for this subtree.
	 * - `data-sfx="none"` or `data-no-sfx` — silence this subtree.
	 */
	import { onMount } from 'svelte';
	import { bindTiks } from '@rexa-developer/tiks';
	import { sfx, type SfxName } from '#lib/stores/sfx.svelte.js';

	const VALID: ReadonlySet<string> = new Set([
		'click',
		'toggle',
		'success',
		'error',
		'warning',
		'hover',
		'pop',
		'swoosh',
		'notify',
		'none'
	]);

	function readToggleState(el: Element): boolean {
		if (el instanceof HTMLInputElement && (el.type === 'checkbox' || el.type === 'radio')) {
			return el.checked;
		}
		return el.getAttribute('aria-pressed') === 'true' || el.getAttribute('aria-checked') === 'true';
	}

	function resolveSound(target: HTMLElement): { name: SfxName; toggleOn: boolean } | null {
		// Explicit opt-out wins.
		if (target.closest('[data-no-sfx]')) return null;
		// Skip bindTiks-managed subtrees — bindTiks already plays for them.
		if (target.closest('[data-tiks]')) return null;

		// Explicit override for this subtree.
		const overrideEl = target.closest('[data-sfx]');
		if (overrideEl) {
			const raw = (overrideEl.getAttribute('data-sfx') ?? '').toLowerCase();
			if (!VALID.has(raw) || raw === 'none') return null;
			const name = raw as SfxName;
			return { name, toggleOn: name === 'toggle' ? readToggleState(target) : true };
		}

		// Toggles: checkbox, radio, switch roles, pressed buttons.
		const toggleEl = target.closest(
			'input[type="checkbox"], input[type="radio"], [role="switch"], [aria-pressed], [aria-checked]'
		);
		if (toggleEl) return { name: 'toggle', toggleOn: readToggleState(toggleEl as HTMLElement) };

		// Text entry widgets: silence (typing / picking text isn't a tap).
		// Submit-type inputs still count as buttons below.
		if (
			target.closest(
				'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):not([type="color"]):not([type="file"]):not([type="range"]), textarea, select, [contenteditable="true"]'
			)
		) {
			return null;
		}

		// Disabled controls stay silent.
		if (target.closest('[disabled], [aria-disabled="true"]')) return null;

		// Default: buttons, links, summaries, button roles.
		const actionable = target.closest(
			'button, a, summary, [role="button"], [role="link"], [role="tab"], input[type="submit"], input[type="button"]'
		);
		if (actionable) return { name: 'click', toggleOn: true };

		return null;
	}

	onMount(() => {
		sfx.init();
		const unbind = bindTiks();

		const onClick = (e: MouseEvent) => {
			// Only primary-button clicks produce taps.
			if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
			const t = e.target;
			if (!(t instanceof HTMLElement)) return;
			const hit = resolveSound(t);
			if (hit) sfx.play(hit.name, hit.toggleOn);
		};
		// Capture: play tick before navigation / dialog handlers run.
		window.addEventListener('click', onClick, { capture: true, passive: true });

		// Event bridge: `sfx:success`, `sfx:error`, ... from anywhere.
		const bridged: SfxName[] = ['click', 'toggle', 'success', 'error', 'warning', 'pop', 'swoosh', 'notify'];
		const handlers = bridged.map((name) => {
			const fn = (e: Event) => {
				const toggleOn =
					(e as CustomEvent<{ on?: boolean }>).detail?.on ?? readToggleState(e.target as Element);
				sfx.play(name, toggleOn);
			};
			window.addEventListener(`sfx:${name}`, fn as EventListener);
			return { evt: `sfx:${name}`, fn: fn as EventListener };
		});

		return () => {
			unbind();
			window.removeEventListener('click', onClick, { capture: true });
			for (const { evt, fn } of handlers) window.removeEventListener(evt, fn);
		};
	});
</script>
