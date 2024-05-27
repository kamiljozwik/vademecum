<script lang="ts">
	import { Collection } from 'sveltefire';
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import PaymentsList from '$lib/components/dashboard/PaymentsList.svelte';
	import { user } from '$lib/firebase';
</script>

<PageHeader title="Płatności 💰" subtitle="Sprawdź status swoich płatności" />

<Collection ref={`users/${$user?.uid}/payments`} let:data let:count>
	<PaymentsList {data} {count} />
	<p slot="loading"><span class="loading loading-dots loading-lg"></span></p>
</Collection>
