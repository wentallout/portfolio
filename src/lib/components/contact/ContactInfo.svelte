<script lang="ts">
	import CopyToClipboard from '#lib/components/common/CopyToClipboard.svelte';
	import ContactAddress from '#lib/components/contact/ContactAddress.svelte';
	import { Clock, EnvelopeSimple, Phone } from '#lib/assets/icons/icons.js';
	import { getUserLocalTime, getVietnamTime } from '#lib/utils/time.js';

	let localTime = $state(getUserLocalTime());
	let vietnamTime = $state(getVietnamTime());

	$effect(() => {
		const interval = setInterval(() => {
			localTime = getUserLocalTime();
			vietnamTime = getVietnamTime();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col w-full h-full justify-between relative">
	<ContactAddress href="mailto:wentallout@gmail.com" title="Email">
		{#snippet icon()}
			<EnvelopeSimple height="20" width="20" />
		{/snippet}
		<CopyToClipboard textToCopy="wentallout@gmail.com">
			<span class="text-sm text-muted-foreground font-sans">wentallout@gmail.com</span>
		</CopyToClipboard>
	</ContactAddress>

	<ContactAddress href="tel:+84929066331" title="Phone / WhatsApp / Zalo / Telegram">
		{#snippet icon()}
			<Phone height="20" width="20" />
		{/snippet}
		<CopyToClipboard textToCopy="(+84)929066331">
			<span class="text-sm text-muted-foreground font-sans">(+84)929066331</span>
		</CopyToClipboard>
	</ContactAddress>

	<ContactAddress title="Working hours & timezone">
		{#snippet icon()}
			<Clock height="20" width="20" />
		{/snippet}
		<div class="text-sm text-muted-foreground font-sans">
			Monday - Friday 9:00 AM to 7:00 PM (ICT)
		</div>
		<div class="text-sm text-muted-foreground font-sans">Your local time: {localTime}</div>
		<div class="text-sm text-muted-foreground font-sans">
			My local time (Vietnam): {vietnamTime}
		</div>
	</ContactAddress>
</div>
