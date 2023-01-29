import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "AI Design Tools",
  "date": "2023-01-28T00:00:00.000Z",
  "categories": ["freebies"]
};
const Ai_tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#resource-list"}">Resource list</a></li></ol></nav>

<h2 id="${"resource-list"}"><a href="${"#resource-list"}">Resource list</a></h2>
<p>This one awesome website will leads you to amazing tools</p>
<p><a href="${"https://aidesignresource.com/"}" rel="${"nofollow noopener noreferrer external"}" target="${"_blank"}">AI Design Resource</a></p>`;
});
export {
  Ai_tools as default,
  metadata
};
