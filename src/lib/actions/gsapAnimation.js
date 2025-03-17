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
