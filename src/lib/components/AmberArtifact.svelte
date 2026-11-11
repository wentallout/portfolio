<script lang="ts">
	import { onMount } from 'svelte';
	import {
		AmbientLight,
		BufferGeometry,
		Color,
		DirectionalLight,
		Float32BufferAttribute,
		Group,
		IcosahedronGeometry,
		MathUtils,
		Mesh,
		MeshPhysicalMaterial,
		PerspectiveCamera,
		PointLight,
		Points,
		PointsMaterial,
		Scene,
		Vector3,
		WebGLRenderer
	} from 'three';

	type Props = {
		class?: string;
		interactive?: boolean;
	};

	let { class: className = '', interactive = true }: Props = $props();

	let containerRef: HTMLDivElement;
	let canvasRef: HTMLCanvasElement;

	onMount(() => {
		let isDestroyed = false;
		let animId = 0;

		const scene = new Scene();
		const camera = new PerspectiveCamera(45, 1, 0.1, 50);
		camera.position.set(0, 0, 7.2);

		const renderer = new WebGLRenderer({
			canvas: canvasRef,
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance'
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

		// Amber root group
		const rootGroup = new Group();
		scene.add(rootGroup);

		// 1. Faceted Amber Gem Geometry (Subdivided Icosahedron with deformed organic facets)
		const baseGeometry = new IcosahedronGeometry(2.1, 1);
		const posAttr = baseGeometry.attributes.position;
		const v = new Vector3();
		for (let i = 0; i < posAttr.count; i++) {
			v.fromBufferAttribute(posAttr, i);
			// Organic asymmetrical distortion like natural unpolished raw amber nugget
			const distortion =
				1.0 +
				0.12 * Math.sin(v.x * 2.1 + v.y * 1.5) +
				0.08 * Math.cos(v.y * 2.8 + v.z * 1.8) +
				0.05 * Math.sin(v.z * 3.2);
			v.multiplyScalar(distortion);
			posAttr.setXYZ(i, v.x, v.y, v.z);
		}
		baseGeometry.computeVertexNormals();

		// Translucent Amber Material (rich fossil resin physical characteristics)
		const amberMaterial = new MeshPhysicalMaterial({
			color: new Color(0xd97706), // Rich warm amber / honey core
			emissive: new Color(0x78350f), // Deep fossil glow
			emissiveIntensity: 0.18,
			roughness: 0.12,
			metalness: 0.08,
			transmission: 0.88, // Highly translucent resin
			ior: 1.54, // Real amber index of refraction (1.539 - 1.545)
			thickness: 2.4, // Internal volume absorption
			attenuationColor: new Color(0xb45309), // Warm cognac depth attenuation
			attenuationDistance: 1.8,
			clearcoat: 0.95,
			clearcoatRoughness: 0.08,
			reflectivity: 0.8,
			transparent: true,
			opacity: 0.96
		});

		const amberMesh = new Mesh(baseGeometry, amberMaterial);
		rootGroup.add(amberMesh);

		// 2. Internal Inclusions & Ancient Fossil Particles
		const inclusionsCount = 65;
		const inclusionsPos = new Float32Array(inclusionsCount * 3);
		for (let i = 0; i < inclusionsCount; i++) {
			// Distribute inside the amber volume
			const r = MathUtils.randFloat(0.2, 1.4);
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(MathUtils.randFloatSpread(2));

			inclusionsPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			inclusionsPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
			inclusionsPos[i * 3 + 2] = r * Math.cos(phi);
		}

		const inclusionsGeo = new BufferGeometry();
		inclusionsGeo.setAttribute('position', new Float32BufferAttribute(inclusionsPos, 3));
		const inclusionsMat = new PointsMaterial({
			color: new Color(0xfde68a), // Golden flecks / ancient spores
			size: 0.07,
			transparent: true,
			opacity: 0.85
		});
		const inclusionsMesh = new Points(inclusionsGeo, inclusionsMat);
		rootGroup.add(inclusionsMesh);

		// 3. Inner core golden ember
		const innerCoreGeo = new IcosahedronGeometry(0.85, 0);
		const innerCoreMat = new MeshPhysicalMaterial({
			color: new Color(0xf59e0b),
			emissive: new Color(0xd97706),
			emissiveIntensity: 0.45,
			roughness: 0.25,
			transmission: 0.6,
			thickness: 1.0,
			transparent: true,
			opacity: 0.8
		});
		const innerCore = new Mesh(innerCoreGeo, innerCoreMat);
		rootGroup.add(innerCore);

		// Lighting setup tailored for amber caustics and backlighting
		const ambientLight = new AmbientLight(0xfffbeb, 1.4);
		scene.add(ambientLight);

		const sunLight = new DirectionalLight(0xfef3c7, 3.2);
		sunLight.position.set(5, 6, 4);
		scene.add(sunLight);

		const rimLight = new DirectionalLight(0xd97706, 2.5);
		rimLight.position.set(-5, -4, -3);
		scene.add(rimLight);

		const innerGlow = new PointLight(0xfbbf24, 2.8, 8);
		innerGlow.position.set(0, 0, 0);
		scene.add(innerGlow);

		// Responsive sizing
		function updateSize() {
			if (!containerRef || !renderer) return;
			const rect = containerRef.getBoundingClientRect();
			const w = rect.width || 300;
			const h = rect.height || 300;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h, false);
		}

		const resizeObserver = new ResizeObserver(() => {
			updateSize();
		});
		resizeObserver.observe(containerRef);
		updateSize();

		// Interactive cursor tilt
		let targetRotX = 0;
		let targetRotY = 0;
		let currentRotX = 0;
		let currentRotY = 0;

		function handleMouseMove(e: MouseEvent) {
			if (!interactive || !containerRef) return;
			const rect = containerRef.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;
			targetRotY = x * 1.4;
			targetRotX = y * 1.4;
		}

		window.addEventListener('mousemove', handleMouseMove, { passive: true });

		// Animation loop
		let clock = 0;
		function animate() {
			if (isDestroyed) return;
			animId = requestAnimationFrame(animate);

			clock += 0.008;

			// Smooth spring-like lerp to target rotation + continuous organic float
			currentRotX += (targetRotX - currentRotX) * 0.05;
			currentRotY += (targetRotY - currentRotY) * 0.05;

			rootGroup.rotation.y = clock * 0.45 + currentRotY;
			rootGroup.rotation.x = Math.sin(clock * 0.3) * 0.15 + currentRotX;
			rootGroup.rotation.z = Math.cos(clock * 0.25) * 0.08;

			// Floating oscillation
			rootGroup.position.y = Math.sin(clock * 0.8) * 0.12;

			// Internal inclusions subtle counter-rotation
			inclusionsMesh.rotation.y = -clock * 0.2;
			innerCore.rotation.x = clock * 0.3;

			renderer.render(scene, camera);
		}

		animate();

		return () => {
			isDestroyed = true;
			cancelAnimationFrame(animId);
			window.removeEventListener('mousemove', handleMouseMove);
			resizeObserver.disconnect();
			renderer.dispose();
			baseGeometry.dispose();
			amberMaterial.dispose();
			inclusionsGeo.dispose();
			inclusionsMat.dispose();
			innerCoreGeo.dispose();
			innerCoreMat.dispose();
		};
	});
</script>

<div
	bind:this={containerRef}
	class="relative flex items-center justify-center overflow-hidden {className}">
	<canvas bind:this={canvasRef} class="h-full w-full pointer-events-none"></canvas>
</div>
