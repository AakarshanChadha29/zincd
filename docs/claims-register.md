# Claims Register — Zinc'd

Every marketing/technical claim found in client materials, with a publication decision. **Presence in client materials does NOT approve a claim.** All high-risk items in the publication-safety list default to `blocked` or `pending-evidence` until the client supplies evidence and legal/compliance sign-off is recorded.

Statuses: `approved-source-fact` · `qualified` · `pending-client-confirmation` · `pending-evidence` · `contradictory` · `blocked`

Sources: `TS`=`TECHNICAL SPECIFICATION 2.pdf`, `MR`=`MAINTENANCE REQUIREEMNT 2.pdf`, `HB`=`HISTORICAL BACKGROUND 2.pdf`, `CC`=`Zincd_Comparison_Chart 2.pdf`, `FLY1`=`PHOTO-2026-07-03-21-34-23.jpg`, `FLY2`=`PHOTO-2026-07-03-21-34-42.jpg`, `PKG`=`PHOTO-2026-07-03-20-49-24.jpg`, JSON keys as noted.

---

### C-001 — "EPA Registered"
- **Original:** "EPA Registered" (FLY1).
- **Proposed safe wording:** *(none until proof)* — omit entirely; if held, "EPA Establishment/Registration No. [####]".
- **Category:** regulatory. **Source:** FLY1; contradicted by `meeting-2.known.cert-known` ("certification is in process").
- **Evidence available:** none. **Status:** `blocked`.
- **Qualification required:** exact registration number + certificate. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none until verified. **Blocked reason:** unverified regulatory claim; intake says certification in process.

### C-002 — "Patented"
- **Original:** "patented" (deck/sell sheet per `meeting-2.known.patent-known`).
- **Proposed safe wording:** "patent pending" **only if** a filing number is provided; else omit.
- **Category:** IP. **Source:** `meeting-2.known.patent-known` (intake says patent pending; deck says patented) — **contradictory**.
- **Evidence available:** none (`meeting-2.doc.patent-files`="Not requested"). **Status:** `contradictory`.
- **Qualification required:** filing/grant number, jurisdiction. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none. **Blocked reason:** conflicting patent status; false-marking risk.

### C-003 — "NASA technology / NASA approved"
- **Original:** NASA association implied in marketing; `MR` says NASA info "provided separately".
- **Proposed safe wording:** "Copper–silver ionization shares a scientific lineage with silver-ion disinfection historically used by NASA for spacecraft drinking water" (informational, historical only).
- **Category:** endorsement/origin. **Source:** `HB` (NASA link is historical, "not to the invention of the technology itself"), `MR`.
- **Evidence available:** `HB` supports **historical context only**. **Status:** `qualified` (historical) / `blocked` (endorsement).
- **Qualification required:** explicit "historical, not an endorsement" framing. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** Technology/About (historical note) only. **Blocked reason:** "NASA approved/technology" implies endorsement NASA does not give.

### C-004 — "90% less chlorine"
- **Original:** "90% Less Chlorine" (FLY1, FLY2, PKG).
- **Proposed safe wording:** "designed to reduce chlorine dependency" (no fixed %) until evidence.
- **Category:** performance. **Source:** FLY1/FLY2/PKG; `meeting-2.known.chlorine-known` lists 70–90% / up to 90% / 90% fewer chemicals / "no chemicals needed" as **non-equivalent**.
- **Evidence available:** none. **Status:** `contradictory` → `pending-evidence`.
- **Qualification required:** test conditions, measured baseline. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none until evidence. **Blocked reason:** inconsistent figures; no validation data.

### C-005 — "No chemicals needed" / "chemical-free"
- **Original:** "no chemicals needed" (`meeting-2.known.chlorine-known`); "Less Chemicals" (PKG).
- **Proposed safe wording:** none — **directly contradicted** by `TS` ("residual free chlorine of approximately 1.0 ppm" required).
- **Category:** performance/safety. **Source:** materials vs `TS`; `meeting-4.known.seo-known` warns "'chemical-free' should not be used as a promise".
- **Evidence available:** contradicting (`TS`). **Status:** `blocked`.
- **Qualification required:** n/a. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none. **Blocked reason:** product still requires residual chlorine; claim is false as stated.

