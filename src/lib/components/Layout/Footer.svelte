<script>
	import { onMount } from 'svelte';
	let time;
	let partOfDay = '';
	let hour = new Date().getHours();

	$: adjustGreet(hour);
	function adjustGreet(hour) {
		if (hour >= 5 && hour < 12) {
			partOfDay = 'morning';
		} else if (hour >= 12 && hour < 17) {
			partOfDay = 'afternoon';
		} else if (hour >= 17 && hour < 21) {
			partOfDay = 'evening';
		} else {
			partOfDay = 'night';
		}
	}

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<footer class="small-text">
	<ul class="list">
		<li class="list-item">
			<a href="/">Home</a>
		</li>
		<li class="list-item">
			<a href="/project">Project</a>
		</li>
		<li class="list-item">
			<a href="/resource">Resource</a>
		</li>
		<li class="list-item">
			<a href="/contact">Contact</a>
		</li>
		<br />
	</ul>
	<!-- <div class="time">Is it {time} for you?👋 Good {partOfDay} then .</div> -->
	<div class="">2022 - Made with SvelteKit</div>
</footer>

<style>
	footer {
		/* Flex */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		/*  */

		/* Font weight */
		font-weight: 300;
		/*  */

		/* Padding + Margin */
		padding: 3rem 17vw;
		/*  */

		/* Position */
		position: relative;
		/*  */

		/* Width */
		max-width: 100vw;
		height: 50px;
		/*  */

		/* Color */
		background-color: #000;
		color: var(--white);
		/*  */
	}

	footer:before {
		background: url('/images/rhombus_line.png') repeat top center/49px 72px;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.12;
		z-index: 1;
	}

	.list {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		margin: 0px;
		z-index: 2;
	}

	.list-item {
		display: flex;
		padding-left: 0;
		padding-right: 1rem;
	}
</style>
