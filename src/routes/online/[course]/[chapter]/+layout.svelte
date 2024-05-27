<script lang="ts">
	import type { LayoutData } from './$types';
	import NavbarToggle from '$lib/components/courses/navigation/NavbarToggle.svelte';
	import SideMenu from '$lib/components/courses/navigation/SideMenu.svelte';

	export let data: LayoutData;
</script>

<main class="flex flex-col-reverse md:flex-row">
	<NavbarToggle>
		<SideMenu
			section="online"
			chaptersWithLessons={data.chaptersWithLessons}
			variant="collapsable"
		/>
	</NavbarToggle>
	<div class="mx-auto w-full min-w-0 max-w-none px-3 pt-1 md:px-8">
		<slot />
	</div>
</main>
