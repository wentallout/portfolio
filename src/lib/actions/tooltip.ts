import { gsap } from 'gsap';
import type { ActionReturn } from 'svelte/action';

type TooltipOptions = {
	offset?: number;
	position?: 'top' | 'bottom' | 'left' | 'right';
	text?: string;
};

export function tooltip(
	node: HTMLElement,
	options: TooltipOptions = {}
): ActionReturn<TooltipOptions> {
	let { offset = 40, position = 'top', text = '' } = options;

	const tooltipEl = document.createElement('div');
	tooltipEl.className = `tooltip tooltip-${position}`;
	tooltipEl.innerHTML = `<p>${text}</p>`;

	Object.assign(tooltipEl.style, {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		borderRadius: '4px',
		color: 'white',
		fontSize: '14px',
		opacity: '0',
		padding: '4px',
		pointerEvents: 'none',
		position: 'fixed',
		transform: 'translate(-50%, -50%) scale(0.9)',
		visibility: 'hidden',
		zIndex: '99999'
	});

	document.body.appendChild(tooltipEl);

	const reduceMotion =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const finePointer =
		typeof window === 'undefined' ||
		window.matchMedia('(hover: hover) and (pointer: fine)').matches;

	const xTo = gsap.quickTo(tooltipEl, 'x', { duration: 0.18, ease: 'power3.out' });
	const yTo = gsap.quickTo(tooltipEl, 'y', { duration: 0.18, ease: 'power3.out' });

	let targetX = 0;
	let targetY = 0;

	function updatePosition(e: MouseEvent) {
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

		gsap.set(tooltipEl, { x: targetX, y: targetY });
		if (reduceMotion || !finePointer) return;
		xTo(targetX);
		yTo(targetY);
	}

	function showTooltip() {
		tooltipEl.style.visibility = 'visible';
		gsap.killTweensOf(tooltipEl, 'opacity,scale');
		gsap.to(tooltipEl, {
			duration: reduceMotion ? 0.01 : 0.2,
			ease: 'power2.out',
			opacity: 1,
			scale: 1,
			overwrite: true,
			transformOrigin: 'center center'
		});
	}

	function hideTooltip() {
		gsap.killTweensOf(tooltipEl, 'opacity,scale');
		gsap.to(tooltipEl, {
			duration: reduceMotion ? 0.01 : 0.15,
			ease: 'power2.in',
			onComplete: () => {
				tooltipEl.style.visibility = 'hidden';
			},
			opacity: 0,
			scale: 0.97,
			overwrite: true
		});
	}

	function handleMouseMove(e: MouseEvent) {
		updatePosition(e);
	}

	function handleMouseEnter(e: MouseEvent) {
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
			gsap.killTweensOf(tooltipEl);
			if (tooltipEl.parentNode) {
				document.body.removeChild(tooltipEl);
			}
		},
		update(newOptions: TooltipOptions) {
			if (newOptions.text !== undefined) {
				text = newOptions.text;
				const p = tooltipEl.querySelector('p');
				if (p) p.textContent = text;
			}
			if (newOptions.position) {
				position = newOptions.position;
				tooltipEl.className = `tooltip tooltip-${position}`;
			}
			if (newOptions.offset !== undefined) {
				offset = newOptions.offset;
			}
		}
	};
}
