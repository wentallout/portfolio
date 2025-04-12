import { gsap } from 'gsap';

/**
 * @param {HTMLElement} node
 * @param {{
 *   text?: string,
 *   position?: 'top' | 'bottom' | 'left' | 'right',
 *   offset?: number
 * }} options
 */
export function tooltip(node, options = {}) {
	const { offset = 20, position = 'top', text = '' } = options;

	// Create tooltip element
	const tooltipEl = document.createElement('div');
	tooltipEl.className = `tooltip tooltip-${position}`;
	tooltipEl.innerHTML = `<p>${text}</p>`;

	// Set initial styles
	Object.assign(tooltipEl.style, {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		borderRadius: '4px',
		color: 'white',
		fontSize: '14px',
		opacity: '0',
		padding: '8px 16px',
		pointerEvents: 'none',
		position: 'fixed',
		transform: 'translate(-50%, -50%) scale(0.9)',
		visibility: 'hidden',
		zIndex: '99999'
	});

	document.body.appendChild(tooltipEl);

	// Track the target position for smooth animation
	let targetX = 0;
	let targetY = 0;

	function updatePosition(e) {
		const x = e.clientX;
		const y = e.clientY;

		switch (position) {
			case 'bottom':
				targetX = x;
				targetY = y + offset;
				break;
			case 'left':
				targetX = x - offset;
				targetY = y;
				break;
			case 'right':
				targetX = x + offset;
				targetY = y;
				break;
			case 'top':
			default:
				targetX = x;
				targetY = y - offset;
		}

		// Animate to the target position with elastic effect
		gsap.to(tooltipEl, {
			duration: 0.8,
			ease: 'elastic.out(1, 0.7)',
			left: targetX,
			top: targetY
		});
	}

	function showTooltip() {
		tooltipEl.style.visibility = 'visible';
		gsap.to(tooltipEl, {
			duration: 0.2,
			ease: 'power2.out',
			opacity: 1,
			scale: 1,
			transformOrigin: 'center center'
		});
	}

	function hideTooltip() {
		gsap.to(tooltipEl, {
			duration: 0.2,
			ease: 'power2.in',
			onComplete: () => {
				tooltipEl.style.visibility = 'hidden';
			},
			opacity: 0,
			scale: 0.9
		});
	}

	function handleMouseMove(e) {
		updatePosition(e);
	}

	function handleMouseEnter(e) {
		showTooltip();
		updatePosition(e);
	}

	node.addEventListener('mouseenter', handleMouseEnter);
	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseleave', hideTooltip);

	return {
		destroy() {
			node.removeEventListener('mouseenter', handleMouseEnter);
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseleave', hideTooltip);
			if (tooltipEl.parentNode) {
				document.body.removeChild(tooltipEl);
			}
		},
		update(newOptions) {
			if (newOptions.text) tooltipEl.querySelector('p').textContent = newOptions.text;
			if (newOptions.position) {
				tooltipEl.className = `tooltip tooltip-${newOptions.position}`;
			}
			if (newOptions.offset) {
				offset = newOptions.offset;
			}
		}
	};
}
