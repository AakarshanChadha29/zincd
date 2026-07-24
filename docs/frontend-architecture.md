# Frontend Architecture — Zinc'd

Phase 3 application foundation for the public website only.

## Stack

- Next.js 16 App Router (`website/`)
- React 19 + TypeScript
- Tailwind CSS v4 + CSS custom properties
- shadcn/ui (base-nova) for: button, sheet, accordion, card, badge, separator
- `motion` for restrained entrance reveals
- Lucide icons
- Vercel Analytics + Speed Insights (already installed)

## Directory map

```
website/src/
  app/                 # Routes, metadata, loading/error/404, globals.css
  components/
    brand/             # Logo
    layout/            # Header, footer, shell, section, container, mobile nav
    motion/            # MotionProvider, Reveal
    ui/                # Primitives + shadcn
  content/             # Typed site config, navigation, route placeholders
  lib/                 # cn, metadata helpers
  types/               # Navigation types
```

## Rendering model

- Route `page.tsx` files are Server Components by default.
- Client Components are limited to: header scroll/glass state, mobile sheet, motion provider/reveal, error boundaries.
- Navigation labels and CTAs live in `content/site-config.ts` — do not hardcode duplicates in pages.

## Claims & contact safety

- Route placeholders are conservative and claims-safe.
- Phone, email, and address remain `null` until confirmed (C-017).
- No Arroyo references in UI or content modules.
- Homepage is an architecture shell only — not finished marketing design.

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production canonical origin for `metadataBase` |

If unset, metadata falls back to `http://localhost:3000` without throwing.

## Out of scope (still)

CRM, Supabase, Resend, forms submission, booking, chatbot, commerce, Three.js, sticky tech story, final homepage design.
