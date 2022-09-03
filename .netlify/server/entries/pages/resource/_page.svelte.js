var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../chunks/index.js");
var import_index2 = require("../../../chunks/index2.js");
var import_SectionTitle = require("../../../chunks/SectionTitle.js");
const faqsKey = {};
const FaqContainer = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_chunks.s)(faqsKey, (0, import_index2.w)(""));
  return `${slots.default ? slots.default({}) : ``}`;
});
const Faq_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "details.svelte-afb222.svelte-afb222.svelte-afb222{margin-bottom:var(--space-l)}details.svelte-afb222>summary.svelte-afb222.svelte-afb222{list-style:none}summary.svelte-afb222.svelte-afb222.svelte-afb222::-webkit-details-marker{display:none}summary.svelte-afb222.svelte-afb222.svelte-afb222::after{content:' \u25BA'}details[open].svelte-afb222 summary.svelte-afb222.svelte-afb222:after{content:' \u25BC'}details[open].svelte-afb222 summary.svelte-afb222~.svelte-afb222{animation:sweep 0.5s ease-in-out}",
  map: null
};
const Faq = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $activeFaq, $$unsubscribe_activeFaq;
  let { summary } = $$props;
  const activeFaq = (0, import_chunks.j)(faqsKey);
  $$unsubscribe_activeFaq = (0, import_chunks.d)(activeFaq, (value) => $activeFaq = value);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  $$result.css.add(css$2);
  $$unsubscribe_activeFaq();
  return `<details class="${"base-text svelte-afb222"}" ${$activeFaq === summary ? "open" : ""}><summary class="${"svelte-afb222"}">${(0, import_chunks.h)(summary)}</summary>
	${slots.default ? slots.default({}) : ``}
</details>`;
});
const Books = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.b)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m233.6 195.6l-8.3-30.9L192.2 41a16 16 0 0 0-19.6-11.3L141.7 38l-1 .3A16 16 0 0 0 128 32H96a15.8 15.8 0 0 0-8 2.2a15.8 15.8 0 0 0-8-2.2H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a15.8 15.8 0 0 0 8-2.2a15.8 15.8 0 0 0 8 2.2h32a16 16 0 0 0 16-16v-99.6l19.5 72.8l8.3 30.9a16 16 0 0 0 15.5 11.9a19.9 19.9 0 0 0 4.1-.5l30.9-8.3a15.9 15.9 0 0 0 9.7-7.5a15.6 15.6 0 0 0 1.6-12.1ZM156.2 92.1l30.9-8.3l20.7 77.3l-30.9 8.3Zm20.5-46.9l6.3 23.1l-30.9 8.3l-6.3-23.1ZM128 48v120H96V48Zm-48 0v24H48V48ZM48 208V88h32v120Zm80 0H96v-24h32v24Zm90.2-8.3l-30.9 8.3l-6.3-23.2l31-8.3l6.2 23.2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Book_open = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.b)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M224 48h-64a40 40 0 0 0-32 16a40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24.1 24.1 0 0 1 24 24a8 8 0 0 0 16 0a24.1 24.1 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24.1 24.1 0 0 1 24 24v112a40 40 0 0 0-24-8Zm128 0h-64a40 40 0 0 0-24 8V88a24.1 24.1 0 0 1 24-24h64Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const BookCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn--download.svelte-1qb7r5q{background-color:transparent;border:1px solid var(--primary);margin-top:auto}.btn--download.svelte-1qb7r5q:hover{background-color:var(--black);transition:0.3s ease}.book.svelte-1qb7r5q{width:100%;display:flex;flex-direction:column;justify-content:center;margin-bottom:var(--space-l);padding:var(--space-m);text-align:left;color:var(--black);box-shadow:var(--box-shadow)}.book.svelte-1qb7r5q:hover{box-shadow:var(--box-shadow-hover)}.book__thumbnail.svelte-1qb7r5q{width:50%;height:50%;margin-bottom:var(--space-m);border:1px solid var(--black)}.book-title.svelte-1qb7r5q{font-weight:600}.book-author.svelte-1qb7r5q{color:var(--gray);font-weight:300}.book__info.svelte-1qb7r5q{display:flex;flex-direction:column}.book-description.svelte-1qb7r5q{margin-top:var(--space-xs);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}@media(min-width: 768px){.book-description.svelte-1qb7r5q{max-width:39ch;min-height:4rem}.book__info.svelte-1qb7r5q{height:250px}.book.svelte-1qb7r5q{flex-direction:row;align-items:flex-start;justify-content:left}.book__thumbnail.svelte-1qb7r5q{width:auto;height:250px;margin-bottom:0;margin-right:var(--space-m)}}@media(min-width: 992px){}",
  map: null
};
const BookCard = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"book svelte-1qb7r5q"}"><img loading="${"lazy"}" decoding="${"async"}" height="${"250"}" width="${"175"}" class="${"book__thumbnail svelte-1qb7r5q"}" alt="${"book cover"}"${(0, import_chunks.f)("src", thumbnailUrl, 0)}>

	<div class="${"book__info svelte-1qb7r5q"}"><div class="${"book-title base-text svelte-1qb7r5q"}">${(0, import_chunks.h)(bookTitle)}</div>
		<div class="${"book-author small-text svelte-1qb7r5q"}">${(0, import_chunks.h)(authorName)}</div>
		<p${(0, import_chunks.f)("title", bookDescription, 0)} class="${"book-description small-text svelte-1qb7r5q"}">${(0, import_chunks.h)(bookDescription)}</p>
		<a class="${"btn btn--download svelte-1qb7r5q"}" target="${"_blank"}"${(0, import_chunks.f)("href", url, 0)}>${(0, import_chunks.v)(Book_open, "BookOpen").$$render($$result, { size: "24px", color: "var(--primary)" }, {}, {})}</a></div>
