# Handoff — Scouts 258 & 358 Redesign

## Overview

This package is a design handoff for a visual refresh of the Scouts 258 & 358 troop website (`troops258and358.org`). The new direction is a **"Field Journal" Hill Country Texas** aesthetic — dark oak-green page background with topographic line motifs, geometric sans typography (Outfit + DM Sans + JetBrains Mono accents), warm limestone/cream cards, and clay-orange accent details. It's editorial, outdoorsy, modern, and rooted in the Texas Hill Country setting.

The goal of this handoff is to apply this look-and-feel to the **existing Jekyll site** without changing site structure, URLs, or pages. The site owner will sand off rough edges page-by-page after the initial pass.

---

## About the Design Files

> **The files in `design_reference/` are HTML/JSX prototypes — design references, not production code.** They run as a single-page React preview to demonstrate the intended look, behavior, and component structure. **Do not ship them.**
>
> Your task is to **recreate this design in the existing Jekyll codebase** using its established patterns: Jekyll layouts in `_layouts/`, partials in `_includes/`, plain CSS/SCSS, and vanilla JS. No build step, no React, no bundler.

---

## Fidelity

**High-fidelity.** Colors, typography, spacing, borders, shadows, and copy are all final-pass values. Use the exact hex codes, exact font stack, and exact spacing scale defined in the Design Tokens section below. Match motif placement (compass, oak leaf, sun, topographic lines, trail-marker dividers) closely — these motifs are the soul of the design.

Some elements are intentional placeholders flagged in the per-page sections (real photos, finalized scoutmaster names, final calendar events). Replace those during integration.

---

## Tech Stack (target codebase)

- **Jekyll** (kramdown, pretty permalinks)
- **GitHub Pages** hosted at `https://troops258and358.org` (baseurl `/Scouts258and358`)
- **Standard Jekyll layout**: `_config.yml`, `_layouts/`, `_includes/`, `_posts/`, top-level `.html` pages
- **Vanilla JS** in `assets/js/` (Firebase Auth for the protected/login area — leave that area untouched)
- No frameworks, no build step, no bundler

---

## Out of Scope

- The Firebase-protected scout-portal/login views — leave styling there alone for now.
- Pages beyond the four explicitly designed below (Activities, Adult Resources, photo gallery, Scout Portal, etc.) — **apply the new design system to those pages using the same nav, footer, color tokens, type, and component vocabulary**, but no per-page mockups are included. Use your judgment based on the existing page content; match the section patterns from the four designed pages.

---

## Design Tokens

Drop these into a single CSS/SCSS file (recommended: `assets/css/main.css` or `_sass/scouts.scss` — see Implementation Plan). All values are exact.

### Colors

| Token | Hex | Use |
|---|---|---|
| `--oak-900` | `#1a2419` | Page background (whole site rests on this) |
| `--oak-800` | `#243321` | Section bands one shade up from page bg |
| `--oak-700` | `#2d4a32` | Borders, primary buttons, dark accents |
| `--oak-600` | `#3d5a3f` | Subtler borders |
| `--sage-500` | `#7a8c5c` | Secondary accents, muted illustrations |
| `--sage-400` | `#93a274` | Photo placeholder gradient |
| `--sage-300` | `#b4be9b` | Light sage illustrations on dark |
| `--limestone-300` | `#d4c9a8` | Warm card surface |
| `--limestone-200` | `#e3dac0` | Card surface (slightly lighter — Quick Tabs cards) |
| `--limestone-100` | `#ede4cc` | Lightest cream band |
| `--paper` | `#f7f3ea` | Light page surface (Where to find us, Quick Tabs band) |
| `--paper-bright` | `#fbf8f1` | Brightest cream — card surfaces, text on dark |
| `--clay-600` | `#a8442a` | Primary accent, italic headline highlights, hover states |
| `--clay-500` | `#c25434` | Primary CTA button bg |
| `--clay-400` | `#d36a48` | Lighter clay accent |
| `--sun` | `#e0a93b` | Sun/star motif, warm highlight |
| `--sun-soft` | `#f0c46b` | Soft sun glow, italic accents on dark |

### Typography

```css
--font-display: 'Outfit', 'DM Sans', system-ui, sans-serif;  /* h1, h2, oversized numerals, big stat numbers */
--font-body:    'DM Sans', system-ui, sans-serif;             /* body copy, paragraphs, buttons */
--font-mono:    'JetBrains Mono', ui-monospace, monospace;    /* eyebrows, labels, kicker text */
```

Load from Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Type scale & usage:**

