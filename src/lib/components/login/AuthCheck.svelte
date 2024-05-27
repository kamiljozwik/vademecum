<script lang="ts">
	import { user } from '$lib/firebase';
</script>

{#if $user}
	<slot />
{:else}
	<slot name="logedout">
		<p class="my-6 flex flex-col items-center">
			<span>Musisz być zalogowany, żeby zobaczyć tę stronę.</span>
			<a class="btn btn-primary my-4 w-32" href="/login">Zaloguj</a>
		</p>
	</slot>
{/if}
