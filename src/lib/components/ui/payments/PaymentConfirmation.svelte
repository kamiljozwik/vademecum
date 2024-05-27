<script lang="ts">
	import { cn } from '$lib/components/utils/cn';

	export let paymentId: string | null = null;
	export let paymentStatus: any | null = null;
</script>

<h1 class="mb-6 mt-12 text-center text-3xl">Potwierdzenie płatności</h1>
<div class="divider" />

<div class="flex flex-col items-center gap-4">
	<p class="flex flex-col items-center">
		<span class="text-gray-200">Identyfikator płatności</span><span
			>{paymentId || 'Brak identyfikatora'}</span
		>
	</p>
	{#if paymentStatus === 'CONFIRMED'}
		<a href="/dashboard#your-courses" class="btn btn-primary mt-6">Przejdź do kursów</a>
	{:else}
		<a href="/dashboard/payments" class="btn btn-primary mt-6">Przejdź do listy płatności</a>
	{/if}
</div>
