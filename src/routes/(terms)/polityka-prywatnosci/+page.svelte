<script>
	const regulamin = import('./polityka.md');
</script>

<div class="prose-blog-entry !max-w-full">
	{#await regulamin then resp}
		<svelte:component this={resp.default} />
	{/await}
</div>
