<!-- https://www.tonnitools.com/liquid-glass/ -->

<script>
	let { children } = $props();
</script>

<div class="GlassContainer">
	<div class="GlassContent">
		{@render children()}
	</div>
	<div class="GlassMaterial">
		<div class="GlassEdgeReflection"></div>
		<div class="GlassEmbossReflection"></div>
		<div class="GlassRefraction"></div>
		<div class="GlassBlur"></div>
		<div class="BlendLayers"></div>
		<div class="BlendEdge"></div>
		<div class="Highlight"></div>
	</div>
</div>

<style>
	.GlassContainer {
		--corner-radius: 24px;
		--base-strength: 12px;
		--extra-blur: 4px;
		--softness: 16px;
		--tint-amount: 0;
		--tint-saturation: 2;
		--tint-hue: 180deg;
		--contrast: 1;
		--brightness: 1;
		--invert: 0%;

		--total-strength: calc(var(--base-strength) + var(--extra-blur));
		--edge-width: calc(0.3px + (var(--softness) * 0.1));
		--emboss-width: calc((var(--softness) * 0.38));
		--refraction-width: calc((var(--softness) * 0.3));

		position: relative;
		overflow: visible;
		cursor: pointer;
	}
	.GlassContent {
		position: relative;
		display: block;
		z-index: 2;
		overflow: hidden;
		border-radius: var(--corner-radius);
	}
	.GlassMaterial {
		position: absolute;
		inset: 0;
		z-index: 1;
		overflow: visible;
		pointer-events: none;
	}
	.GlassMaterial:after {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		z-index: 3;
		overflow: hidden;
		border-radius: var(--corner-radius);
		background-color: rgba(128, 128, 128, 0);
	}
	.GlassMaterial > div {
		position: absolute;
		inset: 0;
		box-sizing: border-box;
		border-radius: var(--corner-radius);
		z-index: 2;
		overflow: hidden;
	}
	.GlassMaterial .GlassEdgeReflection {
		z-index: 4;
		margin: calc(var(--total-strength) * -1);
		border-radius: calc(var(--corner-radius) + var(--total-strength));
		backdrop-filter: blur(var(--total-strength)) brightness(1.2);
		padding: var(--edge-width);
		border: var(--total-strength) solid transparent;
		mask:
			linear-gradient(white 0 0) padding-box,
			linear-gradient(white 0 0) content-box;
		mask-composite: exclude, exclude;
	}
	.GlassMaterial .GlassEmbossReflection {
		backdrop-filter: blur(calc(var(--total-strength) * 1.5)) invert(0.25) brightness(1.11)
			saturate(1.25) hue-rotate(-10deg) contrast(2.3);
		padding: var(--emboss-width);
		border: 0 solid transparent;
		mask:
			linear-gradient(white 0 0) padding-box,
			linear-gradient(white 0 0) content-box;
		mask-composite: exclude, exclude;
	}
	.GlassMaterial .GlassRefraction {
		backdrop-filter: invert(0.15) brightness(1.15) contrast(1.5);
		padding: var(--refraction-width);
		border: calc(var(--emboss-width)) solid transparent;
		mask:
			linear-gradient(white 0 0) padding-box,
			linear-gradient(white 0 0) content-box;
		mask-composite: exclude, exclude;
	}
	.GlassMaterial .GlassBlur {
		backdrop-filter: blur(var(--extra-blur)) brightness(1.2);
		border-radius: calc(var(--corner-radius) - (var(--emboss-width) + var(--refraction-width)));
		margin: calc(var(--emboss-width) + var(--refraction-width));
	}
	.GlassMaterial .BlendLayers {
		z-index: 3;
		backdrop-filter: blur(calc((var(--softness) * 0.15) + (var(--extra-blur) * 0.11))) invert(0.05)
			contrast(1.3) saturate(1.5);
	}
	.GlassMaterial .BlendEdge {
		z-index: 8;
		backdrop-filter: blur(calc(var(--edge-width) * 0.5)) brightness(0.9);
	}
	.GlassContainer:before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 200;
		display: block;
		border-radius: var(--corner-radius);
		backdrop-filter: invert(var(--invert));
	}
	.GlassMaterial:before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 11;
		display: block;
		border-radius: var(--corner-radius);
		padding: 1px;
		border: 0 solid transparent;
		background: linear-gradient(
			155deg,
			hsla(0, 0%, 100%, 0.07) 0%,
			hsla(0, 0%, 0%, 0.07) 50%,
			hsla(0, 0%, 100%, 0.07) 100%
		);
		mask:
			linear-gradient(white 0 0) padding-box,
			linear-gradient(white 0 0) content-box;
		mask-composite: exclude, exclude;
	}
	.GlassMaterial .Highlight {
		z-index: 12;
		display: block;
		border-radius: var(--corner-radius);
		padding: 1px;
		border: 0 solid transparent;
		backdrop-filter: brightness(1.1) invert(0.1) brightness(1.4) contrast(1.8) saturate(1.2)
			opacity(1);
		mask:
			linear-gradient(white 0 0) padding-box,
			linear-gradient(white 0 0) content-box;
		mask-composite: exclude, exclude;
	}
	.GlassContainer:active .GlassMaterial .BlendLayers {
		backdrop-filter: blur(calc((var(--softness) * 0.24) + (var(--extra-blur) * 0.46))) saturate(1.2)
			invert(0.1) contrast(1.4) brightness(0.9);
	}
	.GlassContent {
		transform-origin: center;
		transform: scale(1);
	}
	.GlassContainer:active .GlassContent {
		opacity: 0.7;
		filter: blur(0.035em);
		transform: scale(0.98);
	}
</style>
