<script lang="ts">
	import AuthCheck from '../AuthCheck.svelte';
	import { db, userDataStore, user } from '$lib/firebase';
	import { doc, getDoc, serverTimestamp, writeBatch } from 'firebase/firestore';
	import sanitizeHtml from 'sanitize-html';

	let username = '';
	let loading = false;
	let isAvailable = false;

	let debounceTimer: NodeJS.Timeout;

	const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

	$: isValid = username?.length > 2 && username.length < 16 && re.test(username);
	$: isTouched = username.length > 0;
	$: isTaken = isValid && !isAvailable && !loading;

	async function checkAvailability() {
		isAvailable = false;
		clearTimeout(debounceTimer);

		loading = true;

		debounceTimer = setTimeout(async () => {
			const ref = doc(db, 'usernames', username);
			const exists = await getDoc(ref).then((doc) => doc.exists());

			isAvailable = !exists;
			loading = false;
		}, 500);
	}

	async function confirmUsername() {
		if (!$user) return;

		const batch = writeBatch(db);

		const sanitizedUsername = sanitizeHtml(username);

		batch.set(doc(db, 'usernames', sanitizedUsername), {
			uid: $user.uid,
			createdAt: serverTimestamp()
		});
		batch.update(doc(db, 'users', $user.uid), { username: sanitizedUsername });

		await batch.commit();

		username = '';
		isAvailable = false;
	}
</script>

<AuthCheck>
	{#if $userDataStore?.username}
		<p class="text-lg">
			Twoja nazwa użytkownika to <span class="font-bold text-success"
				>@{$userDataStore.username}</span
			>
		</p>
		<small class="text-sm">Nazwa użytkownika nie może być zmieniona</small>
		<a class="btn btn-primary mt-6" href="/login/photo">Wybierz zdjęcie profilowe</a>
	{:else}
		<h2 class="card-title">Wybierz swoją nazwę użytkownika</h2>
		<p class="mb-4 text-sm">⌛Możesz to zrobić później</p>

		<p class="text-base">
			Cenimy Twoją prywatność i jeżeli nie chcesz ujawniać swojej tożsamości w kontaktach z innymi
			użytkownikami, możesz wybrać dowolną nazwę użytkownika.
		</p>
		<p class="text-base">⚠️ Nazwa użytkownika nie może być zmieniona w przyszłości.</p>

		<form class="mt-6 lg:w-2/5" on:submit|preventDefault={confirmUsername}>
			<div class="flex items-center gap-1">
				<span class="gradient-text relative bottom-1 text-3xl">@</span>
				<input
					type="text"
					placeholder="Nazwa użytkownika..."
					class="input w-full"
					bind:value={username}
					on:input={checkAvailability}
					class:input-error={!isValid && isTouched}
					class:input-warning={isTaken}
					class:input-success={isAvailable && isValid && !loading}
				/>
			</div>
			<div class="min-h-16 my-4 w-full">
				{#if loading}
					<p class="text-secondary">Sprawdzanie dostępności</p>
				{/if}

				{#if !isValid && isTouched}
					<p class="text-sm text-error">Min. 3 znaki, max. 16 znaków.</p>
					<p class="text-sm text-error">Tylko znaki alfanumeryczne</p>
				{/if}

				{#if isValid && !isAvailable && !loading}
					<p class="text-sm text-warning">
						Nazwa @{username} jest już zajęta.
					</p>
					<p class="text-sm text-warning">Spróbuj czegoś innego.</p>
				{/if}

				{#if isAvailable && isValid}
					<button class="btn btn-success">Potwierdź</button>
				{/if}
			</div>
		</form>
		<div class="flex gap-2">
			<a href="/login/photo" class="btn btn-primary">Wybierz zdjęcie profilowe</a>
		</div>
	{/if}
</AuthCheck>
