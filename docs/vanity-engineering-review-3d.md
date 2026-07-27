# Vanity Engineering Review — Three.js / Lenis proposal

**Date:** 2026-07-27
**Proposal reviewed:** Add Three.js (React Three Fiber) for a 3D product/logo
visual, and Lenis for smooth scrolling, to the Zinc'd marketing site.
**Verdict: REJECT both.** Priority 2's gate is not passed. Do not install.

---

## Summary

The site is a claims-governed marketing brochure for pool-treatment hardware.
Its job is to explain a Cu–Ag–Zn ionization cell to homeowners, pool operators,
and prospective distributors, and to route them into one contact form.

The proposal would add a real-time 3D rendering engine to that. The gap between
"explain a product and capture a lead" and "ship a WebGL runtime" is the vanity
surface area, and here it is unusually clear-cut, because **the asset that
would justify it does not exist.**

## Requirement-to-Complexity Ratio (RCR)

- **Current: 2/10.** Static Next.js routes, one dynamic endpoint, an SVG
  schematic, CSS keyframes, and `motion` for entrance reveals. Proportionate.
- **With the proposal: 7/10.** A GPU rendering pipeline, an asset build step
  (GLB, DRACO/meshopt compression), a scroll-hijacking layer, and per-device
  fallback heuristics — all serving one decorative hero element.

## Findings

### 1. The 3D asset does not exist, and inventing it is forbidden — V3, Compounding

`docs/3d-visualization-plan.md` already anticipated this and set the rule:
"No GLB/model yet → **Do not invent geometry; stay 2D until client delivers**."
The asset register confirms the position:

| Asset | State |
|---|---|
| Product model / GLB | Does not exist |
| Product photo (#5) | **Arroyo-branded** — "Do not publish as-is" |
| Logo | `public/brand/zincd-logo.jpg` — raster JPG; plan requires vector for texture maps |

So Three.js could only render geometry someone invented. On a site under an
explicit claims register — where efficacy figures, certifications, and lab
results are all blocked pending legal sign-off — shipping an *invented depiction
of the physical product* is the same category of risk as an unapproved claim,
just expressed in geometry instead of prose. It would also need re-doing the
moment the client delivers a real model.

This is V3 rather than V2 because it forces downstream complexity: a fabricated
model needs a fallback image, a reduced-motion still, mobile GPU heuristics, and
a lazy-loading boundary — scaffolding that exists solely to serve an asset that
should not ship in the first place.

### 2. Bundle cost is 4–5× the project's own stated budget — V2, Structural

Measured baseline: the homepage transfers **308 KB of JS across 17 requests**,
and the full client chunk surface is **349 KB gz**.

Registry sizes (measured, unpacked): `three` 22.1 MB, `@react-three/fiber`
2.1 MB, `@react-three/drei` 1.7 MB. Tree-shaken and gzipped, a realistic
`three` + R3F hero lands around **150–200 KB gz** before any loader, control,
or post-processing import — roughly a **50–60% increase** on everything the
site currently ships.

`docs/motion-system.md` sets the budget itself: "Motion-related JS on homepage:
prefer **< 50KB gz** incremental." The proposal exceeds its own project's
budget by 3–4×.

Current **LCP is 2404 ms** — already close to the 2.5 s "good" threshold. The
motion system requires that LCP is "not delayed by animation libraries
initializing." Adding a WebGL runtime pushes the wrong number in the wrong
direction on a page whose entire commercial purpose is getting a visitor to a
form.

### 3. Lenis contradicts a stated principle of the motion system — V2, Structural

`docs/motion-system.md` is unambiguous in three separate places: principle 3 is
"Native-feeling scroll; **no hijacking**"; the allowed list says "no Lenis
required for launch"; and the closing line reads "Lenis / GSAP ScrollTrigger:
**not required** for launch."

Lenis works by cancelling native scroll and re-driving it in JS. That is the
hijacking the document rules out. It also carries real accessibility cost —
scroll position, keyboard paging, and assistive-tech scroll behaviour all
become synthetic — which is a poor trade on a site that currently passes its
accessibility scans cleanly. There is no user problem here; smooth scrolling is
an aesthetic preference of the builder.

### 4. The existing SVG is not merely adequate — it is *better* for the job — V0

`src/components/graphics/ionization-cell.tsx` is 112 lines. It renders a
labelled cross-section: housing, inlet/outlet ports, six animated flow lines,
three electrode plates tagged Cu / Ag / Zn, rising mineral ions, and a PWM 24 V
control node. It is `role="img"` with a full text alternative, animated in pure
CSS at zero JS cost, and switched off under `prefers-reduced-motion`.

A photorealistic 3D render of a metal box would communicate *less*. The
schematic's whole value is that it cuts the box open and labels what is inside.
That is the actual explanatory job, and 3D is a worse tool for it.

## Diagnostic lenses

| Lens | Result |
|---|---|
| **Deletion** | Delete the 3D: no visitor notices; nothing becomes harder to understand. Fails immediately. |
| **Replacement** | The simpler thing already exists, already ships, and explains more. Not 90% of the job — more than 100%. |
| **New hire** | SVG + CSS keyframes: understood in minutes. R3F + GLB pipeline + device heuristics: not in an hour. |
| **Scale** | Justified by imagined future polish, not by any visitor need. |
| **Resume** | "Three.js on a pool-equipment brochure site" is the textbook case. This lens is the strongest signal in the review. |
| **Dependency** | 22.1 MB unpacked and a permanent upgrade treadmill (Three's `r` releases break regularly) to save zero lines. |

## Vanity debt estimate

Building it: roughly 3–5 days for a competent implementation with fallbacks,
reduced-motion handling, and mobile heuristics. Carrying it: an estimated **4–8
person-hours/month** — Three.js release churn, R3F peer-version pinning, and
re-verifying the fallback matrix on every visual change — none of it traceable
to a requirement.

## The hard question

> If the client delivered zero new assets for the next six months, would this
> site convert a single additional distributor lead because it had WebGL in it?

If not — and it would not — then the 3D work is being considered because 3D is
enjoyable to build, not because the site needs it.

---

## Kill criteria (if this is ever revisited)

**Tier 1 — Hard kill, non-negotiable.** Do not start, or shut down immediately,
if any holds:

- No client-approved GLB/product model exists. *(Currently true — this alone
  blocks the work.)*
- The 3D would depict Arroyo-branded or invented product geometry.
- Homepage LCP regresses past 2.5 s on a mid-tier mobile profile.
- WebGL is on the critical path for LCP, or a second WebGL canvas appears.

**Tier 2 — Review trigger, default to kill.** Burden of proof sits on
continuing:

- Incremental motion JS exceeds the 50 KB gz homepage budget.
- Any `prefers-reduced-motion` path stops rendering a static equivalent.
- CLS rises above 0 from the current measured baseline.
- Three.js/R3F version churn causes unplanned work in two consecutive sprints.

**Tier 3 — Soft-go, must earn continuation within 30 days.** If unmet, default
is removal:

- A real, client-approved model and a vector logo are both in hand.
- A static poster fallback of the identical composition ships alongside it.
- Lighthouse performance is no worse than the pre-3D baseline recorded here
  (CLS 0, LCP 2404 ms, 308 KB JS).
- A second person can modify and deploy the 3D scene unaided.

## What to do instead

Nothing needs adding. The motion system's own sequence puts "Evaluate Three.js
only if approved assets exist" last, and the assets do not exist. The site is
already inside every motion budget it set for itself. The correct action is to
spend the effort on Priority 3 quality work and revisit only when the client
delivers a real model — at which point this review's Tier 3 criteria apply.
