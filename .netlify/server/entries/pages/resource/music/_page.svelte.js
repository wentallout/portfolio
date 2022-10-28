import { c as create_ssr_component, e as spread, f as escape_object, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { S as SectionTitle } from "../../../../chunks/SectionTitle.js";
import { G as General_observer } from "../../../../chunks/general-observer.js";
const Music_notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 256 256" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M212.9 25.7a8 8 0 0 0-6.8-1.5l-128 32A8 8 0 0 0 72 64v110.1a35.3 35.3 0 0 0-20-6.1a36 36 0 1 0 36 36v-85.8l112-28v51.9a35.3 35.3 0 0 0-20-6.1a36 36 0 1 0 36 36V32a7.8 7.8 0 0 0-3.1-6.3ZM52 224a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Zm36-122.2V70.2l112-28v31.6Zm92 90.2a20 20 0 1 1 20-20a20.1 20.1 0 0 1-20 20Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Spotify = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { spotifyLink = "" } = $$props;
  let { width = "320" } = $$props;
  let { height = "380" } = $$props;
  if ($$props.spotifyLink === void 0 && $$bindings.spotifyLink && spotifyLink !== void 0)
    $$bindings.spotifyLink(spotifyLink);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { height, width }, {}, {
    default: () => {
      return `<iframe data-testid="${"spotify"}"${add_attribute("title", `spotify-${spotifyLink}`, 0)} class="${"spotify-sveltekit-embed"}"${add_attribute("src", `https://open.spotify.com/embed/${spotifyLink}`, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} frameborder="${"0"}" allow="${"encrypted-media"}"></iframe>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, { sectionTitle: "Music" }, {}, {
    default: ({ sectionIcon }) => {
      return `${validate_component(Music_notes, "MusicNotes").$$render($$result, Object.assign(sectionIcon), {}, {})}`;
    }
  })}

${validate_component(Spotify, "Spotify").$$render(
    $$result,
    {
      spotifyLink: "playlist/37i9dQZF1DWWY64wDtewQt?si=67ed3300e96e43ec",
      width: "100%",
      height: "500px"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
