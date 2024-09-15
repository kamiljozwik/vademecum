<script lang="ts">
  import { page } from "$app/stores";
  import { cn } from "$lib/utils/cn";
  import type { Lesson } from "$lib/utils/courses/types";

  export let prev: Lesson;
  export let next: Lesson;
</script>

<nav class="mb-6 flex justify-center items-center rounded-lg px-4 py-6">
  <div>
    <a
      title="Poprzednia lekcja"
      class={cn("btn btn-neutral", { "btn-disabled": !prev })}
      href={`${prev?.slug}`}>◀</a
    >
    <a
      title="Strona główna tego kursu"
      class="btn btn-neutral"
      href={`/kurs/${$page.params.course}`}>🏠</a
    >
    <a
      title="Następna lekcja"
      class={cn("btn btn-neutral", {
        "btn-disabled": !next,
      })}
      href={`${next?.slug}`}>►</a
    >
  </div>
</nav>
