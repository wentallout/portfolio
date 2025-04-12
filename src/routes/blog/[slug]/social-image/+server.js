import * as resvg from '@resvg/resvg-js';
import { error } from '@sveltejs/kit';

export async function GET({ params }) {
    try {
        const post = await import(`../../${params.slug}.svx`);
        const { title, date, categories } = post.metadata;

        // Create the SVG template
        const svg = `
            <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
                <rect width="1200" height="630" fill="#1a1a1a"/>
                <g transform="translate(60, 60)">
                    ${categories?.map((category, i) => 
                        `<text 
                            x="0" 
                            y="${i * 40}" 
                            fill="#666666" 
                            font-family="system-ui" 
                            font-size="32"
                        >${category}</text>`
                    ).join('')}
                    <text 
                        x="0" 
                        y="240" 
                        fill="#ffffff" 
                        font-family="system-ui" 
                        font-size="72" 
                        font-weight="bold" 
                        letter-spacing="-0.02em"
                    >${title}</text>
                    <text 
                        x="0" 
                        y="460" 
                        fill="#666666" 
                        font-family="system-ui" 
                        font-size="32"
                    >wentallout.io.vn</text>
                </g>
            </svg>
        `;

        // Convert SVG to PNG
        const renderer = new resvg.Resvg(svg, {
            font: {
                loadSystemFonts: true
            }
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