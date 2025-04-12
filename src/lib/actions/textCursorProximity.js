/**
 * @param {HTMLElement} node
 * @param {{
 *   duration?: number,
 *   characters?: string,
 *   delay?: number,
 *   scrambleSpeed?: number,
 *   oneTime?: boolean
 * }} options
 */
export function scrambleIn(node, options = {}) {
	const {
		characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
		delay = 0,
		duration = 300,
		oneTime = true,
		scrambleSpeed = 50
	} = options;

	const originalText = node.textContent;
	const textLength = originalText.length;
	let animationFrame;
	let startTime;
	let isAnimating = false;

	// Create wrapper to maintain dimensions
	const wrapper = document.createElement('span');
	wrapper.style.display = 'inline-block';
	node.replaceWith(wrapper);
	wrapper.appendChild(node);

	// Set initial dimensions
	const rect = node.getBoundingClientRect();
	wrapper.style.width = rect.width + 'px';
	wrapper.style.height = rect.height + 'px';

	function getRandomChar() {
		return characters[Math.floor(Math.random() * characters.length)];
	}

	function animate(currentTime) {
		if (!startTime) startTime = currentTime;
		const elapsed = currentTime - startTime;

		if (elapsed < duration) {
			const progress = elapsed / duration;
			let scrambledText = '';

			for (let i = 0; i < textLength; i++) {
				const charProgress = progress * (1 + i / textLength);

				if (charProgress >= 1) {
					scrambledText += originalText[i];
				} else {
					scrambledText += getRandomChar();
				}
			}

			node.textContent = scrambledText;
			animationFrame = requestAnimationFrame(animate);
		} else {
			node.textContent = originalText;
			isAnimating = false;
		}
	}

	function startAnimation() {
		if (isAnimating) return;
		isAnimating = true;
		startTime = null;
		node.textContent = Array(textLength)
			.fill()
			.map(() => getRandomChar())
			.join('');

		setTimeout(() => {
			animationFrame = requestAnimationFrame(animate);
		}, delay);
	}

	// Start animation on mount
	startAnimation();

	// Set up intersection observer if not oneTime
	let observer;
	if (!oneTime) {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startAnimation();
					}
				});
			},
			{ threshold: 0.5 }
		);

		observer.observe(wrapper);
	}

	return {
		destroy() {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
			if (observer) {
				observer.disconnect();
			}
			wrapper.replaceWith(node);
			node.textContent = originalText;
		}
	};
}
