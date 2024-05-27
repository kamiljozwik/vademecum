<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-expect-error TODO: fix this
	import { page } from '$app/stores';
	// @ts-expect-error TODO: fix this
	import { goto } from '$app/navigation';
	import { UniversalPlayer } from './UniversalPlayer';

	import { autoplay } from './autoplayStore';
	import { canAccess } from '$lib/firebase';

	const hasAccess = canAccess();

	export let video: string | undefined;
	export let next = '';
	export let free = false;
	export let single = false; // prevent autoplay on single video pages
	export let url = '';

	let type: 'vimeo' | 'youtube' = video?.includes('vimeo') ? 'vimeo' : 'youtube';
	let player: UniversalPlayer;
	let ref: HTMLElement;
	let autoplayUnsub: Function;
	let showAutoplayCover = false;
	let timeout: NodeJS.Timeout;
	let countdown: NodeJS.Timeout;
	let countdownTime = 10;

	onMount(() => {
		if (video && !player && ($hasAccess || free)) {
			initPlayer();
		}

		// Cleanup: runs on disconnected (destroyed)
		return () => {
			player?.destroy();
			timeout && clearTimeout(timeout);
			countdown && clearInterval(countdown);
			autoplayUnsub && autoplayUnsub();
		};
	});

	async function initPlayer() {
		if (!video) return;

		player = await UniversalPlayer.create(video, ref, type);

		// Route change on end
		player.onEnded(() => {
			if (!single && $autoplay && next) {
				showAutoplayCover = true;
				startCountdown();
				timeout = setTimeout(() => {
					goto(next);
				}, 10000);
			}
		});
	}

	function startCountdown() {
		clearInterval(countdown);
		countdown = setInterval(() => {
			countdownTime--;
		}, 1000);
	}

	function cancelAutoplay() {
		showAutoplayCover = false;
		countdownTime = 10;
		clearTimeout(timeout);
		clearInterval(countdown);
	}
</script>

{#if free || $hasAccess}
	<div class="video-player relative aspect-video w-full bg-black bg-opacity-50">
		<div class="vid" bind:this={ref} />
		<div
			class="absolute inset-0 hidden flex-col items-center justify-center bg-black bg-opacity-95 text-lg"
			class:active={showAutoplayCover}
		>
			<p class="my-4">
				Następna lekcja za <span class="font-display text-4xl">{countdownTime}</span> sekund...
			</p>
			<div>
				<button class="btn btn-ghost" on:click={cancelAutoplay}>Anuluj</button>
				<button
					class="btn btn-primary"
					on:click={() => {
						goto(next + '?autoplay=true');
					}}>Dalej</button
				>
			</div>
		</div>
	</div>
{:else}
	<div
		class="flex aspect-video animate-pulse flex-col items-center justify-center bg-black bg-opacity-75 text-center text-xl"
	>
		<h5 class="hidden text-yellow-300 md:block">Nie masz dostępu do tej lekcji</h5>
		<a href={`/${url}/${$page.params.course}#dostep`} class="btn btn-primary mt-4"
			>Uzyskaj dostęp do kursu</a
		>
	</div>
{/if}

<style lang="scss">
	.active {
		@apply flex;
	}
</style>
