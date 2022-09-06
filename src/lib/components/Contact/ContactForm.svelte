<div class="form-container ">
	<form
		name="contact"
		method="post"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class="contact"
	>
		<input type="hidden" name="form-name" value="contact" />
		<div class="label base-text">Name</div>
		<input class="contact__input small-text" type="text" name="name" required />
		<div class="label base-text">Email</div>
		<input
			placeholder="username@email.com"
			class="contact__input small-text"
			type="email"
			name="email"
			required
		/>
		<div class="label base-text">Message</div>
		<textarea class="contact__message small-text" required name="message" placeholder="" />

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
		border: 1px solid var(--gray);
	}

	/* FOCUS */
	.contact__input:focus,
	.contact__message:focus {
		border: 2px solid var(--black);
	}

	/*  */

	.btn-send {
		border: 0;
		background-color: var(--primary);
		margin-right: var(--space-xs);
	}

	.btn-send:hover {
		/* background-color: hsl(38, 50%, 47%); */
		background-color: hsl(38, 50%, 37%);
	}

	.btn-reset {
		border: 1px solid var(--error);
		color: var(--error);
		background-color: transparent;
	}

	.btn-reset:hover {
		background-color: var(--error);
		color: var(--white);
	}

	.btn-container {
		display: flex;
		flex-direction: row;
	}
</style>
