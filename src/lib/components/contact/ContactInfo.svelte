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

<div class="flex flex-col w-full h-full justify-between relative text-base">
	<ContactAddress href="mailto:wentallout@gmail.com" title="Email">
		{#snippet icon()}
			<EnvelopeSimple />
		{/snippet}
		<CopyToClipboard textToCopy="wentallout@gmail.com">
			<span class="text-muted-foreground">wentallout@gmail.com</span>
		</CopyToClipboard>
	</ContactAddress>

	<ContactAddress href="tel:+84929066331" title="Phone / WhatsApp / Zalo / Telegram">
		{#snippet icon()}
			<Phone />
		{/snippet}
		<CopyToClipboard textToCopy="(+84)929066331">
			<span class="text-muted-foreground">(+84)929066331</span>
		</CopyToClipboard>
	</ContactAddress>

	<ContactAddress title="Working hours & timezone">
		{#snippet icon()}
			<Clock />
		{/snippet}
		<div class="text-muted-foreground">Monday - Friday 9:00 AM to 7:00 PM (ICT)</div>
		<div class="text-muted-foreground">Your local time: {localTime}</div>
		<div class="text-muted-foreground">
			My local time (Vietnam): {vietnamTime}
		</div>
	</ContactAddress>
</div>
