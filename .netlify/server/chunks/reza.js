import { c as create_ssr_component, v as validate_component } from "./index.js";
import { S as SwiperContainer, a as Swiper_slide } from "./SwiperContainer.js";
import "ssr-window";
import { I as Image } from "./Image.js";
const thumbnail = "/_app/immutable/assets/thumbnail-4f6fd77f.webp";
const discord = "/_app/immutable/assets/discord-a1f0d857.webp";
const feature = "/_app/immutable/assets/feature-fa2cb245.webp";
const role = "/_app/immutable/assets/role-3510ed48.webp";
const plan = "/_app/immutable/assets/plan-52c2f93a.webp";
const goal = "/_app/immutable/assets/goal-5a37ac2e.webp";
const userResearch = "/_app/immutable/assets/userResearch-a3eddbd1.webp";
const persona = "/_app/immutable/assets/persona-58ea049b.webp";
const hmw1 = "/_app/immutable/assets/hmw1-2c866d80.webp";
const redesign1 = "/_app/immutable/assets/redesign1-8244fb6d.webp";
const redesign2 = "/_app/immutable/assets/redesign2-a3090ce4.webp";
const lofi = "/_app/immutable/assets/lofi-75e161ee.webp";
const c1 = "/_app/immutable/assets/c1-bd155f4b.webp";
const c2 = "/_app/immutable/assets/c2-96f5f70d.webp";
const l1 = "/_app/immutable/assets/l1-ec72d0e0.webp";
const l2 = "/_app/immutable/assets/l2-5ca38d93.webp";
const ds1 = "/_app/immutable/assets/ds1-b700b549.webp";
const ds2 = "/_app/immutable/assets/ds2-475ca52b.webp";
const ds3 = "/_app/immutable/assets/ds3-6dcc19e8.webp";
const rezaIcon = "/_app/immutable/assets/rezaIcon-5018a067.webp";
const reservationFlow = "/_app/immutable/assets/reservationFlow-3346768f.webp";
const searchFlow = "/_app/immutable/assets/searchFlow-5078de97.webp";
const homeScreen = "/_app/immutable/assets/homeScreen-76609b90.webp";
const searchScreen = "/_app/immutable/assets/searchScreen-fd98dd81.webp";
const reservationScreen = "/_app/immutable/assets/reservationScreen-b792b0af.webp";
const detailScreen = "/_app/immutable/assets/detailScreen-2425e03d.webp";
const notiScreen = "/_app/immutable/assets/notiScreen-558492e0.webp";
const metadata = {
  "title": "Reza - Table Reservation Mobile App",
  "date": "2022-09-14"
};
const Reza = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#overview"}">overview</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#inspiration"}">Inspiration</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#problem-statement"}">problem statement</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#audience"}">audience</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#responsibilities"}">responsibilities</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#constraints"}">constraints</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#process"}">process</a><ol class="${"toc-level toc-level-2"}"><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#phase-1---empathize"}">phase 1 - empathize</a><ol class="${"toc-level toc-level-3"}"><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#online-survey"}">online survey</a></li></ol></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#phase-2---define"}">phase 2 - define</a><ol class="${"toc-level toc-level-3"}"><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#user-persona"}">user persona</a></li></ol></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#phase-3---ideate"}">phase 3 - ideate</a><ol class="${"toc-level toc-level-3"}"><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#user-flow"}">user flow</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#low-fidelity-wireframe"}">low fidelity wireframe</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#branding"}">branding</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#design-system"}">design system</a></li></ol></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#phase-4---prototype"}">phase 4 - prototype</a><ol class="${"toc-level toc-level-3"}"><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#home"}">home</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#search"}">search</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#detail"}">detail</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#reservation"}">reservation</a></li><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#notification"}">notification</a></li></ol></li><li class="${"toc-item toc-item-h3"}"><a class="${"toc-link toc-link-h3"}" href="${"#phase-5---test"}">phase 5 - Test</a><ol class="${"toc-level toc-level-3"}"><li class="${"toc-item toc-item-h4"}"><a class="${"toc-link toc-link-h4"}" href="${"#detail-page-redesign"}">detail page redesign</a></li></ol></li></ol></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#conclusion"}">conclusion</a></li></ol></nav>

