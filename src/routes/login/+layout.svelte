<script lang="ts">
	import { passwordlessSignin } from '$lib/firebase/auth/sendPasswordlessEmail';
	import LoginSteps from '$lib/components/login/LoginSteps.svelte';
	import StepLayout from '$lib/components/login/StepLayout.svelte';

	passwordlessSignin();
</script>

<LoginSteps />

<StepLayout>
	<slot />
</StepLayout>
