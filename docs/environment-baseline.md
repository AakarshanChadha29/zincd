# Environment Baseline

Captured at bootstrap of the Zinc'd website workspace.

## Runtime

| Tool | Version |
|------|---------|
| Node.js | v20.9.0 |
| npm | 10.1.0 |

> Note: A non-blocking `EBADENGINE` warning is emitted because a transitive dev
> dependency (`eslint-visitor-keys`) prefers Node `^20.19.0 || ^22.13.0 || >=24`.
> The current Node version (`v20.9.0`) still lints and builds successfully. Consider
> upgrading Node to `20.19+` or `22.13+` before production hardening.

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
- Turbopack: not enabled (default webpack build for baseline stability)

## Not Yet Installed (intentionally deferred)

Three.js, Supabase, Resend, Lenis, a CMS, an ORM, and shadcn/ui are intentionally
NOT installed in this bootstrap phase.
