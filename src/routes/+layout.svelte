<script lang="ts">
  import "$lib/styles/base.scss";

  import TopNav from "$lib/components/topNav/TopNav.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  const links = [
    {
      name: "Wszystkie kursy",
      url: "/kurs",
    },
    {
      name: "Blog",
      url: "https://frontstack.pl",
    },
    {
      name: "Kontakt",
      url: "/kontakt",
    },
  ];
</script>

<svelte:head>
  <title>Vademecum WedDev</title>
  <meta
    name="description"
    content="Darmowe materiały przygotowane specjalnie dla programistów frontend"
  />
</svelte:head>

<div>
  <TopNav {links} />
  <div class="fullScreenHeight mx-auto max-w-screen-xl px-3 md:px-8">
    <slot />
  </div>
  <Footer />
</div>
