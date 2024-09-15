<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from "$app/stores";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";

  export let data: PageData;

  $: course = $page.params.course;
  $: chapter = $page.params.chapter;
  $: lessonsInChapter = data.chaptersWithLessons.get(chapter)?.lessons ?? [];
  $: chapterMeta = data.chaptersWithLessons.get(chapter)?.chapterMeta;
  $: chapterContent = data.chaptersWithLessons.get(chapter)?.chapterContent;
</script>

<main>
  <PageHeader
    title={chapter.replaceAll("-", " ")}
    subtitle={chapterMeta?.description}
    uppercase
  />

  <article class="prose-blog-entry mx-auto">
    <div>
      <svelte:component this={chapterContent} />
    </div>
    <div class="flex justify-center">
      <img
        class="!mt-0"
        src={`/kurs/${course}/chapters/${chapter}.webp`}
        alt=""
      />
    </div>
  </article>

  <div class="flex flex-col justify-center items-center mt-6">
    <a
      href={`${chapter}/${lessonsInChapter[0].lessonMeta.slug}`}
      class="btn btn-primary max-w-40">Zaczynamy!</a
    >
    <a href={`./`} class="btn btn-link max-w-48 no-underline mt-6"
      >Strona główna kursu</a
    >
  </div>
</main>
