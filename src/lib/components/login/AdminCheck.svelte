<script lang="ts">
	import { userDataStore } from '$lib/firebase';

	$: admin = $userDataStore?.admin;
</script>

{#if admin}
	<slot />
{:else}
	<div />
{/if}