### C-006 — "Eliminates algae & biofilm"
- **Original:** "Eliminates Algae & Biofilm" (FLY1); CC "Effectiveness Against Biofilm: Excellent".
- **Proposed safe wording:** "helps control algae and supports biofilm control" (`TS`: copper "controls" algae; zinc "contributes to biofilm control").
- **Category:** performance. **Source:** FLY1, CC vs `TS` (controls/assists, not eliminates).
- **Evidence available:** partial (`TS` uses softer verbs). **Status:** `qualified`.
- **Qualification required:** replace "eliminates" with "controls/helps control". **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** Technology/Products with qualified wording. **Blocked reason (if "eliminates"):** absolute claim unsupported.

### C-007 — "Effective against Legionella / kills Legionella"
- **Original:** `TS` — "particularly effective against chlorine-resistant bacteria such as Legionella"; "demonstrated exceptional effectiveness against Legionella".
- **Proposed safe wording:** none for public marketing — health-pathogen claim.
- **Category:** health/pathogen. **Source:** `TS`.
- **Evidence available:** vendor statement only; no lab report. **Status:** `blocked` (public) / `pending-evidence`.
- **Qualification required:** independent lab data + regulatory review. **Client confirmation:** yes. **Legal review:** yes (public-health claim).
- **Permitted pages:** none public; technical docs to qualified buyers only under review. **Blocked reason:** disease-organism efficacy claim; high liability.

### C-008 — "Safe, non-irritating"
- **Original:** CC "Health Impacts: Safe, non-irritating".
- **Proposed safe wording:** "designed for a lower-chemical water experience that many users find gentler" (experiential, non-absolute).
- **Category:** safety. **Source:** CC.
- **Evidence available:** none. **Status:** `blocked`.
- **Qualification required:** remove "safe/non-irritating" absolutes. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none with absolute wording. **Blocked reason:** absolute safety claim.

### C-009 — "No chemical by-products / None"
- **Original:** CC "Chemical Byproducts: None (Zinc'd)".
- **Proposed safe wording:** "can reduce formation of chlorination by-products vs. chlorine-heavy programs" (comparative, evidence-gated).
- **Category:** performance/environmental. **Source:** CC (contradicts residual-chlorine requirement in `TS`).
- **Evidence available:** none. **Status:** `contradictory`.
- **Qualification required:** evidence; reconcile with residual chlorine. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none until evidence. **Blocked reason:** "None" absolute contradicts residual chlorine use.

### C-010 — Monthly savings / operating cost figures
- **Original:** Traditional "$120+"/"$220 monthly" (FLY1) vs "$585–$950" (CC); Zinc'd "$8–$20/month" (FLY1) vs "$76–$160" (CC); "Save $180+/Month" (FLY1); "Save 36,845/-month" (PKG, currency unclear).
- **Proposed safe wording:** none — omit specific figures; "can lower ongoing operating cost" only, or numbers in approved proposals.
- **Category:** financial/ROI. **Source:** FLY1, CC, PKG; `meeting-2.known.cost-known` documents the conflict.
- **Evidence available:** none (`meeting-2.doc.cost-workbook`="Not requested"). **Status:** `contradictory`.
- **Qualification required:** cost workbook, assumptions, currency, region. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none public; figures belong in approved proposals. **Blocked reason:** multiple incompatible numbers.

### C-011 — "Lab tested" / "Certified Lab Results" / "PBTI"
- **Original:** "Proven ROI & Lab Tested", "Certified Lab Results" (FLY1); "Certified Lab Tested… PBTI" (FLY2).
- **Proposed safe wording:** none until report supplied; then "Tested by [lab], [date], report available on request".
- **Category:** evidence/regulatory. **Source:** FLY1, FLY2 vs `TS` ("validation data … provided separately").
- **Evidence available:** none. **Status:** `pending-evidence`.
- **Qualification required:** actual report, scope, lab identity. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none until report received. **Blocked reason:** no lab report on file.

### C-012 — Google rating / star reviews
- **Original:** Google logo + 5-star graphic (FLY1).
- **Proposed safe wording:** none — do not display ratings without a verifiable Google Business Profile.
- **Category:** social proof. **Source:** FLY1.
- **Evidence available:** none. **Status:** `blocked`.
- **Qualification required:** live profile + real aggregate rating. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none. **Blocked reason:** unverifiable/possibly fabricated rating.

### C-013 — Named testimonial "R. Sharma, Resident"
- **Original:** "We installed Zinc'd Pool… A game changer!" — R. Sharma, Resident (FLY2).
- **Proposed safe wording:** none without signed release; use anonymized/aggregate only.
- **Category:** testimonial. **Source:** FLY2; `meeting-2.known.proof-known` (names "without attached permissions").
- **Evidence available:** none. **Status:** `blocked`.
- **Qualification required:** signed testimonial release. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none until release. **Blocked reason:** endorsement without consent.

