<script lang="ts">
	import { autoplay } from './autoplayStore';
	function toggle(e: any) {
		autoplay.set(e.target.checked);
	}
</script>

<label class="relative inline-block h-5 w-10">
	<input type="checkbox" checked={$autoplay} on:change={toggle} class="h-0 w-0 opacity-0" />
	<span class="slider"></span>
</label>

<style lang="scss">
	.slider {
		@apply absolute inset-0 cursor-pointer rounded-full bg-neutral-700 transition-all;
	}
	.slider:before {
		@apply absolute bottom-0.5 left-0.5 z-10 h-4 w-4 rounded-full bg-neutral-800 transition-all;
		content: '';
	}

	input:checked + .slider {
		@apply bg-green-500;
	}

	input:focus + .slider {
		@apply shadow-md;
	}
	input:checked + .slider:before {
		@apply translate-x-5;
	}
</style>
