import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
const designFeedback = "/_app/immutable/assets/design-feedback-a02d3efa.webp";
const metadata = {
  "title": "How to ask for design feedback",
  "date": "2022-11-24",
  "categories": ["tips"]
};
const How_to_ask_for_design_feedback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#template"}">template</a></li></ol></nav>



<h2 id="${"template"}">template</h2>
${validate_component(Image, "Image").$$render($$result, { src: designFeedback }, {}, {})}`;
});
export {
  How_to_ask_for_design_feedback as default,
  metadata
};
