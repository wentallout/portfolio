// @ts-nocheck
import { WebHaptics } from 'web-haptics';
import { browser } from '$app/env';
import type { ActionReturn } from 'svelte/action';

let hapticsInstance: WebHaptics | undefined;

export const haptics = {
	trigger(pattern: unknown) {
		if (browser) {
			if (!hapticsInstance) {
				hapticsInstance = new WebHaptics();
			}
			(hapticsInstance as unknown as { trigger: (p: unknown) => void }).trigger(pattern);
		}
	}
};

export const hapticPatterns: Record<string, unknown> = {
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

export function haptic(
	node: HTMLElement,
	pattern: string = 'medium'
): ActionReturn<string | unknown> {
	const handleTrigger = () => {
		const triggerPattern =
			(hapticPatterns as Record<string, unknown>)[pattern] ?? pattern;
		if (triggerPattern) {
			haptics.trigger(triggerPattern);
		}
	};

	node.addEventListener('click', handleTrigger);

	return {
		update(newPattern: string | unknown) {
			pattern = newPattern as string;
		},
		destroy() {
			node.removeEventListener('click', handleTrigger);
		}
	};
}
