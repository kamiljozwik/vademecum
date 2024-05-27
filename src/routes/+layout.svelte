<script lang="ts">
	import '$lib/styles/base.scss';

	import { FirebaseApp } from 'sveltefire';

	import TopNav from '$lib/components/topNav/TopNav.svelte';
	import Toasts from '$lib/components/toasts/Toasts.svelte';

	import Footer from '$lib/components/ui/footer/Footer.svelte';
  import { auth, db, storage } from '../lib/firebase';

	const links = [
		{
			name: 'Wszystkie kursy',
			url: '/online'
		},
		{
			name: 'Blog',
			url: 'https://frontstack.pl'
		},
		{
			name: 'Kontakt',
			url: '/kontakt'
		}
	];
</script>

<svelte:head>
	<title>Frontstack - kursy</title>
	<meta
		name="description"
		content="Kursy, szkolenia oraz darmowe materiały przygotowane specjalnie dla programistów frontend"
	/>
</svelte:head>

<FirebaseApp firestore={db} {auth} {storage}>
	<TopNav {links} />
	<div class="fullScreenHeight mx-auto max-w-screen-xl px-3 md:px-8">
		<slot />
	</div>
	<Footer />
	<Toasts />
</FirebaseApp>
