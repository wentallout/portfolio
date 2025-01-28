import { writable } from 'svelte/store';

export const isPlaying = writable(false);

export const audioPlayerEl = writable();

export const musicList = writable([
	{
		audio: '',
		name: 'Cant See'
	}
]);

/**
 * Formats the given time in seconds into a string representation of minutes and seconds.
 *
 * @param {number} seconds - The time in seconds to be formatted.
 * @return {string} The formatted time in the format "minutes:seconds".
 */
export const formatMusicTime = (seconds) => {
	if (isNaN(seconds)) {
		return '0:00';
	}

	const minutes = Math.floor(seconds / 60);
	seconds = Math.floor(seconds % 60);

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	return `${minutes}:${seconds}`;
};
