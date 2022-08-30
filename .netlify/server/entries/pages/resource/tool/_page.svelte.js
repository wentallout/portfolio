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
const Wrench = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M230,66.3a12.4,12.4,0,0,0-6.9-6.6,12.1,12.1,0,0,0-9.5.6,14,14,0,0,0-3.2,2.2L173,99.9l-14.1-2.8L156.1,83l37.4-37.4a14,14,0,0,0,2.2-3.2,12.1,12.1,0,0,0,.6-9.5,12.4,12.4,0,0,0-6.6-6.9A76,76,0,0,0,89.3,123.8L31.2,173.9l-.7.6a36.1,36.1,0,0,0,51,51l.6-.7,50.1-58.1A76,76,0,0,0,230,66.3Zm-33.2,66.5a52.5,52.5,0,0,1-61.7,8.9,11.9,11.9,0,0,0-15.1,2.5L64.2,208.7a12,12,0,0,1-16.9-16.9L111.8,136a12.1,12.1,0,0,0,2.7-14.9A51.9,51.9,0,0,1,161.1,44L134.5,70.5a12.1,12.1,0,0,0-3.2,10.9l5.6,28.3a12.2,12.2,0,0,0,9.4,9.4l28.3,5.6a12.1,12.1,0,0,0,10.9-3.2L212,94.9A51.8,51.8,0,0,1,196.8,132.8Z"}"></path>` : `${weight === "duotone" ? `<g opacity="${"0.2"}"><path d="${"M185,37.1,143,79l5.7,28.3L177,113l41.9-42h0a63.9,63.9,0,0,1-89.8,81h0L73,217a24,24,0,0,1-34-34l65-56.1h0a63.9,63.9,0,0,1,81-89.8Z"}"></path></g><path d="${"M226.3,67.9a8.3,8.3,0,0,0-4.6-4.4,7.7,7.7,0,0,0-6.3.4,5.1,5.1,0,0,0-2.1,1.5l-39,38.9-18.8-3.8-3.8-18.8,38.9-39a5.1,5.1,0,0,0,1.5-2.1,7.7,7.7,0,0,0,.4-6.3,8.3,8.3,0,0,0-4.4-4.6,72,72,0,0,0-94,95.2L33.8,177c-.1.1-.3.2-.4.4a31.9,31.9,0,0,0,0,45.2,31.9,31.9,0,0,0,45.2,0c.2-.1.3-.3.4-.4l52.1-60.3a72,72,0,0,0,95.2-94Zm-26.7,67.7a56.2,56.2,0,0,1-66.5,9.5,8.1,8.1,0,0,0-10.1,1.7L67.1,211.5a16,16,0,0,1-22.6-22.6L109.2,133a8,8,0,0,0,1.8-9.9,56.1,56.1,0,0,1,58.9-82.3L137.4,73.4a8,8,0,0,0-2.2,7.2l5.6,28.3a8.4,8.4,0,0,0,6.3,6.3l28.3,5.6a8,8,0,0,0,7.2-2.2l32.6-32.5A55.9,55.9,0,0,1,199.6,135.6Z"}"></path>` : `${weight === "fill" ? `<path d="${"M210.9,146.9a72.2,72.2,0,0,1-79.8,15L79,222.2c-.1.1-.2.3-.4.4a31.9,31.9,0,0,1-45.2,0,31.9,31.9,0,0,1,0-45.2c.1-.2.3-.3.4-.4l60.3-52.1a72,72,0,0,1,94-95.2,8.3,8.3,0,0,1,4.4,4.6,7.7,7.7,0,0,1-.4,6.3,5.1,5.1,0,0,1-1.5,2.1l-38.9,39,3.8,18.8,18.8,3.8,39-38.9a5.1,5.1,0,0,1,2.1-1.5,7.7,7.7,0,0,1,6.3-.4,8.3,8.3,0,0,1,4.6,4.4A71.6,71.6,0,0,1,210.9,146.9Z"}"></path>` : `${weight === "light" ? `<path d="${"M224.5,68.7a6,6,0,0,0-3.5-3.3,6.2,6.2,0,0,0-4.8.2,5.7,5.7,0,0,0-1.5,1.2L175,106.5l-21.2-4.3L149.5,81l39.7-39.7a4.8,4.8,0,0,0,1.2-1.6,5.9,5.9,0,0,0,.2-4.7,6,6,0,0,0-3.3-3.5,70,70,0,0,0-90.8,94l-61.4,53-.3.3a30,30,0,0,0,0,42.4,29.9,29.9,0,0,0,42.4,0l.3-.3,53-61.4a70,70,0,0,0,94-90.8ZM201,137a58.3,58.3,0,0,1-68.9,9.9,6,6,0,0,0-7.6,1.2L68.6,212.9a18,18,0,0,1-25.5-25.5l64.8-55.9a6.1,6.1,0,0,0,1.3-7.5,58,58,0,0,1,64.7-84.3L138.8,74.8a6.3,6.3,0,0,0-1.7,5.4l5.7,28.3a6,6,0,0,0,4.7,4.7l28.3,5.7a6.3,6.3,0,0,0,5.4-1.7l35.1-35.1A57.6,57.6,0,0,1,201,137Z"}"></path>` : `${weight === "thin" ? `<path d="${"M222.6,69.4a3.5,3.5,0,0,0-2.3-2.1,4,4,0,0,0-3.2.1l-1,.8-40.4,40.4-23.6-4.7-4.7-23.6,40.4-40.4.8-1a4,4,0,0,0,.1-3.2,3.5,3.5,0,0,0-2.1-2.3,67.7,67.7,0,0,0-74.7,14.5A68.4,68.4,0,0,0,99,126L36.4,180l-.2.2a28.1,28.1,0,0,0,0,39.6,28,28,0,0,0,39.6,0l.2-.2,54-62.5a68.6,68.6,0,0,0,78.1-13A67.7,67.7,0,0,0,222.6,69.4Zm-20.2,69a60.1,60.1,0,0,1-71.3,10.2,4,4,0,0,0-5.1.8L70,214.2A19.9,19.9,0,0,1,41.8,186l64.8-56a4.1,4.1,0,0,0,.9-5,60.2,60.2,0,0,1,10.1-71.4,59.5,59.5,0,0,1,60.1-14.9L140.2,76.2a4,4,0,0,0-1.1,3.6l5.7,28.3a3.8,3.8,0,0,0,3.1,3.1l28.3,5.7a4,4,0,0,0,3.6-1.1l37.5-37.5A59.5,59.5,0,0,1,202.4,138.4Z"}"></path>` : `${weight === "regular" ? `<path d="${"M226.3,67.9a8.3,8.3,0,0,0-4.6-4.4,7.7,7.7,0,0,0-6.3.4,5.1,5.1,0,0,0-2.1,1.5l-39,38.9-18.8-3.8-3.8-18.8,38.9-39a5.1,5.1,0,0,0,1.5-2.1,7.7,7.7,0,0,0,.4-6.3,8.3,8.3,0,0,0-4.4-4.6,72,72,0,0,0-94,95.2L33.8,177c-.1.1-.3.2-.4.4a31.9,31.9,0,0,0,0,45.2,31.9,31.9,0,0,0,45.2,0c.2-.1.3-.3.4-.4l52.1-60.3a72,72,0,0,0,95.2-94Zm-26.7,67.7a56.2,56.2,0,0,1-66.5,9.5,8.1,8.1,0,0,0-10.1,1.7L67.1,211.5a16,16,0,0,1-22.6-22.6L109.2,133a8,8,0,0,0,1.8-9.9,56.1,56.1,0,0,1,58.9-82.3L137.4,73.4a8,8,0,0,0-2.2,7.2l5.6,28.3a8.4,8.4,0,0,0,6.3,6.3l28.3,5.6a8,8,0,0,0,7.2-2.2l32.6-32.5A55.9,55.9,0,0,1,199.6,135.6Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
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
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $resourceData, $$unsubscribe_resourceData;
  $$unsubscribe_resourceData = (0, import_chunks.i)(resourceData, (value) => $resourceData = value);
  $$unsubscribe_resourceData();
  return `${(0, import_chunks.v)(import_SectionTitle.S, "SectionTitle").$$render($$result, { sectionTitle: "Tool" }, {}, {
    default: () => {
      return `${(0, import_chunks.v)(Wrench, "Wrench").$$render($$result, { size: "32px" }, {}, {})}`;
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
		${(0, import_chunks.k)($resourceData, (resource) => {
        return `<div>${(0, import_chunks.h)(resource.title)}
				${(0, import_chunks.h)(resource.type)}
				${(0, import_chunks.h)(resource.description)}
			</div>`;
      })}
	`;
    }();
  }(getResource())}</div>`;
});
