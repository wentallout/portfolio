import { c as create_ssr_component, f as add_attribute, g as each, v as validate_component, d as spread, e as escape_object } from "../../../chunks/index.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const UIDesignPrinciples = "/_app/immutable/assets/UIDesignPrinciples-b17b7134.webp";
const DesignManual = "/_app/immutable/assets/DesignManual-c05c25d3.webp";
const NoBSGuideUX = "/_app/immutable/assets/NoBSGuideUX-e7df4d3b.webp";
const Sprint = "/_app/immutable/assets/Sprint-69f7eeec.webp";
const CoolBook_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".book-container.svelte-1hbu3x6.svelte-1hbu3x6{display:flex;align-items:center;justify-content:center;perspective:600px;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}@keyframes svelte-1hbu3x6-initAnimation{0%{transform:rotateY(0deg)}100%{transform:rotateY(-30deg)}}.book.svelte-1hbu3x6.svelte-1hbu3x6{width:200px;height:300px;position:relative;transform-style:preserve-3d;transform:rotateY(-30deg);transition:1s ease;animation:1s ease 0s 1 svelte-1hbu3x6-initAnimation}.book.svelte-1hbu3x6.svelte-1hbu3x6:hover{transform:rotateY(0deg)}.book.svelte-1hbu3x6>.svelte-1hbu3x6:first-child{width:200px;height:300px;position:absolute;top:0;left:0;transform:translateZ(25px);background-color:#01060f;border-radius:0 2px 2px 0;box-shadow:5px 5px 20px #666}.book.svelte-1hbu3x6.svelte-1hbu3x6::before{position:absolute;content:' ';left:0;top:3px;width:48px;height:294px;transform:translateX(172px) rotateY(90deg);background:linear-gradient(\r\n			90deg,\r\n			#fff 0%,\r\n			#f9f9f9 5%,\r\n			#fff 10%,\r\n			#f9f9f9 15%,\r\n			#fff 20%,\r\n			#f9f9f9 25%,\r\n			#fff 30%,\r\n			#f9f9f9 35%,\r\n			#fff 40%,\r\n			#f9f9f9 45%,\r\n			#fff 50%,\r\n			#f9f9f9 55%,\r\n			#fff 60%,\r\n			#f9f9f9 65%,\r\n			#fff 70%,\r\n			#f9f9f9 75%,\r\n			#fff 80%,\r\n			#f9f9f9 85%,\r\n			#fff 90%,\r\n			#f9f9f9 95%,\r\n			#fff 100%\r\n		)}.book.svelte-1hbu3x6.svelte-1hbu3x6::after{width:200px;height:300px;position:absolute;top:0;left:0;content:' ';transform:translateZ(-25px);background-color:var(--neutral-900);border-radius:0 2px 2px 0;box-shadow:-10px 0 50px 10px #666}.book.svelte-1hbu3x6.svelte-1hbu3x6{scale:0.7}@media(min-width: 768px){.book.svelte-1hbu3x6.svelte-1hbu3x6{scale:1}}",
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
  return `<a class="${"book-container svelte-1hbu3x6"}"${add_attribute("href", bookUrl, 0)} target="${"_blank"}" rel="${"noreferrer noopener"}"><div class="${"book svelte-1hbu3x6"}"><img loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", alt, 0)}${add_attribute("src", imgUrl, 0)} class="${"svelte-1hbu3x6"}"></div>
</a>`;
});
const BookGallery_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".books.svelte-1yg3lhp{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap}@media(min-width: 768px){.books.svelte-1yg3lhp{gap:var(--space-xl)}}",
  map: null
};
const BookGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let books = [
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
  return `<div class="${"books svelte-1yg3lhp"}">${each(books, (book) => {
    return `<div class="${"book__block"}">${validate_component(CoolBook, "CoolBook").$$render(
      $$result,
      {
        imgUrl: book.imgUrl,
        alt: book.name,
        bookUrl: book.bookUrl
      },
      {},
      {}
    )}
		</div>`;
  })}
</div>`;
});
const ToolCardList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tools.svelte-1roy6af{display:flex;flex-direction:row;flex-wrap:wrap;max-width:100%;gap:var(--space-m)}.tool__name.svelte-1roy6af{font-weight:600;color:var(--neutral-900)}.tool.svelte-1roy6af{display:flex;flex-direction:column;border:var(--border);width:100%;padding:var(--space-m);box-shadow:var(--box-shadow);border-radius:var(--border-radius)}.tool.svelte-1roy6af:hover{box-shadow:var(--box-shadow-hover);border:var(--border-hover);transition:0.3s}.tool__description.svelte-1roy6af{color:var(--neutral-700);overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-weight:400}@media(min-width: 768px){.tool.svelte-1roy6af{width:50ch}}",
  map: null
};
const ToolCardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"tools svelte-1roy6af"}"><a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://www.userinterviews.com/"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">User Interviews</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">Recruit participants from a community of 125,000 members based on profession, demographics,
			geography and more, for any kind of research.
		</p></a>

	<a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://appoint.ly"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">Appoint.ly</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">A web-based scheduling tool that helps to schedule meetings quickly through the integration
			with calendars online.
		</p></a>

	<a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://crowdsignal.com/"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">Crowd Signal</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">Collect, organize and analyze data from a variety of sources, including social media and
			mobile.
		</p></a>

	<a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://www.jotform.com"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">Jotform</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">Create online forms, get an email for each response, collect data.
		</p></a>

	<a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://minetime.ai/"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">MineTime</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">A free calendar app with smart scheduling and time analytics features.
		</p></a>

	<a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://www.surveymonkey.com"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">Survey Monkey</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">Online survey tool to capture the voices and opinions of the people who matter most to you.
		</p></a>

	<a class="${"tool svelte-1roy6af"}" target="${"_blank"}" href="${"https://www.yesinsights.com/"}"><h2 class="${"tool__name base-text svelte-1roy6af"}">YesInsights</h2>
		<p class="${"tool__description small-text svelte-1roy6af"}">Simple one question and NPS surveys to improve your business.
		</p></a>
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
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section-description.svelte-6y1qkw{max-width:60ch;text-align:left;margin-bottom:var(--space-s)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Resource</title>`, ""}`, ""}

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Book" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Books, "Books").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

	${validate_component(BookGallery, "BookGallery").$$render($$result, {}, {}, {})}</section>

<section>${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "User Research" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Flask, "Flask").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}
	<p class="${"section-description small-text svelte-6y1qkw"}">User research helps you understand user behaviors, needs, and motivations through various
		qualitative and quantitative methods (interviews, observation, forms, etc).
	</p>

	${validate_component(ToolCardList, "ToolCardList").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
