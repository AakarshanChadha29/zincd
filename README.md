# Zinc'd

Full-stack website workspace for the Zinc'd project.

## Repository Layout

| Path | Purpose | In Git? |
|------|---------|---------|
| `website/` | The production Next.js application (App Router, TypeScript, Tailwind CSS). | Yes |
| `source/client/` | Private client material — discovery notes, PDFs, and images. | No (ignored) |
| `reference/` | Reference implementations used for inspiration only. Reference-only, never modified. | No (ignored) |
| `docs/` | Project decisions, status, audits, and the environment baseline. | Yes |
| `.cursor/` | Cursor configuration and rules. Installed skill files under `.cursor/skills/` are excluded from Git. | Partial |

### `website/`

Contains the production application. This is the only deployable artifact in the
repository. It was scaffolded with `create-next-app` using the App Router,
TypeScript, Tailwind CSS, ESLint, a `src/` directory, npm, and the `@/*` import
alias.

Common commands (run from `website/`):

```bash
npm run dev     # start the local dev server
npm run lint    # run ESLint
npm run build   # produce a production build
```

### `source/client/`

Holds **private client material** and is **excluded from Git**:

- `source/client/discovery/` — client discovery information
- `source/client/documents/` — client PDFs
- `source/client/images/` — client images

Do not commit anything from this directory.

### `reference/`

Contains **reference implementations** (e.g. the Arroyo website) used for
inspiration and comparison only. It is **excluded from Git** and must never be
modified or copied wholesale into the Zinc'd website.

### `docs/`

Contains **project decisions and audits**, including:

- `docs/project-status.md` — current phase and progress log
- `docs/environment-baseline.md` — exact recorded tool and package versions

## Status

This repository is currently at the **bootstrap** phase. Branding, homepage
sections, 3D, forms, backend integrations, animations, and final content have
**not** been implemented yet. See `docs/project-status.md` for details.
