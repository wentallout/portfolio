import * as resvg from '@resvg/resvg-js';
import { error } from '@sveltejs/kit';

export async function GET({ params }) {
    try {
        const post = await import(`../../${params.slug}.svx`);
        const { title, date, categories } = post.metadata;

        // Create the SVG template with better text positioning and styling
        const svg = `
            <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
                <rect width="1200" height="630" fill="#1a1a1a"/>
                <g transform="translate(80, 80)">
                    ${categories?.map((category, i) => 
                        `<text 
                            x="0" 
                            y="${i * 50}" 
                            fill="#666666" 
                            font-family="system-ui, -apple-system, sans-serif" 
                            font-size="36"
                        >${category}</text>`
                    ).join('')}
                    <text 
                        x="0" 
                        y="300" 
                        fill="#ffffff" 
                        font-family="system-ui, -apple-system, sans-serif" 
                        font-size="64" 
                        font-weight="bold" 
                        letter-spacing="-0.02em"
                        width="1000"
                    >${encodeXML(title)}</text>
                    <text 
                        x="0" 
                        y="500" 
                        fill="#666666" 
                        font-family="system-ui, -apple-system, sans-serif" 
                        font-size="36"
                    >wentallout.io.vn</text>
                </g>
            </svg>
        `;

        // Helper function to escape XML special characters
        function encodeXML(str) {
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
        }

        // Convert SVG to PNG with better font handling
        const renderer = new resvg.Resvg(svg, {
            font: {
                loadSystemFonts: true, // Enable system fonts
                defaultFontFamily: 'system-ui'
            },
            logLevel: 'debug' // Enable logging for debugging
        });

        const pngData = renderer.render();
        const pngBuffer = pngData.asPng();

        return new Response(pngBuffer, {
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=31536000'
            }
        });
    } catch (err) {
        console.error('Error generating social image:', err);
        throw error(500, 'Failed to generate social image');
    }
}
