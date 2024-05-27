<script lang="ts">
	// import ScrollShow from '$lib/components/ui/ScrollShow.svelte';
	import { cn } from '$lib/components/utils/cn';
	import Glow from '$lib/components/ui/Glow.svelte';

	type Course = {
		title: string;
		desc: string;
		link: string;
		draft: boolean;
	};

	export let group = '';
	export let courses: Course[] = [];
</script>

<!-- <ScrollShow> -->
<!-- <Glow> -->
<div>
	<div class="card w-full bg-neutral">
		<figure>
			<img loading="lazy" src="/img/courses-groups/{group}.webp" alt="Logo dla grupy kursów" />
		</figure>
		<div class="card-body">
			<!-- <h2 class="card-title">Dostępne kursy:</h2> -->

			<ul>
				{#each courses as course, i}
					<div class="divider" />
					<li class={cn('my-7 flex flex-col')}>
						<div class="flex flex-wrap items-center">
							<h3 class="mr-3 text-lg md:text-2xl">
								<span class="gradient-text">{i + 1}.</span>
								{course.title}
							</h3>
							{#if course.draft}
								<span class="badge badge-neutral">W przygotowaniu ⌛</span>
							{/if}
						</div>
						<div class="mt-2">
							{course.desc}
						</div>
						{#if !course.draft}
							<div class="mt-4">
								<a href={course.link} aria-disabled={course.draft} class="btn btn-accent uppercase"
									>Szczegóły</a
								>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
<!-- </Glow> -->
<!-- </ScrollShow> -->
