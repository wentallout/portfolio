<script>
	import { T, Canvas, DirectionalLight, PerspectiveCamera, OrbitControls } from '@threlte/core';

	import { GLTF } from '@threlte/extras';
	import { Fog } from '@threlte/core';
</script>

<Canvas>
	<Fog color={'#dddddd'} />
	<PerspectiveCamera lookAt={{ x: 3, y: 3, z: 3 }} position={{ x: -3, y: 5, z: 10 }} fov={10}>
		<OrbitControls enableZoom={false} autoRotate enableDamping controls />
	</PerspectiveCamera>

	<DirectionalLight position={{ y: 10, z: 10 }} />

	<GLTF url="/3d/plastic_monobloc_chair_01_4k.gltf" />
</Canvas>
