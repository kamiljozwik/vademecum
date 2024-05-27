<script lang="ts">
	import { page } from '$app/stores';
	export let id: string;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', id, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={id}">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		typeof id !== 'undefined' && gtag('config', id);
	</script>
</svelte:head>
