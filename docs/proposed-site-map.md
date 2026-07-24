# Proposed Site Map — Zinc'd (Recommendation)

**Recommendation only — not built in this phase.** No final design components chosen; no 21st.dev; no final marketing copy. Derived from provisional `meeting-4.known.pages-known` / `features-known` (both "Needs confirmation") and shaped by the claims register so unverified claims cannot gate launch.

## Principle
Ship a **claims-safe MVP** first. Pages that depend on unverified claims (pricing, cost-savings, testimonials, case studies) are **deferred** until evidence + legal sign-off exist (`docs/claims-register.md`). Public copy stays conservative; hard numbers live in approved proposals.

## MVP (Phase 2 build target)
| Route | Purpose | Depends on | Gate |
|---|---|---|---|
| `/` | Home — positioning, qualified benefits, primary CTA | confirmed brand (C-016), qualified claims | ready once brand + safe copy confirmed |
| `/technology` | How Cu–Ag–Zn ionization works | `TS`, diagram asset #6 | qualified (C-006, C-018); historical NASA note optional (C-003) |
| `/products` | Product overview / models | `TS`, confirmed SKUs | needs model list (`meeting-2.client.models-specs` blank) |
| `/applications` | Segments (pools: hotels, communities, commercial, residential) | provisional ICPs | conservative copy |
| `/contact` | Lead capture (zod + react-hook-form) | confirmed contact details (C-017) | needs real phone/email/domain |
| `/become-a-distributor` | B2B partner capture (priority ICP) | provisional segments | conservative copy |
| `/legal/*` | Legal center (see below) | drafted + reviewed | legal review |
| `/faq` | Safety, chlorine, maintenance, warranty | `TS`,`MR` + approved wording | qualified answers only |

## Deferred (until evidence + confirmation)
| Route | Blocking reason |
|---|---|
| `/pricing` | No confirmed pricing model (`meeting-3.client.pricing-model` blank) |
| `/cost-savings` (ROI) | Contradictory cost figures (C-010) |
| `/case-studies` | No permissions/verified data (C-014) |
| Testimonials section | Named testimonial blocked (C-013) |
| `/booking` | Needs calendar system + process (`meeting-5.client.calendar-inbox` blank) |
| E-commerce / Amazon link | Channel strategy unconfirmed (`meeting-3.known.amazon-known`) |
| `/launch` landing | Depends on launch plan (`meeting-6.*` blank) |

## Legal center (route scaffold, copy to be drafted for US/WA)
`/legal`, `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`, `/product-disclaimer`, `/warranty-and-replacement-policy`, `/refund-and-cancellation-policy`, `/delivery-and-installation-policy`, `/compliance` (documentation/claims process).

## Global features (provisional — `meeting-4.known.features-known`)
- Contact & quote forms (MVP), newsletter signup (MVP-optional), WhatsApp/contact link (needs confirmed number), analytics (env-gated, consent-aware), payment link / e-commerce (deferred), chatbot (deferred — scope/consent undefined, `meeting-5.client.chatbot|consent` blank).

## Navigation (proposed MVP)
Home · Technology · Products · Applications · Become a Distributor · FAQ · Contact · (footer: Legal center)

## Confirmations needed before building
- Canonical brand/name + primary domain (C-016), real contact details (C-017).
- Confirmed sitemap & CTA system (`meeting-4.joint.sitemap|cta-system` blank).
- Which claims may appear on which pages (claims register statuses).
