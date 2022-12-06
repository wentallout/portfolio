import { c as create_ssr_component } from "./index.js";
/* empty css                                     */const metadata = {
  "title": "My favorite color tools",
  "date": "2022-11-09",
  "categories": ["color", "tool"]
};
const My_fav_colors_tool = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#gradient"}">Gradient</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#color-scheme"}">Color scheme</a></li></ol></nav>



<h2 id="${"gradient"}">Gradient</h2>
<p><a href="${"https://gradientify.com/"}" rel="${"nofollow"}">Gradientify</a> - carefully crafted gradients for your next projects.</p>
<h2 id="${"color-scheme"}">Color scheme</h2>
<p><a href="${"https://goodpalette.io/"}" rel="${"nofollow"}">goodpalette</a> - beautiful color palettes for UI
-&gt; Primary + Accent + Neutral.</p>`;
});
export {
  My_fav_colors_tool as default,
  metadata
};
