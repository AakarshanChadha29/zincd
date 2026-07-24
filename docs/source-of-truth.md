# Source of Truth — Zinc'd

Consolidated, classified record of what is actually known. **Nothing here is approved for publication** unless explicitly stated; most items require client confirmation and/or legal review (see `docs/claims-register.md`).

Source priority applied (highest first):
1. Explicit client-entered answers in `zincd-discovery.json` (`*.client.*`, `*.joint.*`)
2. Client technical documents (PDFs in `source/client/documents/`)
3. Client visual materials (`source/client/images/`)
4. Provisional Logicform analysis (`*.known.*`)
5. Arroyo — **engineering reference only, never Zinc'd fact**

## A. Client-entered (unconfirmed) — priority 1

| Item | Value | Key | Class |
|---|---|---|---|
| Product (client words) | "Pool system product" | `meeting-1.client.product-list` | client-entered-unconfirmed |
| Approvers | "Bharti and SImran" | `meeting-1.client.approvals` | client-entered-unconfirmed |
| Communication cadence | "Weekly update meeting" | `meeting-1.client.communication` | client-entered-unconfirmed |
| Top client risk | "Certification and licsencing" | `meeting-1.client.risks` | client-entered-unconfirmed |
| Source of truth (assets) | "Google drive and whatsapp" | `meeting-1.joint.source-truth` | client-entered-unconfirmed |
| Approval model | "Bharati or Simaran" | `meeting-1.joint.approval-model` | client-entered-unconfirmed |

> Note: the client's own top-stated risk is **"certification and licensing"** — consistent with the certification contradictions found in materials (see claims register).

## B. Technical document facts — priority 2 (`source-document-fact`)

These are facts *as stated in the client's PDFs*. They describe the product's documented design; efficacy/marketing numbers still require independent evidence before publication.

### From `TECHNICAL SPECIFICATION 2.pdf`
- Four product series covering domestic to Olympic-size pools; suitable for all circulation flow rates.
- Input voltage AC 110–230 V; operating voltage 24 V DC; max pressure up to 30 psi; max power 75 W.
- Housing: stainless steel. Electrode diameter 100 mm. Electrodes: **Copper, Silver and Zinc alloy anodes**.
- Control: microcontroller-based PWM ionization control.
- Components: Cu–Ag–Zn ionization cell, control panel, rechargeable battery, charger, LCD, electronic monitoring.
- **Residual chlorine of ~1.0 ppm is still recommended/required** ("Why is Residual Chlorine Still Required?").
- Recommended chemistry: Copper 0.3–0.4 ppm; Free residual chlorine ~1.0 ppm; pH 7.2–7.6.
- Testing kit supplied (copper, free chlorine, pH). Schedule: copper daily, free chlorine daily, pH weekly.
- "Performance validation data and treatment efficacy claims will be provided separately" (i.e. **not yet supplied**).

### From `MAINTENANCE REQUIREEMNT 2.pdf`
- Minimal maintenance; routine task = periodic cleaning of the Cu–Ag–Zn anode; control panel alerts when cleaning needed.
- Warranty: anode 5–10 years (model/conditions dependent); electrical/electronic components 3-year against manufacturing defects; standard exclusions apply.
- Replacement (not repair) policy for covered defects.
- NASA connection + environmental benefits "will be provided separately" (**not yet supplied**).

### From `HISTORICAL BACKGROUND 2.pdf`
- NASA link is **historical** and relates to **drinking-water disinfection in spacecraft**, "not to the invention of the technology itself."
- 1960s–70s NASA used **silver ion** disinfection in potable water systems (incl. Apollo). Copper–silver ionization was developed subsequently.
- → Any "NASA technology / NASA approved" marketing is **not supported** by this document.

### From `Zincd_Comparison_Chart 2.pdf`
- Comparison table (Chlorine vs Ozonization vs "Zinc'd Ionization"). Note the brand spelling **"Zinc'd"** here.
- Contains marketing-grade claims presented as fact: "Safe, non-irritating", "Chemical Byproducts: None", "Effectiveness Against Biofilm: Excellent", "Monthly Cost (Est.) $76–$160" vs chlorine "$585–$950". **These are vendor claims, not independent evidence** — see claims register (contradictory / pending-evidence).

## C. Visual materials — priority 3
See `docs/asset-register.md` for the full classified inventory. Key facts:
- A **Zinc'd wordmark logo** exists (`PHOTO-2026-06-15-16-27-49.jpg`) — brand/logo files marked "Received" in JSON.
- Marketing flyers and packaging exist but embed **unverified/blocked claims** (EPA Registered, 90% less chlorine, named testimonial, savings figures).
- One product photo is **Arroyo-branded** and requires rebranding before any Zinc'd use.

## D. Provisional Logicform analysis — priority 4
All `*.known.*` fields (company name/address, contacts, contract value, ICPs, pages, features, CRM, automation, launch/maintenance). **Every one carries `confirmation: "Needs confirmation"`.** Treat as working hypotheses only. Full list in `docs/discovery-audit.md` §3.

## E. Reference (Arroyo) — priority 5
Used only for architecture/engineering patterns in `docs/arroyo-reference-audit.md`. **No Arroyo content, brand, contact detail, claim, or copy may be treated as a Zinc'd fact or copied into the Zinc'd website.**

## Naming & contact — current best understanding (all unconfirmed)
- Brand spelling varies: "Zincd", "Zinc'd", "Zinc'd Pool" (`meeting-4.known.naming-known`). Logo + comparison chart use **"Zinc'd"**.
- Candidate domains: zincd.com, zincd.net, zincdpool.com, zincdwater.com (`meeting-4.known.naming-known`). Flyers show `zincdpool.com` / `www.zincd.net`.
- Candidate email: info@zincd.com (`meeting-5.known.recipient-known`). Phone `123-456-7890` on flyers is a **placeholder** — do not publish.
- Address: Puyallup, WA (unconfirmed; spelling/suite flagged in JSON).
