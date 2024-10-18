<script>
	import { onMount } from 'svelte';
	import * as pdfjs from 'pdfjs-dist';
	import PageTitle from '$components/common/PageTitle.svelte';

	export let pdfUrl;

	let pdfDoc = null;
	let pageNum = 1;
	let pageCount = 0;
	let pageRendering = false;
	let canvas;
	let ctx;
	let scale = 1.5;

	onMount(async () => {
		// Set the worker source URL to the local file
		pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.min.mjs';
		ctx = canvas.getContext('2d');
		await loadPdf();
	});

	async function loadPdf() {
		try {
			pdfDoc = await pdfjs.getDocument(pdfUrl).promise;
			pageCount = pdfDoc.numPages;
			renderPage(pageNum);
		} catch (error) {
			console.error('Error loading PDF:', error);
		}
	}

	async function renderPage(num) {
		pageRendering = true;
		const page = await pdfDoc.getPage(num);
		const viewport = page.getViewport({ scale });

		canvas.height = viewport.height;
		canvas.width = viewport.width;

		const renderContext = {
			canvasContext: ctx,
			viewport: viewport
		};

		await page.render(renderContext).promise;
		pageRendering = false;
	}

	function changePage(offset) {
		const newPageNum = pageNum + offset;
		if (newPageNum >= 1 && newPageNum <= pageCount && !pageRendering) {
			pageNum = newPageNum;
			renderPage(pageNum);
		}
	}

	function zoomIn() {
		scale += 0.25;
		renderPage(pageNum);
	}

	function zoomOut() {
		if (scale > 0.5) {
			scale -= 0.25;
			renderPage(pageNum);
		}
	}
</script>

<PageTitle pageTitle="Privacy Policy" />

<div class="pdf-reader">
	<div class="controls">
		<button on:click={() => changePage(-1)} disabled={pageNum <= 1}>Previous</button>
		<span>Page {pageNum} of {pageCount}</span>
		<button on:click={() => changePage(1)} disabled={pageNum >= pageCount}>Next</button>
		<button on:click={zoomIn}>Zoom In</button>
		<button on:click={zoomOut}>Zoom Out</button>
	</div>
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.pdf-reader {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.controls {
		margin-bottom: 1rem;
	}

	button {
		margin: 0 0.5rem;
	}

	canvas {
		border: 1px solid #ccc;
	}
</style>
