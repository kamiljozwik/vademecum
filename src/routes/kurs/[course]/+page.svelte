<script async lang="ts">
  import { page } from "$app/stores";
  import CoursePage from "./components/CoursePage.svelte";
  import PageHeader from "$lib/components/ui/PageHeader.svelte";

  import ExternalLink from "$lib/components/ui/ExternalLink.svelte";

  export let data;

  $: course = data.courses.find((c) => c.meta.slug === $page.params.course);
</script>

<main>
  <PageHeader title={course?.meta.title} subtitle={course?.meta.description} />
  <div class="mb-12 flex justify-center">
    <div class="badge badge-success badge-lg p-4 text-white">
      Zaktualizowany {new Date(course?.meta.lastmod ?? "").toLocaleDateString(
        "pl-PL",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )}
    </div>
  </div>
  <div class="mb-16 flex items-center justify-center gap-4">
    <div><img src="/img/avatar.webp" alt="avatar" /></div>
    <div>
      <div class="text-white">
        Kurs przygotowany przez <ExternalLink
          class="gradient-text link font-bold underline"
          href="https://www.frontstack.pl/o-mnie">Kamil Józwik</ExternalLink
        >
      </div>
      <div>
        Doświadczony developer oraz twórca <ExternalLink
          class="link"
          href="https://frontstack.pl">frontstack.pl</ExternalLink
        >
      </div>
    </div>
  </div>
  <CoursePage {course} chaptersWithLessons={data.chaptersWithLessons} />
</main>
