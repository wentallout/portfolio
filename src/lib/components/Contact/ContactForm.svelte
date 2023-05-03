<script>
	import Button from '$lib/components/Button/Button.svelte';
	import TextArea from '$lib/components/Input/TextArea.svelte';
	import TextInput from '$lib/components/Input/TextInput.svelte';
	import EnvelopeSimple from '~icons/ph/envelope-simple';
	import ArrowCounterClockwise from '~icons/ph/arrow-counter-clockwise';
	import PaperPlaneRight from '~icons/ph/paper-plane-right';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';

	export const prerender = true;
</script>

<section>
	<SectionTitle sectionTitle="Get in touch" let:sectionIcon>
		<EnvelopeSimple {...sectionIcon} />
	</SectionTitle>

	<div class="form-container">
		<form
			class="contact"
			name="contact"
			method="POST"
			netlify-honeypot="bot-field"
			data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />

			<TextInput name="name" type="text" label="Name" placeholder="Enter your name here" />

			<TextInput name="email" type="email" label="Email" placeholder="username@email.com" />

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
					backgroundColor="transparent"
					labelColor="var(--colorError)"
					><ArrowCounterClockwise color="var(--colorError)" width="16" height="16" />
				</Button>
			</div>
		</form>
	</div>
</section>

<style>
	.form-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-bottom: var(--space-m);
	}

	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.contact__btn {
		margin-top: var(--space-m);
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		gap: var(--space-s);
	}
</style>
