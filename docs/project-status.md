# Project Status

## Current Phase: Design + content build (claims-safe draft)

All public routes now ship a finished visual design and claims-safe draft
content, implementing the "Controlled Aquatic Engineering" system
(`docs/design-system.md`, `docs/motion-system.md`) and staying within
`docs/claims-register.md` allowances. See `docs/route-status.md` for the
per-route matrix. Highlights:

- Finished homepage (hero, value pillars, how-it-works, specs, series,
  applications, distributor band, FAQ, conversion band) with an original
  animated Cu–Ag–Zn ionization-cell SVG graphic (reduced-motion safe).
- Full designs for Technology, Product, Applications (+4 sectors),
  Distributors, Installation & Maintenance, FAQ, About, Contact (validated
  RHF + zod form with honeypot; submission backend still deferred), and the
  legal set (Legal, Privacy, Terms, Product Disclaimer, Warranty).
- All copy/specs centralized and claims-annotated in
  `website/src/content/product-data.ts`. No blocked/contradictory claims are
  published. Content remains a **draft pending client confirmation + legal
  green-list** before it is treated as approved.
- `npm run build`, `npm run lint`, and all 19 routes (HTTP 200) verified.

### Earlier: Bootstrap

The workspace was initialized.

### Completed in this phase

- [x] Verified existing workspace structure and source directories.
- [x] Scaffolded the Next.js application in `website/` (App Router, TypeScript,
      Tailwind CSS, ESLint, `src/`, npm, `@/*` alias).
- [x] Installed the approved initial dependencies (see
      `docs/environment-baseline.md`).
- [x] Cloned the Arroyo reference (shallow) into `reference/arroyo-website` and
      removed its nested Git metadata. Reference-only; not modified.
- [x] Initialized a single Git repository at the project root.
- [x] Configured the root `.gitignore` to exclude client material, references,
      installed skill files, dependencies, build output, and environment files.
- [x] Recorded the environment baseline and authored project docs.
- [x] Verified the app with `npm run lint` and `npm run build`.

### Explicitly deferred (not done yet)

- Branding, design tokens, and visual identity.
- Homepage sections and final content.
- 3D (Three.js), animations (Lenis / advanced motion work).
- Forms wiring, backend, email (Resend), database/CMS/ORM, Supabase.
- shadcn/ui initialization.
- Use of 21st.dev components.

### Open items / notes

- **Discovery filename:** Resolved. The discovery data was renamed (with
  approval) from `zincd-six-meeting-forms-2026-07-24.json` to the canonical
  `source/client/discovery/zincd-discovery.json`.
- **Node engine warning:** Resolved as a documented requirement — see the
  Priority 0 note below.
- Client discovery information is **unconfirmed** and must not be treated as
  approved until explicitly confirmed.

## Change log

### 2026-08-19 — Stage 2 Phases 2–4

- **`/cost-savings`:** interactive hotel planning model (chemical-only + all-in). Formulas from `hotel_pool_ionization_cost_savings.pdf`. 90% labeled as a chlorine purchasing assumption. Outputs are modeled, not guaranteed. Email-the-model reuses `/api/leads` `kind: resource`.
- **Buy path:** `BuyPanel` always offers **Request a quote** (`/contact?intent=specialist`) beside Stripe Buy (when set) or assessment (when unset). No invented checkout URL.
- **Media:** people-free client stills in `website/public/assets/`. Homepage hero is the commercial-pool still. Product gallery uses client hardware shots. Technology ships the claims-safe how-it-works SVG + unlabeled technical-flow render. Distributors use territory SVGs. Identifiable-people photos, Sukhvir card, `installed product.jpg` (LCD Cu 0.8 + "Prevents" copy), and the field MP4 (hand in frame) were **not** ingested.
- **Claims:** C-022 added; C-004/C-010 qualified exceptions documented. Raster PNG marketing panels skipped (OCR empty / SVG preferred).

### 2026-07-27 — Priority 0: environment & hygiene

