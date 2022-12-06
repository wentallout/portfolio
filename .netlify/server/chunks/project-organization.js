import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
const projectOrganization = "/_app/immutable/assets/projectOrganization-1e4b11d4.webp";
const metadata = {
  "title": "Project Organization",
  "date": "2022-10-12",
  "categories": ["fundamental"]
};
const Project_organization = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#folder-structure"}">folder structure</a></li></ol></nav>



<h2 id="${"folder-structure"}">folder structure</h2>
${validate_component(Image, "Image").$$render($$result, { src: projectOrganization }, {}, {})}`;
});
export {
  Project_organization as default,
  metadata
};
