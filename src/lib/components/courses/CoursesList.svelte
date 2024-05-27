<script lang="ts">
	import { CourseData } from '$lib/utils/courses/types';

	export let section: string;
	export let courses: CourseData[] = [];
</script>

<ul class="flex flex-col-reverse gap-12">
	{#each courses as course}
		<li class="list-none p-0 transition-transform hover:scale-[101%]">
			<article>
				<a href={`${section}/${course.meta.slug}`} class="no-underline">
					<div class="card bg-base-100 shadow-xl lg:card-side">
						<figure class="lg:w-1/2">
							<img
								class="w-[500px]"
								src={`/${section}/${course.meta.slug}/img/featured.webp`}
								alt="Okładka kursu"
							/>
						</figure>
						<div class="card-body bg-neutral lg:w-1/2">
							<h2 class="card-title">{course.meta.title}</h2>
							<p class="py-3">{course.meta.description ?? ''}</p>
							<div class="card-actions">
								<button class="btn btn-primary">{course.meta.cta || 'Zobacz więcej'}</button>
							</div>
						</div>
					</div>
				</a>
			</article>
		</li>
	{/each}
</ul>
