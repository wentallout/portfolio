<script>
	import CopyToClipboard from '$components/common/CopyToClipboard.svelte';
	import ExLink from '$components/common/ExLink.svelte';
	import { getUserLocalTime, getVietnamTime } from '$lib/utils/time';
	let localTime = $state();
	let vietnamTime = $state();

	setInterval(() => {
		localTime = getUserLocalTime();
		vietnamTime = getVietnamTime();
	}, 1000);

	import {
		ArrowCounterClockwise,
		At,
		Clock,
		EnvelopeSimple,
		Phone,
		User
	} from '$lib/assets/icons/icons';
</script>

<div class="contact__other">
	<div class="contact__address fancy-border">
		<ExLink href="mailto:wentallout@gmail.com">
			<div class="address__title text-base">
				<EnvelopeSimple />
				<div>Email</div>
			</div>
		</ExLink>
		<CopyToClipboard textToCopy="wentallout@gmail.com">
			<div class="address__desc text-small">wentallout@gmail.com</div>
		</CopyToClipboard>
	</div>

	<div class="contact__address fancy-border">
		<ExLink href="tel:+84929066331">
			<div class="address__title text-base">
				<Phone />
				<div>Phone / WhatsApp / Zalo / Telegram</div>
			</div>
		</ExLink>
		<CopyToClipboard textToCopy="(+84)929066331">
			<div class="address__desc text-small">(+84)929066331</div>
		</CopyToClipboard>
	</div>

	<div class="contact__address fancy-border">
		<div class="address__title text-base">
			<Clock />
			<div>Working hours</div>
		</div>
		<div class="address__desc">Monday - Friday 9:00 AM to 7:00 PM</div>
		<div class="address__desc">Your time: {localTime}</div>
		<div class="address__desc">My time: {vietnamTime}</div>
	</div>
</div>

<style>
	.contact__other {
		display: flex;
		flex-direction: column;
		gap: var(--space-mid);
		justify-content: space-between;
	}

	.contact__address {
		/* FLEX */
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		gap: var(--space-xs);
		/* --- */

		padding: var(--space-card);
		transition: var(--transition);
		box-shadow: var(--boxShadow);
		background: var(--color-bg-gradient-subtle);

		position: relative;
		border-radius: var(--border-radius-light);
	}

	.address__title {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space-2xs);
		font-weight: 500;
	}

	.address__desc {
		color: var(--color-text-secondary);
	}
</style>
