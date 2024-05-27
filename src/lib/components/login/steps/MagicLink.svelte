<script lang="ts">
	import { sendPasswordlessEmail } from '$lib/firebase/auth/sendPasswordlessEmail';
	import sanitizeHtml from 'sanitize-html';

	let emailEl: HTMLInputElement;
	let isValid = false;
	let isTouched = false;
	let loading = false;
	let confirmation: string | undefined;
	let error = false;

	function validate() {
		isValid = emailEl.validity.valid;
	}

	async function handleSubmit() {
		const sanitizedEmail = sanitizeHtml(emailEl.value);
		const url = window.location.origin;
		loading = true;
		const { res, hasError } = await sendPasswordlessEmail(sanitizedEmail.toLowerCase(), url);
		loading = false;
		error = hasError ?? false;
		confirmation = res;
		emailEl.value = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="text-left">
	<h2 class="text-base font-normal">Zaloguj się za pomocą adresu email</h2>
	<p class="mb-6 text-sm">Na podany adres zostanie wysłany tzw. "magic link"</p>
	<div class="flex flex-col">
		<label for="email">Email</label>
		<input
			class="input input-bordered outline-none focus-visible:outline-none"
			type="email"
			name="email"
			bind:this={emailEl}
			on:input={validate}
			on:focus|once={() => (isTouched = true)}
			class:touched={isTouched}
			required
		/>
		{#if error}
			<p class="text-sm text-red-500">Coś poszło nie tak. Odśwież stronę i spróbuj ponownie.</p>
		{/if}
		{#if confirmation}
			<p class="text-sm text-green-500">{confirmation}</p>
		{/if}

		<input
			class="btn btn-primary mt-2 w-28"
			type="submit"
			value={loading ? 'Wysyłam...' : 'Wyślij'}
			class:disabled={!isValid || loading}
		/>
	</div>
</form>

<style>
	input[type='email']:valid {
		@apply border-green-500;
	}
	.disabled {
		@apply cursor-not-allowed opacity-50;
	}
	.touched {
		@apply border-2 border-blue-500;
	}
</style>
