<script>
	/** @type {{[key: string]: any}} */
	let { ...props } = $props();
</script>

<svg height="2rem" viewBox="0 0 24 24" width="2rem" xmlns="http://www.w3.org/2000/svg" {...props}
	><rect fill="currentColor" height="12" width="2.8" x="1" y="6"
		><animate
			id="svgSpinnersBarsScale0"
			attributeName="y"
			begin="0;svgSpinnersBarsScale1.end-0.1s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="6;1;6" /><animate
			attributeName="height"
			begin="0;svgSpinnersBarsScale1.end-0.1s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="12;22;12" /></rect
	><rect fill="currentColor" height="12" width="2.8" x="5.8" y="6"
		><animate
			attributeName="y"
			begin="svgSpinnersBarsScale0.begin+0.1s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="6;1;6" /><animate
			attributeName="height"
			begin="svgSpinnersBarsScale0.begin+0.1s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="12;22;12" /></rect
	><rect fill="currentColor" height="12" width="2.8" x="10.6" y="6"
		><animate
			attributeName="y"
			begin="svgSpinnersBarsScale0.begin+0.2s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="6;1;6" /><animate
			attributeName="height"
			begin="svgSpinnersBarsScale0.begin+0.2s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="12;22;12" /></rect
	><rect fill="currentColor" height="12" width="2.8" x="15.4" y="6"
		><animate
			attributeName="y"
			begin="svgSpinnersBarsScale0.begin+0.3s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="6;1;6" /><animate
			attributeName="height"
			begin="svgSpinnersBarsScale0.begin+0.3s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="12;22;12" /></rect
	><rect fill="currentColor" height="12" width="2.8" x="20.2" y="6"
		><animate
			id="svgSpinnersBarsScale1"
			attributeName="y"
			begin="svgSpinnersBarsScale0.begin+0.4s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="6;1;6" /><animate
			attributeName="height"
			begin="svgSpinnersBarsScale0.begin+0.4s"
			calcMode="spline"
			dur="0.6s"
			keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
			values="12;22;12" /></rect
	></svg>

<style>
	svg {
		color: var(--color-text);
	}
</style>
