<script>
	import EnvelopeSimple from '~icons/ph/envelope-simple';
	import Button from '$lib/components/Button/Button.svelte';
	import PaperPlaneRight from '~icons/ph/paper-plane-right';
	import SectionTitle from '$lib/components/Common/SectionTitle.svelte';
</script>

<section>
	<SectionTitle sectionTitle="Email" let:sectionIcon>
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

			<label for="name" class="label small-text">Name</label>
			<input class="small-text" type="text" name="name" id="name" required />

			<label for="email" class="label small-text">Email</label>
			<input
				placeholder="username@email.com"
				class="small-text"
				type="email"
				name="email"
				id="email"
				required />

			<label for="message" class="label small-text">Message</label>
			<textarea class="small-text" required name="message" id="message" placeholder="" />

			<div class="contact__btn">
				<Button label="Send" backgroundColor="var(--primary-500)">
					<PaperPlaneRight class="icon-black" />
				</Button>

				<Button
					label="Reset"
					border="1px solid var(--warning)"
					backgroundColor="transparent"
					labelColor="var(--warning)"
					type="reset" />
			</div>
		</form>
	</div>
</section>

<style>
	.form-container {
		display: flex;
		justify-content: left;
		width: 100%;
		margin-bottom: var(--space-m);
		border-radius: var(--border-radius-light);
	}

	.contact {
		width: 100%;

		display: flex;
		flex-direction: column;
	}

	.label {
		font-weight: 500;
		margin-bottom: var(--space-3xs);
	}

	.contact__btn {
		/* display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--space-s);

		width: 100%;
		*/

		margin-top: var(--space-m);

		--min: 15ch;
		--gap: var(--space-m);

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}

	input {
		margin-bottom: var(--space-m);
	}
</style>
