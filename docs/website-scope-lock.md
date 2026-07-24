# Website Scope Lock — Zinc'd

Phase 2 planning lock. **Public-facing website only.** No application code in this phase.

## In scope (this project)

| Area | Included |
|---|---|
| Public marketing site (Next.js) | Yes |
| Dual B2B / B2C information architecture | Yes |
| Claims-safe content model | Yes |
| Lead / assessment / distributor enquiry forms (UI + future API shape) | Plan now; implement later |
| SEO, legal route scaffold, FAQ | Yes |
| Design system, motion plan, 3D plan | Yes (docs only this phase) |

## Explicitly out of scope (do not build)

- CRM / Logicform OS
- Internal dashboard / admin CMS
- Sales pipeline UI
- Customer portal / distributor portal
- n8n workflows / email automation
- Supabase (or other durable DB) provisioning
- Booking / calendar integration
- Chatbot
- E-commerce checkout / payments
- Amazon storefront integration
- Analytics dashboards (consent-gated tracking scripts may be planned later; dashboards are out)
- Anything that requires unpublished evidence as a launch dependency

These may appear in later projects or later phases. Architecture notes in `docs/technical-architecture.md` remain reference only.

## Brand / partnership lock

| Rule | Status |
|---|---|
| Zinc'd presented as standalone US company and brand | Mandatory |
| No public mention, link, visual reference, or exposure of Arroyo | Mandatory |
| No “manufactured by Arroyo,” shared testimonials, shared installations, shared contact, shared branding | Mandatory |
| Do not copy Arroyo wording, photography treatment, navigation, or brand atmosphere | Mandatory |
| Arroyo repo usable only as internal Next.js / page-architecture reference | Allowed internally |

## Commercial model lock

| Path | Role |
|---|---|
| **Primary:** B2B / wholesale | Distributors, builders, installers, hotels/resorts, commercial/community operators, fitness/wellness, facility management |
| **Secondary:** B2C / retail | Residential / premium homeowners seeking clearer water management and lower chemical dependence (claims-qualified) |

Homepage must support both routes without becoming two stitched sites. See `docs/audience-and-conversion-map.md`.

## Conversion hierarchy lock

| Priority | CTA | Launch note |
|---|---|---|
| Primary | Request a Pool Assessment | Default hero CTA |
| Secondary B2B | Become a Distributor / Partner | Distinct path; not competing with primary |
| Informational | Explore the Technology | Routes to `/technology` |
| Supporting | Talk to a Pool Specialist | Contact / assessment handoff |
| **Not allowed at launch** | Buy Now | Blocked until pricing, fulfillment, installation, returns, and support are approved |

## Claims & source lock

- Source classifications in Phase 1 docs govern all public content.
- Do not convert provisional Logicform analysis into confirmed public facts.
- Do not resolve contradictions by guessing.
- Blocked / contradictory / pending-evidence claims from `docs/claims-register.md` must not appear on launch pages.
- No fake certifications, statistics, logos, or testimonials.

## Asset lock

- Use Zinc'd-approved assets only (`docs/asset-register.md`).
- Arroyo-branded product photo is **not** publishable until rebranded/reshoot.
- Logo vector master still required before production polish (raster candidate exists).

## Phase boundary

This phase delivers planning documents only. No page implementation, no shadcn init, no dependency installs, no production components.
