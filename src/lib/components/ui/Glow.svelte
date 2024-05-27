<script lang="ts">
	// https://codepen.io/jh3y/pen/QWYPaax
	import { onMount } from 'svelte';

	let CONTAINER: HTMLElement;
	let CARD: HTMLElement;

	type Config = {
		proximity?: number;
		spread?: number;
		blur?: number;
		opacity?: number;
	};

	export let config: Config | undefined = {};

	const CONFIG: Config = {
		proximity: 60,
		spread: 100,
		blur: 45,
		opacity: 0,
		...config
	};

	const UPDATE = (event: any) => {
		// Get the angle based on the center point of the card and pointer position
		// Check the card against the proximity and then start updating
		const CARD_BOUNDS = CARD.getBoundingClientRect();
		// Get distance between pointer and outerbounds of card
		if (
			event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
			event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
			event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
			event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
		) {
			// If within proximity set the active opacity
			CARD.style.setProperty('--active', '1');
		} else {
			CARD.style.setProperty('--active', CONFIG.opacity.toString());
		}
		const CARD_CENTER = [
			CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
			CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5
		];
		let ANGLE = (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) / Math.PI;
		ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
		CARD.style.setProperty('--start', (ANGLE + 90).toString());
	};

	const RESTYLE = () => {
		CONTAINER.style.setProperty('--blur', CONFIG.blur.toString());
		CONTAINER.style.setProperty('--spread', CONFIG.spread.toString());
	};

	onMount(() => {
		document.body.addEventListener('pointermove', UPDATE);
		RESTYLE();

		return () => {
			document.body.removeEventListener('pointermove', UPDATE);
		};
	});
</script>

<div bind:this={CONTAINER} class="container">
	<article bind:this={CARD}>
		<div class="glows" />
		<slot />
	</article>
</div>

<style>
	:root {
		--border: hsl(280 10% 50% / 1);
		--border-width: 2px;
		--border-radius: 12px;
		--gradient: conic-gradient(
			from 180deg at 50% 70%,
			hsla(0, 0%, 98%, 1) 0deg,
			#eec32d 72.0000010728836deg,
			#ec4b4b 144.0000021457672deg,
			#709ab9 216.00000858306885deg,
			#4dffbf 288.0000042915344deg,
			hsla(0, 0%, 98%, 1) 1turn
		);
	}

	@property --start {
		syntax: '<number>';
		inherits: true;
		initial-value: 0;
	}

	.container {
		--spread: 60;
		display: flex;
		justify-content: center;
	}

	article {
		--active: 0.15;
		--start: 0;
		position: relative;
		width: fit-content;
	}

	article:is(:hover, :focus-visible) {
		z-index: 2;
	}

	.glows {
		pointer-events: none;
		position: absolute;
		inset: 0;
		filter: blur(calc(var(--blur) * 1px));
		z-index: 999;
	}

	.glows::after,
	.glows::before {
		--alpha: 0;
		content: '';
		background: var(--gradient);
		background-attachment: fixed;
		position: absolute;
		inset: -5px;
		border: 10px solid transparent;
		border-radius: var(--border-radius);
		mask: linear-gradient(#0000, #0000),
			conic-gradient(
				from calc((var(--start) - (var(--spread) * 0.5)) * 1deg),
				#000 0deg,
				#fff,
				#0000 calc(var(--spread) * 1deg)
			);
		mask-composite: intersect;
		mask-clip: padding-box, border-box;
		opacity: var(--active);
		transition: opacity 1s;
	}

	article::before {
		position: absolute;
		inset: 0;
		border: var(--border-width) solid transparent;
		content: '';
		border-radius: var(--border-radius);
		pointer-events: none;
		background: var(--border);
		background-attachment: fixed;
		border-radius: var(--border-radius);
		mask: linear-gradient(#0000, #0000),
			conic-gradient(
				from calc(((var(--start) + (var(--spread) * 0.25)) - (var(--spread) * 1.5)) * 1deg),
				hsl(0 0% 100% / 0.15) 0deg,
				white,
				hsl(0 0% 100% / 0.15) calc(var(--spread) * 2.5deg)
			);
		mask-clip: padding-box, border-box;
		mask-composite: intersect;
		opacity: var(--active);
		transition: opacity 1s;
	}

	article::after {
		--bg-size: 100%;
		content: '';
		pointer-events: none;
		position: absolute;
		background: var(--gradient);
		background-attachment: fixed;
		border-radius: var(--border-radius);
		opacity: var(--active, 0);
		transition: opacity 1s;
		--alpha: 0;
		inset: 0;
		border: var(--border-width) solid transparent;
		mask: linear-gradient(#0000, #0000),
			conic-gradient(
				from calc(((var(--start) + (var(--spread) * 0.25)) - (var(--spread) * 0.5)) * 1deg),
				#0000 0deg,
				#fff,
				#0000 calc(var(--spread) * 0.5deg)
			);
		filter: brightness(1.5);
		mask-clip: padding-box, border-box;
		mask-composite: intersect;
	}
</style>
