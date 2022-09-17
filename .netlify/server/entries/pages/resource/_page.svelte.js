import { c as create_ssr_component, s as setContext, j as getContext, f as subscribe, h as escape, d as spread, e as escape_object, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import { B as ButtonWithIcon } from "../../../chunks/ButtonWithIcon.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const ToolCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".tools.svelte-1b6j4hz{display:flex;flex-direction:row;flex-wrap:wrap;max-width:100%;gap:var(--space-m)}.tool__name.svelte-1b6j4hz{color:var(--neutral-900)}.tool.svelte-1b6j4hz{display:flex;flex-direction:column;border:var(--border);width:100%;padding:var(--space-m);box-shadow:var(--box-shadow);border-radius:var(--border-radius)}.tool.svelte-1b6j4hz:hover{box-shadow:var(--box-shadow-hover);border:var(--border-hover);transition:0.3s}.tool__description.svelte-1b6j4hz{color:var(--neutral-700);overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}@media(min-width: 768px){.tool.svelte-1b6j4hz{width:50ch}}",
  map: null
};
const ToolCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"tools svelte-1b6j4hz"}"><a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://www.userinterviews.com/"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">User Interviews</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">Recruit participants from a community of 125,000 members based on profession, demographics,
			geography and more, for any kind of research.
		</p></a>

	<a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://appoint.ly"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">Appoint.ly</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">A web-based scheduling tool that helps to schedule meetings quickly through the integration
			with calendars online.
		</p></a>

	<a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://crowdsignal.com/"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">Crowd Signal</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">Collect, organize and analyze data from a variety of sources, including social media and
			mobile.
		</p></a>

	<a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://www.jotform.com"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">Jotform</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">Create online forms, get an email for each response, collect data.
		</p></a>

	<a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://minetime.ai/"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">MineTime</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">A free calendar app with smart scheduling and time analytics features.
		</p></a>

	<a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://www.surveymonkey.com"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">Survey Monkey</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">Online survey tool to capture the voices and opinions of the people who matter most to you.
		</p></a>

	<a class="${"tool svelte-1b6j4hz"}" target="${"_blank"}" href="${"https://www.yesinsights.com/"}"><h2 class="${"tool__name base-text svelte-1b6j4hz"}">YesInsights</h2>
		<p class="${"tool__description small-text svelte-1b6j4hz"}">Simple one question and NPS surveys to improve your business.
		</p></a>
</div>`;
});
const faqsKey = {};
const FaqContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext(faqsKey, writable(""));
  return `${slots.default ? slots.default({}) : ``}`;
});
const Faq_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "details.svelte-afb222.svelte-afb222.svelte-afb222{margin-bottom:var(--space-l)}details.svelte-afb222>summary.svelte-afb222.svelte-afb222{list-style:none}summary.svelte-afb222.svelte-afb222.svelte-afb222::-webkit-details-marker{display:none}summary.svelte-afb222.svelte-afb222.svelte-afb222::after{content:' \u25BA'}details[open].svelte-afb222 summary.svelte-afb222.svelte-afb222:after{content:' \u25BC'}details[open].svelte-afb222 summary.svelte-afb222~.svelte-afb222{animation:sweep 0.5s ease-in-out}",
  map: null
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $activeFaq, $$unsubscribe_activeFaq;
  let { summary } = $$props;
  const activeFaq = getContext(faqsKey);
  $$unsubscribe_activeFaq = subscribe(activeFaq, (value) => $activeFaq = value);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  $$result.css.add(css$2);
  $$unsubscribe_activeFaq();
  return `<details ${$activeFaq === summary ? "open" : ""} class="${"svelte-afb222"}"><summary class="${"base-text svelte-afb222"}">${escape(summary)}</summary>
	${slots.default ? slots.default({}) : ``}
