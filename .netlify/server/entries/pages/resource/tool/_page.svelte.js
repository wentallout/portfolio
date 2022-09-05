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
var import_chunks = require("../../../../chunks/index.js");
var import_SectionTitle = require("../../../../chunks/SectionTitle.js");
var import_index2 = require("../../../../chunks/index2.js");
var import_supabase_js = require("@supabase/supabase-js");
const CustomLoading_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1lardxp-spinner-1{0%{transform:rotate(0deg)}50%{transform:rotate(-45deg)}100%{transform:rotate(0deg)}}@keyframes svelte-1lardxp-spinner-2{0%{transform:rotate(180deg)}50%{transform:rotate(225deg)}100%{transform:rotate(180deg)}}.spinner.svelte-1lardxp>div.svelte-1lardxp.svelte-1lardxp:nth-child(2){transform:translate(-15px, 0)}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(2) div.svelte-1lardxp{position:absolute;top:20px;left:20px;width:60px;height:30px;border-radius:60px 60px 0 0;background:#b4873c;animation:svelte-1lardxp-spinner-1 1s linear infinite;transform-origin:30px 30px}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(2) div.svelte-1lardxp:nth-child(2){animation:svelte-1lardxp-spinner-2 1s linear infinite}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(2) div.svelte-1lardxp:nth-child(3){transform:rotate(-90deg);animation:none}@keyframes svelte-1lardxp-spinner-3{0%{transform:translate(95px, 0);opacity:0}20%{opacity:1}100%{transform:translate(35px, 0);opacity:1}}.spinner.svelte-1lardxp>div.svelte-1lardxp.svelte-1lardxp:nth-child(1){display:block}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(1) div.svelte-1lardxp{position:absolute;top:46px;left:-4px;width:8px;height:8px;border-radius:50%;background:#000000;animation:svelte-1lardxp-spinner-3 1s linear infinite}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(1) div.svelte-1lardxp:nth-child(1){animation-delay:-0.67s}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(1) div.svelte-1lardxp:nth-child(2){animation-delay:-0.33s}.spinner.svelte-1lardxp>div.svelte-1lardxp:nth-child(1) div.svelte-1lardxp:nth-child(3){animation-delay:0s}.loadingio-spinner-bean-eater-xghevhr8yf.svelte-1lardxp.svelte-1lardxp.svelte-1lardxp{width:64px;height:64px;display:inline-block;overflow:hidden;background:none}.spinner.svelte-1lardxp.svelte-1lardxp.svelte-1lardxp{width:100%;height:100%;position:relative;transform:translateZ(0) scale(0.64);backface-visibility:hidden;transform-origin:0 0}.spinner.svelte-1lardxp div.svelte-1lardxp.svelte-1lardxp{box-sizing:content-box}",
  map: null
};
const CustomLoading = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loadingio-spinner-bean-eater-xghevhr8yf svelte-1lardxp"}"><div class="${"spinner svelte-1lardxp"}"><div class="${"svelte-1lardxp"}"><div class="${"svelte-1lardxp"}"></div>
			<div class="${"svelte-1lardxp"}"></div>
			<div class="${"svelte-1lardxp"}"></div></div>
		<div class="${"svelte-1lardxp"}"><div class="${"svelte-1lardxp"}"></div>
			<div class="${"svelte-1lardxp"}"></div>
			<div class="${"svelte-1lardxp"}"></div></div></div>
</div>`;
});
const supabaseUrl = "https://dfactzdutynjdboksvtd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmYWN0emR1dHluamRib2tzdnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEwOTkxMDcsImV4cCI6MTk3NjY3NTEwN30.AvcblDV6xkKEshjMkIcHkj29pVYgLuI_3M9xu5iI0MA";
const supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
const resourceData = (0, import_index2.w)([]);
const getResource = async () => {
  let { data, error } = await supabase.from("resource").select("*");
  if (error)
    throw new Error(error.message);
  resourceData.set(data);
};
const Wrench = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.d)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M226.3 67.9a8.3 8.3 0 0 0-4.6-4.4a7.7 7.7 0 0 0-6.3.4a5.1 5.1 0 0 0-2.1 1.5l-39 38.9l-18.8-3.8l-3.8-18.8l38.9-39a5.1 5.1 0 0 0 1.5-2.1a7.7 7.7 0 0 0 .4-6.3a8.3 8.3 0 0 0-4.4-4.6a72 72 0 0 0-94 95.2L33.8 177c-.1.1-.3.2-.4.4a31.9 31.9 0 0 0 0 45.2a31.9 31.9 0 0 0 45.2 0c.2-.1.3-.3.4-.4l52.1-60.3a72 72 0 0 0 95.2-94Zm-26.7 67.7a56.2 56.2 0 0 1-66.5 9.5a8.1 8.1 0 0 0-10.1 1.7l-55.9 64.7a16 16 0 0 1-22.6-22.6l64.7-55.9a8 8 0 0 0 1.8-9.9a56.1 56.1 0 0 1 58.9-82.3l-32.5 32.6a8 8 0 0 0-2.2 7.2l5.6 28.3a8.4 8.4 0 0 0 6.3 6.3l28.3 5.6a8 8 0 0 0 7.2-2.2l32.6-32.5a55.9 55.9 0 0 1-15.6 49.5Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $resourceData, $$unsubscribe_resourceData;
  $$unsubscribe_resourceData = (0, import_chunks.f)(resourceData, (value) => $resourceData = value);
  $$unsubscribe_resourceData();
  return `${(0, import_chunks.v)(import_SectionTitle.S, "SectionTitle").$$render($$result, { sectionTitle: "Tool" }, {}, {
    default: () => {
      return `${(0, import_chunks.v)(Wrench, "Wrench").$$render(
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

<div>${function(__value) {
    if ((0, import_chunks.q)(__value)) {
      __value.then(null, import_chunks.n);
      return `
		${(0, import_chunks.v)(CustomLoading, "CustomLoading").$$render($$result, {}, {}, {})}
	`;
    }
    return function() {
      return `
		${(0, import_chunks.g)($resourceData, (resource) => {
        return `<div>${(0, import_chunks.h)(resource.title)}
				${(0, import_chunks.h)(resource.type)}
				${(0, import_chunks.h)(resource.description)}
			</div>`;
      })}
	`;
    }();
  }(getResource())}</div>`;
});
