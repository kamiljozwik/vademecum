<script lang="ts">
  import Links from "./Links.svelte";
  import MoreIcon from "./MoreIcon.svelte";
  import type { TopNavLink } from "./types";

  export let links: TopNavLink[] = [];
</script>

<div
  class="navbar relative z-10 mx-auto max-w-screen-xl justify-between px-12 py-6"
>
  <!-- Logo -->
  <div>
    <slot name="logo">
      <a href="/" class="w-48"
        ><img id="logo" src="/img/logo-white.svg" alt="logo" /></a
      >
    </slot>
  </div>

  <!-- Nav links -->
  <div>
    <!-- Links on big screen -->
    <nav class="hidden items-center lg:flex">
      <Links {links} />
    </nav>

    <!-- Dropdown menu on small screen -->
    <div class="dropdown">
      <button tabindex="0" class="btn btn-ghost lg:hidden">
        <MoreIcon />
      </button>
      <nav class="relative right-[190px]">
        <Links full={false} {links} />
      </nav>
    </div>
  </div>
</div>
