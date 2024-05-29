<script lang="ts">
  import { cn } from "$lib/utils/cn";

  export let prefix = "";
  export let title = "";
  export let subtitle = "";
  export let link = "";
  export let linkText = "Przejdź do kursu";
  export let uppercase = false;
</script>

<div class="hero my-14">
  <div class="hero-content w-full flex-col lg:w-4/5">
    <header class="text-center">
      {#if prefix}
        <p class="mx-auto mb-4 w-full text-sm lg:w-4/5">{prefix}</p>
      {/if}
      <h1 class={cn({ uppercase })}>
        {#if title}
          {title}
        {:else if $$slots.default}
          <slot />
        {/if}
      </h1>
      <p class="mx-auto w-full py-6 lg:w-4/5">
        {subtitle}
      </p>
      {#if link}
        <a href={link} class="btn btn-primary">{linkText}</a>
      {/if}
    </header>
  </div>
</div>
