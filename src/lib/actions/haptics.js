import { WebHaptics } from 'web-haptics';

/**
 * Singleton instance of WebHaptics to be shared across the application.
 * This ensures that haptic feedback is consistent and efficient.
 */
export const haptics = new WebHaptics();

/**
 * Common haptic patterns for consistent feedback.
 */
export const hapticPatterns = {
	error: [
		{ duration: 50, intensity: 0.75 },
		{ delay: 50, duration: 50, intensity: 0.75 },
		{ delay: 50, duration: 50, intensity: 0.75 }
	],
	nudge: [
		{ duration: 80, intensity: 0.8 },
		{ delay: 80, duration: 50, intensity: 0.3 }
	],
	success: [{ duration: 50 }, { delay: 50, duration: 50 }],
	buzz: [{ duration: 1000, intensity: 1 }],
	heavy: 'heavy',
	light: 'light',
	medium: 'medium',
	selection: 'selection'
};

/**
 * Svelte action to add haptic feedback to an element.
 * By default, it triggers on 'click'.
 *
 * Usage:
 * <button use:haptic={'medium'}>Click me</button>
 *
 * @param {HTMLElement} node - The element the action is applied to
 * @param {string | number | number[] | object} pattern - The haptic pattern to trigger (default: 'medium')
 * @returns {import('svelte/action').ActionReturn}
 */
export function haptic(node, pattern = 'medium') {
	const handleTrigger = () => {
		const triggerPattern = hapticPatterns[pattern] || pattern;
		if (triggerPattern) {
			haptics.trigger(triggerPattern);
		}
	};

	node.addEventListener('click', handleTrigger);

	return {
		update(newPattern) {
			pattern = newPattern;
		},
		destroy() {
			node.removeEventListener('click', handleTrigger);
		}
	};
}
