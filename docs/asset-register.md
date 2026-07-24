# Asset Register — Zinc'd

Classified inventory of `source/client/images/`. Dimensions read once via `sips`; the 25 MB oversized file was **not** fully decoded (classified from metadata + filename) to control cost. Each item is tagged with a classification and a usage decision. Claims embedded in assets are governed by `docs/claims-register.md`.

Classification options: approved-logo-candidate · product-reference · arroyo-branded-product-requiring-rebranding · flyer/reference-layout · packaging-reference · technical-diagram · unsuitable/duplicate · final-production-approval-required.

| # | File | Dimensions | Classification | Notes / embedded claims | Usage decision |
|---|---|---|---|---|---|
| 1 | `PHOTO-2026-06-15-16-27-49.jpg` | 1600×666 | **approved-logo-candidate** + final-production-approval-required | Zinc'd wordmark (blue) with green/blue water-drop over the "i". Brand/logo files marked "Received" (`meeting-1.doc.logo-files`, `meeting-4.doc.brand-vector`). | Candidate primary logo. Obtain **vector (SVG/AI)** master; confirm canonical spelling (C-016). Raster JPG unsuitable for production scaling. |
| 2 | `PHOTO-2026-07-03-20-49-24.jpg` | 1600×719 | **packaging-reference** + final-production-approval-required | "Zinc'd POOL CARE" carton dieline (Front/Back/Left/Right). Embeds "90% Savings", "Less Chemicals", ISO/CE marks, "Save 36,845/-month", "reduce chlorine usage up to 90%". | Reference only for structure. Claims **blocked/contradictory** (C-004, C-005, C-010, C-001). Do not reuse claims. |
| 3 | `PHOTO-2026-07-03-21-34-23.jpg` | 800×1200 | **flyer/reference-layout** | Zinc'd Pool flyer: "Crystal Clear Water. 90% Less Chlorine", EPA Registered, Certified Lab Results, Google 5-star, "$180+/Month" savings, "$8–$20", placeholder phone `123-456-7890`, zincdpool.com. | **Blocked from publication** (C-001, C-004, C-011, C-012, C-010, C-017). Layout inspiration only. |
| 4 | `PHOTO-2026-07-03-21-34-42.jpg` | 1024×1536 | **flyer/reference-layout** | Zinc'd Pool flyer v2: named testimonial "R. Sharma, Resident", PBTI/Certified Lab Tested, control-system diagram, placeholder phone, zincdpool.com. | **Blocked** (C-013 named testimonial, C-011, C-017). Layout inspiration only. |
| 5 | `PHOTO-2026-07-22-23-15-23.jpg` | 1024×1536 | **arroyo-branded-product-requiring-rebranding** | Product photo: "Arroyo Technologies Pvt. Ltd. — Water Chamber / Catalytic Super Softener 1.5" with Cu/Ag/Zn badges. | **Do not publish as-is.** Arroyo branding must be removed/replaced. Prefer original un-branded product photography. |
| 6 | `PHOTO-2026-07-22-23-30-52.jpg` | 1159×1356 | **technical-diagram** + final-production-approval-required | "Swimming Pool Ionizer Control System — Block Diagram" (Power Unit 110–230 V 50 Hz, Microcontroller, LCD, Pot/adjuster, Water Testing Circuit, Ionizer Controller, Electrodes). Unbranded; consistent with `TS`. | Reusable after technical accuracy sign-off and Zinc'd restyling. Verify "50 Hz" and voltages vs `TS`. |
| 7 | `Pool Care New Design..jpg` | 25069×11273 (~25 MB) | **flyer/reference-layout** + **unsuitable** (as-is) + final-production-approval-required | Oversized design artwork ("Pool Care New Design"). Not fully decoded (cost control). Likely full packaging/flyer master. | Unsuitable for web at native size; requires export/downscale + claim review before any use. |

## Findings
- **Logo:** only a raster JPG is confirmed present; request the **vector master** (JSON says logo/brand-vector "Received" — confirm the vector file itself is in the source library).
- **Product photography:** the only clear product photo (#5) is **Arroyo-branded** — a rebranding/reshoot gap for Zinc'd.
- **Every flyer/packaging asset embeds blocked or contradictory claims** — none may be reused verbatim; they are layout references only.
- **One reusable technical diagram** (#6) exists, pending accuracy confirmation and restyle.
- **File hygiene:** #7 is far too large for web; needs production export. Filenames are camera/export defaults — a naming convention should be adopted for production assets.

## Do-not-do (per phase rules)
- No repeated/expensive re-processing of these images was performed.
- No final production selection or editing performed in this phase.
