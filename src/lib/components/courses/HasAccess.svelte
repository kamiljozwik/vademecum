<script lang="ts">
	import { canAccess } from '$lib/firebase';

	const hasAccess = canAccess();
	export let free = false;
</script>

{#if free || $hasAccess}
	<slot name="granted" />
{:else}
	<slot name="denied" />
{/if}
