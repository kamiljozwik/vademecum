<script>
	import { twMerge } from 'tailwind-merge';

	import ScrollShow from './ScrollShow.svelte';
	export let title = '';
	export let subtitle = '';
	export let id = '';
	let className = '';
	export { className as class };
</script>

<div class={twMerge('my-[20%] text-center', className)} id={id || undefined}>
	<ScrollShow>
		<div class="hero">
			<div class="hero-content text-center">
				<div class="max-w-4xl">
					<h2>{title}</h2>
					<div class="gradient-line mx-auto" />
					<p class="mx-auto w-4/5 pb-6">{subtitle}</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-center">
			<slot />
		</div>
	</ScrollShow>
</div>
