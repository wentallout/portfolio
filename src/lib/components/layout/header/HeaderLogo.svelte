<script>
	export let width = '160px';
	export let height = width;

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	import { TextPlugin } from 'gsap/dist/TextPlugin.js';

	let logoDeco;
	const phrases = ['WENT ALL OUT', 'Khoa Nguyen'];
	let i = 0;

	const typePhrase = () => {
		gsap.to(logoDeco, {
			duration: 1,
			text: {
				value: phrases[i % phrases.length],
				padSpace: true
			},
			ease: 'power2.inOut',
			onComplete: () => {
				removePhrase();
			}
		});
	};

	const removePhrase = () => {
		gsap.to(logoDeco, {
			duration: 1,
			text: {
				value: '',
				padSpace: true,
				rtl: true
			},
			ease: 'power2.inOut',
			onComplete: () => {
				i++;
				typePhrase();
			}
		});
	};

	onMount(() => {
		gsap.registerPlugin(TextPlugin);
		typePhrase();
	});
</script>

<div class="cover__logo" aria-label="home">
	<img
		id="personlogo"
		class="logo__main rotate"
		alt="2nd logo"
		{height}
		src="/images/brand-logo.svg"
		{width} />
	<div bind:this={logoDeco} class="logo__deco">WENT ALL OUT</div>
</div>

<style lang="postcss">
	.logo__main {
		filter: drop-shadow(0px 0px 10px var(--colorPrimary));
		transition: var(--transition);

		&:hover {
			color: var(--colorPrimaryHover);
			filter: drop-shadow(0px 0px 10px var(--colorPrimary));
			animation: glitch 1.5s ease infinite;
		}
	}

	.cover__logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
		transition: var(--transition);
		aspect-ratio: 1/1;

		&:hover {
			filter: brightness(1.2);
		}
	}

	.logo__deco {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--colorPrimary);
		width: 100%;

		transition: var(--transition);
		font-family: var(--fontFancy);

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/* --- */
	}
</style>
