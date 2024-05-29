<script>
  import PageHeader from "$lib/components/ui/PageHeader.svelte";

  export let data;

  $: torender = data?.courses.filter((c) => !c.meta.draft) || [];
</script>

<main>
  <PageHeader title="Wszystkie kursy" subtitle="Pełna oferta" />
  <ul class="flex flex-col-reverse gap-12">
    {#each torender as course}
      <!-- <Glow> -->
      <li class="list-none p-0 transition-transform hover:scale-[101%]">
        <article>
          <a href={`kurs/${course.meta.slug}`} class="no-underline">
            <div class="card bg-base-300 shadow-xl lg:card-side">
              <figure class="lg:w-1/2">
                <img
                  class="w-[500px]"
                  src={`/kurs/${course.meta.slug}/img/featured.webp`}
                  alt="Okładka kursu"
                />
              </figure>
              <div class="card-body bg-neutral lg:w-1/2">
                <h2 class="card-title">{course.meta.title}</h2>
                <p class="py-3">{course.meta.description}</p>
                <div class="card-actions">
                  <button class="btn btn-accent"
                    >{course.meta.cta || "Zobacz więcej"}</button
                  >
                </div>
              </div>
            </div>
          </a>
        </article>
      </li>
    {/each}
  </ul>
</main>
