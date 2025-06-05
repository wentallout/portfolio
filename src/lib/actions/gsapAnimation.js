import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * @param {HTMLElement} element
 */
export function imageReveal(element) {
	// Set initial state - highly pixelated and slightly blurred
	gsap.set(element, {
		filter: 'blur(20px) brightness(1.2)',
		opacity: 0,
		scale: 1.1
	});

	const tl = gsap.timeline({
		scrollTrigger: {
			start: 'top 80%',
			trigger: element
		}
	});

	tl.to(element, {
		duration: 0.3,
		ease: 'power2.out',
		filter: 'blur(0px) brightness(1)',
		opacity: 1,
		scale: 1
	});

	return {
		destroy() {
			tl.kill();
			element.style.filter = '';
			element.style.transform = '';
			element.style.opacity = '';
		}
	};
}

export function textReveal(element, options = {}) {
	const {
		duration = 0.3,
		ease = 'back.out(1.7)',
		stagger = 0.01,
		unsplitAfter = 0.2 // Time in seconds to wait before unsplitting (0 = don't unsplit)
	} = options;

	const text = element.textContent || '';
	const originalHTML = element.innerHTML;
	const chars = text.split('');

	// Create spans for each character
	const wrappedChars = chars.map((char) => {
		const span = document.createElement('span');
		span.style.cssText = `
			display: inline-block;
			position: relative;
		`;
		span.textContent = char === ' ' ? '\u00A0' : char;
		return span;
	});

	// Preserve the original attributes
	const dataTitle = element.getAttribute('data-title');

	// Replace content while preserving attributes
	element.innerHTML = '';
	wrappedChars.forEach((span) => element.appendChild(span));

	// Restore the data-title attribute
	if (dataTitle) {
		element.setAttribute('data-title', dataTitle);
	}

	// Animate the characters
	gsap.set(wrappedChars, {
		opacity: 0,
		rotateX: -90,
		y: 100
	});

	const tl = gsap.timeline({
		scrollTrigger: {
			start: 'top 80%',
			trigger: element
		}
	});

	// Animate in the characters
	tl.to(wrappedChars, {
		duration: duration,
		ease: ease,
		opacity: 1,
		rotateX: 0,
		stagger: stagger,
		y: 0
	});

	// If unsplitAfter is specified, add a delay and then restore the original HTML
	if (unsplitAfter > 0) {
		// Calculate total animation time (including stagger)
		const animationTime = duration + stagger * (chars.length - 1);

		// Add a delay after the animation completes
		tl.add(() => {
			// Create a new timeline for the unsplit animation
			const unsplitTl = gsap.timeline();

			// Fade out the individual characters
			unsplitTl.to(wrappedChars, {
				duration: 0.2,
				ease: 'power1.in',
				onComplete: () => {
					// Restore the original HTML
					element.innerHTML = originalHTML;

					// Fade in the original text
					gsap.fromTo(
						element,
						{ opacity: 0, y: 10 },
						{ duration: 0.3, ease: 'power2.out', opacity: 1, y: 0 }
					);
				},
				opacity: 0,
				stagger: stagger / 2,
				y: -20
			});
		}, `+=${unsplitAfter}`);
	}

	return {
		destroy() {
			tl.kill();
			element.innerHTML = originalHTML;
		}
	};
}

/**
 * Svelte action for GSAP SplitType text reveal animation.
 *
 * Usage: <h1 use:textReveal={{ delay: 1, stagger: 0.075, y: 400, duration: 1 }} >Text</h1>
 * All options are optional.
 */
export function textRevealBottom(node, options = {}) {
	// Ensure overflow is hidden for reveal effect
	node.style.overflow = 'hidden';
	// Default animation options
	const { delay = 1, duration = 0.2, ease = 'power4.out', stagger = 0.075, y = 200 } = options;

	// Split the text into chars
	const split = new SplitType(node, { types: 'chars' });

	// Set initial state
	gsap.set(split.chars, { y });

	// Animate in
	const anim = gsap.to(split.chars, {
		delay,
		duration,
		ease,
		stagger,
		y: 0
	});

	return {
		destroy() {
			anim.kill();
			split.revert();
		}
	};
}
