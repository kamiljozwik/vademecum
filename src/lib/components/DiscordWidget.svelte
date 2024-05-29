<script lang="ts">
  import ExternalLink from "$lib/components/ui/ExternalLink.svelte";
  import { onMount } from "svelte";

  export let discordApi = "";
  export let discordLink = "";

  let data: any;

  onMount(async () => {
    if (!discordApi || !discordLink) return;

    let res = await fetch(
      `https://discord.com/api/guilds/${discordApi}/widget.json`
    );
    data = await res.json();
  });
</script>

{#if discordApi && discordLink}
  <div
    class="mx-auto mb-16 mt-16 h-1 w-24 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
  />
  <section class="my-12 flex flex-col items-center justify-between">
    <h2 class="mb-4 text-2xl">Masz pytania lub uwagi?</h2>
    <ExternalLink
      href="https://discord.gg/{discordLink}"
      class="btn bg-purple-600 hover:bg-purple-500"
    >
      <span class="mr-2 w-8 text-gray-200"
        ><img alt="discord icon" src="/img/icons/discord.svg" /></span
      >
      <span class="text-gray-200">Przejdź na Discord</span>
    </ExternalLink>

    {#if data}
      <div class="mt-2">
        <span class="relative inline-flex h-3 w-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
          ></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"
          ></span>
        </span>
        <span class="font-display text-lg text-green-500"
          >{data.presence_count}</span
        >
        <span class="text-gray-200">online</span>
      </div>
    {/if}
  </section>
{/if}
