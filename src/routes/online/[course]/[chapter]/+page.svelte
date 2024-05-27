<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	// import HasAccess from '$lib/components/courses/HasAccess.svelte';

	export let data: PageData;

	$: chapter = $page.params.chapter;
	$: lessonsInChapter = data.chaptersWithLessons.get(chapter)?.lessons ?? [];
	$: chapterMeta = data.chaptersWithLessons.get(chapter)?.chapterMeta;
	$: chapterContent = data.chaptersWithLessons.get(chapter)?.chapterContent;
</script>

<main>
	<PageHeader title={chapter.replaceAll('-', ' ')} subtitle={chapterMeta?.description} uppercase />

	<article class="prose-blog-entry mx-auto">
		<div>
			<svelte:component this={chapterContent} />
		</div>
	</article>

	<div class="flex flex-col items-center justify-center gap-6">
		<!-- <HasAccess>
			<div slot="granted">
				<a href={`/online/${$page.params.course}/pdf/${chapter}.pdf`} download class="link"
					>Pobierz notatki (.pdf)</a
				>
			</div>
		</HasAccess> -->
		<a href={`${chapter}/${lessonsInChapter[0].lessonMeta.slug}`} class="btn btn-primary"
			>Zaczynamy!</a
		>
	</div>
</main>
