# Scouts 258 & 358 — Design Handoff

This folder contains a complete design handoff for the **Field Journal** redesign of the Scouts 258 & 358 troop website.

## Start here

1. Read **`HANDOFF.md`** — comprehensive design spec, tokens, per-page layouts, and Jekyll integration plan
2. Browse **`screenshots/`** — reference renders of all four designed pages
3. Reference **`design_reference/`** — original HTML/JSX prototypes (not for production; visual reference only)

## What's designed

- **Homepage** (Field Journal) — `screenshots/01-homepage-field-journal.png`
- **New Scout Process** — `screenshots/02-new-scout-process.png`
- **Calendar** — `screenshots/03-calendar.png`
- **Contact** — `screenshots/04-contact.png`

## What's not

- The Firebase-protected scout-portal/login area (left untouched by request)
- Other existing pages (Activities, Adult Resources, etc.) — Claude Code should apply the new design system to those using the four designed pages as a North Star, but no per-page mockup is included.

## Stack

Jekyll + vanilla JS + Firebase Auth (for protected pages). No build step. No frameworks.

The design references in `design_reference/` are React/JSX **for prototyping only** — recreate them in plain Jekyll templates, partials, and CSS as detailed in `HANDOFF.md`.