| Element | Family | Size | Weight | Style | Letter-spacing | Line-height |
|---|---|---|---|---|---|---|
| Hero h1 (homepage) | Outfit | 96px | 700 | Some words italic 400 in clay-600 | -0.04em | 1.0 |
| Page h1 (sub pages) | Outfit | 72-76px | 700 | -0.03em | 0.98-1.0 |
| Section h2 | Outfit | 38-56px | 700 | -0.02 to -0.03em | 1.0-1.1 |
| Card titles | Outfit | 19-24px | 700 | normal | 1.15 |
| Body | DM Sans | 14-19px | 400-500 | normal | 1.5-1.6 |
| Eyebrow / Kicker | JetBrains Mono | 10-11px | 600-700 | UPPERCASE | 0.10-0.18em | 1 |
| Stat numbers (258, 358) | Outfit | 200px | 700 | -0.05em | 0.9 |

### Spacing scale

```css
--s-1: 0.25rem;  --s-2: 0.5rem;   --s-3: 0.75rem;
--s-4: 1rem;     --s-5: 1.5rem;   --s-6: 2rem;
--s-7: 3rem;     --s-8: 4rem;     --s-9: 6rem;
```

Section vertical padding: typically `72-96px` top/bottom, `56-64px` horizontal.

### Radii

```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
```
Buttons mostly use `4px` (sharp editorial feel) or `999px` (pill).

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(26,36,25,0.08), 0 2px 8px rgba(26,36,25,0.04);
--shadow-md: 0 4px 12px rgba(26,36,25,0.10), 0 12px 32px rgba(26,36,25,0.08);
--shadow-lg: 0 12px 32px rgba(26,36,25,0.18), 0 32px 64px rgba(26,36,25,0.10);
```

The Quick Tabs cards use a chunky offset shadow: `4px 4px 0 var(--oak-700)` — keep that one.

---

## Global Page Setup

**Body background is dark oak-green (`--oak-900`).** This is critical — the whole site sits on this dark base. Sections inside switch between dark and light bands for rhythm.

```css
body {
  margin: 0;
  background: var(--oak-900);
  color: var(--paper-bright);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}
```

Most content sections override their own `background` to limestone, paper, or stay on oak depending on the role.

### Topographic line motif

A repeating SVG pattern of contour lines. Used as a subtle background overlay in dark sections (hero, oath section). Save the SVG as `assets/img/topo-bg.svg` (file content in `design_reference/styles/topo.svg` of this handoff, or recreate from the inline JSX in `components/icons.jsx → TopoBackground`).

```html
<div class="topo-bg" aria-hidden="true">
  <!-- inline SVG with 8-10 contour paths -->
