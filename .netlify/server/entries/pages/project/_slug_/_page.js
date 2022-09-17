const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../coinecho.svx": () => import("../../../../chunks/coinecho.js"), "../reza.svx": () => import("../../../../chunks/reza.js") }), `../${params.slug}.svx`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
export {
  load
};
