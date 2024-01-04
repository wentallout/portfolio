<script>
	const config = {
		starAnimationDuration: 1500,
		minimumTimeBetweenStars: 250,
		minimumDistanceBetweenStars: 75,
		glowDuration: 50,
		maximumGlowPointSpacing: 10,
		colors: ['249 146 253', '252 254 255'],
		sizes: ['1.4rem', '1rem', '0.6rem'],
		animations: ['fall-1', 'fall-2', 'fall-3']
	};

	let start = new Date().getTime();

	const originPosition = { x: 0, y: 0 };

	const last = {
		starTimestamp: start,
		starPosition: originPosition,
		mousePosition: originPosition
	};

	let count = 0;

	const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
		selectRandom = (items) => items[rand(0, items.length - 1)];

	const withUnit = (value, unit) => `${value}${unit}`,
		px = (value) => withUnit(value, 'px'),
		ms = (value) => withUnit(value, 'ms');

	const calcDistance = (a, b) => {
		const diffX = b.x - a.x,
			diffY = b.y - a.y;

		return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
	};

	const calcElapsedTime = (start, end) => end - start;

	const determinePointQuantity = (distance) =>
		Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

	// function createGlow(last, current) {
	// 	const distance = calcDistance(last, current),
	// 		quantity = determinePointQuantity(distance);

	// 	const dx = (current.x - last.x) / quantity,
	// 		dy = (current.y - last.y) / quantity;

	// 	Array.from(Array(quantity)).forEach((_, index) => {
	// 		const x = last.x + dx * index,
	// 			y = last.y + dy * index;

	// 		createGlowPoint({ x, y });
	// 	});
	// }

	function updateLastStar(position) {
		last.starTimestamp = new Date().getTime();
		last.starPosition = position;
	}

	const updateLastMousePosition = (position) => (last.mousePosition = position);

	const adjustLastMousePosition = (position) => {
		if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
			last.mousePosition = position;
		}
	};
	const appendElement = (element) => document.body.appendChild(element),
		removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);
	const createGlowPoint = (position) => {
		const glow = document.createElement('div');

		glow.className = 'glow-point';
		glow.style.left = px(position.x);
		glow.style.top = px(position.y);
		const hueRotateDegree = getRandomHueRotateDegree();
		glow.style.filter = `brightness(100%) saturate(100%) hue-rotate(${hueRotateDegree}deg)`;

		appendElement(glow);

		removeElement(glow, config.glowDuration);
	};

	function handlePointerLeave() {
		document.body.onpointerleave = () => updateLastMousePosition(originPosition);
	}

	function getRandomHueRotateDegree() {
		return Math.floor(Math.random() * 360);
	}

	function createStar(position) {
		const star = document.createElement('span');
		const color = selectRandom(config.colors);

		const imgElement = document.createElement('img');
		imgElement.src = '/images/star.svg';

		imgElement.className = 'star';
		imgElement.style.width = '24px';
		imgElement.style.height = '24px';
		imgElement.style.left = px(position.x);
		imgElement.style.top = px(position.y);
		imgElement.style.fontSize = selectRandom(config.sizes);
		imgElement.style.color = `rgb(${color})`;
		const hueRotateDegree = getRandomHueRotateDegree();
		imgElement.style.filter = `brightness(100%) saturate(100%) hue-rotate(${hueRotateDegree}deg)`;

		imgElement.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
		imgElement.style.animationName = config.animations[count++ % 3];
		imgElement.style.starAnimationDuration = ms(config.starAnimationDuration);

		appendElement(imgElement);
		removeElement(imgElement, config.starAnimationDuration);
	}

	function handlePointerMove(event) {
		let mousePosition = { x: event.pageX, y: event.pageY };

		adjustLastMousePosition(mousePosition);

		let now = new Date().getTime(),
			hasMovedFarEnough =
				calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
			hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

		if (hasMovedFarEnough || hasBeenLongEnough) {
			createStar(mousePosition);
			updateLastStar(mousePosition);
		}

		// createGlow(last.mousePosition, mousePosition);
		updateLastMousePosition(mousePosition);
	}
</script>

<svelte:window on:pointermove={handlePointerMove} on:pointerleave={handlePointerLeave} />
