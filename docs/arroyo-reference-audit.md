# Arroyo Reference Audit — Engineering Only

Scope: **only** the files listed for Phase 1 were read. The full repository was **not** scanned; `node_modules`/`.next` were not read. Arroyo is an **architecture/engineering reference only** — no Arroyo content, brand, contact, claim, or copy is a Zinc'd fact or may be copied into the Zinc'd site.

Files reviewed: `package.json`, `app/layout.tsx`, `app/page.tsx`, `content/site.ts`, `components/LeadForm.tsx`, `app/api/contact/route.ts`, `lib/contact.ts`, `app/technology/page.tsx`, `app/products/page.tsx`, `app/applications/page.tsx`, plus route/legal **filenames** (not contents) and `.env.example`.

## 1. Reusable engineering patterns
- **Central content model** (`content/site.ts`): a single typed module (`Product` type, `company`, `seo`, `navLinks`, page content objects) drives the whole site — clean handover pattern. Adopt an equivalent `src/content/` module for Zinc'd.
- **Conservative-claims discipline baked into code**: file header comment — *"Do not publish numeric performance, warranty, or certification claims until approved and backed by client documentation."* This philosophy should be **inherited** (aligns with our claims register).
- **Lead capture** (`components/LeadForm.tsx` → `app/api/contact/route.ts` → `lib/contact.ts`): client posts JSON; server does validation, **honeypot** (`website` field), **per-IP rate limiting** (8/10 min), then provider delivery.
- **Provider-ready delivery with fallback** (`lib/contact.ts`): Resend via `RESEND_API_KEY`/`CONTACT_FROM_EMAIL`/`CONTACT_TO_EMAIL`, else fallback; clear error messaging.
- **Env-gated analytics** (`app/layout.tsx`): GA, Meta Pixel, LinkedIn scripts load **only** when env vars are present — good privacy default.
- **SEO structure**: `metadataBase` + title template (`%s | shortName`), per-page `metadata` exports, OpenGraph.
- **Fonts/images**: `next/font/google`, `next/image`, `sharp` for optimization.

## 2. Reusable page architecture
Route set (from `page.tsx` directories): `/` (Home), `/technology`, `/products` (+ `/products/[slug]`), `/applications`, `/projects`, `/about`, `/compliance` (Documentation), `/contact`, `/campaign/[segment]` (dynamic landing pages), `/legal` (+ policy pages). Page components are thin and render from `content/site.ts` — a good separation to reuse.

## 3. Reusable lead-form patterns
- Honeypot + server-side validation + rate limiting + provider abstraction + graceful, user-safe error copy. Reuse the **shape**, but rebuild validation with **zod + react-hook-form** (already installed) rather than the hand-rolled regex validator.

## 4. Reusable SEO / legal structure
Legal center is comprehensive — reuse the **route scaffold** (not the text):
`/legal`, `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`, `/product-disclaimer`, `/refund-and-cancellation-policy`, `/delivery-and-installation-policy`, `/warranty-and-replacement-policy`, `/compliance`. Zinc'd legal copy must be drafted for its own jurisdiction (US/WA) and reviewed.

## 5. Performance patterns
- Static-first App Router pages, `next/image`, `next/font`, `sharp`, env-gated third-party scripts, dynamic `campaign/[segment]` for ad landing pages. All reusable.

## 6. Patterns NOT suitable for Zinc'd
- **Hardcoded Arroyo identity**: brand name/domain (`arroyo-technologies.com`), emails, `+91` phones/WhatsApp (`content/site.ts`), `locale: 'en_IN'` — Zinc'd is US-based (Puyallup, WA). Replace entirely.
- **Hero headline "Chemical-Free Water Purification…"** and `valueProposition`/`salesBenefits` copy asserting chemical-free / irritation-reduction — exactly the claim class Zinc'd must avoid (see C-005, C-008). Do not inherit copy.
- **`poolHealthBenefits`** (19 copper *medical* claims — "prevents nerve damage", "anti-ulcer agent", cancer-research references): **medical claims, highest risk. Do NOT inherit.**
- **Named/region testimonials** and Arroyo-specific product line **"IonEdge"** and villa/estate luxury positioning — Arroyo-specific.
- **Dependency versions**: Arroyo is Next 14.2.14 / React 18.3 (`package.json`). Zinc'd is Next 16 / React 19 — do not copy versions or lockfile.

## 7. Technical debt Zinc'd must NOT inherit
- **Hardcoded tracking IDs in `app/layout.tsx`**: `DEFAULT_META_PIXEL_ID = '1618687810262338'` is baked in and used whenever env is unset — a real Pixel fires by default. Zinc'd must be **strictly env-gated with no hardcoded fallback ID** (privacy/consent debt).
- **File-based lead storage** (`lib/contact.ts` writes `contact-submissions.json`): fails on serverless read-only FS (the code even documents this). Zinc'd must use a durable store (Supabase/DB) or email/CRM — not file writes.
- **Hand-rolled validation regexes**: replace with zod schema shared client/server.
- **Unverified marketing claims embedded in content data** — must not be ported.

## 8. Recommendation
Reuse the **architecture and engineering scaffolding** (content module, lead-form pipeline shape, SEO/legal route structure, env-gated analytics, conservative-claims discipline). Rebuild all **identity, copy, claims, tracking IDs, and storage** from scratch for Zinc'd. See `docs/technical-architecture.md` and `docs/proposed-site-map.md`.
