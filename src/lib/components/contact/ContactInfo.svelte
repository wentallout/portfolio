<script>
	import CopyToClipboard from '$components/common/CopyToClipboard.svelte';
	import ContactAddress from '$components/contact/ContactAddress.svelte';
	import { Clock, EnvelopeSimple, Phone } from '$lib/assets/icons/icons';
	import { getUserLocalTime, getVietnamTime } from '$lib/utils/time';

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

<div class="contact__other">
	<ContactAddress href="mailto:wentallout@gmail.com" title="Email">
		{#snippet icon()}
			<EnvelopeSimple height="24" width="24" />
		{/snippet}
		<CopyToClipboard textToCopy="wentallout@gmail.com">
			<div class="address__desc text-small">wentallout@gmail.com</div>
		</CopyToClipboard>
	</ContactAddress>

	<ContactAddress href="tel:+84929066331" title="Phone / WhatsApp / Zalo / Telegram">
		{#snippet icon()}
			<Phone height="24" width="24" />
		{/snippet}
		<CopyToClipboard textToCopy="(+84)929066331">
			<div class="address__desc text-small">(+84)929066331</div>
		</CopyToClipboard>
	</ContactAddress>

	<ContactAddress title="Working hours">
		{#snippet icon()}
			<Clock height="24" width="24" />
		{/snippet}
		<div class="address__desc">Monday - Friday 9:00 AM to 7:00 PM</div>
		<div class="address__desc">Your time: {localTime}</div>
		<div class="address__desc">My time: {vietnamTime}</div>
	</ContactAddress>
</div>

<style>
	.contact__other {
		display: flex;
		flex-direction: column;
		gap: var(--space-mid);
		justify-content: space-between;
	}

	
</style>
