# Route Status — Zinc'd (Phase 4 — design + content implemented)

> **Update:** All public routes now ship a finished visual design and
> claims-safe draft content built to `docs/design-system.md`,
> `docs/motion-system.md`, `docs/content-tone-and-messaging.md` and the
> `docs/claims-register.md` allowances. Copy is a conservative, claims-safe
> **draft** — it still requires client confirmation and legal green-list before
> being treated as final/approved. No blocked or contradictory claims are
> published (efficacy %, savings figures, EPA/patent/NASA-endorsement, lab
> results, testimonials, ratings, "chemical-free"). Placeholder scaffolding
> (`page-shell`, `route-placeholders`) has been removed.
>
> New building blocks live in `website/src/components/blocks/*`,
> `website/src/components/graphics/*` (original ionization-cell schematic), and
> all claims-safe copy/specs are centralized in
> `website/src/content/product-data.ts`.

Legend:

- **design-implemented** — finished visual design shipped
- **content-draft** — claims-safe draft copy shipped (pending client/legal sign-off)
- **shell-complete** — route file, metadata, shell present
- **backend-not-required** — static marketing route
- **backend-later** — will need API/storage/email later
- **backend-wired** — server endpoint implemented and verified

Non-page route: `POST /api/leads` — lead intake for the contact form (all three
intents). See `docs/project-status.md` for behaviour and required env vars.

| Route | Shell | Content | Design | Backend |
|---|---|---|---|---|
| `/` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/technology` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/product` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/applications` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/applications/residential` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/applications/hotels-resorts` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/applications/commercial` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/applications/fitness-wellness` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/distributors` | shell-complete | content-draft | design-implemented | backend-not-required (links to `/contact?intent=partner`; no form of its own) |
| `/installation-maintenance` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/faq` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/about` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/contact` | shell-complete | content-draft | design-implemented | **backend-wired** (`POST /api/leads`; delivery off until env vars set) |
| `/legal` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/privacy` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/terms` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/product-disclaimer` | shell-complete | content-draft | design-implemented | backend-not-required |
| `/warranty` | shell-complete | content-draft | design-implemented | backend-not-required |
| `not-found` | shell-complete | n/a | shell design | backend-not-required |

Deferred routes (not created): `/cost-savings`, `/case-studies`, `/pricing`, `/book`, `/shop`, `/amazon`, `/resources`.
