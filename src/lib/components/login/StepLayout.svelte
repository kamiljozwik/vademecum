<script>
	import AnimatedRoute from '../ui/AnimatedRoute.svelte';
</script>

<AnimatedRoute>
	<main class="card mx-auto bg-neutral text-neutral-content lg:w-4/6">
		<div class="card-body items-center text-center">
			<slot />
		</div>
	</main>
</AnimatedRoute>