No application code changed. Guardrails re-verified green.

- **Node engine requirement declared.** Added `engines.node`
  (`^20.19.0 || ^22.13.0 || >=24`) to `website/package.json` and pinned local dev
  to `22.13.0` in the new `website/.nvmrc`. `docs/environment-baseline.md` now
  records the range, the `nvm install && nvm use` step, and the real
  `EBADENGINE` offenders (`eslint-visitor-keys`, `shadcn`, `undici`,
  `validate-npm-package-name`) — the previously-documented single-dependency
  cause was incomplete. Installs are not blocked (no `.npmrc`, no
  `engine-strict`); the warnings are advisory and clear on `22.13.0`.
- **shadcn/ui init: verified unnecessary, deliberately not run.** shadcn is
  already effectively initialized (configured `components.json`, `@shadcn`
  registry resolving, `@import "shadcn/tailwind.css"` in `globals.css`,
  `lib/utils.ts`, and generated base-nova components in `src/components/ui/`).
  Re-running `shadcn init` would rewrite `globals.css` and destroy the Zinc'd
  design tokens, so it was skipped; use `npx shadcn@latest add <component>`.
  Rationale recorded in `docs/environment-baseline.md`.
- **Stale baseline note corrected.** Turbopack is in fact enabled — Next.js 16
  builds with it by default.
- **Verification.** `npm run build` succeeded (21/21 static pages, no warnings);
  all 18 public routes returned HTTP 200 and an unknown path correctly returned
  404. `npm run lint` is clean except for one pre-existing warning, below.

**Carried into Priority 1:** `npm run lint` reports one warning —
`react-hooks/incompatible-library` at
`website/src/components/blocks/contact-form.tsx:55`, where React Compiler skips
memoizing the component because `useForm().watch()` cannot be memoized safely.
It is a warning, not an error, and predates this change. The natural fix is
`useWatch` instead of `watch`, which will be handled while wiring the form
backend rather than as a drive-by edit here.

### 2026-07-27 — Priority 1: contact form backend

The `/contact` form now submits to a real server endpoint. Delivery is via
Resend and is **off until env vars are set** — see below.

**Added**

- `POST /api/leads` (`website/src/app/api/leads/route.ts`) — a Route Handler,
  chosen over a Server Action so the endpoint can return real HTTP semantics
  (`429` + `Retry-After`, `502`, `503`) and be exercised directly with `curl`.
  Order of checks: rate limit → body size → JSON parse → zod → honeypot →
  delivery config → send.
- `website/src/lib/leads/schema.ts` — one zod schema imported by **both** the
  client form and the route, so the two cannot drift. The server re-validates
  independently; the client copy is convenience, not a control.
- `website/src/lib/leads/email.ts` — Resend delivery, plus HTML escaping and
  mail-header sanitising.
- `website/src/lib/leads/rate-limit.ts` — per-IP fixed window, 5 requests per
  10 minutes.

**Decisions worth knowing**

- **No new dependency.** Resend is called through its REST API with `fetch`
  rather than the `resend` SDK — it is a single POST, and this keeps the
  dependency list untouched and the provider swappable. Say the word if you'd
  rather have the SDK.
- **Rate limiting is best-effort, by design.** The counter is in-process, so on
  Vercel it is effectively per-instance, not per-deployment. It dampens naive
  scripted abuse but is not a hard guarantee. The durable fix needs no code: a
  Vercel Firewall rate-limit rule on `/api/leads`. A shared store (Upstash
  Redis) is the alternative and would add a dependency plus a hosted service —
  not taken without approval.
- **Truthful success copy.** With no `RESEND_API_KEY`, the endpoint returns
  `503 { configured: false }` and the form says delivery isn't connected and
  nothing was sent or stored — matching the existing claims-safe posture and
  `site-config.ts` C-017 (contact details unconfirmed). Only a genuine provider
  success shows "enquiry sent". No published marketing claims changed.
