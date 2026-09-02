/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}

	interface Locals {
		user: { id: string; email: string; name: string; role: string } | null;
		requestId: string;
	}

	interface Error {
		message: string;
		requestId?: string;
	}
}
