import { c as create_ssr_component } from './index3.js';
/* empty css                                      */ /* empty css                                     */ const metadata =
	{
		title: 'Resolution, pt and px',
		date: '2022-10-31',
		categories: ['fundamental']
	};
const Resolution_pt_px = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'summary'}"><a href="${'#summary'}">summary</a></h2>
<p>Point (pt) is a measurement of space regardless of the screen Resolution</p>
<p>Always design at 1x where <strong>1pt = 1px</strong>.</p>
<p>Typography, spacing and all vector-based elements adapt to higher pixel density per default.</p>
<p>Images need to be exported or made available for export for higher resolution.</p>
<h2 id="${'tips-and-tricks-to-design-with-your-resolution-in-mind'}"><a href="${'#tips-and-tricks-to-design-with-your-resolution-in-mind'}">tips and tricks to design with your resolution in mind</a></h2>
<h3 id="${'photoshop'}"><a href="${'#photoshop'}">Photoshop</a></h3>
<p>Standard artboard templates in Photoshop are 2x since the default dimensions for iPhone 6 are 750x1334 px when you first create an artboard-based PSD. To switch to 1x artboards, simply change the width to 375 pixels and the height to 667 pixels. Then, you can save this preset as ‘iPhone 6’ for future reference (instead of using Photoshop’s default iPhone 6 template which is 2x). Even though the units are pixels, keep in mind that because you are designing in 1x, it is also 375x667 pts.</p>`;
});
export { Resolution_pt_px as default, metadata };
