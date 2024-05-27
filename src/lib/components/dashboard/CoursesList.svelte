<script>
	import ScrollShow from '../ui/ScrollShow.svelte';
	import SectionTitle from '../ui/SectionTitle.svelte';
	import { userDataStore } from '$lib/firebase';

	export let data = {};
	export let url;

	$: courses = Object.keys($userDataStore?.courses ?? {});
</script>

<section class="mb-24">
	<SectionTitle title="Twoje kursy" class="mb-0" id="your-courses" />
	<ScrollShow>
		{#if courses.length === 0}
			<p class="text-center">Nie masz dostępu do żadnego kursu 😥</p>
		{:else}
			<div class="flex flex-col gap-4">
				{#each courses as course}
					<div class="card mx-auto bg-neutral shadow-xl lg:w-4/5">
						<div class="card-body text-left">
							<h2 class="card-title text-neutral-content">{data[course].title}</h2>
							<div class="text-small text-neutral-content">
								<p>Dostęp wygasa w dniu:</p>
								<p class="font-bold">
									📅 {new Date($userDataStore?.courses?.[course] ?? '').toLocaleDateString()}
								</p>
							</div>
							<p class="my-3 text-neutral-content">{data[course].description}</p>
							<div class="card-actions">
								<a href={`/${url}/${course}`} class="btn btn-primary w-48">Otwórz kurs</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</ScrollShow>
</section>
