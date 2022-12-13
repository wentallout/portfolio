<script>
	import { onMount } from 'svelte';

	onMount(() => {
		let coords = { x: 0, y: 0 };
		let circles = document.querySelectorAll('.circle');

		let colors = [
			'#fefff2',
			'#feffb9',
			'#fcf67e',
			'#f6e344',
			'#ebc50c',
			'#ba9104',
			'#886201',
			'#573a00',
			'#261700'
		];

		circles.forEach(function (circle, index) {
			circle.x = 0;
			circle.y = 0;
			circle.style.backgroundColor = colors[index % colors.length];
		});

		window.addEventListener('mousemove', function (e) {
			coords.x = e.clientX;
			coords.y = e.clientY;
		});

		function animateCircles() {
			let x = coords.x;
			let y = coords.y;

			circles.forEach(function (circle, index) {
				circle.style.left = x - 8 + 'px';
				circle.style.top = y - 8 + 'px';

				circle.style.scale = (circles.length - index) / circles.length;

				circle.x = x;
				circle.y = y;

				const nextCircle = circles[index + 1] || circles[0];
				x += (nextCircle.x - x) * 0.3;
				y += (nextCircle.y - y) * 0.3;
			});

			requestAnimationFrame(animateCircles);
		}

		animateCircles();
	});
</script>

<div class="circle" />
<div class="circle" />
<div class="circle" />
<div class="circle" />
<div class="circle" />
<div class="circle" />
<div class="circle" />
<div class="circle" />
<div class="circle" />

<style>
	.circle {
		height: 16px;
		width: 16px;
		border-radius: 100%;

		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;

		z-index: 1000;
		pointer-events: none;
	}
</style>
