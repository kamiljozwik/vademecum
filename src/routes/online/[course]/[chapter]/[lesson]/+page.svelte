<script lang="ts">
	import LessonPage from '$lib/components/courses/LessonPage.svelte';

	export let data;
</script>

<LessonPage
	chaptersWithLessons={data.chaptersWithLessons}
	course={data.currentCourse}
	url="online"
	discordApi="1163132629386793110"
	discordLink="Jg9aSAuxpP"
/>
