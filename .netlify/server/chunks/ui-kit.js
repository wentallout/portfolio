import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "UI Kits",
  "date": "2022-11-09T00:00:00.000Z",
  "categories": ["ui", "freebies"]
};
const Ui_kit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#ios"}">IOS</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#wireframe"}">wireframe</a></li></ol></nav>

<h2 id="${"ios"}"><a href="${"#ios"}">IOS</a></h2>
<p><a href="${"https://www.figma.com/community/file/1121065701252736567"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">iOS 16 UI Kit by Joey Banks</a></p>
<h2 id="${"wireframe"}"><a href="${"#wireframe"}">wireframe</a></h2>
<p><a href="${"https://www.figma.com/community/file/960058803048298115"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">Bloo Lo-Fi Wireframe Kit</a></p>`;
});
export {
  Ui_kit as default,
  metadata
};
