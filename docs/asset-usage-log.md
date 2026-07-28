# Asset Usage Log — Zinc'd

## Used in website

| Public path | Source | Classification | Notes |
|---|---|---|---|
| `website/public/brand/zincd-logo.jpg` | `source/client/images/PHOTO-2026-06-15-16-27-49.jpg` | approved-logo-candidate + final-production-approval-required | Exact client JPG on a light brand plate via `ZincdLogo`. Vector master still outstanding — do not redraw the wordmark. |
| `website/public/video/villa-ocean.mp4` (+ `.jpg` poster) | Vecteezy luxury villa infinity pool overlooking ocean | stock-environment-media | Re-encoded ~720p for web. Homepage hero rotation; ffmpeg poster. Depicts setting only — not the product. |
| `website/public/video/villa-bali.mp4` (+ `.jpg` poster) | Vecteezy Bali infinity pool villa | stock-environment-media | Homepage rotation + Distributors page hero. |
| `website/public/video/estate-pool.mp4` (+ `.jpg` poster) | Vecteezy large house with swimming pool | stock-environment-media | Homepage rotation + Distributors/About heroes. |
| `website/public/video/mg-ions-water.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-motion-graphics | ~7.5 credits. Ambient homepage band. |
| `website/public/video/mg-chamber.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-motion-graphics | ~7.5 credits. System visualization band. |
| `website/public/video/mg-mineral-type.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-motion-graphics | ~7.5 credits. Kinetic typography band. |
| `website/public/video/mg-water-story.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-motion-graphics | ~7.5 credits. Water through-chamber story band. This pass ≈11.5 credits (2+2+7.5) within ≤100 budget. |
| `website/public/img/product/flow-diagram.png` | Higgsfield Nano Banana Pro (from client install diagram screenshot) | generated-product-diagram | ~2 credits. Filtration → Zinc'd UNIT → pool. No Arroyo. |
| `website/public/img/product/manifold-zincd.png` | Higgsfield Nano Banana Pro (from client manifold photo; Arroyo stripped) | generated-product-photo | ~2 credits. Three chambers + bypass, Zinc'd WATER CHAMBER labels. |
| `website/public/img/product/ref-flow-diagram.png` | Client screenshot | source-reference | Not linked in UI; retained for regen. |
| Client manifold screenshot (Arroyo-labeled) | Client screenshot | source-reference — do not publish | Kept outside `public/`; used only as Higgsfield edit input. |

## Explicitly not used

| Asset | Reason |
|---|---|
| Arroyo-branded product photo (`PHOTO-2026-07-22-23-15-23.jpg`) | Must not publish as Zinc'd |
| Marketing flyers / packaging with blocked claims | Layout reference only; claims blocked |
| Oversized `Pool Care New Design..jpg` | Unsuitable for web as-is |
| Default Next.js `public/*.svg` demos | Not part of Zinc'd brand UI (left in public folder unused by app shell) |
| Higgsfield logo redraw / cutout | Budget reserved; original JPG on plate used instead |

## Favicon

Default Next.js `src/app/favicon.ico` remains until a Zinc'd-approved favicon is supplied. No unverified mark invented.

## Pricing note

Direct offer `$5,000 USD` is client-confirmed. Stripe checkout remains env-gated (`NEXT_PUBLIC_STRIPE_CHECKOUT_URL`).
