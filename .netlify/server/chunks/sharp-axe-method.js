import { c as create_ssr_component, v as validate_component, d as add_attribute } from "./index.js";
import { G as General_observer } from "./general-observer.js";
const getPadding = (aspectRatio) => {
  const config = {
    "1:1": `padding-top: 100%;`,
    "16:9": `padding-top: 56.25%;`,
    "4:3": `padding-top: 75%;`,
    "3:2": `padding-top: 66.66%;`,
    8.5: `padding-top: 62.5%;`
  };
  return config[aspectRatio];
};
const You_tube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "560" } = $$props;
  let { height = "315" } = $$props;
  let { youTubeId = "" } = $$props;
  let { listId = "" } = $$props;
  let { autoPlay = false } = $$props;
  let { aspectRatio = "16:9" } = $$props;
  let { skipTo = { h: 0, m: 0, s: 0 } } = $$props;
  const { h, m, s } = skipTo;
  const tH = h * 60 * 60;
  const tM = m * 60;
  const startTime = tH + tM + s;
  const baseUrl = `https://www.youtube-nocookie.com/embed/`;
  const src = `${baseUrl}${youTubeId.length > 0 ? `${youTubeId}?&autoplay=${autoPlay}&start=${startTime}` : `&videoseries?list=${listId}`}`;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.youTubeId === void 0 && $$bindings.youTubeId && youTubeId !== void 0)
    $$bindings.youTubeId(youTubeId);
  if ($$props.listId === void 0 && $$bindings.listId && listId !== void 0)
    $$bindings.listId(listId);
  if ($$props.autoPlay === void 0 && $$bindings.autoPlay && autoPlay !== void 0)
    $$bindings.autoPlay(autoPlay);
  if ($$props.aspectRatio === void 0 && $$bindings.aspectRatio && aspectRatio !== void 0)
    $$bindings.aspectRatio(aspectRatio);
  if ($$props.skipTo === void 0 && $$bindings.skipTo && skipTo !== void 0)
    $$bindings.skipTo(skipTo);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { height, width }, {}, {
    default: () => {
      return `<div${add_attribute(
        "style",
        `
    position: relative;
    width: 100%;
    ${getPadding(aspectRatio)}
  `,
        0
      )}><iframe${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} class="${"youtube-sveltekit-embed"}"${add_attribute("title", `youTube-${youTubeId}`, 0)}${add_attribute("src", src, 0)} frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen${add_attribute(
        "style",
        `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `,
        0
      )}></iframe></div>`;
    }
  })}`;
});
const metadata = {
  "title": "Sharp Axe Method",
  "date": "2022-10-14T00:00:00.000Z",
  "categories": ["tips"]
};
const Sharp_axe_method = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#what-is-the-sharp-axe-method"}">What is the Sharp Axe Method?</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#step-1-clean-your-environment"}">Step 1: Clean your environment</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#step-2-brain-dump"}">Step 2: Brain dump</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#step-3-categorize-the-todo-list"}">Step 3: Categorize the todo list</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#step-4-schedule"}">Step 4: Schedule</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#step-5-communicate"}">Step 5: Communicate</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#step-6-just-do-it"}">Step 6: JUST DO IT</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#video"}">Video</a></li></ol></nav>



<h2 id="${"what-is-the-sharp-axe-method"}">What is the Sharp Axe Method?</h2>
<p>Doing the right work upfront -&gt; preparing correctly -&gt; so you can save time in the long run.</p>
<p>Having the correct mindset -&gt; reduce the chance of getting OVERWHELMED.</p>
<h2 id="${"step-1-clean-your-environment"}">Step 1: Clean your environment</h2>
<p>Take control of your life first, make sure everything is in order.</p>
<p>Physical environment: Clean your desk, do some box breathing</p>
<p>Digital environment: Clear up your desktop, exit every programs, tabs on your computer, delete social media apps on your phone.</p>
<h2 id="${"step-2-brain-dump"}">Step 2: Brain dump</h2>
<p>Put your thoughts into the page, make a list of everthing you need to do, no order required. Something like:</p>
<ul><li>Take out the trash</li>
<li>Fix the logo</li>
<li>Change the color</li>
<li>Remove unused components</li></ul>
<h2 id="${"step-3-categorize-the-todo-list"}">Step 3: Categorize the todo list</h2>
<p>Use Eisenhower matrix:</p>
<ul><li>Do the task (very important, very urgent)</li>
<li>Delete (not important, not urgent)</li>
<li>Schedule (very important, not urgent)</li>
<li>Delegate (very urgent, not important)</li></ul>
<p>Think about: what one thing, if done, would make everything else on this list easier.</p>
<p>Or lookalike group: if a bunch of things that have the same vibe or can all be done on computer, group them.</p>
<h2 id="${"step-4-schedule"}">Step 4: Schedule</h2>
<p>Start sticking your tasks on a calendar.</p>
<p>Rule 1: Don\u2019t schedule anything that will take less than two minutes; simply do it.</p>
<p>Rule 2: Plan visually.</p>
<p>Rule 3: List the non-movable calendar dates first. (Deadlines, Holidays, Birthdays)</p>
<p>Rule 4: Double the time you estimate. If you estimate a work would take four hours, you should allocate eight.</p>
<p>Rule 5: List your tasks on your calendar in order of importance.</p>
<p>Rule 6: Be extremely specific when describing what needs to be done.</p>
<p>Rule 7: If something seems impossible, consider how it might appear if it were simple. Plan accordingly then.</p>
<p>Rule 8: Plan for average me, not me at my best.</p>
<p>Rule 9: Concentrate on finishing one activity at a time.</p>
<p>Rule 10: Good plan = Flexible plan. Be prepared to change everything.</p>
<h2 id="${"step-5-communicate"}">Step 5: Communicate</h2>
<p>Before you start any work, you should try communicate to stakeholders. If you\u2019re late on something, give your stakeholder a specific date.</p>
<h2 id="${"step-6-just-do-it"}">Step 6: JUST DO IT</h2>
<p>The only way to chop a tree\u2026 is to start chopping.</p>
<h2 id="${"video"}">Video</h2>
${validate_component(You_tube, "YouTube").$$render(
    $$result,
    {
      width: "300",
      height: "300",
      youTubeId: "prMuDIiFyC4"
    },
    {},
    {}
  )}`;
});
export {
  Sharp_axe_method as default,
  metadata
};
