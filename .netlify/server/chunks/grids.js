import { c as create_ssr_component } from "./index.js";
/* empty css                                     */const metadata = {
  "title": "Grids",
  "date": "2022-10-31",
  "categories": ["fundamental"]
};
const Grids = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#types-of-grids"}">types of Grids</a><ol class="${"toc-level toc-level-2"}"><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#column-grid"}">Column Grid</a></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#modular-grid"}">Modular Grid</a></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#hierarchical-grid"}">Hierarchical Grid</a></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#baseline-grid"}">Baseline Grid</a></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#alternative-axial-grid"}">Alternative: Axial Grid</a></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#alternative-diagonal-grid"}">Alternative: Diagonal Grid</a></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#alternative-radial-grid"}">Alternative: Radial Grid</a></li></ol></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#preference"}">preference</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#mobile"}">mobile</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#tablet"}">tablet</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#desktop"}">desktop</a></li></ol></nav>



<h2 id="${"types-of-grids"}">types of Grids</h2>
<h3 id="${"column-grid"}">Column Grid</h3>
<h3 id="${"modular-grid"}">Modular Grid</h3>
<h3 id="${"hierarchical-grid"}">Hierarchical Grid</h3>
<p>Even tho it\u2019s possible to use both a column and modular grids to establish a clear visual hierarchy, the Hierarchical Grid is used for the sole purpose of establishing a very clear visual hierarchy.</p>
<h3 id="${"baseline-grid"}">Baseline Grid</h3>
<p>Great if you want to achieve consistency with type + poster with a lot of types</p>
<p>They create a vertical rhythym</p>
<h3 id="${"alternative-axial-grid"}">Alternative: Axial Grid</h3>
<p>Unlike the previous grid systems, the axial grid is free from columns, modules and encourages more free and simple layout.</p>
<h3 id="${"alternative-diagonal-grid"}">Alternative: Diagonal Grid</h3>
<h3 id="${"alternative-radial-grid"}">Alternative: Radial Grid</h3>
<h2 id="${"preference"}">preference</h2>
<p><a href="${"https://www.wednesday.is/writing-articles/figma-how-to-build-responsive-and-scalable-grids-for-web-design"}" rel="${"nofollow"}">How to build responsive grids in Figma</a></p>
<h2 id="${"mobile"}">mobile</h2>
<ul><li>Columns: 4 (or 2 if your UI is simple)</li>
<li>Type: Stretch</li>
<li>Margin: 16px (or 24px)</li>
<li>Gutter: 16px (or 24px)</li></ul>
<h2 id="${"tablet"}">tablet</h2>
<p>Same value like Mobile but 8 columns</p>
<ul><li>Columns: 8</li>
<li>Type: Stretch</li>
<li>Margin: 24px</li>
<li>Gutter: 16px</li></ul>
<h2 id="${"desktop"}">desktop</h2>
<ul><li>Columns: 12</li>
<li>Type: Stretch</li>
<li>Margin: 24px</li>
<li>Gutter: 16px (or 24px)</li></ul>`;
});
export {
  Grids as default,
  metadata
};
