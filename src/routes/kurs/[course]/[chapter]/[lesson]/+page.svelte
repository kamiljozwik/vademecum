<script lang="ts">
  import LessonPage from "./components/LessonPage.svelte";

  export let data;
</script>

<LessonPage
  chaptersWithLessons={data.chaptersWithLessons}
  discordApi="1163132629386793110"
  discordLink="Jg9aSAuxpP"
/>
