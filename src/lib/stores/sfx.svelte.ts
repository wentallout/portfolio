/**
 * Global SFX system — tiny singleton around HTMLAudioElement.
 *
 * NOTE: gunshot sound was removed — `playShoot()` is a no-op kept
 * only for backwards compat so existing `revolver:shoot` listeners
 * don't break.
 */
import reloadSrc from '#lib/assets/sfx/revolver_cylinder_spin.mp3';

type SfxId = 'reload';

const VOLUME = 0.2; // single global volume — 20% — no localStorage

class SfxStore {
	muted = $state(false);
	volume = $state(VOLUME);
	unlocked = $state(false);

	// internal audio references — set by SfxProvider or lazily created
	private reloadEl: HTMLAudioElement | null = null;
	private boundUnlock = false;

	constructor() {}

	/** Called once from SfxProvider onMount — wires DOM <audio> refs + preload. */
	init(reloadEl: HTMLAudioElement) {
		this.reloadEl = reloadEl;
		// tune defaults
		reloadEl.preload = 'auto';
		reloadEl.volume = this.volume;
		this.ensureUnlockListener();
		// reflect muted immediately
		this.applyMute();
	}

	private applyMute() {
		const els = [this.reloadEl].filter(Boolean) as HTMLAudioElement[];
		for (const el of els) el.muted = this.muted;
	}

	private ensureUnlockListener() {
		if (this.boundUnlock || typeof window === 'undefined') return;
		this.boundUnlock = true;
		const unlock = () => this.unlock();
		window.addEventListener('click', unlock, { once: true, capture: true });
		window.addEventListener('keydown', unlock, { once: true, capture: true });
		window.addEventListener('touchstart', unlock, { once: true, capture: true });
		window.addEventListener('pointerdown', unlock, { once: true, capture: true });
	}

	/** Warm audio elements so subsequent .play() isn't blocked. */
	unlock() {
		if (this.unlocked) return;
		this.unlocked = true;
		const els = [this.reloadEl].filter(Boolean) as HTMLAudioElement[];
		for (const el of els) {
			// play+pause to prime decoder without audible output
			const p = el.play();
			if (p) {
				p.then(() => {
					el.pause();
					el.currentTime = 0;
				}).catch(() => {
					// still blocked — will succeed on next real gesture via playReload()
				});
			}
		}
	}

	setMuted(v: boolean) {
		this.muted = v;
		this.applyMute();
	}

	toggleMuted() {
		this.setMuted(!this.muted);
	}

	setVolume(v: number) {
		this.volume = Math.min(1, Math.max(0, v));
		for (const el of [this.reloadEl].filter(Boolean) as HTMLAudioElement[]) {
			el.volume = this.volume;
		}
	}

	// --- lazy fallback when SfxProvider not yet mounted (e.g. direct import in TargetCursor)
	private ensureEl(id: SfxId): HTMLAudioElement | null {
		if (typeof window === 'undefined') return null;
		if (id === 'reload') {
			if (this.reloadEl) return this.reloadEl;
			const a = new Audio(reloadSrc);
			a.preload = 'auto';
			a.volume = this.volume;
			a.muted = this.muted;
			this.reloadEl = a;
			return a;
		}
		return null;
	}

	play(id: SfxId) {
		if (this.muted) return;
		if (id === 'reload') this.playReload();
	}

	playShoot() {
		// gunshot sound removed — intentionally silent
		return;
	}

	playReload() {
		// all gun audio removed — intentionally silent
		return;
	}

	get sources() {
		return { reload: reloadSrc };
	}
}

export const sfx = new SfxStore();

// Convenience re-exports for ergonomics
export const playShoot = () => sfx.playShoot();
export const playReload = () => sfx.playReload();
