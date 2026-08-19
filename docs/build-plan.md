# Build Plan — Zinc'd Website Completion

**Purpose:** Phased implementation plan derived from the new client material, the spec reconciliation, the new-material assessment, and the asset-ingest plan. Every phase lists acceptance criteria and file paths. **Gated phases require the client answers from `spec-reconciliation.md` §6 before implementation.**

**Generated:** 2026-08-19 · **Status:** draft — phases 0–1 actionable now; 2–4 gated

---

## Phase 0 — Reconciliation gate (RESOLVED 2026-08-19)

**Client confirmed the newly supplied documents (manual + hotel model) are the correct/current source → Gen 2 specs are APPROVED for the site.** Update `website/src/content/product-data.ts` to Gen-2 values per `spec-reconciliation.md` §5, with "typical / subject to model" qualifier (C-018). Do NOT invent any value the Gen-2 manual leaves blank — chlorine spec, warranty percentages, charging frequency, anode service life, contacts. Flag each blank for the client.

- **Acceptance:** spec block updated to Gen-2; C-018 approved in `docs/claims-register.md`; remaining blanks recorded as open client questions.
- **Files touched:** `website/src/content/product-data.ts`, `docs/claims-register.md`.

---

## Phase 1 — Content already safe to ship (no client gate)

### 1a. Installation & maintenance content upgrade
- **Add to `/installation-maintenance`** (claims-safe, from handbooks/manual):
  - Capacity formulas: rectangular `L×W×AvgDepth×7.5`, circular `D×D×AvgDepth×5.9`, oval `L×W×AvgDepth×5.9` (gal); irregular = sum of shapes.
  - Pre-test: run filtration ≥ 30 min; sample ~18″ (450 mm) below surface, away from inlets/outlets/edges (complete handbook) — reconcile with manual's 12″ sampling.
  - Operational standards table: pH 7.2–7.8 weekly · free chlorine ~1.0 ppm daily · copper 0.3–0.4 ppm daily · TA 50–80 ppm · CH 150–200 (min; vinyl/fiberglass/painted) / ~300 (plaster).
  - Post-storm shock SOP: 24-h continuous filtration, skim/vacuum, shock to 5.0–6.0 ppm, no swimming until chlorine back to ~1.0 ppm.
  - Preventive-maintenance schedule (daily/weekly/monthly/quarterly/6-mo/annual) from complete handbook Appendix A.
  - Troubleshooting table (claims-safe rows only) from complete handbook Appendix D.
  - Add `HowTo` + `FAQ` JSON-LD for the sampling / shock procedures.
- **Files:** `website/src/content/*`, install route component, `website/src/lib/seo/*`.

### 1b. Pool assessment funnel (`/assess`) mirroring the Retail Customer form
- Multi-step: pool type → property type → pain inventory (from form §D, claims-safe options) → capacity (known or L×W×shallow×deep) → plumbing/pipe size → filtration type → heater/automation → electrical nearby → photo checklist → water-test entry (pH/TA/CH/Cl).
- Pre-fill from `/calculator` values when navigated via the calculator's "Get a quote".
- Submit via existing `/api/leads` (Resend pattern). Status mirrors lead pipeline (new → contacted → …).
- **Files:** `website/src/app/assess/**`, `website/src/components/assess/**`, `website/src/lib/leads/**` (reuse distributor-schema patterns), `website/src/content/assess-content.ts`.

### 1c. Catalytic Super Softener companion page `/product/softener`
- Titan (≤100 LPM), Titan Pro (≤200 LPM), Custom (any flow). Claims-safe: "designed to help reduce scale formation"; no-salt/no-resin as a *factual* operational point (does not make a superiority claim); requires client sign-off on the register line before publishing ("NEW — Catalytic Super Softener").
- Cross-link from `/product`, `/installation-maintenance` (hardness >300 ppm guidance), and the assessment funnel's hardness step.
- **Files:** `website/src/app/product/softener/**`, `website/src/content/product-data.ts` (add `softenerSeries`), sitemap.

### 1d. Gated resource downloads
- `/resources`: manual, hotel planning model, plumber handbook, maintenance chart as lead-capture ("email me this spec sheet") wired to `/api/leads`; email delivers a private link. Do **not** distribute the manual until finalized (see assessment doc A.1).
- **Files:** `website/src/app/resources/**`, `website/src/lib/leads/**`, `website/src/content/resources-content.ts`.

---

## Phase 2 — Conversion (gated on Phase 0 + Stripe env)

### 2a. `/cost-savings` → ROI "Planning model" calculator
- Structure exactly like the hotel doc: chemical-only view + all-in view; inputs (existing chemical spend, chlorine portion, algaecide/CYA, visits, labor, electricity); outputs (monthly net saving, payback, 5-yr net).
- 90% labeled *"purchasing assumption to validate against invoices"*, never an efficacy claim; include the doc's disclaimer (C-004 stays blocked for efficacy).
- "Email me the full planning model" lead gate → `/api/leads`.
- **Files:** `website/src/app/cost-savings/**`, `website/src/components/roi-calculator/**`, `website/src/content/roi-content.ts`.

### 2b. Buy path
- Wire `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` (already in `.env.example`) for the confirmed $5,000 `directOffer`; add "Request a quote" B2B fallback beside Buy.
- Never a dead payment link — hide Buy when env unset (already the behavior).
- **Files:** `website/src/content/product-data.ts` (unchanged), product page Buy button, `website/.env*`.

---

## Phase 3 — Assets & experience (gated on raster OCR + consent)

Per `docs/asset-ingest-plan.md` §2–§4. Swap generated villa footage for the branded set; add field-install trust strip and install video. Update `media.ts`, `asset-register.md`, `asset-usage-log.md`.

- **Gate:** raster claim-OCR clean; people-consent confirmed; product images consistent with reconciled specs.
- **Files:** `website/public/assets/**`, `website/src/content/media.ts`, `docs/asset-register.md`, `docs/asset-usage-log.md`.

---

## Phase 4 — Compliance & QA

1. Claims sweep: grep public copy for blocked terms (percentages, "eliminates", "chemical-free", "certified", "PBTI", testimonial names, distributor dollars). 
2. `npm run lint` (0 errors) and `npm run build` from `website/` (Node 22.13.0 via `.nvmrc`); all routes static 200, unknown 404 in `next start`.
3. Add any new claims to `docs/claims-register.md`.
4. Update `docs/route-status.md`, `docs/project-status.md`, `docs/refined-site-map.md` (add `/assess`, `/product/softener`, `/resources`, `/cost-savings`).

---

## Definition of done (all phases)
- Client sign-off recorded for every new/contradictory spec and claim (Phase 0 gate).
- Lint + build clean; no blocked or contradictory claim on any published page.
- All new assets optimized, alt-correct, registered, and referenced from `media.ts`.
- Distributor economics never appear on public pages.
- Client sign-off checklist (from `spec-reconciliation.md` §6) completed and recorded.

## Outstanding client decisions (the single confirmation round)
1. ~~Gen 1 vs Gen 2 product family~~ → **RESOLVED: Gen 2 is correct** (client-confirmed 2026-08-19).
2. Manual blanks to complete: chlorine spec, warranty pro-rated %, charging frequency, anode replacement interval, technical-support contacts, final diagrams.
3. Battery-only vs mains+wired operation confirmation.
4. Warranty terms + completed pro-rated percentages (S11).
5. Softener page approval + claims wording (1c).
6. PBTI lineage-note approval (legal) or omit (A.11).
7. People-consent for field photos (asset plan §4).
8. Manual finalization (chlorine spec, warranty %, diagrams, contacts) before distribution.