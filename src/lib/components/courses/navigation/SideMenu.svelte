<script lang="ts">
	// @ts-ignore TODO: fix this
	import { page } from '$app/stores';
	import { cn } from '$lib/components/utils/cn';
	import type { Lesson } from '$lib/utils/courses/types';
	import type { getChaptersWithLessons } from '$lib/utils/courses/getChaptersWithLessons';
	import CompleteIcon from './CompleteIcon.svelte';

	export let chaptersWithLessons: ReturnType<typeof getChaptersWithLessons>;
	export let variant: 'simple' | 'collapsable' = 'simple';
	export let section: string;

	$: isChapterActive = (chapter: string) => $page.params.chapter === chapter;

	$: isLessonActive = (lesson: Lesson, chapter: string) =>
		$page.params.lesson === lesson.slug && isChapterActive(chapter);
</script>

{#if variant === 'simple'}
	<!-- Simple, non-collapsable menu -->
	<ul
		class="scrollbar sticky top-0 mr-4 h-screen min-w-[300px] overflow-auto pb-10 pr-4"
		id="sidebar"
	>
		<!-- Lesson tile -->
		{#each chaptersWithLessons as chapterData, i}
			<!-- Chapter -->
			<li class="mr-5 mt-4 flex border-b-2 border-neutral-800 px-1 py-2">
				<a href={`/${section}/${$page.params.course}/${chapterData[0]}`}
					><h3 class="font-bold uppercase text-neutral-300">
						<span class="gradient-text mr-2">{i + 1}</span><span>{chapterData[0]}</span>
					</h3></a
				>
			</li>
			{#each chapterData[1].lessons as { lessonMeta }}
				<li>
					<a
						class={cn('text-neutral-500 hover:text-gray-200', {
							'text-gray-200': isLessonActive(lessonMeta, chapterData[0])
						})}
						href={`/${section}/${$page.params.course}/${chapterData[0]}/${lessonMeta.slug}`}
					>
						<div class="my-1 flex items-center p-1">
							<CompleteIcon free={lessonMeta.free} lesson={`${chapterData[0]}/${lessonMeta.slug}`}
							></CompleteIcon>
							<span class="mr-auto pr-2 text-lg">{lessonMeta.title}</span>

							{#if isLessonActive(lessonMeta, chapterData[0])}
								<div class="ml-5">🔥</div>
							{:else}
								<span class="px-2 py-1 text-xs">{lessonMeta.video_length || 'tekst'}</span>
							{/if}
						</div>
					</a>
				</li>
			{/each}
		{/each}
	</ul>
{:else}
	<!-- Collapsable menu -->
	<ul
		class="scrollbar menu sticky top-0 mr-4 mt-4 flex h-screen min-w-[300px] flex-col flex-nowrap overflow-auto rounded-box p-0 pr-4"
	>
		{#each chaptersWithLessons as chapterData, i}
			<li class="my-1">
				<details open={isChapterActive(chapterData[0])}>
					<summary
						class={cn('pl-0 text-lg font-bold uppercase text-base-content', {
							'text-base-content dark:text-gray-200': isChapterActive(chapterData[0])
						})}
						><span class="gradient-text">{i + 1}</span>
						<span
							>{chapterData[1].chapterMeta.title}
							{#if chapterData[1].chapterMeta.fresh}
								<span
									class="ml-2 rounded-full border border-red-600 bg-red-600 px-2 text-xs text-white"
									>NEW</span
								>
							{/if}
						</span></summary
					>
					<ul>
						{#each chapterData[1].lessons as { lessonMeta }}
							<li
								class={cn({
									'text-base-content dark:text-gray-200': isLessonActive(lessonMeta, chapterData[0])
								})}
							>
								<a
									class="flex items-center px-1"
									href={`/${section}/${$page.params.course}/${chapterData[0]}/${lessonMeta.slug}`}
								>
									<CompleteIcon
										free={lessonMeta.free}
										lesson={`${chapterData[0]}/${lessonMeta.slug}`}
									></CompleteIcon>
									<span class="mr-auto">{lessonMeta.title}</span>
									{#if isLessonActive(lessonMeta, chapterData[0])}
										<div class="ml-5">🔥</div>
									{:else}
										<span class="px-2 py-1 text-xs">{lessonMeta.video_length || 'tekst'}</span>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
		{/each}
	</ul>
{/if}