</div>`;
});
const pic1 = "/_app/immutable/assets/UI%20Design%20Principles-d749fec9.webp";
const pic2 = "/_app/immutable/assets/DesignManual-7c3e1548.webp";
const pic3 = "/_app/immutable/assets/NoBSGuideUX-509e0f5d.webp";
const pic4 = "/_app/immutable/assets/Sprint-f52e7cca.webp";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".books.svelte-ooot52{display:flex;flex-wrap:wrap;width:100%;max-width:50rem;flex-direction:column}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Resource</title>`, ""}`, ""}

${(0, import_chunks.v)(import_SectionTitle.S, "SectionTitle").$$render($$result, { sectionTitle: "Must-read" }, {}, {
    default: () => {
      return `${(0, import_chunks.v)(Books, "Books").$$render(
        $$result,
        {
          color: "var(--black)",
          width: "32",
          height: "32"
        },
        {},
        {}
      )}`;
    }
  })}

${(0, import_chunks.v)(FaqContainer, "FaqContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_chunks.v)(Faq, "Faq").$$render($$result, { summary: "UI" }, {}, {
        default: () => {
          return `<div class="${"books svelte-ooot52"}">${(0, import_chunks.v)(BookCard, "BookCard").$$render(
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

			${(0, import_chunks.v)(BookCard, "BookCard").$$render(
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
	${(0, import_chunks.v)(Faq, "Faq").$$render($$result, { summary: "UX" }, {}, {
        default: () => {
          return `<div class="${"books svelte-ooot52"}">${(0, import_chunks.v)(BookCard, "BookCard").$$render(
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

	${(0, import_chunks.v)(Faq, "Faq").$$render($$result, { summary: "Process" }, {}, {
        default: () => {
          return `<div class="${"books svelte-ooot52"}">${(0, import_chunks.v)(BookCard, "BookCard").$$render(
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
  })}`;
});
