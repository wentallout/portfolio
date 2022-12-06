import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "UX Research",
  "date": "2022-11-13",
  "categories": ["ux"]
};
const Ux_research = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#research"}">Research</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#usability"}">Usability</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#journey-mapping"}">Journey Mapping</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#empathy-mapping"}">Empathy Mapping</a></li></ol></nav>

<h2 id="${"research"}">Research</h2>
<p><a href="${"https://www.nngroup.com/articles/ux-research-cheat-sheet"}" rel="${"nofollow"}">UX Research Cheat Sheet</a></p>
<p><a href="${"https://www.nngroup.com/articles/which-ux-research-methods"}" rel="${"nofollow"}">When to Use Which UX Research Methods</a></p>
<h2 id="${"usability"}">Usability</h2>
<p><a href="${"https://www.nngroup.com/articles/usability-testing-101"}" rel="${"nofollow"}">Usability Testing 101</a></p>
<p><a href="${"https://www.nngroup.com/articles/usability-101-introduction-to-usability"}" rel="${"nofollow"}">Usability 101: Introduction to Usability</a></p>
<p><a href="${"https://www.nngroup.com/articles/ten-usability-heuristics/"}" rel="${"nofollow"}">10 Usability Heuristics for User Interface Design</a></p>
<h2 id="${"journey-mapping"}">Journey Mapping</h2>
<p><a href="${"https://www.nngroup.com/articles/journey-mapping-101"}" rel="${"nofollow"}">Journey Mapping 101</a></p>
<h2 id="${"empathy-mapping"}">Empathy Mapping</h2>
<p><a href="${"https://www.nngroup.com/articles/empathy-mapping/"}" rel="${"nofollow"}">Empathy Mapping: The First Step in Design Thinking</a></p>`;
});
export {
  Ux_research as default,
  metadata
};