### C-014 — Military / institutional case studies
- **Original:** "Indian Army bases, residential communities, Chandigarh customers" (`meeting-2.known.proof-known`).
- **Proposed safe wording:** none without written permission and verified facts; consider anonymized summary.
- **Category:** case study. **Source:** `meeting-2.known.proof-known`.
- **Evidence available:** none (`meeting-2.doc.case-files`="Not requested"). **Status:** `blocked`.
- **Qualification required:** permission + verifiable project data. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** none. **Blocked reason:** unverified institutional/military references.

### C-015 — Warranty (anode 5–10 yr; electronics 3 yr)
- **Original:** `MR` — anode 5–10 years; electrical/electronic 3 years.
- **Proposed safe wording:** publish exactly as `MR` states **after client confirmation**, with conditions/exclusions.
- **Category:** warranty. **Source:** `MR`.
- **Evidence available:** document exists. **Status:** `pending-client-confirmation`.
- **Qualification required:** confirm current terms + exclusions. **Client confirmation:** yes. **Legal review:** yes.
- **Permitted pages:** Warranty/Legal, Product (once confirmed). **Blocked reason:** not yet confirmed by client (`meeting-2.client.warranty` blank).

### C-016 — Product naming & domains
- **Original:** "Zincd", "Zinc'd", "Zinc'd Pool"; zincd.com/.net, zincdpool.com, zincdwater.com (`meeting-4.known.naming-known`).
- **Proposed safe wording:** single confirmed brand + primary domain.
- **Category:** brand/identity. **Source:** `meeting-4.known.naming-known`, logo, CC (use "Zinc'd").
- **Evidence available:** logo received. **Status:** `pending-client-confirmation`.
- **Qualification required:** canonical name, apostrophe usage, primary domain. **Client confirmation:** yes. **Legal review:** trademark check.
- **Permitted pages:** all (once confirmed). **Blocked reason:** inconsistent naming.

### C-017 — Official contact (phone/email)
- **Original:** phone `123-456-7890`, `www.zincdpool.com` (FLY1/FLY2); info@zincd.com (`meeting-5.known.recipient-known`).
- **Proposed safe wording:** real, confirmed phone/email/domain only.
- **Category:** contact/identity. **Source:** flyers, `meeting-5.known.recipient-known`.
- **Evidence available:** client confirmed 2026-08-19 — `info@zincd.net` and `+1 (206) 690-4001`, the same details printed on the US distributor brochure. **Status:** `approved-source-fact`.
- **Qualification required:** none remaining for phone/email. Mailing address is still unconfirmed and stays unpublished. **Client confirmation:** received. **Legal review:** no.
- **Permitted pages:** all. Published from `website/src/content/site-config.ts` (`contact.email` / `contact.phone`) — brochure and site must be changed together if the details ever move.

### C-018 — Technical specifications (voltage, power, metals, chemistry)
- **Original:** `TS` values (110–230 V AC / 24 V DC, 75 W, 30 psi, Cu–Ag–Zn, Cu 0.3–0.4 ppm, Cl ~1.0 ppm, pH 7.2–7.6).
- **Proposed safe wording:** publish as specifications with "typical/subject to model" qualifier.
- **Category:** technical spec. **Source:** `TS`.
- **Evidence available:** document. **Status:** `qualified` → `pending-client-confirmation` (confirm current/model-accurate).
- **Qualification required:** confirm per-model accuracy. **Client confirmation:** yes. **Legal review:** no.
- **Permitted pages:** Technology, Products. **Blocked reason:** none if confirmed; verify iron vs Cu/Ag/Zn discrepancy (`meeting-2.known.technology-known`).

---

## Summary
- **blocked:** C-001, C-005, C-007, C-008, C-012, C-013, C-014 (+ absolute forms of C-006)
- **contradictory:** C-002, C-004, C-009, C-010
- **pending-evidence:** C-004 (after reconciliation), C-007, C-011
- **pending-client-confirmation:** C-015, C-016, C-018 *(C-017 resolved 2026-08-19 — contact phone/email confirmed)*
- **qualified (with rewording):** C-003 (historical), C-006, C-018
- **approved-source-fact:** C-017 (contact phone/email, confirmed 2026-08-19). All others still require confirmation/evidence/legal sign-off.
