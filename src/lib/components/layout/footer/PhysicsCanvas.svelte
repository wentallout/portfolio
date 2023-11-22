<script>
	import { onMount, onDestroy } from 'svelte';

	import Matter from 'matter-js';

	let physEle;
	let devicePixelRatio;
	let Composite = Matter.Composite;
	let Engine = Matter.Engine;
	let Render = Matter.Render;
	let Bodies = Matter.Bodies;
	let Runner = Matter.Runner;

	let engine;

	let MouseConstraint = Matter.MouseConstraint;
	let Composites = Matter.Composites;
	let eleClientWidth;
	let eleClientHeight;
	let time = 0;

	function changeGravity() {
		time = time + 0.01;
		engine.gravity.x = Math.sin(time);

		engine.gravity.y = Math.cos(time);
		requestAnimationFrame(changeGravity);
	}

	onMount(() => {
		engine = Engine.create();

		let renderer = Render.create({
			element: physEle,
			engine: engine,
			options: {
				width: eleClientWidth,
				height: eleClientHeight,
				background: 'transparent',
				wireframes: false,
				pixelRatio: devicePixelRatio,
				hasBounds: true
			}
		});

		let shape1 = Bodies.circle(0, 0, 25, {
			frictionAir: 0.05,
			render: {
				sprite: {
					texture: '/images/WENT.svg',
					yScale: 3,
					xScale: 3
				}
			},
			restitution: 0.8
		});

		let shape2 = Bodies.circle(300, 0, 25, {
			frictionAir: 0.05,
			render: {
				sprite: {
					texture: '/images/ALL.svg',
					yScale: 3,
					xScale: 3
				}
			},
			restitution: 0.8
		});

		let shape3 = Bodies.circle(600, 0, 25, {
			frictionAir: 0.05,
			render: {
				sprite: {
					texture: '/images/OUT.svg',
					yScale: 3,
					xScale: 3
				}
			},
			restitution: 0.8
		});

		// Create a wall for the shapes to bounce off
		let wallOptions = {
			isStatic: true,
			render: {
				visible: false
			}
		};

		let ground = Bodies.rectangle(
			eleClientWidth / 2,
			eleClientHeight,
			eleClientWidth,
			100,
			wallOptions
		);
		let ceiling = Bodies.rectangle(eleClientWidth / 2, 0, eleClientWidth, 10000, wallOptions);

		let leftWall = Bodies.rectangle(0, eleClientHeight / 2, 1, eleClientHeight, wallOptions);
		let rightWall = Bodies.rectangle(
			eleClientWidth,
			eleClientHeight / 2,
			50,
			eleClientHeight,
			wallOptions
		);

		// let mouseControl = MouseConstraint.create(engine, {
		// 	element: physEle,
		// 	constraint: {
		// 		render: {
		// 			visible: true
		// 		}
		// 	}
		// });

		// let intialShapes = Composites.stack(50, 50, 1, 1, 40, 40, function (x, y) {
		// 	return createShape(x, y);
		// });

		Composite.add(engine.world, [
			ground,
			ceiling,
			leftWall,
			rightWall,
			// mouseControl,
			// intialShapes,
			shape1,
			shape2,
			shape3
		]);

		Render.run(renderer);
		Runner.run(engine);
		changeGravity();
	});

	// function handleClick(event) {
	// 	const shape = createShape(event.pageX, event.pageY);
	// 	intialShapes.bodies.push(shape);
	// 	World.add(engine.world, shape);
	// }

	// function handleMouseMove(event) {
	// 	const vector = { x: event.pageX, y: event.pageY };
	// 	const hoveredShapes = Query.point(intialShapes.bodies, vector);
	// 	hoveredShapes.forEach((shape) => {
	// 		shape.render.sprite = null;
	// 		shape.render.fillStyle = 'red';
	// 	});
	// }
</script>

<svelte:window bind:devicePixelRatio />

<div
	class="phys-canvas"
	bind:clientWidth={eleClientWidth}
	bind:clientHeight={eleClientHeight}
	bind:this={physEle}>
</div>

<style>
	.phys-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 0.2;
	}
</style>
