# Environment Baseline

Captured at bootstrap of the Zinc'd website workspace.

## Runtime

| Tool | Version |
|------|---------|
| Node.js (required) | `^20.19.0 \|\| ^22.13.0 \|\| >=24` |
| Node.js (pinned for local dev) | 22.13.0 — see `website/.nvmrc` |
| Node.js (machine at baseline capture) | v20.9.0 |
| npm | 10.1.0 |

The supported range is declared in `website/package.json` under `engines.node`, and
`website/.nvmrc` pins the local development version so `nvm use` selects it:

```bash
cd website && nvm install && nvm use
```

> **Node engine warning (resolved as "documented", not yet "fixed on this machine").**
> On Node `v20.9.0`, `npm install` emits non-blocking `EBADENGINE` warnings. The
> current offenders are `eslint-visitor-keys@5.0.1`, `shadcn@4.14.1`,
> `undici@7.28.0`, and `validate-npm-package-name@7.0.2` — plus `website@0.1.0`
> itself now that `engines` is declared. Lint and build still succeed on
> `v20.9.0`; upgrading to the pinned `22.13.0` clears all of them. The warnings
> are advisory only — there is no `.npmrc` and `engine-strict` is not enabled, so
> installs are not blocked.

## Framework & Core Libraries (as installed by `create-next-app`)

| Package | Version |
|---------|---------|
| next | 16.2.11 |
| react | 19.2.4 |
| react-dom | 19.2.4 |
| typescript | 5.9.3 |

## Approved Initial Dependencies

| Package | Version |
|---------|---------|
| motion | 12.42.2 |
| zod | 4.4.3 |
| react-hook-form | 7.82.0 |
| @hookform/resolvers | 5.4.0 |
| lucide-react | 1.26.0 |
| clsx | 2.1.1 |
| tailwind-merge | 3.6.0 |
| @vercel/analytics | 2.0.1 |
| @vercel/speed-insights | 2.0.0 |

## create-next-app Configuration

- App Router: enabled
- TypeScript: enabled
- Tailwind CSS: enabled
- ESLint: enabled
- `src/` directory: enabled
- Package manager: npm
- Import alias: `@/*`
- Turbopack: enabled — this was recorded as "not enabled" at bootstrap, but
  Next.js 16 uses Turbopack for `next build` by default and the build output
  confirms it (`▲ Next.js 16.2.11 (Turbopack)`).

## shadcn/ui status

shadcn/ui is **already effectively initialized**; a fresh `shadcn init` is neither
needed nor safe to run:

- `website/components.json` is fully configured (style `base-nova`, RSC, Lucide,
  `@/*` aliases, `@shadcn` registry resolves).
- `src/app/globals.css` already does `@import "shadcn/tailwind.css"` and then
  defines the bespoke Zinc'd tokens over it.
- `src/lib/utils.ts` (the `cn` helper) exists.
- `src/components/ui/*` already holds generated base-nova components built on
  `@base-ui/react` (`accordion`, `badge`, `button`, `card`, `separator`, `sheet`)
  alongside Zinc'd-specific ones (`glass-panel`, `section-heading`,
  `status-note`, `technical-label`, `audience-chip`).

Re-running `shadcn init` would rewrite `globals.css` and clobber the design
tokens. Add components with `npx shadcn@latest add <component>` instead, then
re-check them against `docs/design-system.md`.

## Not Yet Installed (intentionally deferred)

Three.js, Supabase, Resend, Lenis, a CMS, and an ORM are intentionally NOT
installed in this bootstrap phase. (shadcn/ui is installed — see above.)
