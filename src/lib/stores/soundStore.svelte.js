import { Sound } from 'svelte-sound';
import { derived, writable } from 'svelte/store';

// Create a writable store for muted state
const createMutedStore = () => {
	// Load saved preferences
	let initialValue = false;
	if (typeof window !== 'undefined') {
		const savedPrefs = localStorage.getItem('soundPreferences');
		if (savedPrefs) {
			try {
				const { isMuted: savedMute } = JSON.parse(savedPrefs);
				initialValue = savedMute;
			} catch (e) {
				console.error('Error parsing sound preferences:', e);
			}
		}
	}

	// Create the store
	const { set, subscribe, update } = writable(initialValue);

	return {
		setMuted: (value) => {
			set(value);
			// Save to localStorage
			if (typeof window !== 'undefined') {
				localStorage.setItem('soundPreferences', JSON.stringify({ isMuted: value }));
			}
		},
		subscribe,
		toggle: () => update((muted) => !muted)
	};
};

// Create the store
export const mutedStore = createMutedStore();

// Create sounds
export const clickSound = new Sound('/sounds/sfx-click.mp3', {
	loop: false,
	playbackRate: 1,
	volume: 0.3
});

export const hoverSound = new Sound('/sounds/sfx-hover.mp3', {
	loop: false,
	playbackRate: 1,
	volume: 0.3
});

// For backward compatibility
export function getMuted() {
	let isMuted;
	const unsubscribe = mutedStore.subscribe((value) => {
		isMuted = value;
	});
	unsubscribe();
	return isMuted;
}

// Simple playSound function
export function playSound(sound) {
	let isMuted;
	// Get the current value from the store
	const unsubscribe = mutedStore.subscribe((value) => {
		isMuted = value;
	});
	unsubscribe();

	if (!isMuted) {
		sound.play();
	}
}

export function setMuted(value) {
	mutedStore.setMuted(value);
}

// Update sound volumes when muted state changes
if (typeof window !== 'undefined') {
	mutedStore.subscribe((isMuted) => {
		const volume = isMuted ? 0 : 0.3;
		clickSound.volume = volume;
		hoverSound.volume = volume;
	});
}