</div>
```

```css
.topo-bg {
  position: absolute; inset: 0; overflow: hidden; pointer-events: none;
  color: rgba(212,201,168,0.15);  /* limestone tone, low opacity */
}
.topo-bg svg { width: 100%; height: 100%; animation: topoDrift 60s linear infinite; }
@keyframes topoDrift {
  from { transform: translateX(0) translateY(0); }
  to   { transform: translateX(-80px) translateY(-40px); }
}
```

---

## Reusable Components & Motifs

These are inlined as SVG. Create them once as Jekyll partials in `_includes/icons/` and reference with `{% include icons/compass.html %}`. Source SVG markup is in `design_reference/components/icons.jsx`.

| Partial | Purpose | Default size | Usage notes |
|---|---|---|---|
| `_includes/icons/logo.html` | Troop logo (circle, dotted ring, tent peak, "258·358" text inside) | 48-50px nav, 44-56px footer | The text "258·358" must sit **inside** the dotted ring — never overlap the outer circle |
| `_includes/icons/compass.html` | Compass rose (8 cardinal ticks, clay-orange needle, "N" label) | 36-120px | Hero, footer, map overlay |
| `_includes/icons/oak-leaf.html` | Stylized oak leaf | 28-140px | Quote sections, footer accents, oath section |
| `_includes/icons/sun.html` | Radiating sun lines | 60-180px | Hero accent (low opacity), oath section |
| `_includes/icons/tent.html` | Triangle tent silhouette with ground line | 36-60px | "Join the Troop" tab, campout indicators |
| `_includes/icons/mountain.html` | Mountain range outline with snow detail | 48-80px | "New Scout" tab, hero |
| `_includes/icons/campfire.html` | Crossed logs + flame | 48-60px | "First campout" step |
| `_includes/icons/arrow.html` | Right-pointing thin arrow | 12-16px | Inline button suffix |
| `_includes/trail-divider.html` | 3 trail-marker blazes (rectangles) on a thin rule | full width | Section transitions — center small + side rules |

### Photo placeholder pattern

For now, use this gradient + diagonal stripes pattern (same look in all four designs). Once real photos are dropped in, this disappears.

```css
.photo-ph {
  aspect-ratio: 4/3;
  border-radius: 12px;
  background:
    linear-gradient(135deg, var(--sage-400), var(--sage-500)),
    repeating-linear-gradient(135deg, transparent 0 14px, rgba(45,74,50,0.18) 14px 15px);
  position: relative; overflow: hidden;
}
.photo-ph::after {
  content: "▢ campout · Enchanted Rock";  /* customize per slot */
  position: absolute; bottom: 12px; left: 14px;
  font-family: var(--font-mono); font-size: 11px;
  color: rgba(255,255,255,0.85);
  text-transform: uppercase; letter-spacing: 0.05em;
}
```

Tone variants: `.photo-ph--oak` (dark green), `.photo-ph--clay` (orange), `.photo-ph--sun` (yellow), `.photo-ph--limestone` (cream).

### Polaroid frame

Used in homepage hero collage. White paper border, slight rotation, drop shadow.

```css
.polaroid {
  background: var(--paper-bright);
  padding: 12px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.18);
  /* rotation set inline per element: -1.5deg, 3deg, -2deg, etc. */
}
```

### Sticky note (yellow)

```css
.sticky-note {
  background: #fef4a8;
  padding: 14px 18px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: #5a4a2a;
  box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  /* rotation set inline: ~4deg */
}
```

---

## Site Chrome (Nav + Footer)

These should become **`_layouts/default.html`** with `_includes/site-nav.html` and `_includes/site-footer.html`. Used by every page (except untouched portal/login).

### `_includes/site-nav.html`

- **Layout:** flex row, `justify-content: space-between`, `padding: 24px 64px`, `border-bottom: 1px solid rgba(45,74,50,0.15)`
- **Background:** `--paper` (light cream)
- **Left:** Logo (48-50px) + stacked text:
  - Title `Troops 258 & 358` — Outfit 17px / 700 / -0.01em
  - Subtitle `Cedar Park · Leander, TX` — JetBrains Mono 10px UPPERCASE / 0.12em
- **Center:** nav links — DM Sans 14px / 500. Items: `Home`, `New Scouts`, `Activities`, `Calendar`, `Resources`, `Contact`. Active link is `--clay-600` 700 weight with no underline.
- **Right:** primary CTA button — `Join Us for a Meeting`. 12px 22px padding, `4px` radius, `--oak-700` bg, `--paper-bright` text, 13px / 700 UPPERCASE, 0.04em letter-spacing.

### `_includes/site-footer.html`

- **Layout:** 4-column grid (`1.6fr 1fr 1fr 1fr`), 40px gap, `padding: 56px 64px 32px`
- **Background:** `--paper-bright`, `border-top: 2px solid var(--oak-700)`
- **Column 1:** Logo + title + tagline (`Cedar Park · Leander, TX`) + small description: "Youth-led scout troops chartered by the Capitol Area Council, North Shore District. Hosted by Rockbridge Church."
- **Columns 2-4:** link lists with mono uppercase headers in `--clay-600` 700:
  - **Explore:** Home, Activities, Calendar, Photo Library
  - **Get Involved:** Join the Troop, New Scout Process, Adult Resources, Training
  - **Quick Links:** Scout Portal, Payments, Troop Store, Mulch Fundraiser
- **Bottom strip:** `border-top: 1px solid rgba(45,74,50,0.15)`, mono 11px in `--oak-700`, two-column flex: "© 2026 Scouts BSA Troops 258 & 358 — All rights reserved" / "Made on the trail · Cedar Park, TX"

---

## Page 1 — Homepage (Field Journal)

> Reference screenshot: `screenshots/01-homepage-field-journal.png`
> Source: `design_reference/components/variation-b.jsx`

The homepage is the most layered. Six sections, top to bottom:

### 1. Hero (split — dark)

- **Layout:** `display: grid; grid-template-columns: 1.4fr 1fr; min-height: 640px;`
- **Background:** `--oak-800`, with `topo-bg` overlay at limestone opacity 0.15
- **Sun glow:** absolute-positioned at top:56px right:-30px, opacity 0.3 — `<sun>` icon at 120px
- **Left column** (padding 88px 64px):
  - Eyebrow row: 60px-wide clay rule + mono kicker `Field Notes · Vol. 47 · Spring '26` in `--sun-soft`
  - h1: `Two troops. <em>One trail.</em><br/>Hill Country Texas.` — Outfit 96px/1.0/-0.04em. The italic *"One trail."* is Outfit 400 italic in `--sun-soft`. Rest in `--paper-bright`.
  - Body paragraph (19px / 1.5, max-width 480px, color `--limestone-200`): "Two youth-led Scouts BSA troops in Texas Hill Country — meeting weekly, camping monthly, learning, leading, and growing the next generation of friends and outdoorspeople."
  - Button row (gap 12, wrap):
    - Primary: `Join the Troop →` (clay-500 bg, paper-bright text, 4px radius, 16px 26px, 14px / 700 UPPERCASE / 0.04em)
    - Secondary outline: `New Scout Process` (transparent bg, 2px paper-bright border, paper-bright text)
    - Ghost link: `Scout Portal →` (no border, paper-bright, underlined, underline-offset 4px)
  - Quote block (margin-top 64, padding-top 24, dashed top border `rgba(212,201,168,0.3)`, grid `auto 1fr`):
    - Compass icon at 64px (stroke `--sun-soft`, accent `--clay-400`)
    - Italic quote (DM Sans 14px / 1.5 italic, `--limestone-200`):
      > "A Scout is never taken by surprise; he knows exactly what to do when anything unexpected happens."
    - Attribution (mono 11px UPPERCASE / 0.1em / `--clay-400`): `— Robert Baden-Powell, Scouting for Boys (1908)`
