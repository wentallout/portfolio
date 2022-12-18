import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Where to get stock images",
  "date": "2022-11-09",
  "categories": ["freebies"]
};
const Stock_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#royalty-free"}">Royalty-free</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#ai"}">AI</a></li></ol></nav>

<h2 id="${"royalty-free"}">Royalty-free</h2>
<ul><li><a href="${"https://www.pexels.com"}" rel="${"nofollow"}">Pexels</a></li>
<li><a href="${"https://unsplash.com/"}" rel="${"nofollow"}">Unsplash</a></li>
<li><a href="${"https://pixabay.com/"}" rel="${"nofollow"}">Pixabay</a></li>
<li><a href="${"https://www.rawpixel.com/"}" rel="${"nofollow"}">RawPixel</a></li></ul>
<h2 id="${"ai"}">AI</h2>
<p><a href="${"https://www.stockai.com/"}" rel="${"nofollow"}">StockAI</a>
<a href="${"https://www.craiyon.com/"}" rel="${"nofollow"}">Craiyon</a> - generate images from text</p>`;
});
export {
  Stock_images as default,
  metadata
};
