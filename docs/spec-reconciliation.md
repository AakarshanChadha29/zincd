# Spec Reconciliation — Zinc'd Pool Sanitizer

**Purpose:** Resolve conflicting product specifications across client documents and the live site. **Nothing in this file is a decision.** Every row ends with a "client must confirm" open question. Do not publish a spec value until the client has answered.

**Generated:** 2026-08-19 · **Status:** RESOLVED (2026-08-19) — client confirmed the newly supplied documents are the correct/current source. Site updates to Gen-2 specs are APPROVED. Remaining open items are only the blanks the Gen-2 manual itself leaves uncompleted (chlorine spec, warranty %, diagrams, contacts).

---

## 1. Executive summary

> **CLIENT DECISION (2026-08-19):** "The documents I have provided you are the correct ones and the changes should be accordingly." → **Gen 2 is authoritative.** The website's product specifications must be updated to the Gen-2 values (Series-01→04, capacity map below, 170–230 W, copper ideal 0.5 / acceptable 0.4–0.6 ppm, pH ideal 7.2 / acceptable 7.0–7.8, battery-powered with flow sensor + LCD + AC/DC switch). The Gen-1 values (TS/HB/handbook/forms) are superseded for the current product. The manual's blank fields remain open for the client to fill, and nothing from those blanks may be invented.

The client material describes **two different product generations**:

- **Gen 1** ("Zinc'd Ionization System") — the live website, `TECHNICAL SPECIFICATION 3.pdf`, `MAINTENANCE REQUIREEMNT 3.pdf`, `HANDBOOK FOR PLUMBER 3.pdf`, `complete handboon on swimming pool and softener.pdf`, `ZincD Retail Customer form 2.pdf`, `ZincD Form for Distributors for Order placing.pdf`, and `ZincD Distributor onboard form*.pdf`.
- **Gen 2** ("Zinc'd Pool Sanitizer") — only `Zincd_Pool_Sanitizer_User_Installation_Manual_Professional_English.pdf` and `hotel_pool_ionization_cost_savings.pdf`.

The Gen-2 manual is explicitly a **draft** (contains `[INSERT ...]` placeholders, blank pro-rated warranty percentages, no chlorine spec, an incomplete water-test record). The hotel model explicitly defers to the "supplied Zinc'd draft manual".

**Open question 1 (blocking):** Is the Gen-2 "Zinc'd Pool Sanitizer" (battery-powered, Series-01→04, 170–230 W) the *current production product* that supersedes Gen 1, a *second product line* sold alongside Gen 1, or a *regional/variant* model? The answer determines which spec block the website should publish.

---

## 2. Conflict table