- **Right column** (limestone-100 background, topo-bg overlay):
  - Three polaroid photos at varied rotations (-1.5°, 3°, -2°) with photo-placeholder fills (oak / sage / clay tones)
  - Each polaroid has small mono-font caption with date + location: `03·15·26 / Enchanted Rock`
  - One yellow sticky-note pinned at top-right with rotation 4°, content: `★ Tues 7pm / Rockbridge Church / bring water bottle`

### 2. Quick Tabs section (light paper)

- **Background:** `--paper-bright`, padding 72px 64px 80px
- **Top:** `trail-divider` partial (oak-700 blazes, clay center)
- **Header row:** flex baseline — h2 `Quick <em>tabs</em>` (38px/700/-0.02em, italic in clay-600 500) + flex-1 horizontal rule + mono kicker `05 destinations` right-aligned
- **5-column grid** (gap 14px). Each card:
  - Background `--limestone-200`, `1.5px solid var(--oak-700)`, square corners (no radius)
  - Offset shadow: `4px 4px 0 var(--oak-700)` — chunky editorial feel, **keep this**
  - Padding 24 20, min-height 200, flex column space-between
  - Top row: mono kicker `№ 01` clay-600 700, plus icon top-right
  - Bottom: card title (Outfit 19px/700/1.15) + 13px / `--oak-700` body
  - Bottom-right corner: 28×28 clay-500 square with white arrow inside (absolute, bottom:-1px right:-1px)
- **5 cards (in order):**
  1. № 01 — **Join the Troop** — "Visit any Tuesday — no commitment." — Tent icon
  2. № 02 — **New Scout Process** — "Step-by-step to your first campout." — Mountain icon
  3. № 03 — **Scout Portal** — "Resources for current scouts." — Oak Leaf icon
  4. № 04 — **Payments** — "Dues, campouts, registration." — Sun icon
  5. № 05 — **Troop Store** — "Patches, gear, and uniforms." — Compass icon

### 3. Two Troops section (limestone)

- **Background:** `--limestone-100`, `border-top: 2px solid var(--oak-700)`, `border-bottom: 2px solid var(--oak-700)`, padding 80px 64px
- **Centered header:** mono kicker `Chapter II` + h2 `Two troops. <em>One family.</em>` (64px / 700 / -0.03em / 1.0 / max-width 800px)
- **3-column grid** `1fr auto 1fr`, gap 48, items-stretch
  - **Left (258 — Boys Troop, right-aligned):**
    - Mono kicker `BOYS TROOP` clay-600 / 700 / 0.15em
    - Massive `258` numeral — Outfit 200px / 700 / 0.9 / -0.05em / `--oak-700`
    - Stats row (right-aligned): `53 / scouts` and `7 / patrols` (Outfit 36px clay-600 + mono 10px UPPERCASE oak-700)
    - Dashed top border + `Scoutmaster / Mr. Shawn Trollope`
  - **Center divider:** vertical 1px line with compass icon (56px) centered, padded with limestone bg
  - **Right (358 — Girls Troop, left-aligned):** mirrors left
    - `GIRLS TROOP`, `358`, `25 scouts`, `3 patrols`, `Mrs. Carla Osuna`

### 4. Where to find us (paper)

- **Background:** `--paper-bright` (or no override — sits on body)
- **2-column grid** (1fr 1fr, gap 56, padding 88px 64px)
- **Left:** Stylized SVG map (4:3 aspect, 14px paper-bright frame, drop shadow):
  - Sage-gradient background
  - Cream-stroke wavy roads, dashed limestone trails
  - Three sage circle "greenery patches" at 80,100 / 320,220 / 60,240
  - Centered clay teardrop pin with paper-bright dot
  - Mono label `Rockbridge Church` next to pin
