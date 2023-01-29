import { c as create_ssr_component, h as escape, d as add_attribute, v as validate_component, g as each, e as spread, f as escape_object } from "../../../chunks/index3.js";
import { P as PageTitle } from "../../../chunks/PageTitle.js";
import { S as SwiperContainer, a as Swiper_slide } from "../../../chunks/SwiperContainer.js";
import "ssr-window";
import { E as ExLink } from "../../../chunks/ExLink.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const SectionDesc_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".section-description.svelte-1jzsxtl{color:var(--text-color-low);margin-bottom:var(--space-l);max-width:var(--text-width);text-align:left}",
  map: null
};
const SectionDesc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$5);
  return `<p class="${"section-description small-text svelte-1jzsxtl"}">${escape(text)}
</p>`;
});
const OtherCardList_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".other-container.svelte-wtsox3.svelte-wtsox3{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--space-m);overflow:hidden}.other-container.svelte-wtsox3>.svelte-wtsox3{flex:1 1 10ch}.other__image.svelte-wtsox3.svelte-wtsox3{filter:brightness(40%);height:100%;position:absolute;transition:var(--transition);width:100%;z-index:0}.other.svelte-wtsox3.svelte-wtsox3{align-items:center;border-radius:var(--border-radius-light);display:flex;height:300px;justify-content:center;overflow:hidden;padding:var(--space-m);position:relative}.other.svelte-wtsox3:hover .other__image.svelte-wtsox3{scale:1.15}.other.svelte-wtsox3:hover .other__title.svelte-wtsox3{color:var(--primary-500)}.other__title.svelte-wtsox3.svelte-wtsox3{color:var(--text-color);font-weight:600;z-index:1}",
  map: null
};
const OtherCardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"other-container svelte-wtsox3"}"><a class="${"other svelte-wtsox3"}" href="${"/resource/music"}"><img class="${"other__image svelte-wtsox3"}" src="${"images/music.webp"}" alt="${"music"}">
		<div class="${"other__title large-text svelte-wtsox3"}">Music</div></a>

	<a class="${"other svelte-wtsox3"}" href="${"/resource/exp"}"><img class="${"other__image svelte-wtsox3"}" src="${"images/exp.webp"}" alt="${"experiment"}">
		<div class="${"other__title large-text svelte-wtsox3"}">Experiment</div></a>
</div>`;
});
const UIDesignPrinciples = "/_app/immutable/assets/UIDesignPrinciples-ac851ee4.webp";
const DesignManual = "/_app/immutable/assets/DesignManual-772d2efc.webp";
const NoBSGuideUX = "/_app/immutable/assets/NoBSGuideUX-e53beb32.webp";
const Sprint = "/_app/immutable/assets/Sprint-517ee615.webp";
const JustEnoughResearch = "/_app/immutable/assets/JustEnoughResearch-696767d8.webp";
const CoolBook_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.book-container.svelte-5le5br.svelte-5le5br{align-items:center;display:flex;height:auto;justify-content:center;perspective:600px;width:100%}@keyframes svelte-5le5br-initAnimation{0%{transform:rotateY(0deg)}to{transform:rotateY(-30deg)}}.book.svelte-5le5br.svelte-5le5br{animation:svelte-5le5br-initAnimation 1s ease 0s 1;height:300px;position:relative;transform:rotateY(-30deg);transform-style:preserve-3d;transition:1s ease;width:200px}.book.svelte-5le5br.svelte-5le5br:hover{transform:rotateY(0deg)}.book.svelte-5le5br>.svelte-5le5br:first-child{background-color:#01060f;border-radius:0 2px 2px 0;height:300px;left:0;position:absolute;top:0;transform:translateZ(25px);width:200px}.book.svelte-5le5br.svelte-5le5br:before{background:linear-gradient(90deg,#fff,#f9f9f9 5%,#fff 10%,#f9f9f9 15%,#fff 20%,#f9f9f9 25%,#fff 30%,#f9f9f9 35%,#fff 40%,#f9f9f9 45%,#fff 50%,#f9f9f9 55%,#fff 60%,#f9f9f9 65%,#fff 70%,#f9f9f9 75%,#fff 80%,#f9f9f9 85%,#fff 90%,#f9f9f9 95%,#fff);height:294px;top:3px;transform:translateX(172px) rotateY(90deg);width:48px}.book.svelte-5le5br.svelte-5le5br:after,.book.svelte-5le5br.svelte-5le5br:before{content:" ";left:0;position:absolute}.book.svelte-5le5br.svelte-5le5br:after{background-color:var(--neutral-900);border-radius:0 2px 2px 0;height:300px;top:0;transform:translateZ(-25px);width:200px}.book.svelte-5le5br.svelte-5le5br{scale:.7}',
  map: null
};
const CoolBook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bookUrl = "" } = $$props;
  let { alt = "" } = $$props;
  let { imgUrl = "" } = $$props;
  if ($$props.bookUrl === void 0 && $$bindings.bookUrl && bookUrl !== void 0)
    $$bindings.bookUrl(bookUrl);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.imgUrl === void 0 && $$bindings.imgUrl && imgUrl !== void 0)
    $$bindings.imgUrl(imgUrl);
  $$result.css.add(css$3);
  return `<a class="${"book-container svelte-5le5br"}"${add_attribute("href", bookUrl, 0)} target="${"_blank"}" rel="${"noreferrer noopener"}"><div class="${"book svelte-5le5br"}"><img loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", alt, 0)}${add_attribute("src", imgUrl, 0)} class="${"svelte-5le5br"}"></div>
