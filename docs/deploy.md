# Deploy workflow — Zinc’d

Goal: **edit in Cursor or Claude Code → commit → push to GitHub → Vercel auto-deploys → live URL updates.**

## Canonical live URL

https://website-ten-lac-91.vercel.app

Also aliased as: https://website-aakarshanchadha29s-projects.vercel.app

## How it is wired

| Piece | Setting |
|---|---|
| GitHub repo | `AakarshanChadha29/zincd` |
| Production branch | `main` |
| Vercel project | `website` |
| Root Directory | `website` (Next.js app lives here; repo root is the monorepo) |
| Local link | `.vercel/` at **repo root** (not inside `website/`) |

Do **not** run `vercel link` from `website/` anymore — that created a broken `website/website` path once Root Directory was set.

## Everyday workflow

```bash
# from repo root
git add …
git commit -m "…"
git push origin main
```

Then open the live URL above (hard-refresh). Vercel builds from `website/` automatically.

## Manual deploy (only if needed)

From **repo root**:

```bash
npx vercel@latest deploy --prod -y
```

## Environment variables (leads / email)

Set in Vercel → Project → Settings → Environment Variables (Production):

- `RESEND_API_KEY`
- `LEAD_FROM_EMAIL`
- `LEAD_TO_EMAIL`
- optional `LEAD_PARTNER_TO_EMAIL`
- optional `NEXT_PUBLIC_SITE_URL`

Until those are set, `/api/leads` returns “not configured” and does not send mail. That is intentional.

## Do not commit

- `.env.local` / any real secrets
- `.vercel/` (local link metadata)
- `node_modules/`, `.next/`
- `source/client/`, `reference/` (local-only)

## If a Git deploy fails

1. Confirm Root Directory is still `website` in Vercel project settings.
2. Confirm the push landed on `main`.
3. Open the failed deployment logs in the Vercel dashboard.
