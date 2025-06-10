import * as resvg from '@resvg/resvg-js';
import { error } from '@sveltejs/kit';

export async function GET({ params }) {
	try {
		const post = await import(`../../${params.slug}.svx`);
		const { date, title } = post.metadata;

		// Function to wrap text and calculate font size
		function wrapText(text, maxWidth = 800) {
			const words = text.split(' ');
			const lines = [];
			let currentLine = words[0];

			for (let i = 1; i < words.length; i++) {
				const word = words[i];
				const width = currentLine.length * 35; // Rough estimate of text width

				if (width < maxWidth) {
					currentLine += ' ' + word;
				} else {
					lines.push(currentLine);
					currentLine = word;
				}
			}
			lines.push(currentLine);

			// Calculate dynamic font size based on title length
			const fontSize = text.length > 60 ? 48 : 64;

			return { fontSize, lines };
		}

		const { fontSize, lines } = wrapText(title);
		const lineHeight = fontSize * 1.2;
		const totalHeight = lines.length * lineHeight;
		const startY = 315 - totalHeight / 2 + lineHeight / 2;

		const svg = `
			<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
				<rect width="1200" height="630" fill="#1a1a1a"/>

				<!-- Favicon in top left -->
				<g transform="translate(80, 80)">
					<path d="M31.9093 134.669L0 25.3308H31.0019L55.7278 109.565L75.5388 25.3308H104.197L125.898 110.321L149.263 25.3308H160L129.754 134.669H101.248L80.2268 53.535L60.4159 134.669H31.9093ZM38.5633 126.427H51.569L24.3478 33.5728H11.4934L38.5633 126.427ZM107.75 126.427H120.756L97.0889 33.5728H84.2344L107.75 126.427Z" fill="#FFBB00" transform="scale(0.5)"/>
				</g>

				<!-- Left-aligned title with line wrapping -->
				<g>
					${lines
						.map(
							(line, i) =>
								`<text 
							x="80" 
							y="${startY + i * lineHeight}"
							fill="#ffffff" 
							font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
							font-size="${fontSize}" 
							font-weight="bold"
						>${encodeXML(line)}</text>`
						)
						.join('')}
				</g>

				<!-- Website URL at bottom -->
				<text 
					x="80" 
					y="550" 
					fill="#666666" 
					font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
					font-size="36"
				>wentallout.io.vn</text>
			</svg>
		`;

		function encodeXML(str) {
			return str
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&apos;');
		}

		const renderer = new resvg.Resvg(svg, {
			font: {
				defaultFontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
				loadSystemFonts: true
			},
			logLevel: 'debug'
		});

		const pngData = renderer.render();
		const pngBuffer = pngData.asPng();

		return new Response(pngBuffer, {
			headers: {
				'Cache-Control': 'public, max-age=31536000',
				'Content-Type': 'image/png'
			}
		});
	} catch (err) {
		console.error('Error generating social image:', err);
		throw error(500, 'Failed to generate social image');
	}
}
