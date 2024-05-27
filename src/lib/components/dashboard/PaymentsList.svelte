<script lang="ts">
	export let count = 0;
	export let data: Payment[] = [];

	type Payment = {
		id: string;
		status: any;
		paymentUpdate: string;
		course: string;
		priceGros: number;
	};
</script>

{#if count === 0}
	<p class="text-center">Brak płatności 🤷</p>
{:else}
	<div class="overflow-x-auto">
		<table class="table">
			<thead class="text-gray-200">
				<tr>
					<th>ID płatności</th>
					<th>Status płatności</th>
					<th>Data</th>
					<th>Kurs</th>
					<th>Cena</th>
				</tr>
			</thead>
			<tbody>
				{#each data as payment}
					<tr>
						<td>{payment.id}</td>
						<td>{new Date(payment.paymentUpdate).toLocaleDateString()}</td>
						<td>{payment.course}</td>
						<td>{payment.priceGros / 100 || '-'} PLN</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
