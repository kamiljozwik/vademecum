<script lang="ts">
	export let creating = false;
	export let form: any;
	export let label: string;
	export let name: string;
	export let required = true;
	export let pattern: string | undefined = undefined;
</script>

<div class="form-control mt-2 w-full">
	<label for="firstName" class="label">
		<span class="label-text">{label}</span>
	</label>
	<input
		class="input input-bordered input-sm w-full"
		type="text"
		autocomplete="off"
		value={form?.[name] ?? ''}
		disabled={creating}
		{name}
		{required}
		{pattern}
	/>
</div>
