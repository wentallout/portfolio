<div class="form-container ">
	<form
		name="contact"
		method="post"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class="contact"
	>
		<input type="hidden" name="form-name" value="contact" />

		<label for="name" class="label base-text">Name</label>
		<input class="contact__input small-text" type="text" name="name" id="name" required />

		<label for="email" class="label base-text">Email</label>
		<input
			placeholder="username@email.com"
			class="contact__input small-text"
			type="email"
			name="email"
			id="email"
			required
		/>

		<label for="message" class="label base-text">Message</label>
		<textarea
			class="contact__message small-text"
			required
			name="message"
			id="message"
			placeholder=""
		/>

		<div class="btn-container">
			<button class="btn btn-send" type="submit">Send</button>
			<button class="btn btn-reset" type="reset">Reset</button>
		</div>
	</form>
</div>

<style>
	.form-container {
		display: flex;
		justify-content: left;
		width: 100%;
		margin-bottom: var(--space-m);
	}

	.contact {
		border-radius: var(--border-radius);
		border: var(--border);
		box-shadow: var(--box-shadow);
		padding: var(--space-m);

		width: 100%;
		max-width: 80rem;
		display: flex;
		flex-direction: column;
	}

	.contact__message,
	.contact__input {
		margin-bottom: var(--space-s);
		border: 1px solid var(--neutral-700);
	}

	/* FOCUS */
	.contact__input:focus,
	.contact__message:focus {
		border: 2px solid var(--neutral-900);
	}

	/*  */

	.btn-send {
		border: 0;
		background-color: var(--primary-500);
		margin-right: var(--space-xs);
	}

	.btn-send:hover {
		background-color: hsl(38, 50%, 37%);
	}

	.btn-reset {
		border: 1px solid var(--error);
		color: var(--error);
		background-color: transparent;
	}

	.btn-reset:hover {
		background-color: var(--error);
		color: var(--neutral-100);
	}

	.btn-container {
		display: flex;
		flex-direction: row;
	}
</style>
