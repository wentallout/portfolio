<script lang="ts">
	import { ArrowLineUp } from '#lib/assets/icons/icons.js';
	import { haptic } from '#lib/actions/haptics.js';

	/** @type {{showOnPx?: number}} */
	let { showOnPx = 150 } = $props();
	let hidden = $state(true);

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window onscroll={handleOnScroll} />

<button
	class="fixed right-3 bottom-3 z-50 flex flex-col justify-center items-center aspect-square w-10 rounded-full bg-primary text-primary-foreground shadow-md select-none transition-opacity duration-300 hover:brightness-110 active:opacity-80 {hidden
		? 'opacity-0 invisible'
		: 'opacity-100 visible'}"
	onclick={goTop}
	type="button"
	use:haptic={'medium'}>
	<ArrowLineUp height="16" width="16" />
</button>
