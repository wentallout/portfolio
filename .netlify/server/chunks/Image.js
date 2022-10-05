import { c as create_ssr_component, k as compute_rest_props, d as spread, e as escape_object, o as onDestroy, b as add_attribute, l as createEventDispatcher, h as subscribe, g as escape, v as validate_component, r as compute_slots } from "./index.js";
/* empty css                                                */import { w as writable } from "./index2.js";
const css$5 = {
  code: "div.svelte-hpqpx9{position:static;cursor:zoom-in}.svelte-lightbox-thumbnail > *{max-width:100%;height:auto}",
  map: null
};
const LightboxThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$5);
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-lightbox-thumbnail svelte-hpqpx9"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const BodyChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let targetElement;
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", targetElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$4 = {
  code: "div.svelte-1wskd0y{width:auto;height:3rem;display:flex;justify-content:flex-end;align-items:center}div.fullscreen.svelte-1wskd0y{position:fixed;z-index:5;top:0;left:0;right:0}button.svelte-1wskd0y{background:transparent;font-size:3rem;border:none;color:white}button.svelte-1wskd0y:hover{color:lightgray;cursor:pointer}button.svelte-1wskd0y:active{background-color:transparent}button.fullscreen.svelte-1wskd0y{filter:drop-shadow(0 0 5px black) drop-shadow(0 0 10px black)}",
  map: null
};
const LightboxHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["closeButtonProps", "showCloseButton", "enableEscapeToClose", "imagePreset"]);
  createEventDispatcher();
  let { closeButtonProps = {} } = $$props;
  let { showCloseButton } = $$props;
  let { enableEscapeToClose } = $$props;
  let { imagePreset } = $$props;
  if ($$props.closeButtonProps === void 0 && $$bindings.closeButtonProps && closeButtonProps !== void 0)
    $$bindings.closeButtonProps(closeButtonProps);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$4);
  return `

<div${spread([escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-1wskd0y"
  })}>${showCloseButton ? `<button${spread([escape_object(closeButtonProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-1wskd0y"
  })}>\xD7
        </button>` : ``}
</div>`;
});
const css$3 = {
  code: "div.svelte-lightbox-body.svelte-1d3ym4l{position:relative;width:auto;height:auto;max-height:80vh}div.svelte-lightbox-body > *{max-width:100%;max-height:inherit;height:auto;width:auto;object-fit:contain}div.svelte-lightbox-body.scroll > *{max-height:100%}div.svelte-lightbox-body.expand > *{flex-grow:1}div.fullscreen.svelte-1d3ym4l{width:inherit;max-width:inherit;height:inherit;max-height:100%;display:flex;align-items:center;justify-content:center}div.scroll.svelte-1d3ym4l{overflow:scroll}",
  map: null
};
const LightboxBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePreset } = $$props;
  let { enableImageExpand } = $$props;
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  $$result.css.add(css$3);
  return `<div class="${[
    "svelte-lightbox-body svelte-1d3ym4l",
    (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " " + (enableImageExpand ? "expand" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
const css$2 = {
  code: "div.svelte-1mkm4v6{width:100%;height:auto;color:white;text-align:left;position:absolute}div.fullscreen.svelte-1mkm4v6{position:fixed;z-index:5;bottom:0;left:0;right:0;padding-left:1rem}",
  map: null
};
const LightboxFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let localizedGalleryCounter;
  let $$restProps = compute_rest_props($$props, ["imagePreset", "title", "description", "gallery"]);
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { imagePreset } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { gallery = null } = $$props;
  const generateLocalizedGalleryCounter = (i18n2, gallery2) => {
    if (gallery2 !== null) {
      return i18n2.generateLocalizedGalleryCounter(gallery2.activeImage, gallery2.imageCount);
    }
  };
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  $$result.css.add(css$2);
  localizedGalleryCounter = generateLocalizedGalleryCounter($i18n, gallery);
  $$unsubscribe_i18n();
  return `<div${spread([escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-1mkm4v6"
  })}><h2><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
    <h5><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h5>
    ${gallery !== null ? `<p>${escape(localizedGalleryCounter)}</p>` : ``}