- **Honeypot fixed while wiring it.** The field was `.max(0)` in the zod schema,
  which made a filled honeypot fail as an ordinary validation error — returning
  a `400` that names `company_website` and tells a bot exactly which field is
  the trap. It now validates as a normal optional string and the route drops it
  silently with a success-shaped `200`.
- **Header-injection hardening.** `name`/`email` flow into the mail subject and
  `reply_to`; CR/LF and control characters are stripped before they reach a
  header, rather than trusting the provider to do it.
- **Lint warning cleared.** The carried-over `react-hooks/incompatible-library`
  warning is gone — `watch("intent")` is now `useWatch`, which React Compiler
  can memoize.

**No separate `/distributors` form exists.** The plan called for wiring one, but
`/distributors` has no form — it links to `/contact?intent=partner`, and the
contact form already handles that intent. Rather than invent a second form, the
one endpoint serves all three intents and routes partner enquiries to
`LEAD_PARTNER_TO_EMAIL` when set. Deep-linked intent preselection verified.

**Environment variables** — documented in `website/.env.example`:
`RESEND_API_KEY`, `LEAD_FROM_EMAIL`, `LEAD_TO_EMAIL`, and optional
`LEAD_PARTNER_TO_EMAIL`. Server-only; no secrets committed.

Also fixed in passing: `website/.gitignore` ignored `.env*` with no exception,
so `.env.example` was untracked and the env-var documentation would never have
reached the repo. Added `!.env.example`; real `.env`, `.env.local`, and
`.env.production` are still ignored (verified).

**Verification**

- `npm run lint` clean (0 errors, 0 warnings). `npm run build` succeeds;
  `/api/leads` is dynamic, all 18 pages still static. All routes HTTP 200,
  unknown path 404 — checked against the **production** server.
- Endpoint: 400 on invalid payload (with per-field errors), 400 on bad enum,
  400 on malformed JSON, 405 on GET, 503 when unconfigured, 200 + silent drop
  on honeypot, 429 + `Retry-After` past the limit, per-IP isolation confirmed.
- Rate limiting verified against `next start`, not `next dev` — dev re-evaluates
  route modules on recompile, which resets in-memory state and makes the
  limiter look broken. Added a `zincd-web-prod` launch config for this.
- Email module unit-checked with a stubbed provider: config gating, partner
  inbox routing and fallback, HTML escaping of hostile input, 401/network/
  timeout/unparseable-body handling, and CRLF header-injection neutralisation.
- Browser: all four UI states exercised — validation errors (with
  `aria-describedby` + `aria-invalid` now wired), rate-limit error (announced
  via `aria-live`, input preserved), unconfigured acknowledgement, and success.
- `accesslint-scan` on `/contact`: **0 violations**, 94 rules. The scan covers
  the default render only; the new error-state note was checked by hand —
  16.63:1 contrast (AAA), `role="note"` inside an `aria-live="assertive"`
  region.

**Not verified:** a real end-to-end send. That needs a Resend API key and a
verified sending domain, which don't exist yet. Everything up to and including
the provider HTTP call is verified; only the provider's own acceptance is
outstanding.

### 2026-07-27 — Priority 2: motion & 3D polish — **gate not passed, nothing installed**

Priority 2 was gated on a `vanity-engineering-review` of the Three.js / Lenis
proposal. **The review rejects both.** Full reasoning, diagnostic lenses, and
kill criteria for any future revisit are in
`docs/vanity-engineering-review-3d.md`. No dependencies were added and no
application code changed.

The three decisive points:

1. **The 3D asset does not exist, and inventing it is forbidden.** There is no
   GLB. The only product photo is Arroyo-branded and unpublishable as-is. The
   only logo is a raster JPG where the plan requires a vector. `docs/3d-visualization-plan.md`
   already ruled on this: "Do not invent geometry; stay 2D until client
   delivers." On a site under an explicit claims register, shipping an invented
   depiction of the product is the same class of risk as an unapproved claim.
