# Discovery Audit — Zinc'd

Phase 1 evidence audit. **No public website pages are built in this phase.**

- Primary source: `source/client/discovery/zincd-discovery.json` (version 3, `exportedAt` 2026-07-24T09:19:48Z)
- Supporting: PDFs in `source/client/documents/`, images in `source/client/images/`
- Reference only: selected files in `reference/arroyo-website/` (engineering reference; **not** factual evidence about Zinc'd)

## 1. JSON structure

The file has four top-level keys: `activeMeeting` (`"meeting-2"`), `clientView` (`false`), `values` (flat dotted-key map), and `actions` (per-meeting task arrays). Each meeting namespace (`meeting-1` … `meeting-6`) contains:

- `status`, `date`, `attendees`, `summary`
- `known.*` — **provisional Logicform analysis** (`answer` / `confirmation` / `correction`). Every `known.*.confirmation` in the file reads `"Needs confirmation"`.
- `client.*` — **client-entered answers** (mostly blank).
- `joint.*` — jointly agreed outputs (mostly blank).
- `internal.*` — Logicform internal working notes (process descriptions, not client facts).
- `doc.*` — document intake tracking (`status` + `note`).

Because `clientView` is `false` and **no** `known.*.confirmation` is set to a confirmed value, nothing in the file qualifies as `confirmed-client-answer`.

## 2. Meeting-completion summary

| Meeting | `status` | Client fields populated | Assessment |
|---|---|---|---|
| meeting-1 (Charter/company) | `Ready for meeting` (key `meeting-1.status`) | `product-list`="Pool system product", `approvals`="Bharti and SImran", `communication`="Weekly update meeting", `risks`="Certification and licsencing"; joint `source-truth`="Google drive and whatsapp", `approval-model`="Bharati or Simaran" | ~30% — sparse client input; core business/launch/budget blank |
| meeting-2 (Product/claims) | `Logicform working` (date 2026-07-10) | none (`meeting-2.client.*` all blank) | ~15% — only provisional analysis; zero client confirmation |
| meeting-3 (Market/sales) | `Not prepared` | none | ~5% — provisional ICP list only |
| meeting-4 (Website/brand) | `Not prepared` | none | ~5% — provisional pages/features/naming only |
| meeting-5 (CRM/automation) | `Not prepared` | none | ~5% — provisional CRM/pipeline only |
| meeting-6 (Launch/maintenance) | `Not prepared` | none | ~5% — provisional launch/maintenance only |

`actions.meeting-1` … `actions.meeting-6`: every entry has blank `task`/`owner`/`due` and `status`="Open" — **no action items recorded**.

### Estimated overall discovery completeness: ~10%
- **Confirmed client answers: 0%** (nothing confirmed; `clientView`=false).
- **Client-entered (unconfirmed): ~6 sparse fields**, all in meeting-1.
- Remaining populated content is provisional Logicform analysis (`known.*`) or internal process notes (`internal.*`) — neither is client-approved fact.

## 3. Extracted items (by category, with classification)

Classification legend: `confirmed-client-answer` / `client-entered-unconfirmed` / `source-document-fact` / `provisional-logicform-analysis` / `contradictory` / `missing` / `blocked-from-publication`.

### Company information
- Name "Zinc'd LLC" — `provisional-logicform-analysis` (`meeting-1.known.company-name`, "Needs confirmation").
- Address "13613 Meridian Avenue East, Suite 250, Puyallup, WA 98373, USA — spelling and suite must be confirmed" — `provisional-logicform-analysis` (`meeting-1.known.company-address`).
- Business description / launch goal / 3-year ambition — `missing` (`meeting-1.client.business-description|launch-goal|three-year-ambition` blank).

### Decision makers
- "Bharati, Simran Josan and Mara" (titles/authority unconfirmed) — `provisional-logicform-analysis` (`meeting-1.known.contacts`).
- Approvals "Bharti and SImran" — `client-entered-unconfirmed` (`meeting-1.client.approvals`); approval model "Bharati or Simaran" — `client-entered-unconfirmed` (`meeting-1.joint.approval-model`).

### Contract scope
- "Advanced Web Platform + Marketing & Sales Enablement + 12-month maintenance. Net first-year value: USD 35,838." — `provisional-logicform-analysis` (`meeting-1.known.contract`). Budget field `missing` (`meeting-1.client.budget`).

### Product definition
- "Swimming-pool water-treatment system using ionization/mineralization technology" — `provisional-logicform-analysis` (`meeting-1.known.initial-product`).
- Client product list "Pool system product" — `client-entered-unconfirmed` (`meeting-1.client.product-list`).
- Models/specs/mechanism/installation/maintenance/warranty — `missing` (`meeting-2.client.*` all blank), though partially covered by PDFs (see `docs/source-of-truth.md`).

### Intended markets
- Priority ICPs (distributors, pool builders, hotels/resorts, water parks, facility managers) — `provisional-logicform-analysis` (`meeting-3.known.priority-known`).
- Customer types "retail and wholesale" — `provisional-logicform-analysis` (`meeting-1.known.customer-types`).
- Sales history, best customers, pricing, competitors, geography — `missing` (`meeting-3.client.*` blank).

### Design direction
- "Clean, premium, corporate and luxury; blue, green and aquamarine" — `provisional-logicform-analysis` (`meeting-1.known.visual-direction`).
- Brand personality, visual references, photography — `missing` (`meeting-4.client.*` blank).

### Proposed routes (pages)
- Home, About, Services/Products, How It Works, Pricing, FAQ, Contact, Booking, Case Studies, Legal, Launch Landing, Cost Savings, Become a Distributor — `provisional-logicform-analysis` (`meeting-4.known.pages-known`). See `docs/proposed-site-map.md`.

### Proposed features
- Contact form, quote form, booking, newsletter, payment link, analytics, WhatsApp, possible e-commerce/Amazon link — `provisional-logicform-analysis` (`meeting-4.known.features-known`).

### CRM requirements
- Roles Super Admin/Admin/Sales Rep — `provisional-logicform-analysis` (`meeting-5.known.roles-known`).
- Double pipeline (B2B/B2C) — `provisional-logicform-analysis` (`meeting-5.known.pipeline-known`).
- Recipient info@zincd.com — `provisional-logicform-analysis` (`meeting-5.known.recipient-known`).
- CRM users, lead data, stages, qualification — `missing` (`meeting-5.client.*` blank).

### Automation requirements
- "Three automated email workflows" + "six Google Workspace sales emails" — `provisional-logicform-analysis` (`meeting-5.known.emails-known`).
- Lead sources: Website, LinkedIn, Meta Ads, tentative Amazon — `provisional-logicform-analysis` (`meeting-5.known.sources-known`).

### Launch & maintenance expectations
- Launch channels (website, landing pages, LinkedIn, Meta, email, outreach, possible Amazon) — `provisional-logicform-analysis` (`meeting-6.known.launch-known`).
- 12-month maintenance from go-live — `provisional-logicform-analysis` (`meeting-6.known.maintenance-known`).
- Acceptance & third-party cost terms — `provisional-logicform-analysis` (`meeting-6.known.acceptance-known`, `meeting-6.known.third-party-known`).
- Launch date, owner, ad budget, support hours — `missing` (`meeting-6.client.*` blank).

## 4. Document intake status (from `*.doc.*`)

- **Received:** logo files (`meeting-1.doc.logo-files`), product catalog (`meeting-1.doc.product-catalog`), source library (`meeting-1.doc.source-library`, note "Pictures of the product and description Technical"), brand vector (`meeting-4.doc.brand-vector`).
- **Requested (outstanding):** legal entity / license & certificates (`meeting-1.doc.legal-entity`), account/domain handle list (`meeting-1.doc.account-list`).
- **Not requested yet (evidence gaps):** spec sheets, **lab reports**, **certificates**, **patent files**, manuals, safety docs, warranty file, case files, cost workbook (`meeting-2.doc.*`) — critical for claim substantiation.

## 5. Cross-references
- Contradictions are enumerated in `docs/claims-register.md` and summarized in `docs/project-risk-register.md`.
- Confirmed vs. provisional facts are consolidated in `docs/source-of-truth.md`.
- Blank/unknown fields requiring client input are listed in `docs/open-questions.md`.