</details>`;
});
const Books = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
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
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M223.6 199.8L160 93.8V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v53.8l-40.2 66.9c0 .1-.1.2-.1.3l-23.3 38.8A16 16 0 0 0 46.1 224h163.8a16 16 0 0 0 13.7-24.2ZM109.7 102a15.9 15.9 0 0 0 2.3-8.2V40h32v53.8a15.9 15.9 0 0 0 2.3 8.2l38.8 64.8c-13.1 7.1-31.4 5.1-53.5-6c-14.3-7.1-32.7-13.5-50.3-11.4ZM46.1 208l22.5-37.4c13.2-8.7 32.4-7.1 55.8 4.6c17.3 8.6 31.5 11.8 43.2 11.8a51.4 51.4 0 0 0 25.8-6.5l16.5 27.5Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Download_simple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M80.3 115.7a8 8 0 0 1 11.4-11.3l28.3 28.3V40a8 8 0 0 1 16 0v92.7l28.3-28.3a8 8 0 0 1 11.4 11.3l-42 42a8.2 8.2 0 0 1-11.4 0ZM216 144a8 8 0 0 0-8 8v56H48v-56a8 8 0 0 0-16 0v56a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-56a8 8 0 0 0-8-8Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const BookCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn-download.svelte-118bcm9{margin-top:auto}.book.svelte-118bcm9{width:100%;display:flex;flex-direction:column;justify-content:center;margin-bottom:var(--space-l);padding:var(--space-m);text-align:left;color:var(--neutral-900);box-shadow:var(--box-shadow);border:var(--border);border-radius:var(--border-radius)}.book.svelte-118bcm9:hover{box-shadow:var(--box-shadow-hover);border:var(--border-hover);transition:0.3s}.book__thumbnail.svelte-118bcm9{width:50%;height:50%;margin-bottom:var(--space-m);border-radius:var(--border-radius)}.book-title.svelte-118bcm9{font-weight:600;color:var(--neutral-900)}.book-author.svelte-118bcm9{color:var(--neutral-800);font-weight:300}.book__info.svelte-118bcm9{display:flex;flex-direction:column}.book-description.svelte-118bcm9{margin-top:var(--space-xs);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;color:var(--neutral-700)}@media(min-width: 768px){.book-description.svelte-118bcm9{max-width:39ch;min-height:4rem}.book__info.svelte-118bcm9{height:250px}.book.svelte-118bcm9{flex-direction:row;align-items:flex-start;justify-content:left}.book__thumbnail.svelte-118bcm9{width:auto;height:250px;margin-bottom:0;margin-right:var(--space-m)}}@media(min-width: 992px){}",
  map: null
};
const BookCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  let { thumbnailUrl = "" } = $$props;
  let { authorName = "author" } = $$props;
  let { bookTitle = "title" } = $$props;
  let { bookDescription = "description" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.thumbnailUrl === void 0 && $$bindings.thumbnailUrl && thumbnailUrl !== void 0)
    $$bindings.thumbnailUrl(thumbnailUrl);
  if ($$props.authorName === void 0 && $$bindings.authorName && authorName !== void 0)
    $$bindings.authorName(authorName);
  if ($$props.bookTitle === void 0 && $$bindings.bookTitle && bookTitle !== void 0)
    $$bindings.bookTitle(bookTitle);
  if ($$props.bookDescription === void 0 && $$bindings.bookDescription && bookDescription !== void 0)
    $$bindings.bookDescription(bookDescription);
  $$result.css.add(css$1);
  return `<div class="${"book svelte-118bcm9"}"><img loading="${"lazy"}" decoding="${"async"}" height="${"250"}" width="${"175"}" class="${"book__thumbnail svelte-118bcm9"}" alt="${"book cover"}"${add_attribute("src", thumbnailUrl, 0)}>

	<div class="${"book__info svelte-118bcm9"}"><div class="${"book-title base-text svelte-118bcm9"}">${escape(bookTitle)}</div>
		<div class="${"book-author small-text svelte-118bcm9"}">${escape(authorName)}</div>
		<p${add_attribute("title", bookDescription, 0)} class="${"book-description small-text svelte-118bcm9"}">${escape(bookDescription)}</p>
		<a class="${"btn-download svelte-118bcm9"}" target="${"_blank"}"${add_attribute("href", url, 0)}>${validate_component(ButtonWithIcon, "ButtonWithIcon").$$render(
    $$result,
    {
      label: "Download",
      backgroundColor: "transparent",
      labelColor: "var(--primary-500)",
      border: "1px solid var(--primary-500)"
    },
    {},
    {
      default: () => {
        return `${validate_component(Download_simple, "DownloadSimple").$$render(
          $$result,
          {
            size: "24px",
            color: "var(--primary-500)"
          },
          {},
          {}
        )}`;
      }
    }
  )}</a></div>
