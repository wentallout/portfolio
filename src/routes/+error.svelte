<script>
	import { page } from '$app/stores';
</script>

<h2 class="error-info mix-text">Oops! This is awkward...</h2>
<p>{$page.status} {$page.error.message}</p>

<a class="btn btn-back" href="/">Go back</a>

<style>
	.btn-back {
		background-color: var(--primary);
		color: var(--black);
	}

	.btn-back:hover {
		background-color: var(--primary-hover);
	}
</style>
