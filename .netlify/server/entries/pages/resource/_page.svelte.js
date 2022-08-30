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
const BookOpen = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $$restProps = (0, import_chunks.b)($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = (0, import_chunks.g)("iconCtx") || {};
  let { weight = (_a = ctx.weight) != null ? _a : "regular" } = $$props;
  let { color = (_b = ctx.color) != null ? _b : "currentColor" } = $$props;
  let { size = (_c = ctx.size) != null ? _c : "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${(0, import_chunks.d)(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_chunks.e)(size) },
      { height: (0, import_chunks.e)(size) },
      { fill: (0, import_chunks.e)(color) },
      {
        transform: (0, import_chunks.e)(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      (0, import_chunks.f)($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M224,44H160a43.8,43.8,0,0,0-32,13.8A43.8,43.8,0,0,0,96,44H32A20.1,20.1,0,0,0,12,64V192a20.1,20.1,0,0,0,20,20H96a20.1,20.1,0,0,1,20,20,12,12,0,0,0,24,0,20.1,20.1,0,0,1,20-20h64a20.1,20.1,0,0,0,20-20V64A20.1,20.1,0,0,0,224,44ZM96,188H36V68H96a20.1,20.1,0,0,1,20,20V192.8A43.4,43.4,0,0,0,96,188Zm124,0H160a43.4,43.4,0,0,0-20,4.8V88a20.1,20.1,0,0,1,20-20h60Z"}"></path>` : `${weight === "duotone" ? `<g opacity="${"0.2"}"><path d="${"M224,56H160a32,32,0,0,0-32,32A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h64a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Z"}"></path></g><path d="${"M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24.1,24.1,0,0,1,24,24,8,8,0,0,0,16,0,24.1,24.1,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24.1,24.1,0,0,1,24,24V200A40,40,0,0,0,96,192Zm128,0H160a40,40,0,0,0-24,8V88a24.1,24.1,0,0,1,24-24h64Z"}"></path>` : `${weight === "fill" ? `<path d="${"M32,208a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H80a40,40,0,0,1,40,40v80a8,8,0,0,0,16,0V88a40,40,0,0,1,40-40h48a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H160a24.1,24.1,0,0,0-24,24,8,8,0,0,1-16,0,24.1,24.1,0,0,0-24-24Z"}"></path>` : `${weight === "light" ? `<path d="${"M224,50H160a38.1,38.1,0,0,0-32,17.5A38.1,38.1,0,0,0,96,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H96a26.1,26.1,0,0,1,26,26,6,6,0,0,0,12,0,26.1,26.1,0,0,1,26-26h64a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM96,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H96a26.1,26.1,0,0,1,26,26V204.3A37.9,37.9,0,0,0,96,194Zm130-2a2,2,0,0,1-2,2H160a37.7,37.7,0,0,0-26,10.3V88a26.1,26.1,0,0,1,26-26h64a2,2,0,0,1,2,2Z"}"></path>` : `${weight === "thin" ? `<path d="${"M224,52H160a36,36,0,0,0-32,19.5A36,36,0,0,0,96,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H96a28.1,28.1,0,0,1,28,28,4,4,0,0,0,8,0,28.1,28.1,0,0,1,28-28h64a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52ZM96,196H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H96a28.1,28.1,0,0,1,28,28V209.4A35.8,35.8,0,0,0,96,196Zm132-4a4,4,0,0,1-4,4H160a35.8,35.8,0,0,0-28,13.4V88a28.1,28.1,0,0,1,28-28h64a4,4,0,0,1,4,4Z"}"></path>` : `${weight === "regular" ? `<path d="${"M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24.1,24.1,0,0,1,24,24,8,8,0,0,0,16,0,24.1,24.1,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24.1,24.1,0,0,1,24,24V200A40,40,0,0,0,96,192Zm128,0H160a40,40,0,0,0-24,8V88a24.1,24.1,0,0,1,24-24h64Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Books = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c;
  let $$restProps = (0, import_chunks.b)($$props, ["weight", "color", "size", "mirrored"]);
  const ctx = (0, import_chunks.g)("iconCtx") || {};
  let { weight = (_a = ctx.weight) != null ? _a : "regular" } = $$props;
  let { color = (_b = ctx.color) != null ? _b : "currentColor" } = $$props;
  let { size = (_c = ctx.size) != null ? _c : "1em" } = $$props;
  let { mirrored = ctx.mirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `


<svg${(0, import_chunks.d)(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: (0, import_chunks.e)(size) },
      { height: (0, import_chunks.e)(size) },
      { fill: (0, import_chunks.e)(color) },
      {
        transform: (0, import_chunks.e)(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      (0, import_chunks.f)($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M237.5,194.5l-8.3-30.9h0L196.1,40a20.1,20.1,0,0,0-24.5-14.2l-29.6,8A19.6,19.6,0,0,0,128,28H96a19.8,19.8,0,0,0-8,1.7A19.8,19.8,0,0,0,80,28H48A20.1,20.1,0,0,0,28,48V208a20.1,20.1,0,0,0,20,20H80a19.8,19.8,0,0,0,8-1.7,19.8,19.8,0,0,0,8,1.7h32a20.1,20.1,0,0,0,20-20V138.8l19.9,74.4A20.1,20.1,0,0,0,187.3,228a17.9,17.9,0,0,0,5.1-.7l30.9-8.3h0A20,20,0,0,0,237.5,194.5ZM161.1,94.9l23.2-6.2,18.6,69.6-23.2,6.2Zm12.8-44.8,4.2,15.4-23.2,6.2-4.2-15.4ZM124,164H100V52h24ZM76,52V68H52V52ZM52,92H76V204H52Zm48,112V188h24v16Zm90.1-.9-4.2-15.5,23.2-6.2,4.2,15.5Z"}"></path>` : `${weight === "duotone" ? `<path d="${"M136,48V176H88V80H40V48a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8,8,8,0,0,1,8-8h32A8,8,0,0,1,136,48Zm89.9,149.6-8.3-30.9-46.4,12.5,8.3,30.9a8,8,0,0,0,9.8,5.6l30.9-8.3A8,8,0,0,0,225.9,197.6ZM184.5,43.1a8.1,8.1,0,0,0-9.8-5.7l-30.9,8.3a8.1,8.1,0,0,0-5.7,9.8l8.3,30.9L192.8,74Z"}" opacity="${"0.2"}"></path><path d="${"M233.6,195.6,192.2,41a16,16,0,0,0-19.6-11.3L141.7,38l-1,.3A16,16,0,0,0,128,32H96a15.8,15.8,0,0,0-8,2.2A15.8,15.8,0,0,0,80,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H80a15.8,15.8,0,0,0,8-2.2,15.8,15.8,0,0,0,8,2.2h32a16,16,0,0,0,16-16V108.4l27.8,103.7A16,16,0,0,0,187.3,224a19.9,19.9,0,0,0,4.1-.5l30.9-8.3A16,16,0,0,0,233.6,195.6ZM156.2,92.1l30.9-8.3,20.7,77.3-30.9,8.3Zm20.5-46.9L183,68.3l-30.9,8.3-6.3-23.1ZM128,48V168H96V48ZM80,48V72H48V48ZM48,208V88H80V208Zm80,0H96V184h32v24Zm90.2-8.3L187.3,208,181,184.8l31-8.3,6.2,23.2Z"}"></path>` : `${weight === "fill" ? `<path d="${"M233.6,195.6,192.2,41a16,16,0,0,0-19.6-11.3L141.7,38l-1,.3A16,16,0,0,0,128,32H96a15.8,15.8,0,0,0-8,2.2A15.8,15.8,0,0,0,80,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H80a15.8,15.8,0,0,0,8-2.2,15.8,15.8,0,0,0,8,2.2h32a16,16,0,0,0,16-16V108.4l27.8,103.7A16,16,0,0,0,187.3,224a19.9,19.9,0,0,0,4.1-.5l30.9-8.3A16,16,0,0,0,233.6,195.6ZM176.7,45.2,183,68.3l-30.9,8.3-6.3-23.1ZM128,48V168H96V48ZM80,48V72H48V48Zm48,160H96V184h32v24Zm90.2-8.3L187.3,208,181,184.8l31-8.3,6.2,23.2Z"}"></path>` : `${weight === "light" ? `<path d="${"M231.7,196.1l-8.3-30.9h0L190.3,41.5a14.1,14.1,0,0,0-17.2-9.9l-30.9,8.3a8.5,8.5,0,0,0-2.2.9A14,14,0,0,0,128,34H96a13.8,13.8,0,0,0-8,2.5A13.8,13.8,0,0,0,80,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H80a13.8,13.8,0,0,0,8-2.5,13.8,13.8,0,0,0,8,2.5h32a14,14,0,0,0,14-14V93.2l31.7,118.4A14.1,14.1,0,0,0,187.3,222a14.9,14.9,0,0,0,3.6-.5l30.9-8.3A14,14,0,0,0,231.7,196.1Zm-78-105.4,34.8-9.3,21.8,81.1-34.8,9.3Zm-9.6-38.2a2.1,2.1,0,0,1,1.2-1l30.9-8.3h.5a2.2,2.2,0,0,1,2,1.4l6.7,25.2-34.8,9.3L143.9,54A2.1,2.1,0,0,1,144.1,52.5ZM96,46h32a2,2,0,0,1,2,2V170H94V48A2,2,0,0,1,96,46ZM48,46H80a2,2,0,0,1,2,2V74H46V48A2,2,0,0,1,48,46ZM80,210H48a2,2,0,0,1-2-2V86H82V208A2,2,0,0,1,80,210Zm48,0H96a2,2,0,0,1-2-2V182h36v26A2,2,0,0,1,128,210Zm90.7-8.4-30.9,8.3a2,2,0,0,1-2.5-1.4l-6.7-25.1,34.8-9.3,6.7,25.1A1.9,1.9,0,0,1,218.7,201.6Z"}"></path>` : `${weight === "thin" ? `<path d="${"M229.8,196.6l-8.3-30.9h0L196.6,73h0l-8.3-30.9a12,12,0,0,0-14.7-8.5l-30.9,8.3a11.7,11.7,0,0,0-3.6,1.6A12,12,0,0,0,128,36H96a11.9,11.9,0,0,0-8,3.1A11.9,11.9,0,0,0,80,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H80a11.9,11.9,0,0,0,8-3.1,11.9,11.9,0,0,0,8,3.1h32a12,12,0,0,0,12-12V78l2.5,9.5h0l24.9,92.7h0l8.3,30.9a11.9,11.9,0,0,0,11.6,8.9,11.5,11.5,0,0,0,3.1-.4l30.9-8.3a11.8,11.8,0,0,0,7.3-5.6A12.1,12.1,0,0,0,229.8,196.6ZM151.3,89.3l38.6-10.4,22.8,85-38.6,10.4ZM96,44h32a4,4,0,0,1,4,4V172H92V48A4,4,0,0,1,96,44ZM48,44H80a4,4,0,0,1,4,4V76H44V48A4,4,0,0,1,48,44ZM80,212H48a4,4,0,0,1-4-4V84H84V208A4,4,0,0,1,80,212Zm48,0H96a4,4,0,0,1-4-4V180h40v28A4,4,0,0,1,128,212ZM142.4,51.5a3.8,3.8,0,0,1,2.4-1.9l30.9-8.3h1a4,4,0,0,1,3.9,2.9l7.3,27.1L149.2,81.5l-7.2-27A3.5,3.5,0,0,1,142.4,51.5Zm79.2,150.2a4.1,4.1,0,0,1-2.4,1.9l-30.9,8.3a4.1,4.1,0,0,1-4.9-2.9l-7.3-27,38.7-10.4,7.2,27.1A3.5,3.5,0,0,1,221.6,201.7Z"}"></path>` : `${weight === "regular" ? `<path d="${"M233.6,195.6l-8.3-30.9h0L192.2,41a16,16,0,0,0-19.6-11.3L141.7,38l-1,.3A16,16,0,0,0,128,32H96a15.8,15.8,0,0,0-8,2.2A15.8,15.8,0,0,0,80,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H80a15.8,15.8,0,0,0,8-2.2,15.8,15.8,0,0,0,8,2.2h32a16,16,0,0,0,16-16V108.4l19.5,72.8h0l8.3,30.9A16,16,0,0,0,187.3,224a19.9,19.9,0,0,0,4.1-.5l30.9-8.3a15.9,15.9,0,0,0,9.7-7.5A15.6,15.6,0,0,0,233.6,195.6ZM156.2,92.1l30.9-8.3,20.7,77.3-30.9,8.3Zm20.5-46.9L183,68.3l-30.9,8.3-6.3-23.1ZM128,48V168H96V48ZM80,48V72H48V48ZM48,208V88H80V208Zm80,0H96V184h32v24Zm90.2-8.3L187.3,208,181,184.8l31-8.3,6.2,23.2Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const faqsKey = {};
const FaqContainer = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_chunks.s)(faqsKey, (0, import_index2.w)(""));
  return `${slots.default ? slots.default({}) : ``}`;
});
const Faq_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "details.svelte-1iz31ql.svelte-1iz31ql.svelte-1iz31ql{margin-bottom:2rem}details.svelte-1iz31ql>summary.svelte-1iz31ql.svelte-1iz31ql{list-style:none}summary.svelte-1iz31ql.svelte-1iz31ql.svelte-1iz31ql::-webkit-details-marker{display:none}summary.svelte-1iz31ql.svelte-1iz31ql.svelte-1iz31ql::after{content:' \u25BA'}details[open].svelte-1iz31ql summary.svelte-1iz31ql.svelte-1iz31ql:after{content:' \u25BC'}details[open].svelte-1iz31ql summary.svelte-1iz31ql~.svelte-1iz31ql{animation:sweep 0.5s ease-in-out}",
  map: null
};
const Faq = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $activeFaq, $$unsubscribe_activeFaq;
  let { summary } = $$props;
  const activeFaq = (0, import_chunks.g)(faqsKey);
  $$unsubscribe_activeFaq = (0, import_chunks.i)(activeFaq, (value) => $activeFaq = value);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  $$result.css.add(css$2);
  $$unsubscribe_activeFaq();
  return `<details class="${"base-text svelte-1iz31ql"}" ${$activeFaq === summary ? "open" : ""}><summary class="${"svelte-1iz31ql"}">${(0, import_chunks.h)(summary)}</summary>
	${slots.default ? slots.default({}) : ``}
</details>`;
});
const BookCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn--download.svelte-q45xip{background-color:transparent;border:1px solid var(--primary);margin-top:auto}.btn--download.svelte-q45xip:hover{background-color:var(--black);transition:0.3s ease}.book.svelte-q45xip{width:100%;display:flex;flex-direction:column;justify-content:center;margin-bottom:2.5rem;padding:2rem;text-align:left;color:var(--black);box-shadow:var(--box-shadow)}.book.svelte-q45xip:hover{box-shadow:var(--box-shadow-hover)}.book__thumbnail.svelte-q45xip{width:50%;height:50%;object-fit:cover;margin-bottom:2rem;border:1px solid var(--black)}.book-title.svelte-q45xip{font-weight:600}.book-author.svelte-q45xip{color:var(--gray);font-weight:300}.book__info.svelte-q45xip{display:flex;flex-direction:column}.book-description.svelte-q45xip{margin-top:1rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}@media(min-width: 768px){.book-description.svelte-q45xip{max-width:39ch;min-height:4rem}.book__info.svelte-q45xip{height:250px}.book.svelte-q45xip{flex-direction:row;align-items:flex-start;justify-content:left}.book__thumbnail.svelte-q45xip{width:auto;height:250px;margin-bottom:0;margin-right:2rem}}@media(min-width: 992px){}",
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
  return `<div class="${"book svelte-q45xip"}"><img loading="${"lazy"}" decoding="${"async"}" height="${"250"}" width="${"175"}" class="${"book__thumbnail svelte-q45xip"}" alt="${"book cover"}"${(0, import_chunks.j)("src", thumbnailUrl, 0)}>

	<div class="${"book__info svelte-q45xip"}"><div class="${"book-title base-text svelte-q45xip"}">${(0, import_chunks.h)(bookTitle)}</div>
		<div class="${"book-author small-text svelte-q45xip"}">${(0, import_chunks.h)(authorName)}</div>
		<p${(0, import_chunks.j)("title", bookDescription, 0)} class="${"book-description small-text svelte-q45xip"}">${(0, import_chunks.h)(bookDescription)}</p>
		<a class="${"btn btn--download svelte-q45xip"}" target="${"_blank"}"${(0, import_chunks.j)("href", url, 0)}>${(0, import_chunks.v)(BookOpen, "BookOpen").$$render($$result, { size: "24px", color: "var(--primary)" }, {}, {})}</a></div>
</div>`;
});
const pic1 = "/_app/immutable/assets/UI Design Principles-06cd23a9.png";
const pic2 = "/_app/immutable/assets/DesignManual-9f330e36.png";
const pic3 = "/_app/immutable/assets/NoBSGuideUX-2d64c826.png";
const pic4 = "/_app/immutable/assets/Sprint-bd35600d.png";
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
      return `${(0, import_chunks.v)(Books, "Books").$$render($$result, { size: "32px" }, {}, {})}`;
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
