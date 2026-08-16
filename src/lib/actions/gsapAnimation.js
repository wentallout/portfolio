import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

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
 * Usage: <h1 use:textRevealBottom={{ delay: 1, stagger: 0.075, y: 400, duration: 1 }} >Text</h1>
 * All options are optional.
 */
export function textRevealBottom(node, options = {}) {
	// Ensure overflow is hidden for reveal effect
	node.style.overflow = 'hidden';
	// Default animation options
	const { delay = 0.1, duration = 0.6, ease = 'power3.out', stagger = 0.08, y = 100 } = options;

	// Split text into lines and words to preserve natural layout line wrapping
	const split = new SplitType(node, { types: 'lines, words' });

	// Set initial state on line wrappers
	gsap.set(split.lines, { overflow: 'hidden' });
	gsap.set(split.words, { y });

	// Animate in words cleanly
	const anim = gsap.to(split.words, {
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
