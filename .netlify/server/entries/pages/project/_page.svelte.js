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
var import_SectionTitle = require("../../../chunks/SectionTitle.js");
const FigmaLogo = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="${"256"}" height="${"256"}" fill="${"none"}"></rect>${weight === "bold" ? `<path d="${"M193,94a46,46,0,0,0-31-80H94A46,46,0,0,0,63,94a46,46,0,0,0,0,68,46,46,0,1,0,77,34V168.4a45.2,45.2,0,0,0,22,5.6,46,46,0,0,0,31-80Zm-9-34a22.1,22.1,0,0,1-22,22H140V38h22A22.1,22.1,0,0,1,184,60ZM72,60A22.1,22.1,0,0,1,94,38h22V82H94A22.1,22.1,0,0,1,72,60Zm0,68a22.1,22.1,0,0,1,22-22h22v44H94A22.1,22.1,0,0,1,72,128Zm44,68a22,22,0,1,1-22-22h22Zm46-46a22,22,0,0,1,0-44h0a22,22,0,0,1,0,44Z"}"></path>` : `${weight === "duotone" ? `<g opacity="${"0.2"}"><circle cx="${"162"}" cy="${"128"}" r="${"34"}"></circle><path d="${"M94,94h34V26H94a34,34,0,0,0,0,68Z"}"></path><path d="${"M60,196a34,34,0,0,0,68,0V162H94A34,34,0,0,0,60,196Z"}"></path></g><path d="${"M186.6,94A42,42,0,0,0,162,18H94A42,42,0,0,0,69.4,94a41.9,41.9,0,0,0,0,68A42,42,0,1,0,136,196V160.9A42,42,0,1,0,186.6,94ZM188,60a26.1,26.1,0,0,1-26,26H136V34h26A26.1,26.1,0,0,1,188,60ZM68,60A26.1,26.1,0,0,1,94,34h26V86H94A26.1,26.1,0,0,1,68,60Zm0,68a26.1,26.1,0,0,1,26-26h26v52H94A26.1,26.1,0,0,1,68,128Zm26,94a26,26,0,0,1,0-52h26v26A26.1,26.1,0,0,1,94,222Zm68-68a26,26,0,0,1,0-52h0a26,26,0,0,1,0,52Z"}"></path>` : `${weight === "fill" ? `<path d="${"M186.6,94A42,42,0,0,0,162,18H94A42,42,0,0,0,69.4,94a41.9,41.9,0,0,0,0,68A42,42,0,1,0,136,196V160.9A42,42,0,1,0,186.6,94ZM188,60a26.1,26.1,0,0,1-26,26H136V34h26A26.1,26.1,0,0,1,188,60Zm-26,94a26,26,0,0,1,0-52h0a26,26,0,0,1,0,52Z"}"></path>` : `${weight === "light" ? `<path d="${"M183,94a40,40,0,0,0-21-74H94A40,40,0,0,0,73,94a39.9,39.9,0,0,0,0,68,40,40,0,1,0,61,34V156.5A40,40,0,1,0,183,94Zm7-34a28.1,28.1,0,0,1-28,28H134V32h28A28.1,28.1,0,0,1,190,60ZM66,60A28.1,28.1,0,0,1,94,32h28V88H94A28.1,28.1,0,0,1,66,60Zm0,68a28.1,28.1,0,0,1,28-28h28v56H94A28.1,28.1,0,0,1,66,128Zm28,96a28,28,0,0,1,0-56h28v28A28.1,28.1,0,0,1,94,224Zm68-68a28,28,0,0,1,0-56h0a28,28,0,0,1,0,56Z"}"></path>` : `${weight === "thin" ? `<path d="${"M178.9,94A38,38,0,0,0,162,22H94A38,38,0,0,0,77.1,94a37.9,37.9,0,0,0,0,68A38,38,0,1,0,132,196V151.3A38,38,0,1,0,178.9,94ZM192,60a30,30,0,0,1-30,30H132V30h30A30.1,30.1,0,0,1,192,60ZM138.7,98a42.5,42.5,0,0,0-6.7,6.7V98ZM64,60A30.1,30.1,0,0,1,94,30h30V90H94A30,30,0,0,1,64,60ZM94,226a30,30,0,0,1,0-60h30v30A30.1,30.1,0,0,1,94,226Zm30-68H94a30,30,0,0,1,0-60h30Zm38,0a30,30,0,0,1,0-60h0a30,30,0,0,1,0,60Z"}"></path>` : `${weight === "regular" ? `<path d="${"M186.6,94A42,42,0,0,0,162,18H94A42,42,0,0,0,69.4,94a41.9,41.9,0,0,0,0,68A42,42,0,1,0,136,196V160.9A42,42,0,1,0,186.6,94ZM188,60a26.1,26.1,0,0,1-26,26H136V34h26A26.1,26.1,0,0,1,188,60ZM68,60A26.1,26.1,0,0,1,94,34h26V86H94A26.1,26.1,0,0,1,68,60Zm0,68a26.1,26.1,0,0,1,26-26h26v52H94A26.1,26.1,0,0,1,68,128Zm26,94a26,26,0,0,1,0-52h26v26A26.1,26.1,0,0,1,94,222Zm68-68a26,26,0,0,1,0-52h0a26,26,0,0,1,0,52Z"}"></path>` : `${(0, import_chunks.h)((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn-view.svelte-1dnfwj1{background-color:var(--primary);color:var(--black);margin-top:auto}.btn-view.svelte-1dnfwj1:hover{background-color:var(--primary-hover)}.project.svelte-1dnfwj1{max-width:78rem;display:flex;flex-direction:column;background-color:var(--black);color:var(--white);margin-bottom:2.5rem;box-shadow:var(--box-shadow)}.project.svelte-1dnfwj1:hover{box-shadow:var(--box-shadow-hover)}.project__thumbnail.svelte-1dnfwj1{width:100%;height:200px;object-fit:cover}.project__info.svelte-1dnfwj1{display:flex;flex-direction:column;padding:2rem}.project__name.svelte-1dnfwj1{font-weight:600}@media(min-width: 992px){.project__thumbnail.svelte-1dnfwj1{width:60%;height:422px}.project__info.svelte-1dnfwj1{width:40%}.project.svelte-1dnfwj1{flex-direction:row}}",
  map: null
};
const ProjectCard = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { projectName = "" } = $$props;
  let { projectImage = "http://fakeimg.pl/500x500" } = $$props;
  let { projectDesc = "desc" } = $$props;
  let { linkToDetail = "google.com" } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectImage === void 0 && $$bindings.projectImage && projectImage !== void 0)
    $$bindings.projectImage(projectImage);
  if ($$props.projectDesc === void 0 && $$bindings.projectDesc && projectDesc !== void 0)
    $$bindings.projectDesc(projectDesc);
  if ($$props.linkToDetail === void 0 && $$bindings.linkToDetail && linkToDetail !== void 0)
    $$bindings.linkToDetail(linkToDetail);
  $$result.css.add(css);
  return `<div class="${"project svelte-1dnfwj1"}"><img width="${"100%"}" height="${"auto"}" loading="${"lazy"}" decoding="${"async"}" class="${"project__thumbnail svelte-1dnfwj1"}"${(0, import_chunks.l)("src", projectImage, 0)} alt="${"project thumbnail"}">
	<div class="${"project__info svelte-1dnfwj1"}"><div class="${"project__name svelte-1dnfwj1"}">${(0, import_chunks.h)(projectName)}</div>
		<div class="${"project__description small-text"}">${(0, import_chunks.h)(projectDesc)}</div>
		<a class="${"btn btn-view svelte-1dnfwj1"}"${(0, import_chunks.l)("href", linkToDetail, 0)}>View</a></div>
</div>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

${(0, import_chunks.v)(import_SectionTitle.S, "SectionTitle").$$render($$result, { sectionTitle: "UI/UX" }, {}, {
    default: () => {
      return `${(0, import_chunks.v)(FigmaLogo, "FigmaLogo").$$render($$result, { size: "32px" }, {}, {})}`;
    }
  })}

<div class="${"projects"}">${(0, import_chunks.v)(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Reza",
      projectDesc: "This is Reza project"
    },
    {},
    {}
  )}
	${(0, import_chunks.v)(ProjectCard, "ProjectCard").$$render($$result, { projectName: "Project 2: WIP" }, {}, {})}</div>`;
});