2. **Cost is 4–5× the project's own budget.** `docs/motion-system.md` sets
   "< 50KB gz incremental" for homepage motion JS. A tree-shaken `three` + R3F
   hero is ~150–200 KB gz — a ~50–60% increase on everything the site ships.
   Measured baseline: 308 KB JS / 17 requests on the homepage, 349 KB gz total
   chunks, LCP 2404 ms (already near the 2.5 s threshold).
3. **Lenis contradicts a stated principle.** The motion system says "Native-
   feeling scroll; no hijacking" and names Lenis as not required for launch, in
   two places. Lenis cancels native scroll and re-drives it in JS, with real
   accessibility cost, to solve no user problem.

**What was done instead:** verified the existing motion already meets Priority
2's acceptance criteria, so no work is outstanding.

- **CLS: 0** (zero layout shifts recorded on the homepage). LCP 2404 ms,
  DOMContentLoaded 414 ms — recorded here as the baseline for any future
  comparison.
- **`prefers-reduced-motion` respected at all three layers**, confirmed by
  source audit: `MotionConfig reducedMotion="user"` wraps the app so every
  Motion component honours it; all three CSS keyframe animations
  (`flow-drift`, `ion-pulse`, `ion-rise`) are set to `animation: none` in the
  reduced-motion block; and `Reveal` returns a plain, already-visible element
  on that branch rather than animating. `Reveal` also has an IntersectionObserver
  fallback timer so content can never be left invisible.
- The sticky header only transitions background/shadow/border colour on a
  passive scroll listener — allowed under the motion system's reduced-motion
  rules, and no scroll hijacking anywhere.

*Verification note:* reduced-motion coverage was confirmed by source audit
across all three layers, not by emulating the media query in a live browser —
the available browser tooling has no reduced-motion emulation. CLS/LCP figures
are from a production (`next start`) server on localhost.

### 2026-07-27 — 3D hero built, then relocated; new client documents received

**Direction change, mid-session.** The Three.js/Lenis proposal was rejected by
the vanity review above; the client then overrode that decision and approved
Three.js + React Three Fiber for an *abstract* ion-field visual (not a product
render, which stays blocked). It was built, and then — on a second instruction —
moved off the homepage: the homepage is not to be diagram-led. The 3D and the
schematic now both live on `/technology`.

**Added**

- `three@0.185.1` + `@react-three/fiber@9.6.1` (`@types/three` in devDeps).
  `drei` deliberately **not** installed — orbit is hand-rolled in ~20 lines
  rather than adding 1.7 MB.
- `src/components/graphics/ion-field-scene.tsx` — abstract Cu/Ag/Zn ion field:
  three metallic electrode plates, ~940 glowing ion sprites across two depth
  layers, hand-rolled drag-orbit with a constrained ambient sweep.
- `src/components/graphics/ion-field-stage.tsx` — capability gate + fallback.
  Renders the existing schematic SVG unless reduced-motion is off, WebGL is
  present, and the device clears memory/core/pointer heuristics; mounts WebGL
  only when near the viewport.
- `.pool-water` / `.pool-caustics` / `.ion-chamber` CSS utilities, built from
  existing primitives. **No design tokens were changed.**

**Homepage hero** is no longer diagram-led. The schematic panel was replaced
with a photography slot that currently renders a layered water treatment —
deliberately atmospheric rather than a grey placeholder — pending licensed pool
imagery. See "blockers" below.

**Verified:** lint clean; build succeeds; CLS **0**; the 228 KB gz `three` chunk
is isolated and absent from the initial load (235.9 KB JS at DOMContentLoaded).
Total chunk surface grew 349 → 585 KB gz, but that is availability, not
per-page cost.

**Build fix:** an empty `node_modules/@types/stats 2.js` directory (a macOS
" 2" duplicate artifact created during install, not in the lockfile) broke
`next build` — TypeScript auto-includes every `@types` folder and failed on
"Cannot find type definition file for 'stats 2.js'". Removed. If it recurs,
suspect a file-sync tool watching the project directory.

