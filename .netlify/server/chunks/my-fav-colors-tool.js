import { c as create_ssr_component } from './index3.js';
/* empty css                                      */ /* empty css                                     */ const metadata =
	{
		title: 'My favorite color tools',
		date: '2022-11-09',
		categories: ['color', 'freebies']
	};
const My_fav_colors_tool = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'gradient'}"><a href="${'#gradient'}">Gradient</a></h2>
<p><a href="${'https://gradientify.com/'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">Gradientify</a> - carefully crafted gradients for your next projects.</p>
<h2 id="${'color-scheme-generator'}"><a href="${'#color-scheme-generator'}">Color scheme generator</a></h2>
<p><a href="${'https://goodpalette.io/'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">goodpalette</a> - beautiful color palettes for UI
-&gt; Primary + Accent + Neutral.</p>
<p><a href="${'http://colormind.io'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">Colormind.io</a></p>`;
});
export { My_fav_colors_tool as default, metadata };
