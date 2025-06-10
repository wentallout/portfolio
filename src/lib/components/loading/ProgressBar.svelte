<!-- @migration task: review uses of `navigating` -->
<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/state';
	import 'nprogress/nprogress.css';

	NProgress.configure({
		minimum: 0.1,
		showSpinner: false,
		trickle: true,
		easing: 'ease',
		speed: 500
	});

	$effect(() => {
		if (navigating) {
			NProgress.start();
		}
		if (!navigating) {
			NProgress.done();
		}
	});
</script>

<div class=""></div>
