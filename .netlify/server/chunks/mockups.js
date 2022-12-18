import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Where to get mockups",
  "date": "2022-12-11",
  "categories": ["freebies"]
};
const Mockups = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#mockups"}">Mockups</a></li></ol></nav>

<h2 id="${"mockups"}">Mockups</h2>
<p><a href="${"https://previewed.app/"}" rel="${"nofollow"}">Previewed.app</a></p>
<p><a href="${"https://www.ls.graphics/"}" rel="${"nofollow"}">ls.graphics</a></p>
<p><a href="${"https://www.placeit.net"}" rel="${"nofollow"}">Placeit.net</a></p>`;
});
export {
  Mockups as default,
  metadata
};
