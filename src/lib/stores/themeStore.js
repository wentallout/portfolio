import { browser } from '$app/environment';
import { writable } from 'svelte/store';

// we set the theme in `app.html` to prevent flashing
const userTheme = browser && localStorage.getItem('color-scheme');

// create the store
export const theme = writable(userTheme ?? 'dark');

// set the theme
export function setTheme(newTheme) {
	theme.set(newTheme);
}

// update the theme
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

		document.documentElement.setAttribute('color-scheme', newTheme);
		localStorage.setItem('color-scheme', newTheme);

		return newTheme;
	});
}
