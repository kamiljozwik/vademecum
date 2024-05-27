<script lang="ts">
	import { page } from '$app/stores';
	import CoursePage from '$lib/components/courses/CoursePage.svelte';
	import Price from '$lib/components/ui/Price.svelte';
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import PaymentForm from '$lib/components/ui/payments/PaymentForm.svelte';
	import { user } from '$lib/firebase/index.js';

	import { priceList } from '$lib/data/priceList';
	import ExternalLink from '$lib/components/ui/ExternalLink.svelte';

	export let data;
	export let form;

	$: price = priceList.find((c) => c.slug === $page.params.course)?.price;
	$: course = data.courses.find((c) => c.meta.slug === $page.params.course);
</script>

<main>
	<PageHeader title={course?.meta.title} subtitle={course?.meta.description} class="mb-0" />
	<div class="mb-12 flex justify-center">
		<div class="badge badge-success badge-lg p-4 text-white">
			Zaktualizowany {new Date(course?.meta.lastmod ?? '').toLocaleDateString('pl-PL', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			})}
		</div>
	</div>
	<div class="mb-16 flex items-center justify-center gap-4">
		<div><img src="/img/avatar.webp" alt="avatar" /></div>
		<div>
			<div class="text-white">
				Kurs przygotowany przez <ExternalLink
					class="gradient-text link font-bold underline"
					href="https://www.frontstack.pl/o-mnie">Kamil Józwik</ExternalLink
				>
			</div>
			<div>
				Doświadczony developer oraz twórca <ExternalLink class="link" href="https://frontstack.pl"
					>frontstack.pl</ExternalLink
				>
			</div>
		</div>
	</div>
	<CoursePage section="online" {course} chaptersWithLessons={data.chaptersWithLessons}>
		<div slot="price">
			<Price tech={course?.meta.tags ?? []} {price} modal={true} linkText="Uzyskaj dostęp">
				<h3>Uzyskaj dostęp 🔓</h3>
				<p class="mt-4">
					Uzyskaj dostęp do kursu online i zacznij naukę już teraz. Wszystkie materiały oraz
					projekty do samodzielnej realizacji będą dla Ciebie dostępne od razu po zaksięgowaniu
					płatności 🎉
				</p>
				<div slot="modal">
					<PaymentForm {course} {price} {form} user={$user} />
				</div>
			</Price>
		</div>
	</CoursePage>
</main>
