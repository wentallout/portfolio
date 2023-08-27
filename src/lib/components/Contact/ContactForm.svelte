<script>
	import Button from '$components/Button/Button.svelte';
	import TextArea from '$components/Input/TextArea.svelte';
	import TextInput from '$components/Input/TextInput.svelte';
	import EnvelopeSimple from '~icons/ph/envelope-simple';
	import ArrowCounterClockwise from '~icons/ph/arrow-counter-clockwise';
	import PaperPlaneRight from '~icons/ph/paper-plane-right';
	import SectionTitle from '$lib/components/Common/Section/SectionTitle.svelte';
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
					backgroundColor="var(--colorBgLayout)"
					shadowColor="var(--colorError)"
					glowColor="var(--colorError)"
					labelColor="var(--colorError)">
					<ArrowCounterClockwise color="var(--colorError)" width="16" height="16" />
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
		margin-bottom: var(--spaceM);
	}

	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.contact__btn {
		margin-top: var(--spaceM);
		width: 100%;

		display: flex;
		flex-wrap: wrap;
		gap: var(--spaceS);
	}
</style>
