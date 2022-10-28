import { c as create_ssr_component, l as compute_rest_props, e as spread, f as escape_object, o as onDestroy, d as add_attribute, p as createEventDispatcher, b as subscribe, h as escape, v as validate_component, q as compute_slots } from "./index.js";
/* empty css                                     */import { w as writable } from "./index3.js";
const css$6 = {
  code: "div.svelte-ln98e9{cursor:zoom-in;position:static}.svelte-lightbox-thumbnail>*{height:auto;max-width:100%}",
  map: null
};
const LightboxThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$6);
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-lightbox-thumbnail svelte-ln98e9"
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
const css$5 = {
  code: "div.svelte-1vsb9pe{align-items:center;display:flex;height:3rem;justify-content:flex-end;width:auto}div.fullscreen.svelte-1vsb9pe{left:0;position:fixed;right:0;top:0;z-index:5}button.svelte-1vsb9pe{background:transparent;border:none;color:#fff;font-size:3rem}button.svelte-1vsb9pe:hover{color:#d3d3d3;cursor:pointer}button.svelte-1vsb9pe:active{background-color:transparent}button.fullscreen.svelte-1vsb9pe{filter:drop-shadow(0 0 5px black) drop-shadow(0 0 10px black)}",
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
  $$result.css.add(css$5);
  return `

<div${spread([escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-1vsb9pe"
  })}>${showCloseButton ? `<button${spread([escape_object(closeButtonProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-1vsb9pe"
  })}>\xD7
        </button>` : ``}
</div>`;
});
const css$4 = {
  code: "div.svelte-lightbox-body.svelte-1jnwh0n{height:auto;max-height:80vh;position:relative;width:auto}div.svelte-lightbox-body>*{height:auto;max-height:inherit;max-width:100%;-o-object-fit:contain;object-fit:contain;width:auto}div.svelte-lightbox-body.scroll>*{max-height:100%}div.svelte-lightbox-body.expand>*{flex-grow:1}div.fullscreen.svelte-1jnwh0n{align-items:center;display:flex;height:inherit;justify-content:center;max-height:100%;max-width:inherit;width:inherit}div.scroll.svelte-1jnwh0n{overflow:scroll}",
  map: null
};
const LightboxBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePreset } = $$props;
  let { enableImageExpand } = $$props;
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  $$result.css.add(css$4);
  return `<div class="${[
    "svelte-lightbox-body svelte-1jnwh0n",
    (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " " + (enableImageExpand ? "expand" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
const css$3 = {
  code: "div.svelte-or6hls{color:#fff;height:auto;position:absolute;text-align:left;width:100%}div.fullscreen.svelte-or6hls{bottom:0;left:0;padding-left:1rem;position:fixed;right:0;z-index:5}",
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
  $$result.css.add(css$3);
  localizedGalleryCounter = generateLocalizedGalleryCounter($i18n, gallery);
  $$unsubscribe_i18n();
  return `<div${spread([escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-or6hls"
  })}><h2><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
    <h5><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h5>
    ${gallery !== null ? `<p>${escape(localizedGalleryCounter)}</p>` : ``}
</div>`;
});
const css$2 = {
  code: 'div.svelte-k5ylur{align-items:center;background-color:rgba(43,39,45,.87);display:flex;height:100%;justify-content:center;overflow:hidden;position:fixed;width:100%;z-index:1000000!important}div.svelte-k5ylur,div.svelte-k5ylur:before{bottom:0;left:0;right:0;top:0}div.svelte-k5ylur:before{content:"";opacity:0;position:absolute;z-index:-1}div.svelte-k5ylur:after{clear:both;content:"";display:table}',
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { transitionDuration } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$2);
  return `<div class="${"svelte-k5ylur"}">${slots.default ? slots.default({}) : `
    `}
</div>`;
});
const css$1 = {
  code: "div.svelte-1d9tb00{background-color:transparent;height:auto;max-height:100%;max-width:100%;position:relative;width:auto}.fullscreen.svelte-1d9tb00{height:inherit;max-height:inherit;max-width:inherit;width:inherit}",
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
  $$result.css.add(css$1);
  return `<div${spread([escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " svelte-1d9tb00"
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
const css = {
  code: "figure.svelte-6m4fv9.svelte-6m4fv9{margin:0;position:relative}.caption.svelte-6m4fv9.svelte-6m4fv9{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background:rgba(0,0,0,.7);border-radius:5px;bottom:0;color:var(--neutral-100);font-weight:300;left:0;padding:4px 8px;position:absolute;scale:0;transition:.3s ease-in-out;width:-moz-fit-content;width:fit-content}figure.svelte-6m4fv9:hover .caption.svelte-6m4fv9{scale:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "insert alt here" } = $$props;
  let { width = 600 } = $$props;
  let { height = "600" } = $$props;
  let { hasCaption = true } = $$props;
  let { imagePreset = "fullscreen" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.hasCaption === void 0 && $$bindings.hasCaption && hasCaption !== void 0)
    $$bindings.hasCaption(hasCaption);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css);
  return `<figure class="${"svelte-6m4fv9"}">${validate_component(Lightbox, "Lightbox").$$render(
    $$result,
    {
      enableClickToClose: "true",
      imagePreset,
      enableImageExpand: "true",
      transitionDuration: "50"
    },
    {},
    {
      default: () => {
        return `<img class="${"shim"}"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("src", src, 0)} loading="${"lazy"}" decoding="${"async"}"${add_attribute("alt", alt, 0)}>
		${hasCaption ? `<figcaption class="${"caption xs-text svelte-6m4fv9"}">${escape(alt)}</figcaption>` : ``}`;
      }
    }
  )}
</figure>`;
});
export {
  Image as I
};
