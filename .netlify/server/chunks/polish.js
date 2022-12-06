import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
const polishRhythm = "/_app/immutable/assets/polishRhythm-22fe888a.webp";
const metadata = {
  "title": "When Should You Polish Your UI?",
  "date": "2022-11-03",
  "categories": ["tips"]
};
const Polish = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#polish-the-right-thing"}">polish the right thing</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#dont-polish-too-early"}">don\u2019t polish too early</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#dont-polish-too-late"}">don\u2019t polish too late</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#just-right"}">just right</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#constant-polish"}">constant polish</a></li></ol></nav>



<h2 id="${"polish-the-right-thing"}">polish the right thing</h2>
<p>You need user feedback to really know where to spend most of your polish efforts. My artist father dropped this bomb of wisdom that\u2019s stuck with me all these years:</p>
<blockquote><p>Don\u2019t bother making changes that are just different but not better.</p></blockquote>
<p>It\u2019s completely normal for people to get hung up on tiny things. Way more users thanked me for this little bit of polish than had complained before!</p>
<p>When you nail this - polishing the right things - it feels SO good and builds trust.</p>
<h2 id="${"dont-polish-too-early"}">don\u2019t polish too early</h2>
<p>Icon designer Kyle Adams applies this mindset of build it first, paint it later to choosing colors, noticing a big spike in his creativity and speed. Deliberately delaying polish helps you prototype and build your UI a lot faster and helps prevent wasted effort.</p>
<h2 id="${"dont-polish-too-late"}">don\u2019t polish too late</h2>
<p>That said, if you wait too long and polish too late in the game you\u2019ll mess up your chance at making a great impression. Delaying all polish until after you get your product out the door hurts your users\u2019 trust in your ability to create great things for them. Don\u2019t ship ugly and broken products, ever. You can shout \u201Cbut\u2026 Agile!\u201D to the backs of all your departing users all you want. Even if some of them stick around, the damage will be done - they\u2019ll always remember your first steaming pile of an attempt! New products and new features always need some level of polish before they ship.</p>
<h2 id="${"just-right"}">just right</h2>
<p>When building a UI start with the broad strokes: define the user\u2019s problem you\u2019re wanting to solve. Prototype a bunch of possible solutions quickly and freely. Don\u2019t get distracted by details, edge cases, colors, integrations. Once you decide on the best solution - hopefully with input from talking to actual users - then polish it up and ship it. But don\u2019t move on to other tasks just yet! Get feedback from your users that same day. Quickly find the patterns in the feedback. You now have a unique opportunity to show your users how much they mean to you. Polish what you just shipped ASAP. Destroy the pains &amp; frictions that surfaced from users trying out what you just created. Double down on the things that they loved. Don\u2019t put it on the backlog for a few months. This is the best time to do it: it\u2019s fresh on everyone\u2019s mind. Do it now and cut a new polish release within a day or two. Your users\u2019 minds will be blown that you\u2019re not only listening to what matters to them, but are also apparently able to execute at lightning speed.</p>
<p>Applying polish at the right times makes it easy for users to care about what you\u2019re working on next.</p>
<p>Work quickly by delaying polish while you prototype &amp; build. Inspire trust and excitement by polishing just before and especially right after you ship.</p>
<h2 id="${"constant-polish"}">constant polish</h2>
${validate_component(Image, "Image").$$render($$result, { src: polishRhythm, alt: "polishRhythm" }, {}, {})}
<p>One last note on polish: it isn\u2019t a one-time deal. I worked at a place once that did a company-wide polish effort for several weeks. It was definitely an interesting experiment, and a lot of features were improved. But after that event things went back to normal, and polish simply wasn\u2019t a priority. Just a few months later and it was as if that experiment had never happened.</p>
<p>Polish needs to be a regular part of the team\u2019s rhythm. Imagine if every cycle/iteration/sprint/whatever looked like this:</p>
<ul><li>Choose which problem to tackle</li>
<li>Prototype a bit and chat with users until the best solution is discovered</li>
<li>Build it quickly</li>
<li>Polish it up</li>
<li>Ship it</li>
<li>Get user feedback and polish the crap out of it</li>
<li>Constant polish on the right things - only at the right times - is key for quickly building fantastic software that your people will love.</li></ul>`;
});
export {
  Polish as default,
  metadata
};
