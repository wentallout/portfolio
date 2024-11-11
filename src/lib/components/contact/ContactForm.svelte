<script>
	import ExLink from '$components/common/ExLink.svelte';
	import Button from '$components/button/Button.svelte';
	import TextArea from '$components/input/TextArea.svelte';
	import TextInput from '$components/input/TextInput.svelte';

	import SectionTitle from '$sections/SectionTitle.svelte';
	import CopyToClipboard from '$components/common/CopyToClipboard.svelte';

	import { getUserLocalTime, getVietnamTime } from '$lib/utils/time';
	import { slide } from 'svelte/transition';
	import {
		At,
		Clock,
		Phone,
		User,
		ArrowCounterClockwise,
		PaperPlaneRight,
		EnvelopeSimple
	} from '$lib/assets/icons/icons';

	let localTime = $state();
	let vietnamTime = $state();

	setInterval(() => {
		localTime = getUserLocalTime();
		vietnamTime = getVietnamTime();
	}, 1000);
</script>

<section>
	<SectionTitle
		sectionDesc="Tell me about your next big project. I'll be happy to contribute."
		sectionTitle="Get in touch">
		{#snippet children({ sectionIcon })}
			<EnvelopeSimple {...sectionIcon} />
		{/snippet}
	</SectionTitle>

	<div class="form-container">
		<form name="contact" class="contact" data-netlify="true" method="post">
			<input name="form-name" type="hidden" value="contact" />

			<TextInput name="name" label="Name" type="text" placeholder="John Doe">
				{#snippet icon()}
					<span>
						<User />
					</span>
				{/snippet}
			</TextInput>
			<TextInput name="email" label="Email" type="email" placeholder="username@gmail.com">
				{#snippet icon()}
					<span>
						<At />
					</span>
				{/snippet}
			</TextInput>
			<TextArea name="message" label="Message" />

			<div class="contact__btn">
				<Button
					backgroundColor="var(--colorPrimary)"
					glowColor="var(--colorPrimary)"
					label="Send message"
					type="submit">
					<PaperPlaneRight color="var(--colorBlack)" height="16" width="16" />
				</Button>

				<Button
					backgroundColor="var(--colorBgLayout)"
					borderColor="var(--colorError)"
					glowColor="var(--colorError)"
					label="Reset"
					labelColor="var(--colorError)"
					shadowColor="var(--colorError)"
					type="reset">
					<ArrowCounterClockwise color="var(--colorError)" height="16" width="16" />
				</Button>
			</div>
		</form>
		<div class="contact__other">
			<div class="contact__address custom-border">
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

			<div class="contact__address custom-border">
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

			<div class="contact__address custom-border">
				<div class="address__title text-base">
					<Clock />
					<div>Working hours</div>
				</div>
				<div class="address__desc">Monday - Friday 9:00 AM to 7:00 PM</div>
				<div class="address__desc">Your time: {localTime}</div>
				<div class="address__desc">My time: {vietnamTime}</div>
			</div>
		</div>
	</div>
</section>

<style>
	.form-container {
		display: grid;
		gap: var(--spaceXL);
		align-items: start;
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		.form-container {
			grid-template-columns: 1fr 1fr;
		}
	}

	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
		max-width: var(--text-width);
	}

	.contact__btn {
		margin-top: var(--spaceM);
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		gap: var(--spaceS);
	}

	.contact__other {
		display: flex;
		flex-direction: column;
		gap: var(--spaceM);
		justify-content: space-between;
	}

	.contact__address {
		/* FLEX */
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		gap: var(--spaceXS);
		/* --- */

		padding: var(--spaceS) var(--spaceM);
		transition: var(--transition);
		box-shadow: var(--boxShadow);
		background: var(--colorBgGradientSubtle);
	}

	.address__title {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--space2XS);
		font-weight: 500;
	}

	.address__desc {
		color: var(--colorTextSecondary);
	}
</style>