</div>`;
});
const css$1 = {
  code: `div.svelte-o5rrpx{position:fixed;z-index:1000000!important;background-color:rgba(43, 39, 45, 0.87);top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center}div.svelte-o5rrpx::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;z-index:-1}div.svelte-o5rrpx::after{content:"";clear:both;display:table}`,
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transitionDuration } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$1);
  return `<div class="${"svelte-o5rrpx"}">${slots.default ? slots.default({}) : `
    `}
</div>`;
});
const css = {
  code: "div.svelte-1shiuhy{position:relative;max-width:100%;max-height:100%;height:auto;width:auto;background-color:transparent}.fullscreen.svelte-1shiuhy{height:inherit;width:inherit;max-height:inherit;max-width:inherit}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration", "imagePreset"]);
  let { transitionDuration } = $$props;
  let { imagePreset } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css);
  return `<div${spread([escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " svelte-1shiuhy"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { imagePreset = "" } = $$props;
  let { customization = {} } = $$props;
  let { transitionDuration = 300 } = $$props;
  let { keepBodyScroll = false } = $$props;
  let { enableImageExpand = false } = $$props;
  let { enableFallbackThumbnail = true } = $$props;
  let { enableEscapeToClose = true } = $$props;
  let { enableClickToClose = false } = $$props;
  let { showCloseButton = true } = $$props;
  let { isVisible = false } = $$props;
  const toggle = () => {
    isVisible = !isVisible;
  };
  const open = () => {
    isVisible = true;
  };
  const close = () => {
    isVisible = false;
  };
  const programmaticController = { toggle, open, close };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.customization === void 0 && $$bindings.customization && customization !== void 0)
    $$bindings.customization(customization);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.keepBodyScroll === void 0 && $$bindings.keepBodyScroll && keepBodyScroll !== void 0)
    $$bindings.keepBodyScroll(keepBodyScroll);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  if ($$props.enableFallbackThumbnail === void 0 && $$bindings.enableFallbackThumbnail && enableFallbackThumbnail !== void 0)
    $$bindings.enableFallbackThumbnail(enableFallbackThumbnail);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.enableClickToClose === void 0 && $$bindings.enableClickToClose && enableClickToClose !== void 0)
    $$bindings.enableClickToClose(enableClickToClose);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  if ($$props.programmaticController === void 0 && $$bindings.programmaticController && programmaticController !== void 0)
    $$bindings.programmaticController(programmaticController);
  return `${$$slots.thumbnail || enableFallbackThumbnail ? `${validate_component(LightboxThumbnail, "Thumbnail").$$render($$result, Object.assign((customization == null ? void 0 : customization.thumbnailProps) || {}), {}, {
    default: () => {
      return `${$$slots.thumbnail ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}` : ``}

${isVisible ? `${validate_component(BodyChild, "BodyChild").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalCover, "ModalCover").$$render($$result, { transitionDuration }, {}, {
        default: () => {
          return `${validate_component(Modal, "Modal").$$render($$result, Object.assign({ imagePreset }, { transitionDuration }, customization.lightboxProps || {}), {}, {
            default: () => {
              return `${validate_component(LightboxHeader, "Header").$$render(
                $$result,
                Object.assign(
                  { imagePreset },
                  { showCloseButton },
                  { enableEscapeToClose },
                  {
                    closeButtonProps: customization.closeButtonProps
                  },
                  customization.lightboxHeaderProps || {}
                ),
                {},
                {}
              )}

				${validate_component(LightboxBody, "Body").$$render($$result, { imagePreset, enableImageExpand }, {}, {
                default: () => {
                  return `${slots.default ? slots.default({}) : ``}`;
                }
              })}

				${validate_component(LightboxFooter, "Footer").$$render($$result, Object.assign({ imagePreset }, { title }, { description }, customization.lightboxFooterProps || {}), {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  let { width = 600 } = $$props;
  let { height = "auto" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `${validate_component(Lightbox, "Lightbox").$$render(
    $$result,
    {
      enableClickToClose: "true",
      title: alt,
      description: src,
      enableImageExpand: "true",
      transitionDuration: "50"
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("src", src, 0)} loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", alt, 0)}>`;
      }
    }
  )}`;
});
export {
  Image as I
};
