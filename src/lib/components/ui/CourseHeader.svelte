<script lang="ts">
	export let format = '';
	export let desc = '';
	export let img = 'https://placehold.co/580x400';
	export let link = '';
	export let linkText = 'Przejdź do kursu';
</script>

<div class="hero my-14">
	<div class="hero-content min-w-full flex-col justify-between lg:flex-row">
		<div class="text-center lg:w-1/2">
			{#if format}
				<p class="mb-4">Szkolenie techniczne</p>
			{/if}
			<h1>
				{#if format}
					Format<span class="gradient-text my-2 block text-5xl uppercase leading-tight"
						>{format}</span
					>
				{:else if $$slots.default}
					<slot />
				{/if}
			</h1>
			<p class="mx-auto w-3/4 py-4 text-xl">
				{desc}
			</p>
			{#if link}
				<a href={link} class="btn btn-primary mt-2">{linkText}</a>
			{/if}
		</div>

		<img src={img} class="mx-auto hidden w-1/2 max-w-sm rounded-lg lg:block" alt="" />
	</div>
</div>