- **Right:**
  - Mono kicker `Where to find us` clay-600
  - h2: `Tuesdays at 7. <em>Rain or shine.</em>` (56px / 700 / -0.03em / 1.0 / italic in clay-600)
  - 17px paragraph: "We meet weekly at Rockbridge Church and camp out one weekend a month. New scouts and parents are always welcome to drop in — no signup needed."
  - Two-column data grid (top + bottom 1px borders):
    - **Address:** Rockbridge Church / 2001 W. New Hope Drive / Cedar Park, TX 78613
    - **Eligibility:** Ages 10+ / Fifth grade or / Arrow of Light earned
  - Two buttons: solid oak `Get Directions` + outline `Add to Calendar` (4px radius, 14px 24px, 13px UPPERCASE)

### 5. Oath & Law (oak-900, letterpress)

- **Background:** `--oak-900` (deepest), padding 96px 64px
- Top-right: 180px sun icon at opacity 0.18 in `--sun`
- Bottom-left: 140px oak leaf at opacity 0.15 in `--limestone-200`
- **Centered, max-width 960px:**
  - Mono kicker `THE SCOUT OATH` in `--sun-soft`, letter-spacing 0.25em
  - Italic 32px/1.4/`--limestone-200` Outfit display, balanced text-wrap:
    > "On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight."
  - Top-bordered second block (margin-top 64, padding-top 40, border-top `rgba(212,201,168,0.3)`):
    - Mono kicker `THE SCOUT LAW`
    - Outfit 24px/600/1.7/`--paper-bright` balanced text:
      > A Scout is **trustworthy**, **loyal**, **helpful**, **friendly**, **courteous**, **kind**, **obedient**, **cheerful**, **thrifty**, **brave**, **clean**, **reverent**.
    - Each adjective has `border-bottom: 2px solid var(--sun-soft); padding-bottom: 2px`

### 6. Footer

See "Site Chrome" above.

---

## Page 2 — New Scout Process

> Reference: `screenshots/02-new-scout-process.png`
> Source: `design_reference/components/supporting-pages.jsx → NewScoutPage`

- **Hero band** (oak-700→oak-800 gradient, topo overlay):
  - Mono kicker `★ The trail to Scouts` in `--sun-soft`
  - h1 (72px): `Six steps from / <em>curious to camping.</em>`
  - 18px subhead, max-width 600: "We've made joining as simple as we can. Most new scouts go from their first meeting visit to a campout within four weeks. Here's the trail."
- **Steps grid** (paper-bright, 2-column, gap 24px, padding 80px 56px):
  - Six cards, each: 84×84 limestone-100 icon tile + content. mono kicker `STEP 01`, Outfit 24/700 title, body 14/`--oak-700`/1.55
  - Steps in order:
    1. **Visit a meeting** (Tent) — "Drop in any Tuesday at 7pm — meet the scouts, see how a meeting runs. No paperwork yet."
    2. **Complete the application** (Oak Leaf) — "Fill out the Scouting America application and Health & Medical Form Parts A & B. We can help."
    3. **Pay registration** (Sun) — "$85 annual Scouting America registration + $11/month troop dues. Scholarships available."
    4. **Get the uniform** (Compass) — "Field uniform shirt, neckerchief, and the basics. Hand-me-downs welcome at the troop store."
    5. **Pick a patrol** (Mountain) — "New scouts join a patrol of peers. Patrols cook, camp, and learn together."
    6. **Your first campout** (Campfire) — "Monthly campouts are $20. Bring a duffel, sleeping bag, and curiosity. We teach the rest."
- **Trail divider**
- **Field kit section** (paper, 2-column 1fr/1.2fr):
  - Left: kicker + h2 "What to bring on day one." + 15px copy about not needing anything for first meeting
  - Right: paper-bright box with 1px oak border, radius-md, padding 32, 2-column 14×14 checkbox list:
    - Sleeping bag (30°F or warmer), Sleeping pad, Duffel or backpack, Mess kit + water bottle, Flashlight + headlamp, Rain jacket, Long pants & layers, Hiking boots / sturdy shoes, Toothbrush + small towel, Scout Handbook
- **CTA band** (limestone-100, centered, padding 64 56):
  - h2: "Ready for step one?"
  - 17px copy: "The next meeting is Tuesday at 7pm at Rockbridge Church. We'll be expecting you."
  - Buttons: clay-500 pill `Get directions` + outline `Email us first`

---

## Page 3 — Calendar

> Reference: `screenshots/03-calendar.png`
> Source: `design_reference/components/supporting-pages.jsx → CalendarPage`

