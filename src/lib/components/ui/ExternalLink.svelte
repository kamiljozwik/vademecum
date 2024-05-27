<script lang="ts">
	// TODO: how to create a type for all <a /> attributes in Svelte?
	export let href = '/';
	let className = '';
	export { className as class };
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className}>
	<slot />
</a>
