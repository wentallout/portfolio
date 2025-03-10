<script>
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin.js';
	import { onMount } from 'svelte';

	let logoDeco = $state();
	onMount(() => {
		const phrases = ['wentallout', 'Khoa Nguyen'];
		let i = 0;

		const typePhrase = () => {
			if (logoDeco) {
				gsap.to(logoDeco, {
					duration: 1,
					ease: 'power2.inOut',
					onComplete: () => {
						removePhrase();
					},
					text: {
						padSpace: true,
						value: phrases[i % phrases.length]
					}
				});
			}
		};

		const removePhrase = () => {
			if (logoDeco) {
				gsap.to(logoDeco, {
					duration: 1,
					ease: 'power2.inOut',
					onComplete: () => {
						i++;
						typePhrase();
					},
					text: {
						padSpace: true,
						rtl: true,
						value: ''
					}
				});
			}
		};

		gsap.registerPlugin(TextPlugin);
		typePhrase();
	});
</script>

<div class="cover__logo" aria-label="home">
	<img
		id="personlogo"
		class="logo__main rotate"
		alt="2nd logo"
		height="160"
		loading="eager"
		src="/images/brand-logo.svg"
		title="wentallout logo"
		width="160" />
	<div bind:this={logoDeco} class="logo__deco">went all out</div>
</div>

<style lang="postcss">
	.logo__main {
		width: 100px;
		height: 100px;
		filter: drop-shadow(0px 0px 10px var(--color-primary));
		transition: var(--transition);

		&:hover {
			color: var(--color-primary-hover);
			filter: drop-shadow(0px 0px 10px var(--color-primary));
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
		overflow: visible;

		&:hover {
			filter: brightness(1.2);
		}
	}

	.logo__deco {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--color-primary);
		width: 100%;

		transition: var(--transition);
		font-family: var(--font-fancy);

		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		/* --- */

		white-space: nowrap;
	}
</style>