${$$result.head += `<!-- HEAD_svelte-s3lcrg_START --><style>:root{--brand-color:#e4543b}.markdown h2,.markdown h3{color:var(--brand-color)!important}.markdown h2:before,.markdown h3:before{background-color:var(--brand-color)}</style><!-- HEAD_svelte-s3lcrg_END -->`, ""}


<h2 id="${"overview"}">overview</h2>
${validate_component(Image, "Image").$$render($$result, { src: thumbnail, alt: "reza thumbnail" }, {}, {})}
<table><thead><tr><th></th>
<th></th></tr></thead>
<tbody><tr><td>Name</td>
<td>Reza</td></tr>
<tr><td>Platform</td>
<td>Mobile (iOS)</td></tr>
<tr><td>Duration</td>
<td>2 weeks</td></tr>
<tr><td>Team</td>
<td>3 members</td></tr>
<tr><td>Role</td>
<td>UI/UX Designer, Leader</td></tr>
<tr><td>Software</td>
<td>Figma</td></tr></tbody></table>
<h2 id="${"inspiration"}">Inspiration</h2>
<p>Imagine you need to organize a party for your group of friends. You are not a cuisine expert and you don\u2019t know all the cool places in the city. So you opened Google and search for the nearest restaurants. But, you realized you don\u2019t know much about its foods, price or how to contact them to get a table.</p>
<p>You need a mobile app that can:</p>
<ul><li>Recommend the most trendy restaurants</li>
<li>Show you its menu, price and past reviews,</li>
<li>Let you reserve a table when it\u2019s available and then remind you when it\u2019s time and guide you there.</li></ul>
<h2 id="${"problem-statement"}">problem statement</h2>
<p>Customers are frustrated when they see a long queue or full table at their favorite restaurants. Restaurants can get crowded when there is a big promo and clients may leave to find a different place to eat =&gt; business lose money. We need an app that can reduce this frustration by making it easier for people to find interesting new restaurants that are available.</p>
<p>Our perspective: table reservation apps are not as popular as food ordering apps in Vietnam. People still rely on the old ways of booking a table by phone and miss out on discounts.</p>
<p>We look at one of our competitor apps <a href="${"https://pasgo.vn"}" rel="${"nofollow"}">PasGo</a> and relized some important features are missing:</p>
<ul><li>Cancel your order</li>
<li>Find directions</li>
<li>Give you notifications when it\u2019s almost time to eat or nearby deals.</li></ul>
<p>=&gt; We brainstorm some ideas and design an app with more features and better UX considerations.</p>
${validate_component(Image, "Image").$$render($$result, { src: goal, alt: "project goal" }, {}, {})}
<h2 id="${"audience"}">audience</h2>
<p>I need to visualize the kind of user that will use this product. The persona has to represent the largest amount of users so a person with a paying job will be appropriate. She\u2019s busy but like to hangout with friends in a nice place sometimes.</p>
${validate_component(Image, "Image").$$render($$result, { src: userResearch, alt: "user research" }, {}, {})}
<h2 id="${"responsibilities"}">responsibilities</h2>
<p>I volunteered to be the team leader because I had more free time than my peers and I\u2019m quite confident in my time management skill.</p>
${validate_component(Image, "Image").$$render($$result, { src: role, alt: "role" }, {}, {})}
<p>At every step in our process, I gave each member a task and a deadline. I don\u2019t expect them to finish on time since they still have school/work but it\u2019s still important to estimate so that <strong>I can cut the potential risk in the future</strong>.</p>
${validate_component(Image, "Image").$$render($$result, { src: plan, alt: "plan" }, {}, {})}
<h2 id="${"constraints"}">constraints</h2>
<p>We were given <strong>2 weeks</strong> to finish our project so I decided that we should use our limited time wisely. So I tell my team to remove unnecessary ideas and focus only on the <strong>3 most important features: Searching, Detail and Booking</strong>.</p>
<p>I set up a meeting time for my team at 7:00 PM every Monday, Wednesday, and Friday.</p>
<p>We use Discord for our daily meetings and share our progress and feedback through screen share.</p>
${validate_component(Image, "Image").$$render($$result, { src: discord, alt: "discord screen" }, {}, {})}
<h2 id="${"process"}">process</h2>
<p>The <strong>Design Thinking</strong> method is a practical way to solve complex problems by finding information about the human needs.</p>
<p>There are 5 phases to go through: <strong>Empathize, Define, Ideate, Prototype, Test</strong>.</p>
<h3 id="${"phase-1---empathize"}">phase 1 - empathize</h3>
<p>In the first phase, I need to understand what my potential users want to identify issues. The goal is that I can answer the challenges they face.</p>
<p>There are 3 possible ways to gather data:</p>
<ul><li>Google Form online surveys.</li>
<li>Interview (Work in progress).</li>
<li>Competitive Analysis (Work in progress).</li></ul>
<h4 id="${"online-survey"}">online survey</h4>
<p>Using online surveys I can gather real data from students to employees. I want to know if people actually need to make reservations at a restaurant or if they have some disadvantages.</p>
<p>=&gt; <strong>Conclusion 1</strong>: some people have created a restaurant table reservation by contacting the restaurant through their social media but that leads to a long response time from the restaurant.</p>
<p>=&gt; <strong>Conclusion 2</strong>: people went to the restaurant\u2019s location without making a reservation and were annoyed that the queue was long or there was no table left.</p>
<p>=&gt; <strong>Conclusion 3</strong>: People don\u2019t actually understand what it\u2019s like to reserve a restaurant table because they have never done it before.</p>
<h3 id="${"phase-2---define"}">phase 2 - define</h3>
<p>In the second phase, I need to determine our target users based on the data I\u2019ve researched and identify the pattern of problems I found from the previous phase.</p>
<h4 id="${"user-persona"}">user persona</h4>
<p>Forming multiple user personas is important but for the scale of our project we stick to making one.</p>
${validate_component(Image, "Image").$$render($$result, { src: persona, alt: "persona" }, {}, {})}
<p>To end Phase 2 we used the <strong>How Might We (HMW)</strong> question method. This is the first one we came up with:</p>
${validate_component(Image, "Image").$$render($$result, { src: hmw1, alt: "how might we" }, {}, {})}
<p>I made a simplified one later:</p>
<ul><li>Help users check if the restaurant is full.</li>
<li>Help making a table reservation easily.</li>
<li>Help users track their reservation.</li>
<li>Help users find important info: recommended dishes and price (menu), parking lot, address, reviews</li></ul>
<h3 id="${"phase-3---ideate"}">phase 3 - ideate</h3>
<p>From what we have brainstormed, we prioritized certain features based on impact/effort.</p>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: feature,
      alt: "project main features"
    },
    {},
    {}
  )}
