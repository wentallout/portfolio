<!-- @migration task: review uses of `navigating` -->
<script>
	import { navigating } from '$app/state';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	NProgress.configure({
		easing: 'ease',
		minimum: 0.1,
		showSpinner: false,
		speed: 500,
		trickle: true
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
