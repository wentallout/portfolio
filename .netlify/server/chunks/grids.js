import { c as create_ssr_component } from './index3.js';
/* empty css                                      */ /* empty css                                     */ const metadata =
	{
		title: 'Grids',
		date: '2022-10-31',
		categories: ['fundamental']
	};
const Grids = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${'types-of-grids'}"><a href="${'#types-of-grids'}">types of Grids</a></h2>
<h3 id="${'column-grid'}"><a href="${'#column-grid'}">Column Grid</a></h3>
<h3 id="${'modular-grid'}"><a href="${'#modular-grid'}">Modular Grid</a></h3>
<h3 id="${'hierarchical-grid'}"><a href="${'#hierarchical-grid'}">Hierarchical Grid</a></h3>
<p>Even tho it’s possible to use both a column and modular grids to establish a clear visual hierarchy, the Hierarchical Grid is used for the sole purpose of establishing a very clear visual hierarchy.</p>
<h3 id="${'baseline-grid'}"><a href="${'#baseline-grid'}">Baseline Grid</a></h3>
<p>Great if you want to achieve consistency with type + poster with a lot of types</p>
<p>They create a vertical rhythym</p>
<h3 id="${'alternative-axial-grid'}"><a href="${'#alternative-axial-grid'}">Alternative: Axial Grid</a></h3>
<p>Unlike the previous grid systems, the axial grid is free from columns, modules and encourages more free and simple layout.</p>
<h3 id="${'alternative-diagonal-grid'}"><a href="${'#alternative-diagonal-grid'}">Alternative: Diagonal Grid</a></h3>
<h3 id="${'alternative-radial-grid'}"><a href="${'#alternative-radial-grid'}">Alternative: Radial Grid</a></h3>
<h2 id="${'preference'}"><a href="${'#preference'}">preference</a></h2>
<p><a href="${'https://www.wednesday.is/writing-articles/figma-how-to-build-responsive-and-scalable-grids-for-web-design'}" rel="${'nofollow noopener noreferrer external'}" target="${'_blank'}">How to build responsive grids in Figma</a></p>
<h2 id="${'mobile'}"><a href="${'#mobile'}">mobile</a></h2>
<ul><li>Columns: 4 (or 2 if your UI is simple)</li>
<li>Type: Stretch</li>
<li>Margin: 16px (or 24px)</li>
<li>Gutter: 16px (or 24px)</li></ul>
<h2 id="${'tablet'}"><a href="${'#tablet'}">tablet</a></h2>
<p>Same value like Mobile but 8 columns</p>
<ul><li>Columns: 8</li>
<li>Type: Stretch</li>
<li>Margin: 24px</li>
<li>Gutter: 16px</li></ul>
<h2 id="${'desktop'}"><a href="${'#desktop'}">desktop</a></h2>
<ul><li>Columns: 12</li>
<li>Type: Stretch</li>
<li>Margin: 24px</li>
<li>Gutter: 16px (or 24px)</li></ul>`;
});
export { Grids as default, metadata };