### Client documents received 2026-07-27 — assessment

Five PDFs (technical specification, plumber handbook, maintenance
requirements, historical background, comparison chart) plus product photos and
two marketing pamphlets.

**The documents largely confirm the existing draft content.** Every value in
`product-data.ts` — AC 110–230 V, 24 V DC, 75 W, 30 psi, 100 mm electrode,
stainless housing, PWM control, Cu 0.3–0.4 ppm, free chlorine ~1.0 ppm,
pH 7.2–7.6, anode 5–10 yr / electronics 3 yr warranty — matches the source
documents exactly. No corrections were needed.

**New material not yet in the site** (from the plumber handbook): pool-capacity
formulas by shape, the water-testing procedure (run filtration 30 min, sample
~18 in below the surface, away from inlets), an operational standards table,
and a post-storm shock protocol. This is strong, genuinely useful content for
`/installation-maintenance`.

**Discrepancy to resolve:** the technical specification gives pH 7.2–7.6; the
handbook's operational standard table gives pH 7.2–7.8. The site currently
publishes 7.2–7.6. Client to confirm which governs.

**Product change reported by the client:** the microcontroller/control panel is
now *in the anode*. Current site copy describes a separate control panel
(`systemComponents`, `installSteps`). Not yet changed — needs confirmation of
how it should be described before published copy is edited.

**⚠ The two pamphlets cannot be used as a copy source.** They carry claims the
claims register blocks outright: "90% Less Chlorine" (efficacy percentage),
"Cuts Costs on Chemicals" (savings), "PBTI Certified" / "Lab Tested" (lab
results and certification), named testimonials, "Trusted Nationwide — Indian
Army Bases" (endorsement), and "Eco-Friendly". The technical specification
itself states that *"performance validation data and treatment efficacy claims
will be provided separately"*, and the maintenance document says the
environmental statement "will be submitted separately" — i.e. the manufacturer
has not yet supplied the substantiation these pamphlets assert. None of it has
been published to the site.

**NASA:** the historical background document is careful and accurate — the
connection is historical, concerns silver-ion disinfection of spacecraft
potable water (including Apollo), and is explicitly *not* an endorsement nor
the origin of the technology. An accurate, non-endorsement framing is possible,
but it still needs legal sign-off; nothing published yet.

