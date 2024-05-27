<script lang="ts">
	import { SignedIn, SignedOut, docStore, getFirebaseContext, userStore } from 'sveltefire';
	import { cn } from '$lib/components/utils/cn';

	export let mobile = false;

	const { auth, firestore } = getFirebaseContext();
	const user = userStore(auth);
	$: userData = docStore<any>(firestore, `users/${$user?.uid}`);
</script>

<SignedIn>
	<a href="/dashboard">
		<div class="avatar items-center">
			<div class="w-12 rounded-full">
				<img src={$userData?.photoURL || '/user.png'} alt="Avatar użytkownika" />
			</div>
			{#if mobile}
				<span class="top-1 px-4">Dashboard</span>
			{/if}
		</div>
	</a>
</SignedIn>

<SignedOut>
	<a href="/login" class={cn('btn btn-accent btn-outline btn-sm')}>Login</a>
</SignedOut>
