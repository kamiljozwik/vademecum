<script lang="ts">
	export let id: string;
	export let h: string;
</script>

<svelte:head>
	<script src="https://player.vimeo.com/api/player.js"></script>
</svelte:head>

<div style="padding:56.25% 0 0 0;position:relative;">
	<iframe
		src="https://player.vimeo.com/video/{id}?h={h}&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
		frameborder="0"
		allow="autoplay; fullscreen; picture-in-picture"
		style="position:absolute;top:0;left:0;width:100%;height:100%;"
		title="HTML: Odbieranie danych z formularza"
	></iframe>
</div>
