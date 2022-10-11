import { c as create_ssr_component, d as spread, e as escape_object, v as validate_component, g as each } from "../../../chunks/index.js";
import { B as BlogListContainer, a as BlogCard } from "../../../chunks/BlogCard.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const Text_aa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M137.9 148.2L87.1 52.3a8 8 0 0 0-14.2 0l-50.8 95.9L.9 188.3a8.1 8.1 0 0 0 3.4 10.8a8.1 8.1 0 0 0 10.8-3.4L34 160h92l18.9 35.7a7.9 7.9 0 0 0 7.1 4.3a8 8 0 0 0 7.1-11.7ZM42.5 144L80 73.1l37.5 70.9ZM208 94.9a42 42 0 0 0-29.6 11.8a8 8 0 1 0 11.2 11.4a26 26 0 0 1 18.4-7.2c13.2 0 24 9 24 20v7.2a43 43 0 0 0-24-7.2c-22.1 0-40 16.1-40 36s17.9 36 40 36a42.9 42.9 0 0 0 24.7-7.7a7.9 7.9 0 0 0 7.3 4.8a8 8 0 0 0 8-8v-61.1c0-19.9-17.9-36-40-36Zm0 92c-13.2 0-24-9-24-20s10.8-20 24-20s24 9 24 20s-10.8 20-24 20Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Graduation_cap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m251.8 88.9l-120-64a8.5 8.5 0 0 0-7.6 0l-120 64a8.1 8.1 0 0 0 0 14.2L28 115.7v49.8a15.5 15.5 0 0 0 3.2 9.5c7.9 10.6 38.3 45 96.8 45a128.7 128.7 0 0 0 52-10.5V240a8 8 0 0 0 16 0v-38.9a111.8 111.8 0 0 0 28.8-26.1a15.5 15.5 0 0 0 3.2-9.5v-49.8l23.8-12.6a8.1 8.1 0 0 0 0-14.2ZM128 204c-51.1 0-77.2-29.5-84-38.5v-41.2l80.2 42.8a8.5 8.5 0 0 0 7.6 0l48.2-25.8v50.5c-13.1 6.9-30.3 12.2-52 12.2Zm84-38.6a85.8 85.8 0 0 1-16 16.1v-48.7l16-8.5Zm4.2-61.5l-28.2 15l-56.2-30a8.1 8.1 0 1 0-7.6 14.2L171 128l-43 22.9l-88.2-47L25 96l103-54.9L231 96Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Lightbulb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm40-128a87.7 87.7 0 0 1-33.6 69.2A16.1 16.1 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16.2 16.2 0 0 0-6.2-12.7A87.8 87.8 0 0 1 40 104.5c-.3-47.7 38.3-87.4 85.9-88.5a87.9 87.9 0 0 1 90.1 88Zm-16 0a72.1 72.1 0 0 0-73.7-72c-39 .9-70.5 33.4-70.3 72.4a71.7 71.7 0 0 0 27.6 56.3A32 32 0 0 1 96 186v6h64v-6a32.1 32.1 0 0 1 12.5-25.4A71.5 71.5 0 0 0 200 104Zm-16.8-9.4a55.8 55.8 0 0 0-45.8-45.7a8 8 0 1 0-2.6 15.8a39.7 39.7 0 0 1 32.6 32.6a8 8 0 0 0 7.9 6.6h1.4a7.9 7.9 0 0 0 6.5-9.3Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Fundamental" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Graduation_cap, "GraduationCap").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	${validate_component(BlogListContainer, "BlogListContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.blogs, (blog) => {
        return `${blog.meta.categories.length ? `${blog.meta.categories.includes("fundamental") ? `${validate_component(BlogCard, "BlogCard").$$render(
          $$result,
          {
            blogTitle: blog.meta.title,
            blogLink: blog.path,
            blogDate: blog.meta.date
          },
          {},
          {}
        )}` : ``}` : ``}`;
      })}`;
    }
  })}</section>

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Typography" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Text_aa, "TextAa").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	${validate_component(BlogListContainer, "BlogListContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.blogs, (blog) => {
        return `${blog.meta.categories.length ? `${blog.meta.categories.includes("typography") ? `${validate_component(BlogCard, "BlogCard").$$render(
          $$result,
          {
            blogTitle: blog.meta.title,
            blogLink: blog.path,
            blogDate: blog.meta.date
          },
          {},
          {}
        )}` : ``}` : ``}`;
      })}`;
    }
  })}</section>

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Tips" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Lightbulb, "Lightbulb").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	${validate_component(BlogListContainer, "BlogListContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.blogs, (blog) => {
        return `${blog.meta.categories.length ? `${blog.meta.categories.includes("tips") ? `${validate_component(BlogCard, "BlogCard").$$render(
          $$result,
          {
            blogTitle: blog.meta.title,
            blogLink: blog.path,
            blogDate: blog.meta.date
          },
          {},
          {}
        )}` : ``}` : ``}`;
      })}`;
    }
  })}</section>

`;
});
export {
  Page as default
};
