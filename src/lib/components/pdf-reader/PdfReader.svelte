<script>
	import { onMount } from 'svelte';
	import * as pdfjs from 'pdfjs-dist';
	import PageTitle from '$components/common/PageTitle.svelte';
	import {
		ArrowLeft,
		ArrowRight,
		MagnifyingGlassPlus,
		MagnifyingGlassMinus
	} from '$lib/assets/icons/icons';

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
		<span>Page {pageNum} of {pageCount}</span>
		<button on:click={zoomIn} aria-label="Zoom In">
			<MagnifyingGlassPlus size={24} />
		</button>
		<button on:click={zoomOut} aria-label="Zoom Out">
			<MagnifyingGlassMinus size={24} />
		</button>
	</div>
	<div class="canvas-container">
		<canvas bind:this={canvas}></canvas>
		<button
			class="nav-button prev"
			on:click={() => changePage(-1)}
			disabled={pageNum <= 1}
			aria-label="Previous page">
			<ArrowLeft size={32} />
		</button>
		<button
			class="nav-button next"
			on:click={() => changePage(1)}
			disabled={pageNum >= pageCount}
			aria-label="Next page">
			<ArrowRight size={32} />
		</button>
	</div>
</div>

<style>
	.pdf-reader {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.controls {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.canvas-container {
		position: relative;
		display: inline-block;
	}

	canvas {
		border: 1px solid #ccc;
	}

	.nav-button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 0.5rem;
		cursor: pointer;
		transition: background 0.3s ease;
	}

	.nav-button:hover:not(:disabled) {
		background: rgba(0, 0, 0, 0.7);
	}

	.nav-button:disabled {
		display: none;
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
