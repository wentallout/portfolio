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
const Figma_logo = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_chunks.b)(
    [
      { preserveAspectRatio: "xMidYMid meet" },
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      (0, import_chunks.e)($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M186.6 94A42 42 0 0 0 162 18H94a42 42 0 0 0-24.6 76a41.9 41.9 0 0 0 0 68a42 42 0 1 0 66.6 34v-35.1A42 42 0 1 0 186.6 94Zm1.4-34a26.1 26.1 0 0 1-26 26h-26V34h26a26.1 26.1 0 0 1 26 26ZM68 60a26.1 26.1 0 0 1 26-26h26v52H94a26.1 26.1 0 0 1-26-26Zm0 68a26.1 26.1 0 0 1 26-26h26v52H94a26.1 26.1 0 0 1-26-26Zm26 94a26 26 0 0 1 0-52h26v26a26.1 26.1 0 0 1-26 26Zm68-68a26 26 0 0 1 0-52a26 26 0 0 1 0 52Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn-view.svelte-a9xz7p{background-color:var(--primary);color:var(--black);margin-top:auto}.btn-view.svelte-a9xz7p:hover{background-color:var(--primary-hover)}.project.svelte-a9xz7p{max-width:78rem;display:flex;flex-direction:column;background-color:var(--black);--text:#f9f9f9;color:var(--text);margin-bottom:2.5rem;box-shadow:var(--box-shadow)}.project.svelte-a9xz7p:hover{box-shadow:var(--box-shadow-hover)}.project__thumbnail.svelte-a9xz7p{width:100%;height:200px;object-fit:cover}.project__info.svelte-a9xz7p{display:flex;flex-direction:column;padding:2rem}.project__name.svelte-a9xz7p{font-weight:600}@media(min-width: 992px){.project__thumbnail.svelte-a9xz7p{width:60%;height:422px}.project__info.svelte-a9xz7p{width:40%}.project.svelte-a9xz7p{flex-direction:row}}",
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
  return `<div class="${"project svelte-a9xz7p"}"><img width="${"100%"}" height="${"auto"}" loading="${"lazy"}" decoding="${"async"}" class="${"project__thumbnail svelte-a9xz7p"}"${(0, import_chunks.f)("src", projectImage, 0)} alt="${"project thumbnail"}">
	<div class="${"project__info svelte-a9xz7p"}"><div class="${"project__name svelte-a9xz7p"}">${(0, import_chunks.h)(projectName)}</div>
		<div class="${"project__description small-text"}">${(0, import_chunks.h)(projectDesc)}</div>
		<a class="${"btn btn-view svelte-a9xz7p"}"${(0, import_chunks.f)("href", linkToDetail, 0)}>View</a></div>
</div>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Project</title>`, ""}`, ""}

${(0, import_chunks.v)(import_SectionTitle.S, "SectionTitle").$$render($$result, { sectionTitle: "UI/UX" }, {}, {
    default: () => {
      return `${(0, import_chunks.v)(Figma_logo, "FigmaLogo").$$render($$result, {}, {}, {})}`;
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
