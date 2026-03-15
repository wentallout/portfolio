import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function parallaxBg(element, options = {}) {
	const { end = 'bottom top', scrubAmount = 1.5, speed = 0.3, start = 'top bottom' } = options;

	const tl = gsap.timeline({
		scrollTrigger: {
			end: end,
			scrub: scrubAmount,
			start: start,
			toggleActions: 'play none none reverse',
			trigger: element
		}
	});

	// Reduced the movement range to prevent gaps
	tl.fromTo(
		element,
		{
			backgroundPosition: '50% 10%', // Start from slightly below center
			ease: 'power1.out'
		},
		{
			backgroundPosition: `50% ${-10 * speed}%`, // Move up slightly
			ease: 'none'
		}
	);

	return {
		destroy() {
			tl.kill();
		}
	};
}
