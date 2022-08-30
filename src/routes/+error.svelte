<script>
	import { page } from '$app/stores';
</script>

<h1 class="large-text status">{$page.status}</h1>
<h2 class="error-info mix-text">Oops! This is awkward...</h2>
<p>{$page.error.message}</p>

<a class="btn btn-back" href="/">Go back</a>

<style>
	.status {
		color: var(--error);
	}

	.btn-back {
		background-color: var(--primary);
		color: var(--black);
	}

	.btn-back:hover {
		background-color: var(--primary-hover);
	}
</style>
