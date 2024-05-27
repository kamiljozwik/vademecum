<script lang="ts">
	import { signInWithGoogle, signOutAll, user, userDataStore } from '$lib/firebase';
	import MagicLink from './MagicLink.svelte';
</script>

{#if $user}
	<p>{$user.email}</p>
	<p class="text-center text-success">Jesteś zalogowany(-a) poprawnie 🎉</p>
	<div class="mt-4 flex flex-col gap-4 lg:flex-row">
		{#if $userDataStore?.username}
			<a href="/dashboard" class="btn btn-primary">Dashboard</a>
			<button class="btn btn-warning" on:click={signOutAll}>Wyloguj się</button>
		{:else}
			<a href="/login/username" class="btn btn-primary">Wybierz nazwę użytkownika</a>
		{/if}
	</div>
{:else}
	<div class="mb-8">
		<MagicLink />
		<div class="text-left">
			<h2 class="my-3 mt-8 text-base font-normal">lub za pomocą konta Google</h2>
			<button class="btn btn-primary w-full" on:click={signInWithGoogle}>
				<img width="16" src="/img/icons/google.svg" alt="" />
				<span>Zaloguj z Google</span>
			</button>
		</div>
	</div>
{/if}
