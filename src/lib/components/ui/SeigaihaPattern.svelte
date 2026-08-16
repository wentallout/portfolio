<script>
	/**
	 * Seigaiha Pattern Component (using static/seigaiha.svg vector asset)
	 * @typedef {Object} SeigaihaProps
	 * @property {string} [class=""]
	 * @property {number} [opacity=0.4]
	 * @property {number} [scale=80] - size in pixels for background tile width
	 */

	/** @type {SeigaihaProps} */
	let {
		class: className = '',
		opacity = 0.7,
		scale = 90
	} = $props();
</script>

<div
	class="seigaiha-file-pattern pointer-events-none absolute inset-0 z-0 overflow-hidden {className}"
	style="
		opacity: {opacity};
		background-size: {scale}px {scale / 2}px;
	"
	aria-hidden="true"
></div>

<style>
	.seigaiha-file-pattern {
		background-image: url('/seigaiha.svg');
		background-repeat: repeat;
		background-position: center top;
	}
</style>
