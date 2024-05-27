<script lang="ts">
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import UserInfo from '$lib/components/dashboard/UserInfo.svelte';
	import CoursesList from '$lib/components/dashboard/CoursesList.svelte';
	import DiscordWidget from '$lib/components/courses/DiscordWidget.svelte';
	import { data } from './data';
</script>

<PageHeader title="Dashboard" />
<UserInfo />
<div class="mx-auto mt-8 lg:w-4/5">
	<a href="dashboard/payments" class="btn btn-primary btn-sm">Płatności</a>
</div>
<CoursesList url="online" {data} />
<DiscordWidget discordApi="1163132629386793110" discordLink="Jg9aSAuxpP" />