**Asset blockers unchanged and now confirmed by the supplied photos:** the
product images are Arroyo-branded ("Arroyo Technologies Pvt. Ltd. — Water
Chamber", "Catalytic Super Softener 1.5"). They cannot be published as-is, and
re-branding them is a photo-retouching/reshoot task, not a web-build task.
There is still no licensed lifestyle photography, which is the sole blocker on
the photography-led direction.

### 2026-07-27 — Higgsfield connected; generated photography now shipping

**Higgsfield MCP** added to `.mcp.json` (`https://mcp.higgsfield.ai/mcp`,
Streamable HTTP) and authenticated by the client. Seven companion skills
installed via `npx skills add higgsfield-ai/skills`; `.agents/` and
`.claude/skills/` are gitignored as vendor-managed code.

**Node upgraded to 22.13.0.** The skills CLI requires Node ≥22.20.0 and the
machine was on v20.9.0. nvm was installed but had no versions, so 22.13.0 was
installed — matching the `.nvmrc` and `engines` range set in Priority 0.
**EBADENGINE warnings went from 25 to 0**, and lint + build pass on it. The
Priority 0 Node item is now genuinely resolved, not merely documented.

**Four environment photographs generated and shipped**
(`soul_location` model, ~0.12 credits each):

| File | Scene |
|---|---|
| `public/img/pool-residential.jpg` | Hillside modern home, golden hour — homepage hero |
| `public/img/pool-resort.jpg` | Infinity edge over ocean, umbrellas |
| `public/img/pool-commercial.jpg` | Indoor lap pool, lane ropes, clerestory glazing |
| `public/img/pool-wellness.jpg` | Bright minimal hydrotherapy interior |

Downscaled to 1800px and JPEG q80 (234–407 KB source); `next/image` serves them
far smaller — the hero is **28 KB** as WebP at 828w. All four are `alt=""`
(decorative; the adjacent text carries the meaning) and the hero uses
`priority`.

**Claims posture:** the prompts deliberately excluded people, product,
equipment, text, badges and any before/after water. The images depict
*environments only*, so they assert nothing about the hardware's appearance or
performance. A generated "cloudy → clear" pool comparison would be an efficacy
claim in picture form and must never be produced.

**Superseded and removed:** `components/graphics/pool-scene.tsx` (the four
hand-built SVG scenes) — real photography replaced it, and leaving it would be
dead code. The `.pool-water` / `.pool-caustics` CSS utilities remain unused and
should be removed if no photography slot needs them.

**Verified:** lint clean, build succeeds, all 18 routes 200 / unknown 404, all
four images served and referenced, image optimizer confirmed working.

**Still outstanding for the client:** the Arroyo-branded product photography is
*not* solved by this — `higgsfield-product-photoshoot` is the next candidate,
but it needs a decision on what the Zinc'd unit should look like, which is a
branding call, not a web-build one.

### 2026-07-27 — Zinc'd-branded product imagery and 360° spin

**The Arroyo branding blocker is resolved.** Client confirmed the direction:
keep the existing form factor, replace the Arroyo labelling with Zinc'd.

**Spend: 44.2 credits** (balance 1200 → 1155.8) against a client cap of 120.

| Step | Model | Credits |
|---|---|---|
| Rebrand pass, 2 variants | `nano_banana_pro` (image-to-image) | 4 |
| Single-object 3D trial | `sam_3_3d` | 1 |
| 4K upscale of the still | `bytedance_image_upscale` | 2 |
| 3 isolated chamber views | `nano_banana_pro` | 6 |
| Multi-view textured mesh | `multi_image_to_3d` | 30 |
| (earlier) 10 environment photos | `soul_location` | ~1.2 |

**Assets added**

- `public/img/product-zincd.jpg` — both units, Zinc'd-branded, on white (189 KB)
- `public/img/product-chamber.jpg` — isolated chamber, straight-on (212 KB)
- `public/models/zincd-chamber.glb` — textured mesh, **757 KB**

**Two findings worth keeping**

1. **`sam_3_3d` costs 1 credit; `image_to_3d` costs 20–30.** But single-image
   reconstruction smeared the label texture badly — unusable where branding
   accuracy is the point. Generating three isolated views and running
   `multi_image_to_3d` (30 credits) produced a clean, legible mesh. Worth the
   30× price difference *for the product*; `sam_3_3d` remains fine for rough
   geometry.
2. **`@gltf-transform/cli` cut the mesh 3.04 MB → 757 KB (75%)** with
   `--compress quantize --texture-compress webp`, requiring no extra runtime.
   Draco reached 265 KB but needs a ~200 KB decoder shipped and wired, so the
   net saving did not justify the complexity. Three.js supports
   `KHR_mesh_quantization` and `EXT_texture_webp` natively.

**Components:** `product-spin-scene.tsx` (R3F + GLTFLoader, hand-rolled
turntable, material metalness tuned because photogrammetry bakes lighting into
the albedo and arrives matte white) and `product-spin.tsx` (the gate). Gating is
identical to the ion field — reduced-motion, WebGL, device capability,
near-viewport — with the isolated product still as the fallback. `/product`
hero now carries the spin instead of the schematic.

**Claims note:** unlike the abstract ion field, this *is* the product. The mesh
and stills must only ever be regenerated from client-approved artwork. The
current set derives from the client's own product photography with the label
changed — no geometry was invented.

**Verified:** lint clean, build passes, all 18 routes 200 / unknown 404, GLB and
optimized images serve correctly (product still is 17 KB as WebP at 828w).

## Next Phase (proposed, not yet started)

Design foundation and branding, informed by confirmed client discovery.
