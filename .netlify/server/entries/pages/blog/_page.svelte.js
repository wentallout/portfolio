import { c as create_ssr_component, b as add_attribute, g as escape, d as spread, e as escape_object, v as validate_component } from "../../../chunks/index.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const BlogListContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".blogs.svelte-1mxspmw{display:flex;flex-direction:column;gap:var(--space-s);width:100%;margin-bottom:var(--space-l)}",
  map: null
};
const BlogListContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"blogs svelte-1mxspmw"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
const BlogCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".blog.svelte-1fqhhf0{display:flex;flex-direction:column;width:100%;border-radius:var(--border-radius);border:var(--border);padding:0.5rem 1rem;background-color:var(--neutral-200)}.blog.svelte-1fqhhf0:hover{border:var(--border-hover)}.blog__title.svelte-1fqhhf0{font-weight:600}.blog__date.svelte-1fqhhf0{font-weight:400;color:var(--neutral-700)}",
  map: null
};
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogLink = "" } = $$props;
  let { blogTitle = "blogTitle" } = $$props;
  let { blogDate = "blogDate" } = $$props;
  if ($$props.blogLink === void 0 && $$bindings.blogLink && blogLink !== void 0)
    $$bindings.blogLink(blogLink);
  if ($$props.blogTitle === void 0 && $$bindings.blogTitle && blogTitle !== void 0)
    $$bindings.blogTitle(blogTitle);
  if ($$props.blogDate === void 0 && $$bindings.blogDate && blogDate !== void 0)
    $$bindings.blogDate(blogDate);
  $$result.css.add(css);
  return `<a${add_attribute("href", blogLink, 0)}><div class="${"blog svelte-1fqhhf0"}"><div class="${"blog__title base-text svelte-1fqhhf0"}">${escape(blogTitle)}</div>
		<div class="${"blog__date small-text svelte-1fqhhf0"}">${escape(blogDate)}</div></div>
</a>`;
});
const Text_aa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M137.9 148.2L87.1 52.3a8 8 0 0 0-14.2 0l-50.8 95.9L.9 188.3a8.1 8.1 0 0 0 3.4 10.8a8.1 8.1 0 0 0 10.8-3.4L34 160h92l18.9 35.7a7.9 7.9 0 0 0 7.1 4.3a8 8 0 0 0 7.1-11.7ZM42.5 144L80 73.1l37.5 70.9ZM208 94.9a42 42 0 0 0-29.6 11.8a8 8 0 1 0 11.2 11.4a26 26 0 0 1 18.4-7.2c13.2 0 24 9 24 20v7.2a43 43 0 0 0-24-7.2c-22.1 0-40 16.1-40 36s17.9 36 40 36a42.9 42.9 0 0 0 24.7-7.7a7.9 7.9 0 0 0 7.3 4.8a8 8 0 0 0 8-8v-61.1c0-19.9-17.9-36-40-36Zm0 92c-13.2 0-24-9-24-20s10.8-20 24-20s24 9 24 20s-10.8 20-24 20Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Brain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M248 132a56 56 0 0 0-32-50.6V72a48 48 0 0 0-88-26.5A48 48 0 0 0 40 72v9.4a56 56 0 0 0 0 101.2v1.4a48 48 0 0 0 88 26.5a48 48 0 0 0 88-26.5v-1.4a56.1 56.1 0 0 0 32-50.6ZM88 216a32 32 0 0 1-31.8-28.6a49.3 49.3 0 0 0 7.8.6h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.3-77.7a8.1 8.1 0 0 0 5.3-7.6V72a32 32 0 0 1 64 0v76.3A47.4 47.4 0 0 0 88 136a8 8 0 0 0 0 16a32 32 0 0 1 0 64Zm104-44h-8a8 8 0 0 0 0 16h8a49.3 49.3 0 0 0 7.8-.6A32 32 0 1 1 168 152a8 8 0 0 0 0-16a47.4 47.4 0 0 0-32 12.3V72a32 32 0 0 1 64 0v14.7a8.1 8.1 0 0 0 5.3 7.6A40 40 0 0 1 192 172ZM60 128a8 8 0 0 1 0-16a20.1 20.1 0 0 0 20-20v-8a8 8 0 0 1 16 0v8a36 36 0 0 1-36 36Zm144-8a8 8 0 0 1-8 8a36 36 0 0 1-36-36v-8a8 8 0 0 1 16 0v8a20.1 20.1 0 0 0 20 20a8 8 0 0 1 8 8Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Typography" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Text_aa, "TextAa").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

${validate_component(BlogListContainer, "BlogListContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BlogCard, "BlogCard").$$render(
        $$result,
        {
          blogTitle: "How to pick the perfect type scale for your next design",
          blogLink: "/blog/typescale",
          blogDate: "20/9/2022"
        },
        {},
        {}
      )}`;
    }
  })}



${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Tips" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Brain, "Brain").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

${validate_component(BlogListContainer, "BlogListContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(BlogCard, "BlogCard").$$render(
        $$result,
        {
          blogTitle: "UX Portfolio DOs and DONTs",
          blogLink: "/blog/ux-portfolio",
          blogDate: "22/09/2022"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default
};
