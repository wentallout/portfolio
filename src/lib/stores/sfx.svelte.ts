/**
 * Global SFX system — tiny singleton around HTMLAudioElement.
 *
 * Uses asset URLs from `src/lib/assets/sfx` and exposes
 * `playShoot()` / `playReload()` + mute/volume controls.
 *
 * Unlock strategy: browsers block autoplay until a user gesture.
 * We eagerly preload but also `unlock()` on the first interaction
 * (click/keydown/touchstart) to warm AudioElements.
 *
 * Overlap: shooting clones the audio node so rapid clicks don't cut
 * each other off. Reload is single-instance (retrigger restarts).
 */
import shootSrc from '#lib/assets/sfx/silenced_pistol.mp3';
import reloadSrc from '#lib/assets/sfx/revolver_cylinder_spin.mp3';

type SfxId = 'shoot' | 'reload';

const VOLUME = 0.2; // single global volume — 20% — no localStorage

class SfxStore {
	muted = $state(false);
	volume = $state(VOLUME);
	unlocked = $state(false);

	// internal audio references — set by SfxProvider or lazily created
	private shootEl: HTMLAudioElement | null = null;
	private reloadEl: HTMLAudioElement | null = null;
	private shootPool: HTMLAudioElement[] = [];
	private poolIdx = 0;
	private boundUnlock = false;

	constructor() {}

	/** Called once from SfxProvider onMount — wires DOM <audio> refs + preload. */
	init(shootEl: HTMLAudioElement, reloadEl: HTMLAudioElement) {
		this.shootEl = shootEl;
		this.reloadEl = reloadEl;
		// tune defaults
		shootEl.preload = 'auto';
		reloadEl.preload = 'auto';
		shootEl.volume = this.volume;
		reloadEl.volume = this.volume;
		this.buildPool();
		this.ensureUnlockListener();
		// reflect muted immediately
		this.applyMute();
	}

	private buildPool(poolSize = 5) {
		if (!this.shootEl) return;
		this.shootPool = [this.shootEl];
		for (let i = 1; i < poolSize; i++) {
			const a = this.shootEl.cloneNode(true) as HTMLAudioElement;
			a.volume = this.volume;
			a.preload = 'auto';
			this.shootPool.push(a);
		}
	}

	private applyMute() {
		const els = [this.shootEl, this.reloadEl, ...this.shootPool].filter(Boolean) as HTMLAudioElement[];
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
		const els = [this.shootEl, this.reloadEl].filter(Boolean) as HTMLAudioElement[];
		for (const el of els) {
			// play+pause to prime decoder without audible output
			const p = el.play();
			if (p) {
				p.then(() => {
					el.pause();
					el.currentTime = 0;
				}).catch(() => {
					// still blocked — will succeed on next real gesture via playShoot()
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
		for (const el of [this.shootEl, this.reloadEl, ...this.shootPool].filter(Boolean) as HTMLAudioElement[]) {
			el.volume = this.volume;
		}
	}

	// --- lazy fallback when SfxProvider not yet mounted (e.g. direct import in TargetCursor)
	private ensureEl(id: SfxId): HTMLAudioElement | null {
		if (typeof window === 'undefined') return null;
		if (id === 'shoot') {
			if (this.shootEl) return this.shootEl;
			const a = new Audio(shootSrc);
			a.preload = 'auto';
			a.volume = this.volume;
			a.muted = this.muted;
			this.shootEl = a;
			this.buildPool();
			return a;
		}
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
		if (id === 'shoot') this.playShoot();
		else this.playReload();
	}

	playShoot() {
		if (this.muted) return;
		this.ensureUnlockListener();
		// pool round-robin for overlapping shots
		let el: HTMLAudioElement | null = null;
		if (this.shootPool.length) {
			el = this.shootPool[this.poolIdx % this.shootPool.length]!;
			this.poolIdx = (this.poolIdx + 1) % this.shootPool.length;
		} else {
			el = this.ensureEl('shoot');
		}
		if (!el) return;
		el.volume = this.volume;
		el.muted = this.muted;
		el.currentTime = 0;
		const p = el.play();
		if (p) p.catch(() => {});
	}

	playReload() {
		if (this.muted) return;
		this.ensureUnlockListener();
		const el = this.ensureEl('reload');
		if (!el) return;
		el.volume = this.volume;
		el.muted = this.muted;
		el.currentTime = 0;
		const p = el.play();
		if (p) p.catch(() => {});
	}

	get sources() {
		return { shoot: shootSrc, reload: reloadSrc };
	}
}

export const sfx = new SfxStore();

// Convenience re-exports for ergonomics
export const playShoot = () => sfx.playShoot();
export const playReload = () => sfx.playReload();
