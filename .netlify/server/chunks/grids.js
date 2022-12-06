import { c as create_ssr_component } from "./index.js";
/* empty css                                     */const metadata = {
  "title": "Master grids in Figma",
  "date": "2022-10-31",
  "categories": ["fundamental"]
};
const Grids = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#preference"}">preference</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#mobile"}">mobile</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#tablet"}">tablet</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#desktop"}">desktop</a></li></ol></nav>



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