</div>`;
});
const pic1 = "/_app/immutable/assets/UIDesignPrinciples-443e2182.webp";
const pic2 = "/_app/immutable/assets/DesignManual-7c3e1548.webp";
const pic3 = "/_app/immutable/assets/NoBSGuideUX-79175a56.webp";
const pic4 = "/_app/immutable/assets/Sprint-f52e7cca.webp";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".books.svelte-153sss3{display:flex;flex-wrap:wrap;width:100%;max-width:50rem;flex-direction:column}.section-description.svelte-153sss3{max-width:60ch;text-align:left;margin-bottom:var(--space-s)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Resource</title>`, ""}`, ""}

${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Books" }, {}, {
    default: () => {
      return `${validate_component(Books, "Books").$$render(
        $$result,
        {
          color: "var(--primary-600)",
          width: "32",
          height: "32"
        },
        {},
        {}
      )}`;
    }
  })}

${validate_component(FaqContainer, "FaqContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Faq, "Faq").$$render($$result, { summary: "UI" }, {}, {
        default: () => {
          return `<div class="${"books svelte-153sss3"}">${validate_component(BookCard, "BookCard").$$render(
            $$result,
            {
              url: "https://1drv.ms/b/s!Ahis-4qg6dsEdTm7ECJXBuoqoxw",
              thumbnailUrl: pic1,
              bookTitle: "UI Design Principles",
              authorName: "Michael Filipiuk",
              bookDescription: "I was making my first steps into the world of UI design, and this book has helped me tremendously."
            },
            {},
            {}
          )}

			${validate_component(BookCard, "BookCard").$$render(
            $$result,
            {
              url: "https://drive.google.com/uc?export=download&id=1A1UAg2p_91GjEPWk--iHzX2yf37yhXtJ",
              thumbnailUrl: pic2,
              bookTitle: "Design Manual",
              authorName: "AdrianK",
              bookDescription: "This one has a real project inside and taught me a lot about auto-layout and responsive constraints in Figma."
            },
            {},
            {}
          )}</div>`;
        }
      })}
	${validate_component(Faq, "Faq").$$render($$result, { summary: "UX" }, {}, {
        default: () => {
          return `<div class="${"books svelte-153sss3"}">${validate_component(BookCard, "BookCard").$$render(
            $$result,
            {
              url: "https://1drv.ms/b/s!Ahis-4qg6dsEdpmKJyycIRPpPlA",
              thumbnailUrl: pic3,
              bookTitle: "No Bullshit Guide To UX",
              authorName: "Michal Malewicz",
              bookDescription: "This book clears up a lot of my problems. Companies almost never have the same UX process so people like me struggle to learn the basics."
            },
            {},
            {}
          )}</div>`;
        }
      })}

	${validate_component(Faq, "Faq").$$render($$result, { summary: "Process" }, {}, {
        default: () => {
          return `<div class="${"books svelte-153sss3"}">${validate_component(BookCard, "BookCard").$$render(
            $$result,
            {
              url: "https://1drv.ms/b/s!Ahis-4qg6dsEd0lfpvdH9cTtzRk",
              thumbnailUrl: pic4,
              bookTitle: "Sprint",
              authorName: "Jake Knapp",
              bookDescription: "Amazing book that should be read by every UX designer."
            },
            {},
            {}
          )}</div>`;
        }
      })}`;
    }
  })}

${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "User Research" }, {}, {
    default: () => {
      return `${validate_component(Flask, "Flask").$$render(
        $$result,
        {
          color: "var(--primary-600)",
          width: "32",
          height: "32"
        },
        {},
        {}
      )}`;
    }
  })}
<p class="${"section-description small-text svelte-153sss3"}">User research helps you understand user behaviors, needs, and motivations through various
	qualitative and quantitative methods (interviews, observation, forms, etc). These user research
	tools can be useful for you:
</p>

${validate_component(ToolCard, "ToolCard").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
