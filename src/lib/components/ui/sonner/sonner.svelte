<script lang="ts">
	import { browser } from '$app/env';
	import { mode } from 'mode-watcher';
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
	import SpinnerIcon from 'phosphor-svelte/lib/SpinnerIcon';
	import CheckCircleIcon from 'phosphor-svelte/lib/CheckCircleIcon';
	import XCircleIcon from 'phosphor-svelte/lib/XCircleIcon';
	import InfoIcon from 'phosphor-svelte/lib/InfoIcon';
	import WarningIcon from 'phosphor-svelte/lib/WarningIcon';

	let { ...restProps }: SonnerProps = $props();
</script>

{#if browser}
	<Sonner
		style="--normal-bg: var(--color-popover); --normal-text: var(--color-popover-foreground); --normal-border: var(--color-border);"
		class="toaster group"
		theme={mode.current}
		{...restProps}>
		{#snippet loadingIcon()}
			<SpinnerIcon class="size-4 animate-spin" />
		{/snippet}
		{#snippet successIcon()}
			<CheckCircleIcon class="size-4" />
		{/snippet}
		{#snippet errorIcon()}
			<XCircleIcon class="size-4" />
		{/snippet}
		{#snippet infoIcon()}
			<InfoIcon class="size-4" />
		{/snippet}
		{#snippet warningIcon()}
			<WarningIcon class="size-4" />
		{/snippet}
	</Sonner>
{/if}
