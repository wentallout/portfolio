<script>
	import ExLink from '$lib/components/Common/ExLink.svelte';
	import Button from '$components/Button/Button.svelte';
	import TextArea from '$components/Input/TextArea.svelte';
	import TextInput from '$components/Input/TextInput.svelte';
	import EnvelopeSimple from '~icons/ph/envelope-simple';
	import ArrowCounterClockwise from '~icons/ph/arrow-counter-clockwise';
	import PaperPlaneRight from '~icons/ph/paper-plane-right';
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';

	import Envelope from '~icons/ph/envelope';
	import Clock from '~icons/ph/clock';
	import Phone from '~icons/ph/phone';
</script>

<section>
	<SectionTitle
		sectionTitle="Get in touch"
		sectionDesc="Tell me about your next big project. I'll be happy to contribute."
		let:sectionIcon>
		<EnvelopeSimple {...sectionIcon} />
	</SectionTitle>

	<div class="form-container">
		<form name="contact" class="contact" method="post" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />

			<TextInput name="name" type="text" label="Name" placeholder="John Doe" />
			<TextInput name="email" type="email" label="Email" placeholder="username@gmail.com" />
			<TextArea
				name="message"
				label="Message"
				placeholder="Something you want to tell me. Ex: jobs, ideas" />

			<div class="contact__btn">
				<Button
					type="submit"
					label="Send message"
					backgroundColor="var(--colorPrimary)"
					glowColor="var(--colorPrimary)">
					<PaperPlaneRight color="var(--colorBlack)" width="16" height="16" />
				</Button>

				<Button
					type="reset"
					label="Reset"
					borderColor="var(--colorError)"
					backgroundColor="var(--colorBgLayout)"
					shadowColor="var(--colorError)"
					glowColor="var(--colorError)"
					labelColor="var(--colorError)">
					<ArrowCounterClockwise color="var(--colorError)" width="16" height="16" />
				</Button>
			</div>
		</form>
		<div class="contact__other">
			<ExLink href="mailto:wentallout@gmail.com">
				<div class="contact__address">
					<div class="address__title text-mid">
						<Envelope />
						<div class="">wentallout@gmail.com</div>
					</div>
					<div class="address__desc">Send me an email</div>
				</div>
			</ExLink>

			<ExLink href="tel:+84929066331">
				<div class="contact__address">
					<div class="address__title text-mid">
						<Phone />
						<div class="">+84 929066331</div>
					</div>
					<div class="address__desc">Call me directly</div>
				</div>
			</ExLink>
			<div class="contact__address">
				<div class="address__title text-mid">
					<Clock />
					<div class="">Working hours</div>
				</div>
				<div class="address__desc">Monday - Friday 9:00 AM to 7:00 PM</div>
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
			grid-template-columns: 1fr auto;
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
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		gap: var(--spaceXS);
		background-color: var(--colorBgElevated);
		padding: var(--spaceS) var(--spaceM);
		border-radius: var(--borderRadius);
		transition: var(--transition);
	}

	.contact__address:hover {
		color: var(--colorPrimaryHover);
		outline: 1px solid var(--colorPrimaryHover);
	}

	.address__title {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spaceXS);
	}

	.address__desc {
		color: var(--colorTextSecondary);
	}
</style>