</a>`;
});
const BookGallery_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".books.svelte-195ax4u{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;width:100%}@media(min-width:768px){.books.svelte-195ax4u{gap:var(--space-xl)}}",
  map: null
};
const BookGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let books = [
    {
      name: "Just Enough Research",
      imgUrl: JustEnoughResearch,
      bookUrl: "https://terabox.com/s/1BXO6sku01d2yUm-IGH1l-A"
    },
    {
      name: "UI Design Principles",
      imgUrl: UIDesignPrinciples,
      bookUrl: "https://matix.li/56ca135e203d"
    },
    {
      name: "Design Manual",
      imgUrl: DesignManual,
      bookUrl: "https://matix.li/92ee7d7f4bad"
    },
    {
      name: "NoBSGuideUX",
      imgUrl: NoBSGuideUX,
      bookUrl: "https://matix.li/0794035223cd"
    },
    {
      name: "Sprint",
      imgUrl: Sprint,
      bookUrl: "https://matix.li/92648755b3ce"
    }
  ];
  $$result.css.add(css$2);
  return `<div class="${"books svelte-195ax4u"}">${validate_component(SwiperContainer, "SwiperContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(books, (book) => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(CoolBook, "CoolBook").$$render(
              $$result,
              {
                imgUrl: book.imgUrl,
                alt: book.name,
                bookUrl: book.bookUrl
              },
              {},
              {}
            )}
			`;
          }
        })}`;
      })}`;
    }
  })}
</div>`;
});
const ResourceCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tool__name.svelte-gcfzsh.svelte-gcfzsh{color:var(--text-color);font-weight:500;margin-bottom:var(--space-xs)}.tool__description.svelte-gcfzsh.svelte-gcfzsh{-webkit-line-clamp:3;-webkit-box-orient:vertical;color:var(--text-color-low);display:-webkit-box;font-weight:400;margin:0;overflow:hidden}.tool.svelte-gcfzsh.svelte-gcfzsh{background-color:var(--bg);border:1px solid transparent;border-radius:var(--border-radius-light);display:flex;flex-direction:column;height:200px;padding:var(--space-m);transition:var(--transition);width:100%}.tool.svelte-gcfzsh.svelte-gcfzsh:hover{border:1px solid var(--primary-500)}.tool.svelte-gcfzsh:hover .tool__name.svelte-gcfzsh{color:var(--primary-500)}",
  map: null
};
const ResourceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { name = "" } = $$props;
  let { desc = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  $$result.css.add(css$1);
  return `${validate_component(ExLink, "ExLink").$$render($$result, { href, ariaLabel: name }, {}, {
    default: () => {
      return `<div class="${"tool svelte-gcfzsh"}"><h2 class="${"tool__name base-text svelte-gcfzsh"}">${escape(name)}</h2>
		<div class="${"tool__description small-text svelte-gcfzsh"}">${escape(desc)}</div></div>`;
    }
  })}`;
});
const ResourceCardList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tools.svelte-3b3evm{--min:40ch;--gap:var(--space-l);grid-gap:var(--gap);display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,var(--min)),1fr))}",
  map: null
};
const ResourceCardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"tools svelte-3b3evm"}">${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://www.userinterviews.com/",
      name: "User Interviews",
      desc: "Recruit participants from a community of 125,000 members based on profession, demographics,\r\n	geography and more, for any kind of research."
    },
    {},
    {}
  )}

	${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://appoint.ly",
      name: "Appoint.ly",
      desc: "A web-based scheduling tool that helps to schedule meetings quickly through the integration with calendars online."
    },
    {},
    {}
  )}

	${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://crowdsignal.com",
      name: "Crowd Signal",
      desc: "Collect, organize and analyze data from a variety of sources, including social media."
    },
    {},
    {}
  )}

	${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://www.jotform.com",
      name: "Jotform",
      desc: "Create online forms, get an email for each response, collect data."
    },
    {},
    {}
  )}

	${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://minetime.ai",
      name: "MineTime",
      desc: "A free calendar app with smart scheduling and time analytics features."
    },
    {},
    {}
  )}

	${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://www.surveymonkey.com",
      name: "Survey Monkey",
      desc: "Online survey tool to capture the voices and opinions of the people who matter most to you."
    },
    {},
    {}
  )}

	${validate_component(ResourceCard, "ResourceCard").$$render(
    $$result,
    {
      href: "https://www.yesinsights.com",
      name: "YesInsights",
      desc: "Simple one question and NPS surveys to improve your business."
    },
    {},
    {}
  )}
