import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
const uxBooks = "/_app/immutable/assets/uxBooks-0c8a2d19.webp";
const metadata = {
  "title": "Best UX Books to read",
  "date": "2022-10-07",
  "categories": ["tips"]
};
const Best_ux_books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#roadmap"}">roadmap</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#read-these-first"}">read these first</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#transition-from-dev-to-designer"}">transition from dev to designer</a></li></ol></nav>



<h2 id="${"roadmap"}">roadmap</h2>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: uxBooks,
      alt: "UX Books to read",
      imagePreset: "scroll"
    },
    {},
    {}
  )}
<h2 id="${"read-these-first"}">read these first</h2>
<p>Fundamental books will give you a feel for what UX design is all about. The essential reading list includes following books:</p>
<ul><li>The Design of Everyday Things by Don Norman</li>
<li>Designing for Interaction by Dan Saffer</li>
<li>100 Things Every Designer Needs to Know about People by Susan Weinschenk</li>
<li>Dont Make Me Think: A Common Sense Approach to Web Usability by Steve Krug</li>
<li>About Face: The Essentials of Interaction Design by Alan Cooper.</li></ul>
<h2 id="${"transition-from-dev-to-designer"}">transition from dev to designer</h2>
<p><a href="${"https://xd.adobe.com/ideas/career-tips/web-developer-ux-designer-10-practical-tips-make-career-transition-happen/"}" rel="${"nofollow"}">Link</a></p>`;
});
export {
  Best_ux_books as default,
  metadata
};
