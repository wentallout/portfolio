import { c as create_ssr_component, h as escape, d as add_attribute, g as each, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
import { C as ContentContainer } from "../../../../chunks/ContentContainer.js";
import { T as Tag } from "../../../../chunks/Tag.js";
import { T as Time } from "../../../../chunks/Time.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-tag.svelte-13xqe99:after{content:none!important}.date.svelte-13xqe99,.info.svelte-13xqe99{display:block}.date.svelte-13xqe99{margin:0}.date.svelte-13xqe99{color:var(--text-color-low)}.category.svelte-13xqe99{color:var(--text-color-low);gap:var(--space-xs);margin:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kgl221_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<meta property="${"og:title"}"${add_attribute("content", data.title, 0)}><!-- HEAD_svelte-kgl221_END -->`, ""}

<article class="${"info svelte-13xqe99"}">${data.categories.length ? `<div class="${"category svelte-13xqe99"}">${each(data.categories, (category) => {
    return `<a class="${"content-tag svelte-13xqe99"}" href="${"/blog/category/" + escape(category, true)}">${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(category)}
					`;
      }
    })}
				</a>`;
  })}</div>` : ``}
	<h1 class="${"rainbow"}">${escape(data.title)}</h1>
	<div class="${"date small-text svelte-13xqe99"}">Published: ${validate_component(Time, "Time").$$render($$result, { relative: true, timestamp: data.date }, {}, {})}</div>

	${validate_component(ContentContainer, "ContentContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
    }
  })}
</article>`;
});
export {
  Page as default
};
