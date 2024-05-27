<script lang="ts">
	// @ts-expect-error TODO: fix this
	import { page } from '$app/stores';

	import HasAccess from './HasAccess.svelte';
	import VideoPlayer from '../video/VideoPlayer.svelte';
	import type { CourseData } from '$lib/utils/courses/types';
	import SectionTitle from '../ui/SectionTitle.svelte';
	import { getChaptersWithLessons } from '$lib/utils/courses/getChaptersWithLessons';

	export let section: string;
	export let chaptersWithLessons: ReturnType<typeof getChaptersWithLessons>;
	export let course: CourseData | undefined = undefined;
</script>

<!--	Video wprowadzenie do kursu -->
<!-- <div class="max-w-3xl mx-auto">
		<VideoPlayer free={true} single={true} video="rv3Yq-B8qp4" url={section} />
	</div> -->

<article class="prose-course-entry mx-auto mb-24">
	<div>
		<svelte:component this={course?.content} />
	</div>
</article>

{#if !course?.meta.draft}
	<HasAccess free={course?.meta.free}>
		<div
			slot="granted"
			class="mx-auto mt-12 max-w-sm rounded-lg border border-solid border-green-500 bg-neutral p-8 text-center shadow-3xl"
		>
			<p class="m-0 text-xl text-green-500">Masz dostęp do tego kursu 🎉</p>
		</div>

		<div slot="denied" class="mx-auto max-w-3xl text-center">
			<div
				class="mt-24 flex justify-center rounded-xl border-[1px] border-solid border-yellow-300 py-4"
			>
				<p>Nie masz dostępu do tego kursu 😢</p>
			</div>
			<SectionTitle id="dostep" title="Dostęp do kursu" class="my-12">
				<slot name="price" />
			</SectionTitle>
		</div>
	</HasAccess>

	<SectionTitle title="Rozdziały">
		<section class="mx-auto lg:w-4/5">
			<div class="flex flex-wrap justify-center gap-6">
				{#each chaptersWithLessons as chapterData, i}
					<a
						class="relative no-underline transition-transform hover:scale-105"
						href={`${$page.params.course}/${chapterData[0]}`}
					>
						<div class="card card-compact h-[350px] bg-neutral text-left shadow-xl md:w-80 lg:w-96">
							{#if chapterData[1].chapterMeta.fresh}
								<div class="ml-4 mt-4 flex items-center gap-2">
									<span class="relative flex h-3 w-3">
										<span
											class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"
										></span>
										<span class="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
									</span>
									<div class="text-sm font-bold uppercase text-white">Nowość</div>
								</div>
							{/if}
							<figure class="h-52">
								<img
									class="w-1/3 py-6"
									src={`/${section}/${$page.params.course}/chapters/${chapterData[0]}.webp`}
									alt=""
								/>
							</figure>
							<div class="card-body">
								<h5 class="card-title uppercase text-neutral-content dark:text-gray-200">
									<span class="gradient-text">{i + 1}</span>{chapterData[1].chapterMeta.title ?? ''}
								</h5>
								<p class="text-base text-neutral-content">
									{chapterData[1].chapterMeta.description ?? ''}
								</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</section>
	</SectionTitle>
{/if}
