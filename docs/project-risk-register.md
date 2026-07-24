# Project Risk Register — Zinc'd

Severity: 🔴 High · 🟠 Medium · 🟡 Low. Cross-refs: `docs/claims-register.md` (C-###), `docs/open-questions.md` (Q#).

## Ten highest-risk items (ranked)

| # | Risk | Sev | Source | Mitigation |
|---|---|---|---|---|
| R1 | **"No chemicals needed / chemical-free"** contradicts `TECHNICAL SPECIFICATION 2.pdf` (residual chlorine ~1.0 ppm required) | 🔴 | C-005; `meeting-2.known.chlorine-known` vs `TS` | Never publish chemical-free promise; use "reduces chlorine dependency"; legal review |
| R2 | **"EPA Registered"** while intake says certification in process | 🔴 | C-001; FLY1 vs `meeting-2.known.cert-known` | Block until registration number + certificate supplied (Q4) |
| R3 | **Legionella / pathogen efficacy** public claim without independent data | 🔴 | C-007; `TS` | Remove from public; qualified technical docs only after lab evidence + review |
| R4 | **Conflicting cost/savings figures** ($8–20 vs $76–160; $220 vs $585–950; "$180+/mo"; "36,845/-") | 🔴 | C-010; FLY1/CC/PKG vs `meeting-2.known.cost-known` | Remove figures from site; ROI in approved proposals only; require cost workbook (Q14) |
| R5 | **Patent status contradiction** (patented vs patent-pending) | 🔴 | C-002; `meeting-2.known.patent-known` | Confirm filing/grant number; false-marking risk; legal review (Q5) |
| R6 | **"NASA technology/approved"** overclaim vs historical-only basis | 🔴 | C-003; `HB` | Historical framing only on Technology/About; no endorsement language |
| R7 | **Named testimonial + military/institutional case studies** without consent/verification | 🔴 | C-013, C-014; FLY2, `meeting-2.known.proof-known` | Block until signed releases + verified data; use anonymized summaries |
| R8 | **"Lab tested/Certified"** + **Google rating** with no report/profile | 🟠 | C-011, C-012; FLY1/FLY2 vs `TS` | Block until report + live profile; then cite lab, date, scope |
| R9 | **Brand/identity ambiguity** (Zincd/Zinc'd/Zinc'd Pool; 4 domains; placeholder phone/email) | 🟠 | C-016, C-017; `meeting-4.known.naming-known` | Confirm canonical name, primary domain, real contacts; trademark check |
| R10 | **Discovery ~10% complete, 0% confirmed**; all `known.*` unconfirmed; `actions.*` empty | 🟠 | `zincd-discovery.json` (`clientView`=false) | Structured confirmation sessions; populate action items with owners/dates |

## Additional risks

| # | Risk | Sev | Source | Mitigation |
|---|---|---|---|---|
| R11 | Metals inconsistency (Cu/Ag/Zn vs iron; "ionizer" vs "mineralizer") | 🟠 | `meeting-2.known.technology-known` vs `TS` | Confirm exact metals; standardize terminology (Q8) |
| R12 | Only product photo is **Arroyo-branded** (rebranding gap) | 🟠 | asset #5 | Reshoot / rebrand; obtain original Zinc'd product media |
| R13 | Logo only as raster JPG; vector master unconfirmed | 🟡 | asset #1; `meeting-4.doc.brand-vector` | Obtain SVG/AI master before design phase |
| R14 | Oversized 25 MB image unusable for web | 🟡 | asset #7 | Export/downscale in production pipeline |
| R15 | Inheriting Arroyo tech debt (baked Meta Pixel ID, file-based lead storage, medical copy) | 🟠 | arroyo audit §7 | Rebuild identity/tracking/storage; strictly env-gate; never port `poolHealthBenefits` |
| R16 | Missing certificates/lab/patent/warranty docs ("provided separately", "Not requested") | 🔴 | `meeting-2.doc.*`; `TS`/`MR` | Request evidence pack before any claim goes live (Q11, Q12, Q4, Q5) |
| R17 | Node v20.9.0 below engine pref (20.19+) | 🟡 | environment-baseline | Upgrade Node before production hardening |
| R18 | Domain/registrar/analytics/ad access outstanding | 🟠 | `meeting-1.doc.account-list`="Requested" | Collect access before launch (Q29) |
| R19 | Chatbot scope/consent undefined | 🟡 | `meeting-5.client.chatbot|consent` blank | Defer; define approved sources, prohibited topics, consent |
| R20 | Data privacy/consent for lead capture & tracking (US/WA + international) | 🟠 | tech architecture | Consent-first analytics; privacy policy; durable consented storage |

## Launch-blocking summary
No public launch until: R1–R7 resolved (claims cleared or removed), R9/R16/R18 closed (identity, evidence, access), and a legal/compliance sign-off is recorded against the claims register. Client's own stated risk — "certification and licsencing" (`meeting-1.client.risks`) — aligns with these findings.
