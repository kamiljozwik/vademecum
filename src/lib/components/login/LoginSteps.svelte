<script lang="ts">
	// @ts-expect-error TODO: fix this
	import { page } from '$app/stores';
</script>

<nav class="my-6 flex justify-center">
	<ul class="steps">
		<a href="/login" class="step step-primary">Zaloguj się</a>
		<a
			href="/login/username"
			class="step"
			class:step-primary={$page.route.id?.match(/username|photo/g)}
		>
			Nazwa użytkownika
		</a>
		<a href="/login/photo" class="step" class:step-primary={$page.route.id?.includes('photo')}>
			Zdjęcie
		</a>
	</ul>
</nav>

<style lang="scss">
	.steps .step::before {
		@apply bg-neutral;
	}

	.steps .step:not(.step-primary)::after {
		@apply bg-neutral;
	}

	.steps .step.step-primary::before {
		@apply bg-primary;
	}
</style>
