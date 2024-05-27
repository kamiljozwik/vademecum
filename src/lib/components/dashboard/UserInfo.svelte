<script lang="ts">
	import { goto } from '$app/navigation';
	import AdminCheck from '../login/AdminCheck.svelte';
	import { signOutAll, user, userDataStore } from '$lib/firebase';

	const logout = async () => {
		await signOutAll();
		goto('/');
	};
</script>

<div class="flex flex-col items-center justify-center gap-8 lg:flex-row">
	<div class="flex flex-col items-center">
		<div class="avatar">
			<div class="w-48 rounded-full">
				<img src={$userDataStore?.photoURL || '/user.png'} alt="avatar" />
			</div>
		</div>
		<small class="text-base"><a class="link" href="/login/photo">Zmień zdjęcie</a></small>
	</div>
	<div class="flex flex-col items-center gap-3 text-xl font-bold lg:items-start">
		<div>📫 {$user?.email}</div>
		<div>
			{#if $userDataStore?.username}
				<div>👤<span class="gradient-text">@</span>{$userDataStore?.username}</div>
			{:else}
				<a href="/login/username" class="btn btn-primary btn-sm">Wybierz swoją nazwę użytkownika</a>
			{/if}
		</div>
		<button on:click={logout} class="btn btn-warning btn-sm mt-2 w-24">Wyloguj</button>
		<AdminCheck>
			<a href="/dashboard/admin" class="btn btn-secondary btn-sm mt-2 w-24">Admin</a>
		</AdminCheck>
	</div>
</div>
