# Technical Architecture — Zinc'd (Recommendation)

**Recommendation only — nothing built/installed in this phase.** Three.js, Supabase, Resend, Lenis, CMS, and ORM are **not** installed yet (deferred per instructions). This documents the target minimum-viable architecture and where each capability belongs.

## Current baseline (already bootstrapped)
- `website/`: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind · ESLint · `src/` · `@/*`.
- Installed libs available for Phase 2: `motion`, `zod`, `react-hook-form`, `@hookform/resolvers`, `lucide-react`, `clsx`, `tailwind-merge`, `@vercel/analytics`, `@vercel/speed-insights`. See `docs/environment-baseline.md`.

## Minimum viable backend architecture
Keep the public site presentational and stateless; push durable state and automation to dedicated systems.

```
Visitor ─▶ Next.js (Vercel)
             │  form submit (JSON)
             ▼
        /api/lead  (zod validation, honeypot, rate-limit)
             │
     ┌───────┼────────────────┬───────────────┐
     ▼       ▼                ▼               ▼
  Supabase  n8n (webhook)   Email          Analytics
  (leads)   automation      (Resend)       (Vercel + consent-gated GA/Meta)
             │
             ▼
        Logicform OS / CRM  (pipelines, roles, scoring)
```

### Component responsibilities
- **Public website (Next.js on Vercel):** pages, SEO, forms (contact/quote/distributor), consent-gated analytics, WhatsApp link. No secrets in client; no claim rendering beyond approved status.
- **Lead API route:** shared **zod** schema (client + server), honeypot, per-IP rate limiting (reuse Arroyo shape), then fan-out to storage + automation + email. **No file-based storage** (Arroyo debt — see arroyo audit §7).
- **Supabase (or equivalent DB):** durable lead/submission records, consent flags, timestamps; optional content tables if a CMS is not used. *(Install in Phase 2.)*
- **n8n:** orchestration — the three email workflows + six Google Workspace templates (`meeting-5.known.emails-known`), CRM writes, notifications, error handling, audit trail (`meeting-5.internal.automation-map`). *(Later.)*
- **Logicform OS / CRM:** system of record for contacts/companies/opportunities, **double pipeline** B2B/B2C (`meeting-5.known.pipeline-known`), roles Super Admin/Admin/Sales Rep (`meeting-5.known.roles-known`), lead scoring (`meeting-5.internal.lead-scoring`), reporting.
- **External email/calendar:** Google Workspace mailbox (info@zincd.com — unconfirmed, C-017); transactional email via **Resend**; booking via calendar tool (Cal.com/Google) — deferred until booking scope confirmed.

## Functionality allocation (task requirement 9)
| Capability | Public website | Supabase/DB | n8n | Logicform CRM | External email/calendar |
|---|:--:|:--:|:--:|:--:|:--:|
| Page rendering / SEO | ✅ | | | | |
| Lead/quote/distributor forms | ✅ (capture) | ✅ (store) | ✅ (route) | ✅ (own) | ✅ (notify) |
| Newsletter signup | ✅ | ✅ | ✅ | | ✅ |
| Booking/scheduling (deferred) | ✅ (embed) | | ✅ | ✅ | ✅ (calendar) |
| Email workflows (3) + templates (6) | | | ✅ | | ✅ (send) |
| Pipeline & lead scoring | | | | ✅ | |
| Roles & permissions | | | | ✅ | |
| Analytics (consent-gated) | ✅ | | | | |
| Chatbot (deferred) | ✅ (widget) | ✅ (logs) | ✅ | ✅ (handoff) | |
| Payments / e-commerce (deferred) | ✅ | ✅ | ✅ | ✅ | |

## Deferred installs & why
- **Supabase / ORM:** only when durable storage/schema is confirmed (`meeting-5.internal.crm-schema`).
- **Resend:** when a confirmed sending domain/mailbox exists (C-017).
- **Three.js:** no confirmed need; heavy — evaluate against design direction later.
- **Lenis / advanced motion:** `motion` already covers Phase-2 needs; add later only if design requires.
- **CMS:** only if client needs self-service content editing (`meeting-4.client.content-maintenance` blank).

## Cross-cutting requirements
- **Consent-first tracking:** env-gated, **no hardcoded tracking IDs** (avoid Arroyo's baked-in Meta Pixel default).
- **Secrets:** environment variables only; `.env.example` committed, real `.env*` git-ignored.
- **Claims gating:** no page renders a claim whose status is `blocked`/`contradictory`/`pending-*` in `docs/claims-register.md`.
- **Accessibility/perf:** static-first, `next/image`, `next/font`, Speed Insights.

## Not done in this phase
No dependencies added; no backend provisioned; no application code changed beyond the existing bootstrap.