- **Header section** (paper, padding 64 56):
  - 1.5fr/1fr grid, items end:
    - Left: kicker `★ The trail ahead`, h1 `Calendar.` (72px), subhead "Weekly meetings, monthly campouts, and the big stuff. Subscribe to the troop calendar to keep it on your phone."
    - Right: two pill buttons aligned right — outline `Subscribe (.ics)` + filled `Add to Google`
- **Filter pills row:** 6 pills, first active (oak-700 bg / paper-bright text). Pills: All events, Meetings, Campouts, Ceremonies, Leadership, Service.
- **Main grid:** 380px / 1fr, gap 32:
  - **Left — month grid** (paper-bright box, 1px oak border, radius-md, padding 24):
    - Header row: `May 2026` + prev/next 28×28 buttons
    - Day-of-week strip (mono 10 UPPERCASE)
    - 7×5 grid, aspect-ratio 1, 6px radius cells. Today (5th) is clay-500 filled. Event days highlighted limestone-100 with small clay dot.
    - Legend: 4 rows, 12×12 colored squares + label
  - **Right — agenda list:** 8 cards stacked, gap 12. Each:
    - 92px date column (border-right dashed) + content + Details button
    - Date column: month abbrev top, big day number (Outfit 36/700/oak-700), day-of-week mono bottom
    - Content: pill type badge (limestone-100, mono 10 UPPERCASE) + Outfit 19/700 title + 13px location
    - Border-left 4px in event-type color
  - **Type colors:** Meeting=`--sage-500`, Campout=`--oak-700`, Ceremony=`--clay-600`, Leadership=`--sage-500`, Service=`--sun`, Camp=`--clay-600`
  - **Sample events** (replace with real data):
    - May 5 (Tue) Meeting — Weekly troop meeting — Rockbridge Church · 7:00 PM
    - May 9 (Sat) Campout — Spring campout — Inks Lake — Inks Lake State Park · Fri 5pm – Sun 11am
    - May 12 (Tue) Ceremony — Court of Honor + potluck — Rockbridge Church · 7:00 PM
    - May 19 (Tue) Leadership — Patrol leaders council — Rockbridge Church · 6:00 PM
    - May 23 (Sat) Service — Mulch fundraiser delivery day — Cedar Park · 8:00 AM
    - May 26 (Tue) Meeting — Weekly troop meeting — Rockbridge Church · 7:00 PM
    - Jun 6 (Sat) Campout — Summer kickoff campout — Lost Maples · Fri 5pm – Sun 11am
    - Jun 21 (Sun) Camp — Summer camp departure — Lost Pines Scout Reservation · 1 week

---

## Page 4 — Contact

> Reference: `screenshots/04-contact.png`
> Source: `design_reference/components/supporting-pages.jsx → ContactPage`

- **Two-column layout** 1.1fr/1fr, min-height 720
- **Left column (paper, padding 72 56):**
  - Mono kicker `★ Send up a smoke signal` clay-600
  - h1 `Get in touch.` (76px / 700 / 0.98 / -0.03em)
  - 17px subhead: "Have a question? Curious about visiting? Drop us a line and a member of leadership will get back to you within a couple of days."
  - **Form** (max-width 520, gap 18px):
    - Name row: 2-col grid (First / Last) — labels are mono 10 UPPERCASE, inputs 12 16, 8px radius, 1.5px oak border @ 0.2 opacity, paper-bright bg
    - Email
    - Phone (optional)
    - "I'm reaching out about…" — pill chooser (5 options): `Joining the troop`, `Adult volunteering`, `Eagle project`, `Mulch fundraiser`, `Something else`. First selected (oak-700 bg, paper-bright text).
    - Textarea: "Your message" — 5 rows
    - Submit button: clay-500 pill, 16 28, "Send message →"
- **Right column (limestone-100, padding 72 56, with topo overlay):**
  - **Troop leadership** kicker + 3 cards in column (gap 14):
    - 64px circle avatar with troop number (oak / clay / sage bg) + role kicker + name (Outfit 18/600) + Email pill button
    - **258** Scoutmaster Mr. Shawn Trollope
    - **358** Scoutmaster Mrs. Carla Osuna
    - **—** Committee Chair Brian Kennedy
  - **Where we meet** kicker
  - Map card (radius-md, oak border, shadow-md):
    - Same SVG map as homepage (sage gradient, roads, sage circles, clay pin)
    - Bottom strip: `Rockbridge Church / 2001 W. New Hope Drive · Cedar Park, TX 78613` + filled oak `Open in Maps` button

---

## Implementation Plan (Jekyll-specific)

Suggested order of operations. Aim for the **system first, pages second** — get tokens, fonts, nav, footer, and motif partials in place before working on individual page templates.

### Step 1 — Drop in design tokens

