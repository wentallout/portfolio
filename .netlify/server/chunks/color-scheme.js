import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "How to come up with a color scheme",
  "date": "2022-12-10T00:00:00.000Z",
  "categories": ["color"]
};
const Color_scheme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#rgb-vs-cmyk"}">RGB vs CMYK</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#color-profiles"}">Color profiles</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#neutral-colors"}">Neutral colors</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#color-harmony"}">Color harmony</a></li></ol></nav>

<h2 id="${"rgb-vs-cmyk"}">RGB vs CMYK</h2>
<p>RGB is meant for <strong>digital</strong> design.</p>
<p>CYMK is meant for <strong>print</strong> design.</p>
<h2 id="${"color-profiles"}">Color profiles</h2>
<p>RGB can display 16.7 million colors. sRGB is mostly used on Web and most Digital Devices</p>
<h2 id="${"neutral-colors"}">Neutral colors</h2>
<p>Mostly background, borders, background for an image, models</p>
<p>How? Go to <a href="${"https://picular.co"}" rel="${"nofollow"}">https://picular.co</a> and type something like \u2018interior design\u2019 or \u2018forest\u2019</p>
<h2 id="${"color-harmony"}">Color harmony</h2>
<p>Get one base color from the logo/brand</p>
<p>Then go to <a href="${"https://color.adobe.com/"}" rel="${"nofollow"}">adobe color</a> or <a href="${"https://colorsupplyyy.com/app"}" rel="${"nofollow"}">colorsupplyyy.com</a></p>
<p>Option 1: Monochromatic
Option 2: Analogous close in your color scheme</p>`;
});
export {
  Color_scheme as default,
  metadata
};
