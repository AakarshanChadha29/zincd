# Asset Usage Log — Zinc'd (Phase 3)

## Used in website

| Public path | Source | Classification | Notes |
|---|---|---|---|
| `website/public/brand/zincd-logo.jpg` | `source/client/images/PHOTO-2026-06-15-16-27-49.jpg` | approved-logo-candidate + final-production-approval-required | Copied for development. Raster JPG 1600×666. Vector master still preferred before production polish. Used via `next/image` in `ZincdLogo`. |

## Explicitly not used

| Asset | Reason |
|---|---|
| Arroyo-branded product photo (`PHOTO-2026-07-22-23-15-23.jpg`) | Must not publish as Zinc'd |
| Marketing flyers / packaging with blocked claims | Layout reference only; claims blocked |
| Oversized `Pool Care New Design..jpg` | Unsuitable for web as-is |
| Default Next.js `public/*.svg` demos | Not part of Zinc'd brand UI (left in public folder unused by app shell) |

## Favicon

Default Next.js `src/app/favicon.ico` remains until a Zinc'd-approved favicon is supplied. No unverified mark invented.

## 3D / product media

None. Phase 3 does not implement WebGL or product turntables.
