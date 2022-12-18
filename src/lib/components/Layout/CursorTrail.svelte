<script>
	export const ssr = false;
	import { onMount } from 'svelte';

	import gsap from 'gsap';
	import CircleType from 'circletype';

	let cursorLarge;
	let cursorSmall;
	let cursorText;
	let text;
	let hoverItems;

	let mouse = {
		x: 0,
		y: 0
	};

	function updateCursorPosition(e) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}

	onMount(() => {
		// window.addEventListener('mousemove', function (e) {
		// 	mouse.x = e.clientX;
		// 	mouse.y = e.clientY;
		// });

		const cursorOuter = cursorLarge;
		const cursorInner = cursorSmall;
		const cursorTextContainerEl = cursorText;
		const cursorTextEl = text;

		// let hoverItems = document.querySelectorAll('.cursor-hover-item');
		hoverItems = document.querySelectorAll('.cursor-hover-item');

		const hoverEffectDuration = 0.3;
		let isHovered = false;
		let initialCursorHeight;

		const cursorRotationDuration = 8;

		let circleType = new CircleType(cursorTextEl);
		circleType.radius(50);

		setTimeout(() => {
			initialCursorHeight = circleType.container.style.getPropertyValue('height');
		}, 50);

		hoverItems.forEach((item) => {
			item.addEventListener('pointerenter', handlePointerEnter);
			item.addEventListener('pointerleave', handlePointerLeave);
		});

		function updateCursor() {
			gsap.set([cursorInner, cursorTextContainerEl], {
				x: mouse.x,
				y: mouse.y
			});

			gsap.to(cursorOuter, {
				duration: 0.15,
				x: mouse.x,
				y: mouse.y
			});

			if (!isHovered) {
				gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
					opacity: 0
				});
				gsap.set(cursorTextContainerEl, {
					rotate: 0
				});
			}

			requestAnimationFrame(updateCursor);
		}

		updateCursor();

		function handlePointerEnter(e) {
			isHovered = true;

			const target = e.currentTarget;
			updateCursorText(target);

			gsap.set([cursorTextContainerEl, cursorTextEl], {
				height: initialCursorHeight,
				width: initialCursorHeight
			});

			gsap.fromTo(
				cursorTextContainerEl,
				{
					rotate: 0
				},
				{
					duration: cursorRotationDuration,
					rotate: 360,
					ease: 'none',
					repeat: -1
				}
			);

			gsap.to(cursorInner, hoverEffectDuration, {
				scale: 2
			});

			gsap.fromTo(
				cursorTextContainerEl,
				hoverEffectDuration,
				{
					scale: 1.2,
					opacity: 0
				},
				{
					delay: hoverEffectDuration * 0.75,
					scale: 1,
					opacity: 1
				}
			);
			gsap.to(cursorOuter, hoverEffectDuration, {
				scale: 1.2,
				opacity: 0
			});
		}

		function handlePointerLeave() {
			isHovered = false;
			gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
				scale: 1,
				opacity: 1
			});
		}

		function updateCursorText(textEl) {
			const cursorTextRepeatTimes = textEl.getAttribute('data-cursor-text-repeat');
			const cursorText = returnMultipleString(
				textEl.getAttribute('data-cursor-text'),
				cursorTextRepeatTimes
			);

			circleType.destroy();
			console.log(circleType);

			cursorTextEl.innerHTML = cursorText;
			circleType = new CircleType(cursorTextEl);
		}

		function returnMultipleString(string, count) {
			let s = '';
			for (let i = 0; i < count; i++) {
				s += ` ${string} `;
			}
			return s;
		}
	});
</script>

<svelte:window on:pointermove={updateCursorPosition} />

<div class="cursor">
	<div bind:this={cursorSmall} class="cursor--small" />
	<div bind:this={cursorLarge} class="cursor--large" />
	<div bind:this={cursorText} class="cursor--text">
		<div bind:this={text} class="text">GO HERE! GO HERE! GO HERE! GO HERE!</div>
	</div>
</div>

<style>
	.cursor .cursor--small,
	.cursor .cursor--large,
	.cursor .cursor--text {
		position: fixed;
		left: 0;
		top: 0;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		width: var(--cursor-size);
		height: var(--cursor-size);
		mix-blend-mode: difference;
		pointer-events: none;
		user-select: none;
		z-index: 1000;
	}
	.cursor .cursor--text {
		--cursor-size: fit-content;
		font-size: 0.75rem;
		color: #fff;
		opacity: 0;
	}
	.cursor .cursor--text .text {
		font-family: var(--normal-font);
		font-weight: 400;
	}
	.cursor .cursor--small {
		--cursor-size: 20px;
		background: #fff;
	}
	.cursor .cursor--large {
		--cursor-size: 60px;
		border: 2px solid #fff;
	}
</style>
