import { c as create_ssr_component } from "./index3.js";
/* empty css                                     */const metadata = {
  "title": "Gestalt Principles of Design",
  "date": "2022-10-08",
  "categories": ["fundamental"]
};
const Gestalt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#1-law-of-proximity"}">1. Law of Proximity</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#2-common-region"}">2. Common Region</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#3-law-of-similarity"}">3. Law of Similarity</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#4-law-of-continuity"}">4. Law of Continuity</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#5-law-of-closure"}">5. Law of Closure</a></li></ol></nav>



<h2 id="${"1-law-of-proximity"}"><a href="${"#1-law-of-proximity"}">1. Law of Proximity</a></h2>
<p>Objects that are placed near each other will be visually group together</p>
<h2 id="${"2-common-region"}"><a href="${"#2-common-region"}">2. Common Region</a></h2>
<p>Objects that share an area with a boundary will be visually grouped together.</p>
<h2 id="${"3-law-of-similarity"}"><a href="${"#3-law-of-similarity"}">3. Law of Similarity</a></h2>
<p>Objects that are visually similar in size, shape and/or color will be visually grouped together, even if those objects are not near each other.</p>
<h2 id="${"4-law-of-continuity"}"><a href="${"#4-law-of-continuity"}">4. Law of Continuity</a></h2>
<p>Objects that are ordered in a line or a curve appear to be related</p>
<h2 id="${"5-law-of-closure"}"><a href="${"#5-law-of-closure"}">5. Law of Closure</a></h2>
<p>Objects that are visually incomplete will be perceived as a whole by a user</p>`;
});
export {
  Gestalt as default,
  metadata
};
