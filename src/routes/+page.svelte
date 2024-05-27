<script lang="ts">
	import CoursesGroup from '$lib/components/ui/CoursesGroup.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
</script>

<main class="flex flex-col items-center gap-12">
	<Hero />

	<CoursesGroup
		group="html-css"
		courses={[
			{
				title: 'Statyczna strona internetowa',
				desc: 'Poznaj HTML oraz CSS i zacznij tworzyć profesjonalne strony internetowe.',
				link: '/online/statyczna',
				draft: false
			},
			{
				title: 'HTML i CSS - poziom PRO',
				desc: 'Najnowsze standardy oraz zaawansowane tematy związane z HTML i CSS',
				link: '/online/statyczna-pro',
				draft: true
			}
		]}
	/>

	<CoursesGroup
		group="repository"
		courses={[
			{
				title: 'Git i GitHub',
				desc: 'Poznaj podstawy systemu kontroli wersji oraz platformy GitHub',
				link: '/online/git-github',
				draft: false
			}
		]}
	/>

	<CoursesGroup
		group="javascript"
		courses={[
			{
				title: 'Solidne podstawy',
				desc: 'Poznaj podstawy języka JavaScript',
				link: '/online/js-podstawy',
				draft: false
			},
			{
				title: 'JavaScript w przeglądarce',
				desc: 'Dodaj dynamiczne zachowanie do swojej strony internetowej',
				link: '/online/js-podstawy',
				draft: true
			},
			{
				title: 'Zaawansowane tematy',
				desc: 'Przenieś swoje umiejętności na wyższy poziom',
				link: '/online/js-podstawy',
				draft: true
			}
		]}
	/>
	<!-- <CoursesGroup
		title="TypeScript"
		desc="Lepszy DX oraz aplikacje mniej podatne na błędy"
		courses={[]}
	/>
	<CoursesGroup
		title="Testowanie"
		desc="Pozwól automatom sprawdzić, czy twoja aplikacja działa poprawnie"
		courses={[]}
	/>
	<CoursesGroup
		title="Frameworki SPA"
		desc="Zacznij tworzyć dynamiczne aplikacje w oparciu o frameworki SPA"
		courses={[]}
	/>
	<CoursesGroup
		title="Frameworki SSR"
		desc="Zadbaj o SEO i wydajność swojej aplikacji, korzystając z frameworków SSR"
		courses={[]}
	/>
	<CoursesGroup title="Node.js" desc="Pierwszy krok w kierunku Fullstack Developera" courses={[]} />
	<CoursesGroup
		title="FrontOps"
		desc="Automatyzacja rozwoju oraz dostarczania aplikacji frontendowych"
		courses={[]}
	/>
	<CoursesGroup
		title="BaaS"
		desc="Z łatwością twórz fullstackowe aplikacje, korzystając z podejścia 'Backend as a service'"
		courses={[]}
	/>
	<CoursesGroup
		title="Architektura"
		desc="Poznaj wzorce architektoniczne i zasady projektowania aplikacji frontendowych"
		courses={[]}
	/> -->
</main>
