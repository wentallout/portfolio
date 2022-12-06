import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Case Study",
  "date": "2022-12-05T00:00:00.000Z",
  "categories": ["fundamental"]
};
const Case_study = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#purpose-of-a-case-study"}">Purpose of a case Study</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#what-platform"}">What platform?</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#how-many"}">How many?</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#common-mistakes"}">Common mistakes</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#how-to-document-your-case-study"}">How to document your case study</a></li></ol></nav>

<h2 id="${"purpose-of-a-case-study"}">Purpose of a case Study</h2>
<ul><li>understand the way you work </li>
<li>understand your design process</li>
<li>understand your thought process </li>
<li>to gauge your skillset </li>
<li>understand how your designs have translated into real impact </li></ul>
<h2 id="${"what-platform"}">What platform?</h2>
<ul><li>behance</li>
<li>notion</li>
<li>your own website</li></ul>
<h2 id="${"how-many"}">How many?</h2>
<ul><li>your best 3</li>
<li>begin: just 2
make sure it\u2019s relevant to the job</li></ul>
<h2 id="${"common-mistakes"}">Common mistakes</h2>
<ul><li><p>showing only the end design is SUPER WRONG -&gt; you need to show your design process in detail. What makes you choose this component, why you use the pattern, color, font types</p></li>
<li><p>case study not tailored to the role.</p></li>
<li><p>No problem statement mentioned. Example: trying to improve the customer experience cuz people keeps quitting the app </p></li>
<li><p>Spelling error, alignment, spacing, blurry images.</p></li></ul>
<h2 id="${"how-to-document-your-case-study"}">How to document your case study</h2>`;
});
export {
  Case_study as default,
  metadata
};
