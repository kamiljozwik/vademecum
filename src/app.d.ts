// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// piece of server side state, we can access from any server side endpoints
		interface Locals {
			userID?: string;
			userEmail?: string;
		}
		// interface PageData {}
		// interface Platform {}
	}

	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:outclick'?: CompositionEventHandler<T>;
		}
	}
}

export {};
