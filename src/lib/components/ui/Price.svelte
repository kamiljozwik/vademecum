<script lang="ts">
	import ExternalLink from '$lib/components/ui/ExternalLink.svelte';
	import { SignedIn, SignedOut } from 'sveltefire';

	export let tech: string[] = [];
	export let price = 0;
	export let linkText = '';
	export let linkUrl = '';
	export let modal = false;
</script>

<div class="flex flex-wrap justify-center">
	<div class="stats stats-vertical w-64 bg-neutral shadow">
		<div class="stat">
			<div class="stat-title mb-3">Technologie</div>
			<div class="text-gray-200">
				{#each tech as t}
					<span class="text-md badge badge-outline mx-1 p-3">{t.toUpperCase()}</span>
				{/each}
			</div>
		</div>

		<div class="stat">
			<div class="stat-title">Cena za osobę</div>
			<div class="stat-value">
				<span class="gradient-text">{price}</span><span class="stat-desc px-1">PLN</span>
			</div>
			<div class="stat-desc">brutto</div>
		</div>

		<div class="stat">
			<div class="stat-desc">Dostęp na 12 miesięcy</div>
		</div>
	</div>
	{#if $$slots.default}
		<div class="mt-8 text-center lg:mt-0 lg:w-1/2 lg:pl-12 lg:text-left">
			<slot />
			{#if linkUrl.startsWith('http')}
				<ExternalLink href={linkUrl} class="btn btn-primary mt-6">{linkText}</ExternalLink>
			{:else if linkUrl}
				<a href={linkUrl} class="btn btn-primary mt-6">{linkText}</a>
			{:else if modal}
				<SignedIn>
					<button onclick="pay_modal.showModal()" class="btn btn-primary mt-6">{linkText}</button>
				</SignedIn>
				<SignedOut
					><a href="/login" class="btn btn-primary mt-6">Musisz być zalogowany</a></SignedOut
				>
			{/if}

			<dialog id="pay_modal" class="modal">
				<form method="dialog" class="modal-box max-w-4xl">
					<slot name="modal" />
				</form>
			</dialog>
		</div>
	{/if}
</div>
