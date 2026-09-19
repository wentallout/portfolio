/**
 * Global SFX system built on `@rexa-developer/tiks`.
 * Procedural Web Audio sounds — zero audio files, pure synthesis.
 *
 * Zero-maintenance design:
 * - `SfxProvider` (mounted once in +layout) calls `sfx.init()` + `bindTiks()`.
 * - A single delegated click listener plays the right sound for every
 *   button / link / toggle automatically — no per-component edits needed.
 * - Per-element override: `data-sfx="success|error|warning|pop|swoosh|notify|toggle|click|none"`.
 * - Opt out: `data-no-sfx` (or `data-sfx="none"`).
 * - Declarative `data-tiks="..."` attributes also work via `bindTiks()`.
 * - Any code can fire sounds without importing: `dispatch(window, 'sfx:success')`
 *   or `window.dispatchEvent(new CustomEvent('sfx:error'))`.
 *
 * Backwards compat: `playReload()` / `playShoot()` stay silent no-ops
 * (gun audio was removed) so old `revolver:*` listeners don't break.
 */
import { tiks } from '@rexa-developer/tiks';

export type SfxName =
	| 'click'
	| 'toggle'
	| 'success'
	| 'error'
	| 'warning'
	| 'hover'
	| 'pop'
	| 'swoosh'
	| 'notify'
	| 'none';

const STORAGE_KEY = 'sfx-enabled';
const DEFAULT_VOLUME = 0.3;

class SfxStore {
	enabled = $state(true);
	muted = $state(false);
	volume = $state(DEFAULT_VOLUME);
	unlocked = $state(false);
	private ready = false;

	constructor() {
		if (typeof localStorage !== 'undefined') {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw === '0' || raw === 'false') {
					this.enabled = false;
					this.muted = true;
				}
			} catch {
				// ignore — sound still works, preference just isn't persisted
			}
		}
	}

	/** Called once from SfxProvider onMount. Safe to call repeatedly. */
	init(volume = DEFAULT_VOLUME) {
		if (typeof window === 'undefined' || this.ready) return;
		this.ready = true;
		this.volume = volume;
		tiks.init({
			theme: 'soft',
			volume,
			muted: !this.enabled,
			respectReducedMotion: true
		});
		this.unlocked = true;
	}

	private get audible(): boolean {
		return this.ready && this.enabled && !this.muted && typeof window !== 'undefined';
	}

	private persist() {
		try {
			localStorage.setItem(STORAGE_KEY, this.enabled ? '1' : '0');
		} catch {
			// ignore
		}
	}

	setEnabled(v: boolean) {
		this.enabled = v;
		this.muted = !v;
		if (this.ready) {
			if (v) tiks.unmute();
			else tiks.mute();
		}
		this.persist();
	}

	toggleEnabled() {
		this.setEnabled(!this.enabled);
	}

	setMuted(v: boolean) {
		this.setEnabled(!v);
	}

	toggleMuted() {
		this.toggleEnabled();
	}

	setVolume(v: number) {
		this.volume = Math.min(1, Math.max(0, v));
		if (this.ready) tiks.setVolume(this.volume);
	}

	setTheme(t: 'soft' | 'crisp' | 'arcade' | 'glass') {
		if (this.ready) tiks.setTheme(t);
	}

	// --- direct sound methods (explicit use in components) ---
	click() {
		if (this.audible) tiks.click();
	}
	toggle(on: boolean) {
		if (this.audible) tiks.toggle(on);
	}
	success() {
		if (this.audible) tiks.success();
	}
	error() {
		if (this.audible) tiks.error();
	}
	warning() {
		if (this.audible) tiks.warning();
	}
	hover() {
		if (this.audible) tiks.hover();
	}
	pop() {
		if (this.audible) tiks.pop();
	}
	swoosh() {
		if (this.audible) tiks.swoosh();
	}
	notify() {
		if (this.audible) tiks.notify();
	}

	/** Generic play used by the delegated listener + event bridge. */
	play(name: SfxName, toggleOn = true) {
		switch (name) {
			case 'click':
				this.click();
				break;
			case 'toggle':
				this.toggle(toggleOn);
				break;
			case 'success':
				this.success();
				break;
			case 'error':
				this.error();
				break;
			case 'warning':
				this.warning();
				break;
			case 'hover':
				this.hover();
				break;
			case 'pop':
				this.pop();
				break;
			case 'swoosh':
				this.swoosh();
				break;
			case 'notify':
				this.notify();
				break;
			case 'none':
				break;
		}
	}

	// --- backwards compat (intentionally silent — gun audio removed) ---
	playShoot() {
		return;
	}
	playReload() {
		return;
	}
}

export const sfx = new SfxStore();

// Convenience re-exports
export const playShoot = () => sfx.playShoot();
export const playReload = () => sfx.playReload();
