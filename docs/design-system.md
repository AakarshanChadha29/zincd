# Design System — Zinc'd

Implements **Controlled Aquatic Engineering** (`docs/design-directions.md`). Planning tokens only—no production CSS shipped in this phase.

## Brand expression

| Attribute | Expression |
|---|---|
| Premium | Quiet materials, precise spacing, restrained motion |
| Engineered | Grids, mono specs, stainless neutrals |
| Modern corporate | US pool / hospitality / commercial equipment, not cosmetics |
| Memorable | One strong hero composition + one sticky tech story |
| Differentiated from Arroyo | Independent identity; no shared visual atmosphere |

## Color tokens (proposed)

### Primitive

| Token | Hex | Role |
|---|---|---|
| `blue-900` | `#0B1F33` | Deep authority text/surfaces |
| `blue-700` | `#0C4A6E` | Primary brand blue |
| `blue-600` | `#0369A1` | Interactive primary |
| `aqua-600` | `#0E7490` | Aquamarine accent |
| `aqua-400` | `#22D3EE` | Highlight (sparingly; never neon fields) |
| `green-700` | `#0F766E` | Controlled ecological accent |
| `steel-400` | `#94A3B8` | Stainless mid |
| `steel-200` | `#E2E8F0` | Borders / dividers |
| `steel-50` | `#F8FAFC` | Page background cool |
| `white` | `#FFFFFF` | Surfaces |
| `ink` | `#0F172A` | Body text |
| `danger` | `#B91C1C` | Errors only |

### Semantic

| Token | Maps to | Use |
|---|---|---|
| `--color-bg` | steel-50 | Default canvas |
| `--color-surface` | white | Panels |
| `--color-text` | ink | Body |
| `--color-text-muted` | `#475569` | Secondary (≥4.5:1 on bg) |
| `--color-brand` | blue-600 | Links, primary actions |
| `--color-brand-deep` | blue-900 | Headlines on light |
| `--color-accent-aqua` | aqua-600 | Tech highlights, diagrams |
| `--color-accent-eco` | green-700 | Sustainability cues only |
| `--color-border` | steel-200 | Hairlines |
| `--color-steel` | steel-400 | Spec chrome / icons |

**Reject:** purple/indigo gradients; full-bleed blue section stacks; neon cyan glows; warm cream + terracotta luxury clichés.

## Typography

| Role | Family | Notes |
|---|---|---|
| Display / H1–H2 | **IBM Plex Sans** | Industrial geometric; not Inter |
| Body / UI | **IBM Plex Sans** | 400/500 |
| Specs / data / labels | **IBM Plex Mono** | Tables, voltage, ppm, SKUs |

Scale (desktop → mobile clamp): Display 48/36, H1 36/28, H2 28/22, H3 22/18, Body 16/16, Small 14, Spec 13 mono.

Tracking: display −0.02em; labels uppercase +0.06em mono.

## Spacing & layout

- 8px base rhythm; section padding 64–96 desktop / 40–56 mobile.
- Content max-width ~1120–1200px; hero may full-bleed imagery behind content column.
- Grid: 12-col desktop; avoid card grids in hero.

## Elevation & surfaces

| Level | Treatment |
|---|---|
| 0 | Flat bg |
| 1 | White surface + 1px border |
| 2 | Soft shadow `0 8px 24px rgba(15,23,42,0.06)` for interactive panels only |
| Glass | Nav / rare overlay: `backdrop-filter: blur(10–12px)`; bg `rgba(255,255,255,0.72)`; text must pass contrast |

Radius: 4px controls, 8px panels. No rounded-full CTAs.

## Components (behavioral rules)

### Navigation
- Light, premium, optionally translucent over hero then solid on scroll.
- Primary links: Technology, Product, Applications, Distributors, FAQ, Contact.
- CTA chip: Request Assessment (primary).
- Mobile: accessible disclosure menu; focus trap; 44px targets.

### Buttons
| Variant | Style |
|---|---|
| Primary | Filled `blue-600`, white text |
| Secondary | Outline steel/blue |
| Tertiary | Text + arrow |
| Partner | Outline or filled deep blue on distributor surfaces |

### Cards
Default: **no cards**. Allowed for audience routing, applications, and interactive selection only. Hairline + light surface; no glass stacks.

### Tables
Semantic `<table>`; sticky header on desktop; card-stack fallback on mobile; zebra optional at 3% opacity. Comparison content gated by claims register.

### Forms
Visible labels; `zod` + RHF later; honeypot; clear errors; intent selector (Assessment / Partner / Specialist). No fake “stats” beside forms.

### Icons
Lucide (already in stack) stroke 1.5; mono weight consistent. Phosphor acceptable if team standardizes later—do not mix mid-page.

### Footer
Technical corporate: sitemap, legal, contact placeholders (publish only confirmed details C-017), no fake cert badges.

## Imagery rules

- Product: Zinc'd-approved only; never Arroyo-branded frames.
- Water as atmosphere in hero/applications—not bubble patterns behind text.
- Prefer engineered product + real pool environments.

## Dark mode

Not required for launch. If added later: deep `blue-900` canvas, steel borders, same aqua accents—never purple.

## Anti-patterns checklist

- [ ] No purple SaaS gradients
- [ ] No blue bg every section
- [ ] No glass on every card
- [ ] No neon / bubble wallpaper / scroll hijacking
- [ ] No fake logos, stats, testimonials, cert badges
- [ ] No Arroyo visual similarity

## Implementation note

Map tokens to CSS variables in a future `globals.css` / theme layer. Do not initialize shadcn in this phase.
