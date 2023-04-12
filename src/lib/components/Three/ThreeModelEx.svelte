<script>
	import { Canvas } from '@threlte/core';

	import { T, useFrame } from '@threlte/core';

	import { spring } from 'svelte/motion';

	const scale = spring(1);

	let rotation = 0;
	useFrame((state, delta) => {
		rotation += delta;
	});
</script>

<Canvas>
	<T.PerspectiveCamera
		makeDefault
		position={[10, 10, 10]}
		on:create={({ ref }) => {
			ref.lookAt(0, 1, 0);
		}} />
	<T.Mesh
		rotation.y={rotation}
		scale={$scale}
		on:pointerenter={() => scale.set(1.5)}
		on:pointerleave={() => scale.set(1)}
		position={[0, 1, 0]}>
		<T.BoxGeometry args={[1, 2, 1]} />
		<T.MeshBasicMaterial attach="material" color="hotpink" />
	</T.Mesh>
</Canvas>
