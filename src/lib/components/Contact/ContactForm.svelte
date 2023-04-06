<script>
	import Button from '$lib/components/Button/Button.svelte';
	import TextArea from '$lib/components/Input/TextArea.svelte';
	import TextInput from '$lib/components/Input/TextInput.svelte';
	import EnvelopeSimple from '~icons/ph/envelope-simple';

	import ArrowCounterClockwise from '~icons/ph/arrow-counter-clockwise';

	import PaperPlaneRight from '~icons/ph/paper-plane-right';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionTitle="Get in touch" let:sectionIcon>
		<EnvelopeSimple {...sectionIcon} />
	</SectionTitle>

	<div class="form-container">
		<form
			class="contact"
			name="contact"
			method="post"
			netlify-honeypot="bot-field"
			data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />

			<TextInput type="text" label="Name" placeholder="Enter your name here" />

			<TextInput type="email" label="Email" placeholder="username@email.com" />

			<TextArea label="Message" placeholder="Something you want to tell me. Ex: jobs, ideas" />

			<div class="contact__btn">
				<Button label="Send message" backgroundColor="var(--primary-500)">
					<PaperPlaneRight color="var(--bg-500)" width="24" height="24" />
				</Button>

				<Button
					label="Reset"
					borderColor="var(--error)"
					backgroundColor="var(--bg-500)"
					labelColor="var(--error)"
					type="reset"
					><ArrowCounterClockwise color="var(--error)" width="24" height="24" />
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
		width: 100%;
		margin-top: var(--space-m);

		--min: 30ch;
		--gap: var(--space-s);

		display: grid;
		grid-gap: var(--gap);

		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
