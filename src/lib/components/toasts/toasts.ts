import { writable } from 'svelte/store';

type Toast = {
	id?: string;
	type: 'success' | 'error' | 'info' | 'warning';
	title?: string;
	message?: string;
};

function toastStore() {
	const { subscribe, set, update } = writable<Toast[]>([]);

	return {
		subscribe,
		add: (t: Toast) =>
			update((c) => [
				...c,
				{
					id: Math.random().toString().substring(2, 9),
					title: defaultTitles[t.type],
					message: defaultMessages[t.type],
					...t
				}
			]),
		remove: (t: Toast) => update((c) => c.filter((i) => i.id !== t.id)),
		reset: () => set([])
	};
}

export const toasts = toastStore();

const defaultTitles = {
	success: 'Sukces 🎉',
	error: 'Wystąpił błąd 😢',
	info: '',
	warning: ''
} as const;

const defaultMessages = {
	success: 'Operacja zakończona sukcesem!',
	error:
		'Spróbuj ponownie lub <a class="link" href="/kontakt" target="_blank">skontaktuj</a> się z nami.',
	info: '',
	warning: ''
} as const;
