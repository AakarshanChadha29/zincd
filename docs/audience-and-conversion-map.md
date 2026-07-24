# Audience and Conversion Map — Zinc'd

Planning only. ICP list below is **provisional-logicform-analysis** (`meeting-3.known.priority-known`, Needs confirmation) refined against the Phase 2 brief. Not client-confirmed fact.

## Audience architecture

### Primary — B2B / wholesale

| Segment | Job to be done | What they need on-site | Primary conversion |
|---|---|---|---|
| Pool-equipment distributors | Add differentiated SKU; margin + support clarity | Product fit, sizing logic, partner path | Distributor / partner enquiry |
| Pool builders & aquatic contractors | Spec into projects | Installation fit, maintenance, specs | Project / assessment lead |
| Installation & service partners | Install and support reliably | Process, maintenance alerts, warranty framing | Partner / specialist contact |
| Hotels & resorts | Guest experience + ops reliability | Application page, commercial suitability | Pool assessment |
| Commercial & community operators | Compliance-minded ops, chemical load | Specs, residual-chlorine honesty, maintenance | Assessment / specialist |
| Fitness, wellness & aquatic facilities | Member comfort + ops simplicity | Application page, clear benefits (qualified) | Assessment |
| Property / facility-management groups | Multi-site consistency | Applications hub, partner contact | Distributor or assessment |

### Secondary — B2C / retail

| Segment | Job to be done | What they need on-site | Primary conversion |
|---|---|---|---|
| Residential pool owners | Clearer water, simpler management | Plain-language tech, residual chlorine truth | Pool assessment / quote request |
| Premium homeowners / villas / estates | Premium experience without hype | Product clarity, assessment path | Assessment |
| Homeowners seeking lower chemical dependence | Reduce (not eliminate) chemical burden | Qualified messaging only; no “chemical-free” | Assessment |

**Avoid at launch as sole strategy:** treating homeowners as the only audience (provisional `meeting-3.known.avoid-known`). B2C is secondary and must not dilute B2B credibility.

## Dual-path homepage model

One site, two intentional routes after a shared brand/hero frame:

```
Hero (shared brand + primary CTA)
        │
        ▼
Audience routing (choose path)
   ┌────┴────┐
   ▼         ▼
 B2B path   B2C path
 (wholesale (residential
  / partner)  / assessment)
```

Shared sections after routing (technology, product, applications, specs, install, FAQ, contact) stay claims-safe and audience-aware via wording and CTAs—not separate sites.

## Journey maps

### Primary B2B journey

1. Land on `/` → brand authority + primary CTA visible
2. Choose **Wholesale / Partner** in audience routing (or go via nav to `/distributors`)
3. Scan technology credibility (`/technology`) and product fit (`/product`)
4. Confirm application relevance (`/applications/*`)
5. Review install/maintenance expectations
6. Convert via **Become a Distributor / Partner** or **Talk to a Pool Specialist**
7. Form qualifies: company type, territory/interest, volume signal (fields TBD; no CRM build this project)

### Primary B2C journey

1. Land on `/` → calm, clear value without wholesale jargon in hero body
2. Choose **Home / Residential** in audience routing (or `/applications/residential`)
3. Understand how it works in plain language
4. See product visualization + maintenance reality (including residual chlorine per `TS`)
5. Convert via **Request a Pool Assessment**
6. Optional: FAQ → Contact specialist

## CTA system

| CTA | Audience | Placement | Destination |
|---|---|---|---|
| Request a Pool Assessment | Both (default B2C + commercial projects) | Hero primary, contact section | `/contact` (assessment intent) |
| Become a Distributor / Partner | B2B | Hero secondary / distributors section | `/distributors` |
| Explore the Technology | Both | Hero tertiary / mid-page | `/technology` |
| Talk to a Pool Specialist | Both | Supporting | `/contact` (specialist intent) |

**Do not use “Buy Now”** until pricing, fulfillment, installation, returns, and support are approved.

## Lead intent types (website-facing only)

| Intent | Typical audience | Form flavor |
|---|---|---|
| Pool assessment | Residential + commercial operators | Assessment |
| Project enquiry | Builders / contractors / facilities | Project |
| Distributor / partner | Distributors / installers | Partner |
| General specialist contact | Any | Contact |

Backend CRM routing is **out of scope** for this website project; forms may collect intent for later handoff.

## Messaging fences (conversion safety)

| Do | Don't |
|---|---|
| Separate wholesale language onto B2B surfaces | Mix distributor margin talk into residential hero |
| State residual chlorine requirement when discussing chemistry | Promise chemical-free / no chemicals needed (C-005 blocked) |
| Use qualified algae/biofilm language (C-006) | Publish EPA, patent, savings $, testimonials, NASA endorsement without clearance |
| Route Amazon / shop curiosity to “future availability” deferral | Launch shop/Amazon CTAs as live purchase paths |

## Success definition (website)

- Clear dual-path comprehension without confusion
- Assessment leads + distributor enquiries as primary measurable outcomes
- Claims-safe pages that sales can send without legal scrub panic
