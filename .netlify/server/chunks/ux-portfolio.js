import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "UX Portfolio DOs and DONTs",
  "date": "2022-09-20",
  "categories": ["tips", "portfolio"]
};
const Ux_portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#do"}">DO</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#dont"}">DON\u2019T</a></li></ol></nav>

<h2 id="${"do"}">DO</h2>
<ul><li>Make sure your portfolio is a custom responsive website, not a PDF or PNG. <strong>Don\u2019t bother with Behance, Dribbble</strong></li>
<li>Show your work: Whiteboard, sketches, personas, task/process flows, wireframes, etc.</li>
<li>Show your low-fidelity: demonstrate the iteration, the thinking, not the final product. Show the cycles of assumption and validation.</li>
<li>Show you can write: simply and clearly. Don\u2019t use big words, jargon. Make sure you spellcheck everything.</li>
<li>Focus your narratives and case studies on the work you really want to be doing.</li></ul>
<h2 id="${"dont"}">DON\u2019T</h2>
<ul><li>Make a PDF portfolio</li>
<li>Only show images of the final UI. This should be the last thing on your page.</li>
<li>Only show high-fidelity stuff.</li>
<li>Poor grammar, typos.</li>
<li>Spend too much time talking about technical skills: Illustrator, Photoshop, etc.</li></ul>`;
});
export {
  Ux_portfolio as default,
  metadata
};