Create `assets/css/scouts.css` (or `_sass/scouts.scss` if you're using Jekyll's SCSS pipeline). Paste:

```css
:root {
  --oak-900:#1a2419; --oak-800:#243321; --oak-700:#2d4a32; --oak-600:#3d5a3f;
  --sage-500:#7a8c5c; --sage-400:#93a274; --sage-300:#b4be9b;
  --limestone-300:#d4c9a8; --limestone-200:#e3dac0; --limestone-100:#ede4cc;
  --paper:#f7f3ea; --paper-bright:#fbf8f1;
  --clay-600:#a8442a; --clay-500:#c25434; --clay-400:#d36a48;
  --sun:#e0a93b; --sun-soft:#f0c46b;
  --font-display:'Outfit','DM Sans',system-ui,sans-serif;
  --font-body:'DM Sans',system-ui,sans-serif;
  --font-mono:'JetBrains Mono',ui-monospace,monospace;
  --s-1:.25rem; --s-2:.5rem; --s-3:.75rem; --s-4:1rem; --s-5:1.5rem;
  --s-6:2rem; --s-7:3rem; --s-8:4rem; --s-9:6rem;
  --radius-sm:6px; --radius-md:12px; --radius-lg:20px;
  --shadow-sm:0 1px 2px rgba(26,36,25,.08), 0 2px 8px rgba(26,36,25,.04);
  --shadow-md:0 4px 12px rgba(26,36,25,.10), 0 12px 32px rgba(26,36,25,.08);
  --shadow-lg:0 12px 32px rgba(26,36,25,.18), 0 32px 64px rgba(26,36,25,.10);
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;font-family:var(--font-body);color:var(--paper-bright);background:var(--oak-900);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
img{display:block;max-width:100%}
::selection{background:var(--sun-soft);color:var(--oak-900)}
@keyframes topoDrift{from{transform:translateX(0) translateY(0)}to{transform:translateX(-80px) translateY(-40px)}}
```

Add component-level styles for buttons, cards, photo placeholders, polaroid, sticky note, trail divider — in the same file.

### Step 2 — Update `_layouts/default.html`

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ page.title }} — Troops 258 & 358</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ '/assets/css/scouts.css' | relative_url }}">
</head>
<body>
  {% include site-nav.html %}
  {{ content }}
  {% include site-footer.html %}
</body>
</html>
```

### Step 3 — Build `_includes/site-nav.html` and `_includes/site-footer.html`

Match the spec in "Site Chrome" above. Use `{{ site.baseurl }}` or `{{ '/path' | relative_url }}` for any internal links so it works locally + on GitHub Pages.

### Step 4 — Build motif partials

Create `_includes/icons/` with: `logo.html`, `compass.html`, `oak-leaf.html`, `sun.html`, `tent.html`, `mountain.html`, `campfire.html`, `arrow.html`. Source SVG markup for each is in `design_reference/components/icons.jsx` — translate React JSX (`strokeWidth="1.4"` etc.) into raw SVG by removing curly braces and `className → class`. Pass colors via Liquid params: `{% include icons/compass.html size="64" color="#2d4a32" accent="#a8442a" %}`.

Also create `_includes/trail-divider.html` and `_includes/topo-bg.html`.

### Step 5 — Build the four pages

- `index.html` → use `default` layout, content is the homepage sections
- `new-scout.html` (or `new-scouts.html` to match existing URL) → New Scout Process
- `calendar.html` → Calendar
- `contact.html` → Contact

Use plain HTML markup with utility classes referencing the tokens. Avoid inventing a new utility framework — straight CSS classes scoped to each section are fine for a vanilla Jekyll site.

### Step 6 — Apply system to remaining pages

Walk through `activities.html`, `404.html`, and any other top-level pages. For each:
1. Wrap content in the `default` layout (so they get the new nav/footer)
2. Add a hero band matching the New Scout / Calendar / Contact pattern (kicker + h1 + subhead)
3. Restyle existing content blocks using the same card / section vocabulary (limestone bands, paper cards, mono kickers, dashed dividers)
4. Replace any old icons with the new motif partials where a parallel exists

Use the four designed pages as the visual North Star for any decisions on the rest.

### Step 7 — Skip the protected/login area

Per scope: leave `auth-login.js`, `auth-guard.js`, and all Firebase-protected views untouched on this pass.

---

## Interactions & Behavior

- **Hover states:**
  - Links in nav: optional underline appearance with `transition: color .15s`
  - Cards: subtle `transform: translateY(-2px)` + slight shadow lift
  - Quick Tabs cards: increase the offset shadow on hover (e.g., `4px 4px 0` → `6px 6px 0`)
  - Buttons: darken bg by ~6% on hover
- **Topo drift animation:** 60-second linear infinite loop on the topo background SVG (already in tokens.css)
- **Form validation:** standard HTML5 `required` and `type` attributes; no custom JS expected
- **Calendar prev/next, filter pills, mini-day-cell click:** these are not wired up in the prototype. If implementing, hook them to existing calendar data sources or leave as visual-only.

---

## Responsive Behavior

The mockups are designed at 1280px width. For the Jekyll site:

- **Above ~1100px:** mockup layouts as-is
- **~768px-1100px:** stack the homepage hero (left/right become top/bottom), reduce hero h1 from 96px → 64px, drop Quick Tabs grid from 5-col to 3-col, Two Troops grid keeps 1fr-auto-1fr but tightens, Where to find us stacks
- **<768px:** full single-column. Hero h1 → 44-48px. Quick Tabs grid → 2-col then 1-col. Stat numbers (258/358) shrink to 120-140px. Nav collapses to logo + hamburger (build a basic vanilla-JS toggle).

The site doesn't have a mobile mockup in this handoff — apply standard responsive judgment using the tokens and proportions.

---

## Accessibility Notes

- Maintain ≥4.5:1 contrast for body text (the limestone-200 on oak-800 is ~7.5:1; paper-bright on oak-900 is ~14:1; clay-600 on paper-bright is ~5.2:1 ✓)
- The mono kicker text at 10-11px sometimes drops below ~4.5:1 on light bg in `--clay-600` — that's accent text, but consider bumping to clay-700 (`#7a3b2e`) if reviewers flag it
- All decorative motif SVGs should have `aria-hidden="true"`
- The animated topo background uses transform — respect `prefers-reduced-motion: reduce` and disable the animation
- Quick Tabs cards are clickable, but currently rendered as `div` — wrap each in a real `<a>` tag with descriptive text
- Form inputs have visible labels (mono kickers); ensure they have `for`/`id` association
- The "Subscribe (.ics)" / "Add to Google" / "Open in Maps" buttons should be real links (`<a>`)

