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
 */
export function textReveal(element) {
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

	tl.to(wrappedChars, {
		duration: 0.3,
		ease: 'back.out(1.7)',
		opacity: 1,
		rotateX: 0,
		stagger: 0.01,
		y: 0
	});

	return {
		destroy() {
			tl.kill();
			element.innerHTML = originalHTML;
		}
	};
}
