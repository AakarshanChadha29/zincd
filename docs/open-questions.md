# Open Questions — Zinc'd

Everything the client must confirm or supply. Items are `missing` (blank field) or `client-entered-unconfirmed`/`provisional-logicform-analysis` requiring confirmation. Cited to JSON keys. **Blank fields are treated as missing — no answer is inferred from related values.**

## P0 — Blocks any public launch

1. **Official legal name & spelling** — confirm "Zinc'd LLC" vs "Zincd" vs "Zinc'd Pool" (`meeting-1.known.company-name`, `meeting-4.client.official-name` blank, `meeting-4.known.naming-known`).
2. **Official contact details** — final domain, mailbox owner, phone (flyer phone `123-456-7890` is placeholder), email info@zincd.com (`meeting-4.client.official-contact` blank, `meeting-5.known.recipient-known`).
3. **Registered address** — confirm Puyallup, WA address, spelling and suite (`meeting-1.known.company-address`).
4. **Certification status** — EPA / ISO / CE / PBTI: registered, in-process, or not held? Provide certificates (`meeting-2.known.cert-known`; `meeting-2.doc.certificates`="Not requested"). Client's own stated risk: "Certification and licsencing" (`meeting-1.client.risks`).
5. **Patent status** — patented vs patent-pending; provide filing/registration numbers (`meeting-2.known.patent-known`; `meeting-2.doc.patent-files`="Not requested").
6. **Approved claims list** — which efficacy/savings claims may be published, with evidence (`meeting-2.joint.claims-green`/`claims-red` blank; `meeting-2.joint.legal-review` blank).
7. **Legal entity / licenses** — outstanding (`meeting-1.doc.legal-entity`="Requested").

## P1 — Product & evidence

8. Confirmed metals: Cu/Ag/Zn only, or also iron? Resolve "ionizer" vs "mineralizer" wording (`meeting-2.known.technology-known`; `meeting-2.client.mechanism` blank).
9. Chlorine reality: exact reduction % and whether residual chlorine is required (PDF says ~1.0 ppm) (`meeting-2.client.chlorine-reality` blank).
10. Models/SKUs & specifications beyond the PDF; sizing per pool volume (`meeting-2.client.models-specs` blank).
11. Lab test reports / efficacy validation ("provided separately" in PDFs, not supplied) (`meeting-2.doc.lab-reports`, `meeting-2.client.claim-evidence` blank).
12. Warranty terms confirmation (PDF: anode 5–10 yr, electronics 3 yr) (`meeting-2.client.warranty` blank; `meeting-2.doc.warranty-file`).
13. Installation & failure-support process (`meeting-2.client.installation`, `meeting-2.client.failure-support` blank).
14. Cost/ROI source data — reconcile conflicting monthly figures (`meeting-2.client.cost-source` blank; `meeting-2.doc.cost-workbook`).
15. NASA basis — confirm only the historical silver-ion context; no "NASA approved/technology" claim (`meeting-2.client.nasa-source` blank).
16. Environmental proof (`meeting-2.client.environmental-proof` blank).
17. Case studies / testimonials with **written permission** (Army bases, Chandigarh, "R. Sharma") (`meeting-2.client.case-studies` blank; `meeting-2.doc.case-files`).

## P2 — Market, brand, content

18. Business description, launch goal, 3-year ambition (`meeting-1.client.business-description|launch-goal|three-year-ambition` blank).
19. Contract scope & budget confirmation (`meeting-1.known.contract`; `meeting-1.client.budget` blank).
20. Decision-maker titles/authority for Bharati, Simran Josan, Mara (`meeting-1.known.contacts`).
21. Priority segments & geography; pricing model; competitors (`meeting-3.client.*` all blank).
22. Brand personality, visual references, photography direction (`meeting-4.client.brand-personality|visual-references|photography` blank).
23. Confirmed sitemap, CTA system, content ownership (`meeting-4.joint.sitemap|cta-system|content-ownership` blank).

## P3 — CRM, automation, launch

24. Sales process, lead types, pipeline stages, qualification, assignment, SLAs (`meeting-5.client.*` blank).
25. CRM tool selection and named users/permissions (`meeting-5.joint.crm-tool` blank; `meeting-5.known.roles-known`).
26. Three email workflows + six Google Workspace templates content (`meeting-5.joint.workflow-1|2|3|six-emails` blank).
27. Chatbot scope, approved sources, prohibited topics, consent (`meeting-5.client.chatbot|consent` blank).
28. Launch date, owner, ad budget, audience, support hours, training (`meeting-6.client.*` blank).
29. Domain/registrar access, analytics access, ad-account access (`meeting-1.doc.account-list`="Requested"; `meeting-6.doc.*`).

## Access & source-control
30. Confirm Google Drive + WhatsApp as source of truth and provide access (`meeting-1.joint.source-truth`).
31. Populate `actions.*` — currently every task/owner/due is blank across all six meetings.
