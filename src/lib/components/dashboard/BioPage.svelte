<script lang="ts">
	// @ts-expect-error TODO: fix this
	import { page } from '$app/stores';
	// @ts-expect-error TODO: fix this
	import { enhance } from '$app/forms';

	export let data: { bio?: string } = { bio: '' };
</script>

<main>
	<p>Current Bio: <span>{data.bio}</span></p>

	<p>{$page.form?.problem ?? ''}</p>

	<!-- Handled by svelte kit server actions -->
	<form method="POST" use:enhance>
		<div>
			<label for="bio">
				<span>Your bio</span>
			</label>
			<textarea name="bio" value={data.bio} />
		</div>
		<button class="btn btn-primary">Update Bio</button>
	</form>
</main>