</div>`;
});
const Books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m233.6 195.6l-8.3-30.9L192.2 41a16 16 0 0 0-19.6-11.3L141.7 38l-1 .3A16 16 0 0 0 128 32H96a15.8 15.8 0 0 0-8 2.2a15.8 15.8 0 0 0-8-2.2H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a15.8 15.8 0 0 0 8-2.2a15.8 15.8 0 0 0 8 2.2h32a16 16 0 0 0 16-16v-99.6l19.5 72.8l8.3 30.9a16 16 0 0 0 15.5 11.9a19.9 19.9 0 0 0 4.1-.5l30.9-8.3a15.9 15.9 0 0 0 9.7-7.5a15.6 15.6 0 0 0 1.6-12.1ZM156.2 92.1l30.9-8.3l20.7 77.3l-30.9 8.3Zm20.5-46.9l6.3 23.1l-30.9 8.3l-6.3-23.1ZM128 48v120H96V48Zm-48 0v24H48V48ZM48 208V88h32v120Zm80 0H96v-24h32v24Zm90.2-8.3l-30.9 8.3l-6.3-23.2l31-8.3l6.2 23.2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Hard_drives = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M208 136H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16Zm0 64H48v-48h160v48Zm0-160H48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 64H48V56h160v48Zm-16-24a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm0 96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Flask = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M223.6 199.8L160 93.8V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v53.8l-40.2 66.9c0 .1-.1.2-.1.3l-23.3 38.8A16 16 0 0 0 46.1 224h163.8a16 16 0 0 0 13.7-24.2ZM109.7 102a15.9 15.9 0 0 0 2.3-8.2V40h32v53.8a15.9 15.9 0 0 0 2.3 8.2l38.8 64.8c-13.1 7.1-31.4 5.1-53.5-6c-14.3-7.1-32.7-13.5-50.3-11.4ZM46.1 208l22.5-37.4c13.2-8.7 32.4-7.1 55.8 4.6c17.3 8.6 31.5 11.8 43.2 11.8a51.4 51.4 0 0 0 25.8-6.5l16.5 27.5Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6oa2mc_START -->${$$result.title = `<title>Resource</title>`, ""}<!-- HEAD_svelte-6oa2mc_END -->`, ""}

${validate_component(PageTitle, "PageTitle").$$render($$result, { pageTitle: "Resource" }, {}, {})}

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Book" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Books, "Books").$$render($$result, Object.assign({}, sectionIcon), {}, {})}`;
    }
  })}
	${validate_component(SectionDesc, "SectionDesc").$$render(
    $$result,
    {
      text: "Knowledge should be free so I'm sharing it."
    },
    {},
    {}
  )}

	${validate_component(BookGallery, "BookGallery").$$render($$result, {}, {}, {})}</section>

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "User Research Tool" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Flask, "Flask").$$render($$result, Object.assign({}, sectionIcon), {}, {})}`;
    }
  })}

	${validate_component(SectionDesc, "SectionDesc").$$render(
    $$result,
    {
      text: "User research helps you understand user behaviors, needs, and motivations through various qualitative and quantitative methods (interviews, observation, forms, etc)."
    },
    {},
    {}
  )}

	${validate_component(ResourceCardList, "ToolCardList").$$render($$result, {}, {}, {})}</section>

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Other" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Hard_drives, "HardDrives").$$render($$result, Object.assign({}, sectionIcon), {}, {})}`;
    }
  })}

	${validate_component(OtherCardList, "OtherCardList").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
