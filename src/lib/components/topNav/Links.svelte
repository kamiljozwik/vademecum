<script lang="ts">
	import type { TopNavLink } from './types';
	import LoginBtn from './LoginBtn.svelte';

	export let full = true;
	export let links: TopNavLink[] = [];
</script>

{#if full}
	<div class="flex items-center gap-4">
		{#each links as link}
			{#if link.children}
				<div tabindex={0} role="menu" class="dropdown dropdown-hover">
					<label for={`dropdown-${link.name}`} class="menu-link m-1">{link.name}</label>
					<ul
						id={`dropdown-${link.name}`}
						class="menu dropdown-content z-[1] w-max rounded-box bg-neutral p-2 shadow"
					>
						{#each link.children as nestedLink}
							<li>
								<a class="menu-link" href={nestedLink.url}>{nestedLink.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{:else}
				<div>
					<a class="menu-link" href={link.url}>{link.name}</a>
				</div>
			{/if}
		{/each}
		<LoginBtn />
	</div>
{:else}
	<ul
		tabindex="0"
		class="menu dropdown-content menu-sm z-10 mt-3 w-max rounded-box bg-base-100 p-2 shadow"
	>
		{#each links as link}
			{#if link.children}
				<li>
					<span class="text-lg">{link.name}</span>
					<ul class="p-2">
						{#each link.children as nestedLink}
							<li><a class="text-lg" href={nestedLink.url}>{nestedLink.name}</a></li>
						{/each}
					</ul>
				</li>
			{:else}
				<li><a class="text-lg" href={link.url}>{link.name}</a></li>
			{/if}
		{/each}
		<li>
			<LoginBtn mobile />
		</li>
	</ul>
{/if}

<style>
	.menu-link {
		@apply text-lg hover:bg-transparent hover:text-orange-400 dark:text-gray-200 dark:hover:text-orange-400;
	}
</style>
