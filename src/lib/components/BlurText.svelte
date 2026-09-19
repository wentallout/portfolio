<script lang="ts">
	import { gsap } from 'gsap';

	type AnimSnap = Record<string, string | number>;

	type Props = {
		text?: string;
		delay?: number;
		class?: string;
		animateBy?: 'words' | 'letters';
		direction?: 'top' | 'bottom';
		threshold?: number;
		rootMargin?: string;
		animationFrom?: AnimSnap;
		animationTo?: AnimSnap[];
		easing?: string | number[] | ((t: number) => number);
		onAnimationComplete?: () => void;
		stepDuration?: number;
		as?: string;
	};

	let {
		text = '',
		delay = 200,
		class: className = '',
		animateBy = 'words',
		direction = 'top',
		threshold = 0.1,
		rootMargin = '0px',
		animationFrom,
		animationTo,
		easing = (t: number) => t,
		onAnimationComplete,
		stepDuration = 0.35,
		as = 'span'
	}: Props = $props();

	const elements = $derived(animateBy === 'words' ? text.split(' ') : text.split(''));

	let inView = $state(false);
	let containerEl: HTMLElement | undefined = $state();
	let spanEls: (HTMLSpanElement | undefined)[] = $state([]);

	$effect(() => {
		if (!containerEl) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					inView = true;
					if (containerEl) observer.unobserve(containerEl);
				}
			},
			{ threshold, rootMargin }
		);
		observer.observe(containerEl);
		return () => observer.disconnect();
	});

	const defaultFrom = $derived<AnimSnap>(
		direction === 'top'
			? { filter: 'blur(6px)', opacity: 0, y: -12 }
			: { filter: 'blur(6px)', opacity: 0, y: 12 }
	);

	const defaultTo = $derived<AnimSnap[]>([
		{ filter: 'blur(2px)', opacity: 0.6, y: direction === 'top' ? 2 : -2 },
		{ filter: 'blur(0px)', opacity: 1, y: 0 }
	]);

	const fromSnapshot = $derived<AnimSnap>(animationFrom ?? defaultFrom);
	const toSnapshots = $derived<AnimSnap[]>(animationTo ?? defaultTo);

	function resolveEase(e: Props['easing']): string {
		if (typeof e === 'string') return e;
		return 'power2.out';
	}

	function toGsapVars(snap: AnimSnap): Record<string, string | number> {
		const out: Record<string, string | number> = {};
		for (const [k, v] of Object.entries(snap)) {
			if (k === 'x' || k === 'y' || k === 'opacity') {
				out[k] = v;
			} else if (k === 'filter') {
				out[k] = String(v);
			} else {
				out[k] = v;
			}
		}
		return out;
	}

	function applyInitial(el: HTMLElement, snap: AnimSnap) {
		const props: Record<string, string> = {};
		for (const [k, v] of Object.entries(snap)) {
			if (k === 'y') {
				props.transform = `translateY(${typeof v === 'number' ? v + 'px' : v})`;
			} else if (k === 'x') {
				props.transform =
					`${props.transform ?? ''} translateX(${typeof v === 'number' ? v + 'px' : v})`.trim();
			} else if (k === 'filter') {
				props.filter = String(v);
			} else if (k === 'opacity') {
				props.opacity = String(v);
			} else {
				(el.style as unknown as Record<string, string>)[k] = String(v);
			}
		}
		if (props.transform) el.style.transform = props.transform;
		if (props.filter !== undefined) el.style.filter = props.filter;
		if (props.opacity !== undefined) el.style.opacity = props.opacity;
	}

	// Set initial styles immediately on mount
	$effect(() => {
		// re-run when snapshots change
		void fromSnapshot;
		spanEls.forEach((el) => el && applyInitial(el, fromSnapshot));
	});

	$effect(() => {
		if (!inView) return;

		const ease = resolveEase(easing);
		const tweens: Array<gsap.core.Tween> = [];

		spanEls.forEach((el, index) => {
			if (!el) return;

			gsap.set(el, toGsapVars(fromSnapshot));

			const keyframes = toSnapshots.map((s) => toGsapVars(s));
			const tween = gsap.to(el, {
				keyframes,
				duration: stepDuration * Math.max(1, toSnapshots.length),
				delay: (index * delay) / 1000,
				ease,
				overwrite: 'auto',
				onComplete:
					index === elements.length - 1 && onAnimationComplete
						? () => onAnimationComplete?.()
						: undefined
			});

			tweens.push(tween);
		});

		return () => {
			tweens.forEach((t) => t.kill());
		};
	});
</script>

<svelte:element
	this={as}
	bind:this={containerEl}
	class="blur-text {className} inline-flex flex-wrap font-[inherit]">
	{#each elements as segment, index (index)}
		<span
			bind:this={spanEls[index]}
			class="inline-block will-change-transform font-[inherit] {className}">
			{segment === ' ' ? '\u00A0' : segment}{animateBy === 'words' && index < elements.length - 1
				? '\u00A0'
				: ''}
		</span>
	{/each}
</svelte:element>
