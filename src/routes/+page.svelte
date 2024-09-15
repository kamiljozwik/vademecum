<script lang="ts">
  import CoursesGroup from "$lib/components/ui/CoursesGroup.svelte";
  import Hero from "$lib/components/ui/Hero.svelte";
</script>

<main class="flex flex-col items-center gap-12">
  <Hero />

  <CoursesGroup
    group="html-css"
    courses={[
      {
        title: "Statyczna strona internetowa",
        desc: "Poznaj HTML oraz CSS i zacznij tworzyć profesjonalne strony internetowe.",
        link: "/kurs/statyczna",
        draft: false,
      },
      {
        title: "HTML i CSS - poziom PRO",
        desc: "Najnowsze standardy oraz zaawansowane tematy związane z HTML i CSS",
        link: "/kurs/statyczna-pro",
        draft: true,
      },
    ]}
  />
  <CoursesGroup
    group="javascript"
    courses={[
      {
        title: "Solidne podstawy",
        desc: "Poznaj podstawy języka JavaScript",
        link: "/kurs/js-podstawy",
        draft: false,
      },
    ]}
  />
  <CoursesGroup
    group="repository"
    courses={[
      {
        title: "Git i GitHub",
        desc: "Poznaj podstawy systemu kontroli wersji oraz platformy GitHub",
        link: "/kurs/git-github",
        draft: false,
      },
    ]}
  />
  <CoursesGroup
    group="design-system"
    courses={[
      {
        title: "Design System i biblioteka komponentów",
        desc: "Dowiedz się, czym jest design system i jak zbudować własną bibliotekę komponentów",
        link: "/kurs/design-system",
        draft: false,
      },
    ]}
  />
</main>