<h4 id="${"user-flow"}">user flow</h4>
<p>Reservation Flow:</p>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: reservationFlow,
      alt: "reservation flow"
    },
    {},
    {}
  )}
<p>Search Flow:</p>
${validate_component(Image, "Image").$$render($$result, { src: searchFlow, alt: "searchFlow" }, {}, {})}
<h4 id="${"low-fidelity-wireframe"}">low fidelity wireframe</h4>
<p>We quickly made some simple lofi screens for the main features we agreed on. It\u2019s highly possible that we will make wrong logical decisions in this phase so we need to get feedbacks and tweak the wireframe before phase 4.</p>
${validate_component(Image, "Image").$$render($$result, { src: lofi, alt: "low fidelity wireframe" }, {}, {})}
<h4 id="${"branding"}">branding</h4>
<p>I got the name from the pronunciation of \u201Creservation\u201D which looks like this: <strong>/\u02CCrez\u0259r\u02C8v\u0101SH(\u0259)n/</strong> . I think short, 2 syllables words are the best names for your brand.</p>
<p>I chose red as the brand color because it makes people hungry and it has this <strong>organic, tomato vibe</strong> to it. I want our brand to be <strong>friendly and comfortable</strong>, something that make you feel relaxed after a long day at work.</p>
<p>I used Canva and quickly made a SVG logo for my concept mobile app. There are multiple sizes for different devices for easy exports.</p>
${validate_component(Image, "Image").$$render($$result, { src: rezaIcon, alt: "branding" }, {}, {})}
<h4 id="${"design-system"}">design system</h4>
<p>I wanted my team to create a simple design system before moving to phase 4. This will help my team achieve the minimum consistency that is required in a typical project.</p>
${validate_component(SwiperContainer, "SwiperContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: ds1, alt: "design system" }, {}, {})}`;
        }
      })}
    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: ds2, alt: "design system" }, {}, {})}`;
        }
      })}
    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: ds3, alt: "design system" }, {}, {})}`;
        }
      })}`;
    }
  })}
<h3 id="${"phase-4---prototype"}">phase 4 - prototype</h3>
<p>Phase 4 is all about creating an interactive design that will be tested by potential users in phase 5.</p>
<p><a href="${"https://www.figma.com/proto/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?page-id=2%3A9&node-id=275%3A5365&viewport=549%2C-598%2C0.24&scaling=scale-down&starting-point-node-id=275%3A5365"}" rel="${"nofollow"}">Link to prototype</a></p>
<h4 id="${"home"}">home</h4>
<p>This is the screen user sees when they first open the app. I try not to overwhelm users with too much information.</p>
${validate_component(Image, "Image").$$render($$result, { src: homeScreen, alt: "home screen UI" }, {}, {})}
<h4 id="${"search"}">search</h4>
<p>This screen lets users search for a restaurant using keywords like the restaurant\u2019s name or the cuisine. The search result will be displayed in a list. You can then filter, sort your result by distance, price, rating.</p>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: searchScreen,
      alt: "search screen UI"
    },
    {},
    {}
  )}
<h4 id="${"detail"}">detail</h4>
<p>This screen shows up when user click on a restaurant from their home page or search result page.</p>
${validate_component(Image, "Image").$$render($$result, { src: detailScreen, alt: "detail screen" }, {}, {})}
<h4 id="${"reservation"}">reservation</h4>
<p>This screen allows users to see their booked reservations and cancel them if they want to.</p>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: reservationScreen,
      alt: "reservation screen UI"
    },
    {},
    {}
  )}
<h4 id="${"notification"}">notification</h4>
<p>Alarm users when it\u2019s time to go to the restaurant. Also it gives them good deals or discount nearby.</p>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: notiScreen,
      alt: "notification screen UI"
    },
    {},
    {}
  )}
<h3 id="${"phase-5---test"}">phase 5 - Test</h3>
<p>It\u2019s widely known that early, repeated testing and redesign will save time and money. We can\u2019t just work on something for months then release it without knowing how people wil react to it.</p>
<p>Getting feedback from real users in the testing phase will give me a chance to redesign and maximize the performance of some flows.</p>
<h4 id="${"detail-page-redesign"}">detail page redesign</h4>
<p>I got some feedback from my instructors and found this one element that needs to be fixed to the top because the page could be long and we can\u2019t force users to scroll all the way back to the top.</p>
${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: redesign1,
      alt: "the screen that needs redesign"
    },
    {},
    {}
  )}
<p>=&gt; <strong>My redesign:</strong></p>
${validate_component(Image, "Image").$$render($$result, { src: redesign2, alt: "the solution" }, {}, {})}
<p>There is also a Remote Usability Testing service that helps with this testing phase: <a href="${"https://maze.co/"}" rel="${"nofollow"}">Maze</a>.</p>
<h2 id="${"conclusion"}">conclusion</h2>
<p>From this case study, I\u2019ve learned a lot about the process of solving problems.</p>
<p>Team collaboration is very important in a project because when you work alone it\u2019s easy to get tunnel visioned (limited point of view). It\u2019s important to receive feedback from everyone in the team in order to keep improving my designs.</p>
${validate_component(SwiperContainer, "SwiperContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: c1, alt: "conclusion" }, {}, {})}`;
        }
      })}
    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: c2, alt: "conclusion" }, {}, {})}`;
        }
      })}
    ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: l1, alt: "conclusion" }, {}, {})}`;
        }
      })}
     ${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Image, "Image").$$render($$result, { src: l2, alt: "conclusion" }, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
export {
  Reza as default,
  metadata
};
