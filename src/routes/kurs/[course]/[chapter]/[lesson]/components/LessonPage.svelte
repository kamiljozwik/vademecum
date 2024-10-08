<script lang="ts">
  import { page } from "$app/stores";
  import DiscordWidget from "$lib/components/DiscordWidget.svelte";
  import VideoPlayer from "$lib/components/video/VideoPlayer.svelte";
  import { cn } from "$lib/utils/cn";
  import type { getChaptersWithLessons } from "$lib/utils/courses/getChaptersWithLessons";
  import "$lib/styles/code.css";
  import { removeEmoji } from "$lib/utils/removeEmoji";
  import ExternalLink from "$lib/components/ui/ExternalLink.svelte";
  import LessonNav from "./LessonNav.svelte";

  export let chaptersWithLessons: ReturnType<typeof getChaptersWithLessons>;
  export let discordApi = "";
  export let discordLink = "";

  $: lessonsInChapter =
    chaptersWithLessons.get($page.params.chapter)?.lessons ?? [];
  $: lesson = lessonsInChapter.find(
    (l) => l.lessonMeta.slug === $page.params.lesson
  );

  $: prev = lessonsInChapter
    ?.filter((ld) => ld.lessonMeta?.order < (lesson?.lessonMeta.order ?? 0))
    .sort((a, b) => b.lessonMeta?.order - a.lessonMeta?.order)[0]?.lessonMeta;
  $: next = lessonsInChapter
    ?.filter((ld) => ld.lessonMeta.order > (lesson?.lessonMeta.order ?? 0))
    .sort((a, b) => a.lessonMeta?.order - b.lessonMeta?.order)[0]?.lessonMeta;
</script>

<article class="mt-[10%]">
  {#key $page.params.lesson}
    {#if lesson?.lessonMeta.video}
      <VideoPlayer video={lesson?.lessonMeta.video} next={next?.slug} />
    {/if}

    <LessonNav {prev} {next} />
  {/key}

  <header class="mb-6 border-b-2 border-dashed border-neutral">
    <div>
      <a href={"../"} class="text-sm uppercase no-underline hover:text-white"
        >{$page.params.course.replaceAll("-", " ")}</a
      >
      <span>/</span>
      <a href={"./"} class="text-sm uppercase no-underline hover:text-white"
        >{$page.params.chapter.replaceAll("-", " ")}</a
      >
    </div>
    <h1>
      <span class="gradient-text mb-0 inline-block"
        >{removeEmoji(lesson?.lessonMeta.title)}</span
      >
    </h1>
    <p class="mb-4 mt-6 text-base">{lesson?.lessonMeta.description ?? ""}</p>
  </header>

  <section class="prose-course-entry">
    <div>
      <svelte:component this={lesson?.lessonContent} />
    </div>

    <LessonNav {prev} {next} />

    {#if lesson?.lessonMeta.extra_links}
      <div>
        <h2>🔗 Dodatkowe materiały:</h2>
        <ul class="not-prose list-none p-0">
          {#each lesson?.lessonMeta.extra_links as link}
            <li class="not-prose marker py-1">
              <ExternalLink
                href={link.href}
                class="flex gap-2 no-underline hover:underline"
              >
                {#if link.href.includes("youtube.com")}
                  <img class="w-6" src="/img/icons/youtube.svg" alt="" />
                {:else}
                  <img class="w-6" src="/img/icons/document.svg" alt="" />
                {/if}
                <span>{link.title}</span>
              </ExternalLink>
              <div>{link.desc ?? ""}</div>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </section>

  <DiscordWidget {discordApi} {discordLink} />
</article>
