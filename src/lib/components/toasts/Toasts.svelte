<script>
	import { toasts } from './toasts';
	import { fly } from 'svelte/transition';
</script>

<div class="toast">
	{#each $toasts as toast}
		<div
			class="alert alert-{toast.type} flex animate-none justify-between"
			in:fly={{ x: '100%', duration: 500 }}
		>
			<div>
				{#if toast.title}
					<div class="text-base font-bold text-{toast.type}-content">{toast.title}</div>
				{/if}
				{#if toast.message}
					<div class="text-sm">{@html toast.message}</div>
				{/if}
			</div>
			<button on:click={() => toasts.remove(toast)} class="btn btn-square btn-neutral btn-xs"
				>X</button
			>
		</div>
	{/each}
</div>
