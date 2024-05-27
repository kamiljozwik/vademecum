<script lang="ts">
	import { page } from '$app/stores';
	import PaymentConfirmation from '$lib/components/ui/payments/PaymentConfirmation.svelte';

	let paymentId = $page.url.searchParams.get('paymentId');
	let paymentStatus = $page.url.searchParams.get('paymentStatus') as any;
</script>

<PaymentConfirmation {paymentId} {paymentStatus} />
