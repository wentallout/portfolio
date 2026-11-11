<script lang="ts">
	import { CaretDown } from '#lib/assets/icons/icons.js';
	import { Button } from '#lib/components/ui/button/index.js';

	/** @type {{accordionSection?: string, accordionText?: string, isOpened?: boolean}} */
	let { accordionSection = '', accordionText = '', isOpened = $bindable(false) } = $props();

	function handleToggle() {
		isOpened = !isOpened;
	}
</script>

<div class="border-grid-b last:!border-b-0 w-full relative bg-background">
	<Button
		variant="ghost"
		class="w-full p-6 flex items-center justify-between text-left hover:bg-accent group h-auto font-normal whitespace-normal gap-4"
		aria-expanded={isOpened}
		onclick={handleToggle}
		type="button">
		<span
			class="text-sm sm:text-base font-medium text-foreground group-hover:text-foreground transition-colors min-w-0 flex-1 text-pretty">
			{accordionSection}
		</span>
		<div
			class="text-muted-foreground group-hover:text-foreground transition-transform duration-300 shrink-0 {isOpened
				? 'rotate-180 text-primary'
				: ''}">
			<CaretDown height="16" width="16" />
		</div>
	</Button>

	<!-- Expand via grid track 0fr -> 1fr: no JS height measurement, no per-frame layout read.
	     NOTE: the utility is `grid-rows-[…]`; `grid-template-rows-[…]` emits no CSS and
	     silently left every panel permanently expanded. -->
	<div
		class="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none {isOpened
			? 'grid-rows-[1fr]'
			: 'grid-rows-[0fr]'}"
		aria-hidden={!isOpened}>
		<div class="overflow-hidden min-h-0">
			<div
				class="signature-padding !pt-4 !pb-6 !px-6 text-sm text-muted-foreground leading-relaxed border-grid-t bg-muted/30">
				{accordionText}
			</div>
		</div>
	</div>
</div>
