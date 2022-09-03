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
var import_figma_logo = require("../../../chunks/figma-logo.js");
var import_SectionTitle = require("../../../chunks/SectionTitle.js");
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn-view.svelte-1bqc6pg{background-color:var(--primary);color:var(--black);margin-top:auto}.btn-view.svelte-1bqc6pg:hover{background-color:var(--primary-hover)}.project.svelte-1bqc6pg{width:100%;max-width:80rem;display:flex;flex-direction:column;background-color:var(--black);--text:#f9f9f9;color:var(--text);margin-bottom:var(--space-l);box-shadow:var(--box-shadow)}.project.svelte-1bqc6pg:hover{box-shadow:var(--box-shadow-hover)}.project__thumbnail.svelte-1bqc6pg{width:100%;height:200px}.project__info.svelte-1bqc6pg{display:flex;flex-direction:column;padding:var(--space-m)}.project__name.svelte-1bqc6pg{font-weight:600}@media(min-width: 992px){.project__thumbnail.svelte-1bqc6pg{width:60%;height:422px}.project__info.svelte-1bqc6pg{width:40%}.project.svelte-1bqc6pg{flex-direction:row}}",
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
  return `<div class="${"project svelte-1bqc6pg"}"><img width="${"100%"}" height="${"auto"}" loading="${"lazy"}" decoding="${"async"}" class="${"project__thumbnail svelte-1bqc6pg"}"${(0, import_chunks.f)("src", projectImage, 0)} alt="${"project thumbnail"}">
	<div class="${"project__info svelte-1bqc6pg"}"><div class="${"project__name mid-text svelte-1bqc6pg"}">${(0, import_chunks.h)(projectName)}</div>
		<div class="${"project__description small-text"}">${(0, import_chunks.h)(projectDesc)}</div>
		<a class="${"btn btn-view svelte-1bqc6pg"}"${(0, import_chunks.f)("href", linkToDetail, 0)}>View</a></div>
</div>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

${(0, import_chunks.v)(import_SectionTitle.S, "SectionTitle").$$render($$result, { sectionTitle: "UI + UX" }, {}, {
    default: () => {
      return `${(0, import_chunks.v)(import_figma_logo.F, "FigmaLogo").$$render(
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
