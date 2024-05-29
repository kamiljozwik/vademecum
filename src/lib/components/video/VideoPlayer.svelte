<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { UniversalPlayer } from "./UniversalPlayer";

  export let video: string | undefined;
  export let next = "";

  let type: "vimeo" | "youtube" = video?.includes("vimeo")
    ? "vimeo"
    : "youtube";
  let player: UniversalPlayer;
  let ref: HTMLElement;
  let autoplayUnsub: Function;
  let showAutoplayCover = false;
  let timeout: NodeJS.Timeout;
  let countdown: NodeJS.Timeout;
  let countdownTime = 10;

  onMount(() => {
    if (video && !player) {
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

<div class="video-player relative aspect-video w-full bg-black bg-opacity-50">
  <div class="vid" bind:this={ref} />
  <div
    class="absolute inset-0 hidden flex-col items-center justify-center bg-black bg-opacity-95 text-lg"
    class:active={showAutoplayCover}
  >
    <p class="my-4">
      Następna lekcja za <span class="font-display text-4xl"
        >{countdownTime}</span
      > sekund...
    </p>
    <div>
      <button class="btn btn-ghost" on:click={cancelAutoplay}>Anuluj</button>
      <button
        class="btn btn-primary"
        on:click={() => {
          goto(next + "?autoplay=true");
        }}>Dalej</button
      >
    </div>
  </div>
</div>

<style lang="scss">
  .active {
    @apply flex;
  }
</style>
