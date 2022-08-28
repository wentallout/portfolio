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
var import_index2 = require("../../../../chunks/index2.js");
var import_supabase_js = require("@supabase/supabase-js");
const CustomLoading_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-6svnub-ldio-6c7iulps7mr-1{0%{transform:rotate(0deg)}50%{transform:rotate(-45deg)}100%{transform:rotate(0deg)}}@keyframes svelte-6svnub-ldio-6c7iulps7mr-2{0%{transform:rotate(180deg)}50%{transform:rotate(225deg)}100%{transform:rotate(180deg)}}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub.svelte-6svnub:nth-child(2){transform:translate(-15px, 0)}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(2) div.svelte-6svnub{position:absolute;top:20px;left:20px;width:60px;height:30px;border-radius:60px 60px 0 0;background:#b4873c;animation:svelte-6svnub-ldio-6c7iulps7mr-1 1s linear infinite;transform-origin:30px 30px}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(2) div.svelte-6svnub:nth-child(2){animation:svelte-6svnub-ldio-6c7iulps7mr-2 1s linear infinite}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(2) div.svelte-6svnub:nth-child(3){transform:rotate(-90deg);animation:none}@keyframes svelte-6svnub-ldio-6c7iulps7mr-3{0%{transform:translate(95px, 0);opacity:0}20%{opacity:1}100%{transform:translate(35px, 0);opacity:1}}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub.svelte-6svnub:nth-child(1){display:block}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(1) div.svelte-6svnub{position:absolute;top:46px;left:-4px;width:8px;height:8px;border-radius:50%;background:#000000;animation:svelte-6svnub-ldio-6c7iulps7mr-3 1s linear infinite}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(1) div.svelte-6svnub:nth-child(1){animation-delay:-0.67s}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(1) div.svelte-6svnub:nth-child(2){animation-delay:-0.33s}.ldio-6c7iulps7mr.svelte-6svnub>div.svelte-6svnub:nth-child(1) div.svelte-6svnub:nth-child(3){animation-delay:0s}.loadingio-spinner-bean-eater-xghevhr8yf.svelte-6svnub.svelte-6svnub.svelte-6svnub{width:64px;height:64px;display:inline-block;overflow:hidden;background:none}.ldio-6c7iulps7mr.svelte-6svnub.svelte-6svnub.svelte-6svnub{width:100%;height:100%;position:relative;transform:translateZ(0) scale(0.64);backface-visibility:hidden;transform-origin:0 0}.ldio-6c7iulps7mr.svelte-6svnub div.svelte-6svnub.svelte-6svnub{box-sizing:content-box}",
  map: null
};
const CustomLoading = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"loadingio-spinner-bean-eater-xghevhr8yf svelte-6svnub"}"><div class="${"ldio-6c7iulps7mr svelte-6svnub"}"><div class="${"svelte-6svnub"}"><div class="${"svelte-6svnub"}"></div>
			<div class="${"svelte-6svnub"}"></div>
			<div class="${"svelte-6svnub"}"></div></div>
		<div class="${"svelte-6svnub"}"><div class="${"svelte-6svnub"}"></div>
			<div class="${"svelte-6svnub"}"></div>
			<div class="${"svelte-6svnub"}"></div></div></div>
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
  return `<p>This is tools page</p>
<p>Resource:</p>


${function(__value) {
    if ((0, import_chunks.q)(__value)) {
      __value.then(null, import_chunks.n);
      return `
	${(0, import_chunks.v)(CustomLoading, "CustomLoading").$$render($$result, {}, {}, {})}
`;
    }
    return function() {
      return `
	${(0, import_chunks.j)($resourceData, (resource) => {
        return `<div>${(0, import_chunks.h)(resource.title)}
			${(0, import_chunks.h)(resource.type)}
			${(0, import_chunks.h)(resource.description)}
		</div>`;
      })}
`;
    }();
  }(getResource())}`;
});
