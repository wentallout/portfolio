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
				pixelRatio: devicePixelRatio
			}
		});

		let createShape = function (x, y) {
			return Bodies.circle(x, y, 25, {
				frictionAir: 0.05,
				render: {
					sprite: {
						texture: '/images/coolLogo.svg',
						yScale: 0.5,
						xScale: 0.5
					}
				},
				restitution: 0.8
			});
		};

		// Create a wall for the shapes to bounce off
		let wallOptions = {
			isStatic: true,
			render: {
				visible: false
			}
		};

		let ground = Bodies.rectangle(
			eleClientWidth / 2,
			eleClientHeight + 50,
			eleClientWidth,
			100,
			wallOptions
		);
		let ceiling = Bodies.rectangle(eleClientWidth / 2, -50, eleClientWidth, 100, wallOptions);
		let leftWall = Bodies.rectangle(-50, eleClientHeight / 2, 100, eleClientHeight, wallOptions);
		let rightWall = Bodies.rectangle(
			eleClientWidth + 50,
			eleClientHeight / 2,
			100,
			eleClientHeight,
			wallOptions
		);

		let mouseControl = MouseConstraint.create(engine, {
			element: physEle,
			constraint: {
				render: {
					visible: false
				}
			}
		});

		let intialShapes = Composites.stack(50, 50, 10, 2, 40, 40, function (x, y) {
			return createShape(x, y);
		});

		Composite.add(engine.world, [ground, ceiling, leftWall, rightWall, mouseControl, intialShapes]);

		Render.run(renderer);
		Runner.run(engine);
		changeGravity();
	});

	function handleClick(event) {
		const shape = createShape(event.pageX, event.pageY);
		intialShapes.bodies.push(shape);
		World.add(engine.world, shape);
	}

	function handleMouseMove(event) {
		const vector = { x: event.pageX, y: event.pageY };
		const hoveredShapes = Query.point(intialShapes.bodies, vector);
		hoveredShapes.forEach((shape) => {
			shape.render.sprite = null;
			shape.render.fillStyle = 'red';
		});
	}
</script>

<svelte:window bind:devicePixelRatio />

<div
	class="obj"
	on:mousemove={handleMouseMove}
	on:keypress={handleClick}
	on:click={handleClick}
	bind:clientWidth={eleClientWidth}
	bind:clientHeight={eleClientHeight}
	bind:this={physEle}>
</div>

<style>
	.obj {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		opacity: 0.2;
	}
</style>
