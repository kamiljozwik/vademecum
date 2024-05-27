<script lang="ts">
	import { writable } from 'svelte/store';

	export const showNavbar = writable<boolean>(true);
</script>

<!-- TODO: fix a11y problems -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if $showNavbar}
	<div>
		<div class="p-2 mr-4 flex justify-between">
			<button class="btn btn-primary btn-sm" on:click={() => showNavbar.set(false)}
				>Ukryj nawigację</button
			>
		</div>
		<slot />
	</div>
{:else}
	<div>
		<div class="p-2 mr-4 flex justify-between absolute">
			<button class="btn btn-primary btn-sm" on:click={() => showNavbar.set(true)}
				>Pokaż nawigację</button
			>
		</div>
	</div>
{/if}
