<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from 'firebase/auth';
	import FormInput from './FormInput.svelte';
  import type { CourseData } from '$lib/utils/courses/types';

	export let course: CourseData | undefined = undefined;
	export let price: number | undefined = undefined;
	export let form;
	export let user: User | null;

	let creating = false;
</script>

<div>
	<form
		method="POST"
		use:enhance={() => {
			creating = true;

			return async ({ update }) => {
				await update({ reset: false });
				creating = false;
			};
		}}
	>
		<div class="hidden">
			<input name="uid" hidden value={user?.uid} />
			<input name="email" hidden value={user?.email} />
			<input name="course" hidden value={course?.meta.slug} />
		</div>

		<div class="flex w-full flex-col lg:flex-row">
			<div class="flex flex-col lg:w-[50%]">
				<h3 class="mb-6 text-2xl">Twoje dane</h3>
				<FormInput
					name="companyName"
					label="Nazwa firmy (opcjonalnie):"
					required={false}
					{creating}
					{form}
				/>
				<FormInput name="firstName" label="Imię:" {creating} {form} />
				<FormInput name="lastName" label="Nazwisko:" {creating} {form} />
				<FormInput name="street" label="Ulica:" {creating} {form} />
				<FormInput name="code" label="Kod pocztowy:" {creating} {form} pattern="\d\d-\d\d\d" />
				<FormInput name="city" label="Miasto:" {creating} {form} />
				<FormInput
					name="nip"
					label="NIP (jeżeli potrzebujesz FV)"
					required={false}
					{creating}
					{form}
				/>
			</div>
			<div class="divider lg:divider-horizontal" />

			<div class="flex flex-col justify-between">
				<div class="flex flex-col items-center px-4 text-center">
					<h3 class="gradient-text">{course?.meta.title}</h3>
					<p class="mb-8 mt-4">{course?.meta.description}</p>
					<slot>
						<p class="mt-4">Cena brutto:</p>
						<p><span class="gradient-text text-2xl font-bold">{price}</span> PLN</p>
						<small>Dostęp na <strong>12</strong> miesięcy</small>
					</slot>
				</div>
				<div>
					<div class="mt-12 lg:mt-0">
						<h4 class="mb-2 text-base-content">Płatności obsługuje:</h4>
						<img class="mr-4 inline-block" width="150" src="/img/paynow.webp" alt="Paynow" />
						<img class="inline-block" width="80" src="/img/blik.webp" alt="Blik" />
					</div>
					<div class="form-control mt-6">
						<label class="label cursor-pointer justify-start gap-2">
							<input name="terms" type="checkbox" required class="checkbox" disabled={creating} />
							<span class="label-text"
								>Akceptuję <a href="/regulamin" class="link">regulamin zakupów</a>
							</span>
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="modal-action mt-16 justify-center lg:justify-end">
			<button disabled={creating} type="submit" class="btn btn-secondary">
				{#if creating}
					<span class="loading loading-spinner" />
				{/if}
				Zamawiam i płacę
			</button>
			<button disabled={creating} type="button" onclick="pay_modal.close()" class="btn btn-ghost"
				>Zamknij</button
			>
		</div>

		{#if form?.error}
			<div class="alert alert-error mt-6">
				<span>{form.error}</span>
			</div>
		{/if}
	</form>
</div>
