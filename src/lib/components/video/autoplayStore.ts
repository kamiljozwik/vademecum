import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const init = () => {
	try {
		return browser && JSON.parse(localStorage?.autoplay ?? true);
	} catch (error) {
		return true;
	}
};

export const autoplay = writable(init());

autoplay.subscribe((v) => {
	try {
		if (browser) localStorage.autoplay = v;
	} catch (error) {
		return null;
	}
});
