export function snowflakeCursor(options) {
	let hasWrapperEl = options && options.element;
	let element = hasWrapperEl || document.body;

	// let possibleEmoji = ['w', 'e', 'n', 't', 'a', 'l', 'l', 'o', 'u', 't'];

	let possibleEmoji = ['W', 'W', 'W', 'W', 'W'];
	let width = window.innerWidth;
	let height = window.innerHeight;
	let cursor = { x: width / 2, y: width / 2 };
	let particles = [];
	let canvas, context, animationFrame;

	let canvImages = [];

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

	// Re-initialise or destroy the cursor when the prefers-reduced-motion setting changes
	prefersReducedMotion.onchange = () => {
		if (prefersReducedMotion.matches) {
			destroy();
		} else {
			init();
		}
	};

	function init() {
		// Don't show the cursor trail if the user has prefers-reduced-motion enabled
		if (prefersReducedMotion.matches) {
			console.log('This browser has prefers reduced motion turned on, so the cursor did not init');
			return false;
		}

		canvas = document.createElement('canvas');
		context = canvas.getContext('2d');

		canvas.style.bottom = '0px';
		canvas.style.right = '0px';
		canvas.style.pointerEvents = 'none';

		if (hasWrapperEl) {
			canvas.style.position = 'absolute';
			element.appendChild(canvas);
			canvas.width = element.clientWidth;
			canvas.height = element.clientHeight;
		} else {
			canvas.style.position = 'fixed';
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
		}

		context.font = 'bold 16px Gilroy';

		context.textBaseline = 'middle';
		context.textAlign = 'center';

		possibleEmoji.forEach((emoji) => {
			let measurements = context.measureText(emoji);
			let bgCanvas = document.createElement('canvas');
			let bgContext = bgCanvas.getContext('2d');

			bgCanvas.width = measurements.width;
			bgCanvas.height = measurements.actualBoundingBoxAscent * 2;

			bgContext.textAlign = 'center';
			bgContext.font = '16px sans-serif';
			bgContext.textBaseline = 'middle';

			let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
			bgContext.fillStyle = randomColor;

			bgContext.fillText(emoji, bgCanvas.width / 2, measurements.actualBoundingBoxAscent);

			canvImages.push(bgCanvas);
		});

		bindEvents();
		loop();
	}

	// Bind events that are needed
	function bindEvents() {
		element.addEventListener('mousemove', onMouseMove);
		element.addEventListener('touchmove', onTouchMove, { passive: true });
		element.addEventListener('touchstart', onTouchMove, { passive: true });
		window.addEventListener('resize', onWindowResize);
	}

	function onWindowResize(e) {
		width = window.innerWidth;
		height = window.innerHeight;

		if (hasWrapperEl) {
			canvas.width = element.clientWidth;
			canvas.height = element.clientHeight;
		} else {
			canvas.width = width;
			canvas.height = height;
		}
	}

	function onTouchMove(e) {
		if (e.touches.length > 0) {
			for (let i = 0; i < e.touches.length; i++) {
				addParticle(
					e.touches[i].clientX,
					e.touches[i].clientY,
					canvImages[Math.floor(Math.random() * canvImages.length)]
				);
			}
		}
	}

	function addParticle(x, y, img) {
		particles.push(new Particle(x, y, img));
	}

	function onMouseMove(e) {
		if (hasWrapperEl) {
			const boundingRect = element.getBoundingClientRect();
			cursor.x = e.clientX - boundingRect.bottom;
			cursor.y = e.clientY - boundingRect.right;
		} else {
			cursor.x = e.clientX;
			cursor.y = e.clientY;
		}

		addParticle(cursor.x, cursor.y, canvImages[Math.floor(Math.random() * possibleEmoji.length)]);
	}

	function updateParticles() {
		if (particles.length == 0) {
			return;
		}

		context.clearRect(0, 0, width, height);

		// Update
		for (let i = 0; i < particles.length; i++) {
			particles[i].update(context);
		}

		// Remove dead particles
		for (let i = particles.length - 1; i >= 0; i--) {
			if (particles[i].lifeSpan < 0) {
				particles.splice(i, 1);
			}
		}

		if (particles.length == 0) {
			context.clearRect(0, 0, width, height);
		}
	}

	function loop() {
		updateParticles();
		animationFrame = requestAnimationFrame(loop);
	}

	function destroy() {
		canvas.remove();
		cancelAnimationFrame(animationFrame);
		element.removeEventListener('mousemove', onMouseMove);
		element.removeEventListener('touchmove', onTouchMove);
		element.removeEventListener('touchstart', onTouchMove);
		window.addEventListener('resize', onWindowResize);
	}

	/**
	 * Particles
	 */

	function Particle(x, y, canvasItem) {
		const lifeSpan = Math.floor(Math.random() * 60 + 120);
		this.initialLifeSpan = lifeSpan; //
		this.lifeSpan = lifeSpan; //ms
		this.velocity = {
			x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
			y: 1 + Math.random()
		};
		this.position = { x: x, y: y };
		this.canv = canvasItem;

		this.update = function (context) {
			this.position.x += this.velocity.x;
			this.position.y += this.velocity.y;
			this.lifeSpan--;

			this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
			this.velocity.y -= Math.random() / 300;

			const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);

			const degrees = 2 * this.lifeSpan;
			const radians = degrees * 0.0174533;

			context.translate(this.position.x, this.position.y);
			context.rotate(radians);

			context.drawImage(
				this.canv,
				(-this.canv.width / 2) * scale,
				-this.canv.height / 2,
				this.canv.width * scale,
				this.canv.height * scale
			);

			context.rotate(-radians);
			context.translate(-this.position.x, -this.position.y);
		};
	}

	init();

	return {
		destroy: destroy
	};
}