| # | Parameter | Live site / Gen-1 docs | Gen-2 manual + hotel model | Decision needed from client |
|---|-----------|------------------------|-----------------------------|-----------------------------|
| S1 | Series naming | Series-1, -2, -3, Custom | Series-01, -02, -03, -04 | Canonical series naming + which naming the site uses |
| S2 | Capacity bands | 20–70k / 70–100k / 100–150k / >150k L | 50k / 150k / 300k / 400–500k L | Which capacity map is current |
| S3 | Max power | 75 W (TS/HB/complete handbook) | 170 / 190 / 210 / 230 W | Correct wattage per series |
| S4 | Copper target | 0.3–0.4 ppm (site, TS, HB, order form, complete handbook) | ideal 0.5 / acceptable 0.4–0.6 ppm | Correct copper target + ideal vs range framing |
| S5 | pH | 7.2–7.6 (site, TS); 7.2–7.8 (HB, complete handbook) | ideal 7.2 / acceptable 7.0–7.8 | Canonical pH window (note: manual's copper test needs 7.0–7.4) |
| S6 | Free chlorine | ~1.0 ppm (site, TS, HB, order form, complete handbook) | **Not provided** (manual placeholder, hotel model flags it) | Confirm chlorine spec; manual must be completed before publishing |
| S7 | Powering / operation | Wired control panel + rechargeable battery, AC 110–230 V input | Battery-powered unit with AC/DC switch, charging cable, LCD, flow sensor | Is the product battery-only? Site currently lists "rechargeable battery & charger" but describes mains-powered wired install |
| S8 | Total alkalinity | not on site | 50–80 ppm (manual, hotel model) | Add to site chemistry targets (harmless, no conflict) |
| S9 | Calcium hardness | not on site | vinyl/fiberglass/painted 150–200 ppm min; plaster ~300 ppm | Add to site chemistry targets |
| S10 | Anode service life | 5–10 yr by model/condition (MR3, site warranty) | "determined in accordance with official service spec" — no fixed interval; manual blank | Confirm anode replacement policy |
| S11 | Warranty | anode 5–10 yr; electronics 3 yr (MR3, site) | 5-yr limited, pro-rated (percentages **blank**) | Which warranty is current? Complete the pro-rated schedule |
| S12 | Testing frequency | copper daily, chlorine daily, pH weekly (TS) | manual: pH first, then TA/copper/CH; hotel model: chlorine + pH every 2–4h while open | Adopt per-operating-mode testing schedule |
| S13 | Water chamber dims | 100 mm electrode dia (TS); 2″/2–4″/4″ pipe sizing | 28/28/37/56 cm length; 5.7/5.7/11.4/15.2 cm bore | Confirm chamber/electrode dimensions and pipe-fit mapping |
| S14 | Flow compatibility | "all standard circulation flow rates" (TS/HB) | flow sensor detects flow/pressure; "do not bypass" | Confirm flow/pressure operating limits (max 30 psi?) |

**No-conflict shared facts** (usable now): 24 V DC operating voltage; AC 110–230 V input; 30 psi max pressure; stainless steel housing; Cu–Ag–Zn alloy electrodes; rechargeable battery; LCD; testing kit supplied; "not chlorine-free / residual chlorine required".

---

## 3. Internal consistency notes (non-blocking but should be fixed in source docs)

1. **Manual §6.3 vs §6.1 / Quick Start:** §6.3 says "acceptable range ... 7.0–7.4" while §6 table, FAQ and Appendix A say "acceptable 7.0–7.8". Confirm intended acceptable pH.
2. **Manual §8.3 typo:** "charging time approximately 1.30 minutes" vs spec table "1.30 hr / 2.00 hr / 2.15 hr / 2.30 hr". Hours is correct; fix the prose.
3. **Manual §15 power:** Series-01→04 = 170/190/210/230 W. Hotel model mirrors this. No cross-doc conflict — only vs Gen 1 (75 W).
4. **Complete handbook commissioning checklist:** lists "Chlorine 0.5–1.0 ppm" while its operational standard says 1.0 ppm and the order form says 1.0 ppm. Reconcile (likely 1.0 target with low-end tolerance).
5. **Hotel model:** Series-03/04 "customized models, indicative specs" (manual note) — the hotel model treats Series-04 as a standard sku at 400–500k L. Confirm Series-03/04 are catalogue SKUs or custom.

---

## 4. Where each value lives today (for the client's one confirmation round)

| Source document | Generation | Series | Power | Copper | pH | Chlorine |
|-----------------|-----------|--------|-------|--------|-----|----------|
| Live site `product-data.ts` | 1 | 1/2/3/Custom | 75 W | 0.3–0.4 | 7.2–7.6 | ~1.0 |
| `TECHNICAL SPECIFICATION 3.pdf` | 1 | any | 75 W | 0.3–0.4 | 7.2–7.6 | ~1.0 |
| `MAINTENANCE REQUIREEMNT 3.pdf` | 1 | n/a | n/a | n/a | n/a | n/a |
| `HANDBOOK FOR PLUMBER 3.pdf` | 1 | 1/2/3/Custom | 75 W | 0.3–0.4 | 7.2–7.8 | 1.0 |
| `complete handboon...pdf` | 1 | 1/2/3/Custom | 75 W | 0.3–0.4 | 7.2–7.8 | 1.0 |
| `ZincD Retail Customer form 2.pdf` | 1 | 1/2/3/Custom | n/a | n/a | n/a | n/a |
| `ZincD Form for Distributors...Order placing.pdf` | 1 | n/a | n/a | 0.3–0.4 | n/a | 1.0 |
| `ZincD Distributor onboard form*.pdf` | 1 | n/a | n/a | n/a | n/a | n/a |
| `Zincd_Pool_Sanitizer_User_Installation_Manual...pdf` | **2** | 01/02/03/04 | 170–230 W | 0.4–0.6 / 0.5 ideal | 7.0–7.8 | **blank** |
| `hotel_pool_ionization_cost_savings.pdf` | **2** | 01/02/03/04 | 170–230 W | 0.4–0.6 / 0.5 ideal | 7.0–7.8 | "90% is purchasing" |

---

## 5. What this means for the website

1. **The client confirmed Gen 2 is correct (2026-08-19).** Update the site's spec block to Gen-2 values in `website/src/content/product-data.ts`:
   - `technicalSpecs`: operating voltage 24 V DC; charging voltage AC 110–230 V; power 170/190/210/230 W per series; battery 24 V / 2200 mAh; charging time 1.3/2.0/2.15/2.3 hr; stainless housing; Cu–Ag–Zn anodes; water chamber dimensions per series (28/28/37/56 cm length; 5.7/5.7/11.4/15.2 cm bore); LCD; water-flow sensor; AC/DC switch. Add "typical / subject to model" qualifier (C-018).
   - `chemistryTargets`: copper ideal 0.5 / acceptable 0.4–0.6 ppm; pH ideal 7.2 / acceptable 7.0–7.8; free chlorine — **client must supply** (manual blank); TA 50–80 ppm; CH 150–200 min (vinyl/fiberglass/painted) / ~300 (plaster).
   - `productSeries`: Series-01 (50k L / ~13,200 gal), Series-02 (150k L / ~39,600 gal), Series-03 (300k L / ~79,300 gal), Series-04 (400–500k L / ~105,700–132,100 gal). Note Series-03/04 are "customized models, indicative specifications" per manual.
   - `howItWorksSteps` / value pillars: add the water-flow sensor step and battery/AC-DC operating modes where accurate.
   - `warrantySummary`: only after the client completes the pro-rated schedule (percentages blank in manual).
   - `faqs`: update the chemistry + pool-size answers to Gen-2 values; keep the chlorine answer "~1.0 ppm" only if the client confirms the chlorine spec.
2. **Do not invent any value the Gen-2 manual leaves blank** — chlorine range, warranty percentages, charging-freq, anode service life, technical-support contacts, final diagrams. Flag each for the client.
3. **Do not publish the manual itself as-is** — it is a draft with `[INSERT ...]` placeholders.
4. Update in this order: `technicalSpecs`, `chemistryTargets`, `productSeries`, `howItWorksSteps`, `warrantySummary`, `directOffer.notes`, `faqs`, then downstream pages (Product, Technology, Calculator, Installation).
5. `docs/claims-register.md` C-018 (specs) → **approved** (source = Gen-2 manual/hotel model, client-confirmed 2026-08-19). C-015 (warranty) stays `pending-client-confirmation` until percentages supplied.

## 6. Client confirmation checklist (single sign-off round)

- [x] Which generation is the current production product? → **Gen 2** (client-confirmed 2026-08-19)
- [ ] Canonical series naming (Series-01..04)
- [ ] Capacity map per series
- [ ] Power per series (170–230 W)
- [ ] Copper target (0.4–0.6 / ideal 0.5)
- [ ] pH window (7.0–7.8) and the §6.3 7.0–7.4 anomaly
- [x] **FREE CHLORINE SPEC — client must supply** (manual is blank; hotel model uses "90% purchasing assumption", not a residual)
- [ ] Battery-only vs mains+wired operation (manual shows battery + charging cable + AC/DC switch)
- [ ] Warranty: 5-yr pro-rated with completed percentages (blank in manual) — or keep MR3 terms
- [ ] Anode replacement policy (fixed interval vs condition-based)
- [ ] Series-03/04: catalogue SKUs or custom (manual says "customized models, indicative")
- [ ] Total alkalinity 50–80 ppm and CH 150–200/300 ppm: approved to publish on /installation-maintenance