import { writable, get } from 'svelte/store';

const bulletsStore = writable(6);
const reloadingStore = writable(false);
export const maxBullets = 6;

export function getRevolverState() {
	return {
		get bullets() {
			return get(bulletsStore);
		},
		get reloading() {
			return get(reloadingStore);
		},
		get maxBullets() {
			return maxBullets;
		},
		subscribe: bulletsStore.subscribe
	};
}

// reactive getters for Svelte 5 $derived compatibility via stores
export const bullets = bulletsStore;
export const reloading = reloadingStore;

export function tryShoot(): boolean {
	if (get(reloadingStore)) return false;
	const b = get(bulletsStore);
	if (b <= 0) {
		triggerReload();
		return false;
	}
	bulletsStore.set(b - 1);
	window.dispatchEvent(new CustomEvent('revolver:shoot', { detail: { remaining: b - 1 } }));
	// SOUND HOOK: shoot sound
	if (b - 1 === 0) triggerReload();
	return true;
}

export function triggerReload() {
	if (get(reloadingStore)) return;
	reloadingStore.set(true);
	window.dispatchEvent(new CustomEvent('revolver:reload-start'));
	setTimeout(() => {
		bulletsStore.set(maxBullets);
		reloadingStore.set(false);
		window.dispatchEvent(new CustomEvent('revolver:reload-done'));
	}, 1100);
}

export function isReloading() {
	return get(reloadingStore);
}

export function getBullets() {
	return get(bulletsStore);
}
