<script lang="ts">
	// @ts-expect-error TODO: fix this
	import { page } from '$app/stores';

	import { setProgress } from '$lib/firebase/db/utils/trackCourseProgress';
	import { canAccess, userDataStore } from '$lib/firebase';

	const hasAccess = canAccess();

	export let quiz = false;
	export let free = false;

	$: progress = {
		course: $page.params.course,
		lesson: `${$page.params.chapter}/${$page.params.lesson}`
	};

	async function mark(isComplete: boolean) {
		if (isComplete) {
			await setProgress({
				...progress,
				complete: true
			});
		} else {
			await setProgress({
				...progress,
				complete: false
			});
		}
	}
</script>

<span class="flex min-w-[48px] flex-col items-center justify-center">
	{#if free || $hasAccess}
		{#if $userDataStore?.progress?.[progress.course]?.includes(progress.lesson)}
			<button
				on:click={() => mark(false)}
				class="cursor-pointer rounded-full border-none fill-green-500 text-green-500 outline-none transition-transform hover:-translate-y-0.5"
			>
				<svg viewBox="0 0 512 512" class="w-8"
					><path
						d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
					/></svg
				>
			</button>
			<span class="relative fill-green-500 text-xs text-green-500">ukończone</span>
		{:else}
			<button
				on:click={() => mark(true)}
				class="cursor-pointer rounded-full border-none fill-neutral-300 outline-none transition-transform hover:-translate-y-0.5 hover:fill-green-500"
			>
				<svg viewBox="0 0 512 512" class="w-8"
					><path
						d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
					/></svg
				>
			</button>
			<span class="relative text-xs text-yellow-500" class:pink={quiz}
				>{quiz ? 'pop quiz' : 'nieukończone'}</span
			>
		{/if}
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" class="svg-sm w-8 text-purple-500" viewBox="0 0 448 512"
			><path
				fill="currentColor"
				d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
			/></svg
		>
	{/if}
</span>
