<script lang="ts">
	import AuthCheck from '../AuthCheck.svelte';
	import { user, userDataStore, storage, updateUserData } from '$lib/firebase';
	import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

	const MAX_FILE_SIZE = 2; // in MB

	let previewURL: string;
	let uploading = false;
	let errorMessage = '';

	async function upload(e: any) {
		const file = e.target?.files[0];
		const fileSize = Number((file.size / (1024 * 1024)).toFixed(2)); // in MB

		if (fileSize > MAX_FILE_SIZE) {
			errorMessage = `Plik jest za duży 🐘`;
			return;
		}

		if (!file.type.startsWith('image/')) {
			errorMessage = 'Wybierz plik graficzny 📸';
			return;
		}

		errorMessage = '';
		uploading = true;
		previewURL = URL.createObjectURL(file);

		if ($user?.uid) {
			const storageRef = ref(storage, `users/${$user.uid}/profile.png`);
			const result = await uploadBytes(storageRef, file);
			const url = await getDownloadURL(result.ref);

			await updateUserData({ photoURL: url });
			uploading = false;
			return;
		} else {
			uploading = false;
			return;
		}
	}

	async function remove() {
		uploading = true;
		if ($user?.uid) {
			const storageRef = ref(storage, `users/${$user.uid}/profile.png`);
			await deleteObject(storageRef);
			await updateUserData({ photoURL: '' });
			uploading = false;
			previewURL = '';
			return;
		} else {
			uploading = false;
			return;
		}
	}
</script>

<AuthCheck>
	<h2 class="card-title">Ustaw swoje zdjęcie profilowe</h2>
	{#if !$userDataStore?.photoURL}
		<p class="mb-4 text-sm">⌛Możesz to zrobić później</p>
	{/if}

	<form>
		<div class="my-6 flex flex-col items-center">
			<img
				src={previewURL || $userDataStore?.photoURL || '/user.png'}
				alt="photoURL"
				width="256"
				height="256"
			/>
			<input
				on:change={upload}
				name="photoURL"
				type="file"
				class="file-input my-6 w-full max-w-xs"
				accept="image/*"
			/>
			<small>{`Maksymalny rozmiar pliku: ${MAX_FILE_SIZE}MB.`}</small>
			{#if errorMessage}
				<p class="mt-4 text-red-500">{errorMessage}</p>
			{/if}
			{#if $userDataStore?.photoURL}
				<button class="btn btn-ghost mt-6" on:click={remove}>Usuń zdjęcie</button>
			{/if}
			{#if uploading}
				<div class="text-accent">
					<p class="mt-6">Zapisywanie...</p>
					<span class="loading loading-dots loading-md" />
				</div>
			{/if}
		</div>
	</form>

	<a href="/dashboard" class="btn btn-primary mt-8">Dashboard</a>
</AuthCheck>
