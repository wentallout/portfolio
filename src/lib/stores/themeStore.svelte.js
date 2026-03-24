import { browser } from '$app/environment';

class ThemeStore {
	#theme = $state(browser ? localStorage.getItem('color-scheme') ?? 'dark' : 'dark');

	get current() {
		return this.#theme;
	}

	set current(value) {
		this.#theme = value;
		if (browser) {
			document.documentElement.setAttribute('color-scheme', value);
			localStorage.setItem('color-scheme', value);
		}
	}

	toggle() {
		this.current = this.#theme === 'dark' ? 'light' : 'dark';
	}
}

export const theme = new ThemeStore();
