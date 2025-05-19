import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

/**
 * @param {HTMLElement} element
 * @param {{
 *   duration?: number,
 *   stagger?: number,
 *   strokeColor?: string,
 *   scrollTrigger?: boolean
 * }} options
 */
export function svgPathDraw(element, options = {}) {
	const {
		duration = 1,
		scrollTrigger = true,
		stagger = 1.5,
		strokeColor = 'var(--color-text)'
	} = options;

	// Get all paths within the SVG
	const paths = element.querySelectorAll('path');

	// Set up initial state for each path
	paths.forEach((path) => {
		const length = path.getTotalLength();
		gsap.set(path, {
			fill: 'transparent', // Start with transparent fill
			opacity: 0,
			stroke: strokeColor,
			strokeDasharray: length,
			strokeDashoffset: length
		});
	});

	// Hide the entire SVG initially
	gsap.set(element, {
		opacity: 1,
		visibility: 'visible'
	});

	// Create animation timeline
	const tl = gsap.timeline({
		defaults: { ease: 'power2.inOut' },
		scrollTrigger: scrollTrigger
			? {
					end: 'bottom 20%',
					once: true,
					start: 'top 80%',
					toggleActions: 'play none none none',
					trigger: element
				}
			: false
	});

	// Animate paths
	tl.to(paths, {
		duration: duration,
		opacity: 1,
		stagger: {
			amount: stagger,
			from: 'start'
		},
		strokeDashoffset: 0
	})
		.to(
			paths,
			{
				duration: duration / 2,
				fill: (i, target) => target.getAttribute('fill') || 'none',
				stagger: {
					amount: stagger / 2,
					from: 'start'
				}
			},
			`-${duration / 2}` // Start fill animation halfway through the stroke animation
		)
		.to(paths, {
			duration: duration / 4,
			stagger: {
				amount: stagger / 4,
				from: 'start'
			},
			stroke: 'transparent'
		});

	return {
		destroy() {
			if (tl) tl.kill();
			// Reset paths to their original state
			paths.forEach((path) => {
				gsap.set(path, {
					clearProps: 'all'
				});
			});
		}
	};
}

/**
 * @param {HTMLElement} element
 * @param {{
 *   unsplitAfter?: number,
 *   duration?: number,
 *   stagger?: number,
 *   ease?: string
 * }} options
 */
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
