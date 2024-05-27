<script>
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
	import DiscordWidget from '$lib/components/courses/DiscordWidget.svelte';
</script>

<svelte:head>
	<title>Kontakt</title>
	<meta
		name="description"
		content="Skontaktuj się z nami. Odpowiemy najszybciej jak tylko to możliwe."
	/>
</svelte:head>

<PageHeader title="Kontakt" subtitle="Masz dodatkowe pytania?" />
<SectionTitle
	title="Napisz do nas"
	subtitle="Odpowiemy najszybciej jak tylko to możliwe."
	class="mt-0"
>
	<h3 class="text-3xl font-bold text-gray-200">
		kontakt<span class="gradient-text">@</span>frontstack.pl
	</h3>
</SectionTitle>
<DiscordWidget discordApi="1163132629386793110" discordLink="Jg9aSAuxpP" />
