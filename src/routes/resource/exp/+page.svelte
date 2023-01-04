<script>
	import { Canvas } from '@threlte/core';
	import { AmbientLight, OrbitControls, PerspectiveCamera } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
</script>

<div class="threejs">
	<Canvas>
		<PerspectiveCamera position={{ x: 5, y: 2, z: 5 }} fov={25}>
			<OrbitControls autoRotate enableDamping />
		</PerspectiveCamera>

		<AmbientLight />

		<GLTF url="/3d/plastic_monobloc_chair_01_4k.gltf" />
	</Canvas>
</div>

<style>
	.threejs {
		display: flex;
		height: 500px;
		width: 100%;
	}
</style>