---

## Assets

Currently, the design uses **no real photos** — all photo slots use the gradient + diagonal-stripes placeholder pattern with mono-font captions. Replace these with real campout/troop photos in:

- Homepage right column: 3 polaroid frames (oak / sage / clay tones)
- (Future pages may want photo slots — apply the same polaroid / placeholder pattern)

**No raster image assets are bundled in this handoff** — the design is 100% inline SVG, gradients, and patterns. The new design will get its visual richness from real photos once the site owner drops them in.

**Logo:** the mock troop logo in `_includes/icons/logo.html` is a stylized "258·358" inside a dotted ring with a tent peak silhouette. **If you have a real troop logo file (PNG/SVG), use that instead** — the SVG one in this handoff is a placeholder.

---

## Files in this handoff

```
design_handoff_scouts_redesign/
├── HANDOFF.md                              ← this file
├── README.md                               ← short summary
├── screenshots/
│   ├── 01-homepage-field-journal.png
│   ├── 02-new-scout-process.png
│   ├── 03-calendar.png
│   └── 04-contact.png
└── design_reference/
    ├── index.html                          ← capture page that renders any of the 4 designs
    ├── styles/tokens.css                   ← drop-in CSS variables
    └── components/
        ├── icons.jsx                       ← all SVG icon source
        ├── variation-b.jsx                 ← homepage source
        └── supporting-pages.jsx            ← New Scout / Calendar / Contact source
```

To preview the design references locally, open `design_reference/index.html` in a browser (use `?page=home` / `?page=newscout` / `?page=calendar` / `?page=contact` to switch).

---

## Quick prompt for Claude Code

When you start the integration, paste this into Claude Code:

> I have a design handoff in the `design_handoff_scouts_redesign/` folder. Read `HANDOFF.md` end-to-end. The site is Jekyll + vanilla JS. Apply this design system to the existing site by:
>
> 1. Adding the design tokens (`assets/css/scouts.css`)
> 2. Updating `_layouts/default.html` with new fonts and stylesheet
> 3. Building `_includes/site-nav.html`, `_includes/site-footer.html`, and `_includes/icons/*.html` partials per spec
> 4. Rebuilding `index.html`, `new-scout.html` (matching existing slug), `calendar.html`, and `contact.html` to match the four designed pages
> 5. Applying the same nav/footer/system to the remaining pages (Activities, etc.) without per-page mockups
> 6. Leaving the Firebase-protected portal/login area completely untouched
>
> Match the screenshots in `design_handoff_scouts_redesign/screenshots/`. Reference the JSX in `design_reference/components/` for exact SVG markup and inline-style values when in doubt. Use exact hex codes, exact font stack, exact spacing.
