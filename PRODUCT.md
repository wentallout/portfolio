# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary: business owners and non-technical founders evaluating Khoa as a freelance web designer/developer, deciding whether to book a call for a tailor-made website.
- Secondary: designers and developers reading the blog and browsing projects for craft, reference, and education.

## Product Purpose

Khoa Nguyen's portfolio site exists to turn visitors into booked calls for tailor-made website design and development work. It is simultaneously a personal brand site, a project showcase, and a writing platform.

Success = a prospective client lands, trusts the craft, and books a call via the cal.com link (cal.com/wentallout/web).

## Positioning

One person who does both design and development end to end: UI/UX through to production frontend, so nothing is lost in handoff. Sites are tailor-made (no templates), precise, and built for business results.

## Operating Context

- Freelance web design/development, based in Ho Chi Minh City, Vietnam.
- Site: wentallout.io.vn, hosted on Netlify, built with SvelteKit.
- Booking funnel routes to cal.com/wentallout/web ("Book a call" CTAs on home hero, services, and elsewhere).
- Contact via a working form and email wentallout@gmail.com.
- Projects: NVAULT (NFT marketplace), Super Tab Manager (Chrome extension), Stock Grabber, Reza (restaurant reservation app), Developer Portfolio. Roles vary between Designer+Developer and UI/UX Designer.
- Blog: ~80+ markdown posts on UI/UX, frontend, careers, and process, with categories, search, TOC, and Giscus comments.

## Capabilities and Constraints

- SvelteKit + Svelte 5, prerendered, deployed on Netlify.
- Dark/light mode, haptics, page transitions, glyph navigation, web-sentinel bot protection, Arcjet rate limiting.
- Blog is markdown files (mdsvex); no CMS or backend.
- Images auto-converted to webp and lazy-loaded.
- Site is in English (siteLanguage en-US).
- Contact form requires Netlify setup to work in production.

## Brand Commitments

- Name: Khoa Nguyen (Nguyen Dang Khoa). Handle: wentallout. Domain: wentallout.io.vn. Email: wentallout@gmail.com. Socials under wentallout across platforms.
- Tagline and site title: "Tailor-made websites with precision" / "Tailor-made websites for your business".
- Theme/primary color: #ffbb00 yellow. Background base: #121212 dark.
- Minimal, clean, editorial-minimal aesthetic with dark/light mode — binding.

## Evidence on Hand

- Real projects with roles and feature descriptions in src/routes/projects/*.svx.
- Real blog content across src/routes/blogs/*.svx.
- Real personal facts (age computed, location, mission) in src/routes/about.
- FAQ answers and JSON-LD in src/lib/constants/faq.ts.
- Testimonials are absent; future work must not fabricate them.

## Product Principles

- Craft is the proof: the site itself must demonstrate the "tailor-made with precision" claim.
- Design and build are one service; the site should communicate a single accountable maker.
- Every visitor should reach a clear next action: book a call.
- The blog earns trust and reach; projects earn credibility.
- Fast, accessible, lightweight by default — no bloated dependencies.
