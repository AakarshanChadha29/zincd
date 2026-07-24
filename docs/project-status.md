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
- **Node engine warning:** Node `v20.9.0` triggers a non-blocking `EBADENGINE`
  warning from a transitive dev dependency. Lint and build succeed. Consider
  upgrading Node to `20.19+` / `22.13+`.
- Client discovery information is **unconfirmed** and must not be treated as
  approved until explicitly confirmed.

## Next Phase (proposed, not yet started)

Design foundation and branding, informed by confirmed client discovery.
