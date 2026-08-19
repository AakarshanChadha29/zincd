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
| `website/public/video/mg-chamber-orbit.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-product-cinema | ~7.5 cr. Premium chamber orbit — replaces Minecraft GLB aesthetic. |
| `website/public/video/mg-living-field.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-ambient | ~7.5 cr. Pearl/teal living particle atmosphere. |
| `website/public/video/mg-water-ions.mp4` (+ poster) | Higgsfield Kling 3.0 Turbo | generated-motion-graphics | ~7.5 cr. US pool water → mineral ions story. |
| `website/public/img/product/chamber-premium.png` | Higgsfield Nano Banana Pro | generated-product-still | ~2 cr. Classy stainless chamber still. |
| `website/public/img/product/chamber-hero-vertical.png` | Higgsfield Nano Banana Pro | generated-product-still | ~2 cr. Vertical chamber hero. |
| `website/public/img/product/ref-flow-diagram.png` | Client screenshot | source-reference | Not linked in UI; retained for regen. |
| `website/public/assets/commercial-pool.jpg` | `Pool ionizer/zincd-premium-commercial-pool-3840x2160.jpg` | client-environment — people-free | Homepage hero + hotels/commercial stills. No overlay text. |
| `website/public/assets/clear-water-return.jpg` | `Pool ionizer/zincd-clear-water-return-3840x2160.jpg` | client-environment — people-free | Backup/underwater still. |
| `website/public/assets/hotel-wellness.jpg` | `Pool ionizer/premium-commercial-hotel-wellness-pool-2400x1800.png` | client-environment — people-free | Hotels & resorts application card. |
| `website/public/assets/hotel-infinity.jpg` | `Pool ionizer/seg-hotel.jpg` | client-environment — people-free | Fitness/wellness application card. |
| `website/public/assets/technical-flow.jpg` | `Pool ionizer/zincd-technical-flow-3840x2160.jpg` | technical-diagram — no embedded claims | Technology + homepage flow. Labels were empty placeholders. |
| `website/public/assets/product-front.jpg` | `Pool ionizer/product front.jpg` | product-reference | Gallery. Chamber etch `ARROYO-WCH-2` visible — not used as a Zinc'd model name. Faceplate: "Low Chemical" (not chemical-free). |
| `website/public/assets/product-hero.jpg` | `Pool ionizer/Product hero.png` | product-reference | Gallery. Same OEM etch. |
| `website/public/assets/plant-room.jpg` | `Pool ionizer/room.png` | environment — people-free | Install / homepage plant-room context. No product claims. |
| `website/public/assets/hardware-rear.jpg` | `Pool ionizer/20260812_132454000_iOS.jpg` | product-reference — no people | Gallery. Rear/brackets/flow sensor. |
| `website/public/assets/how-zincd-works.svg` | `Pool ionizer/how-zincd-works-premium-panel.svg` | technical-diagram — claims-safe SVG | Technology. Raster PNG sibling not shipped (OCR empty; SVG is source of truth). |
| `website/public/assets/us-territory-markets.svg` | `Pool ionizer/us-territory-markets-premium.svg` | territory panel — claims-safe SVG | Distributors. |
| `website/public/assets/cta-territory.svg` | `Pool ionizer/cta-territory-premium.svg` | CTA panel — claims-safe SVG | Distributors (on teal band). |

## Explicitly not used

| Asset | Reason |
|---|---|
| Identifiable-people stills (`zincd-distributor-discussion-3840x2160.jpg`, `zincd-pool-industry-decision-maker-3840x2160.jpg`) | No signed people-consent on file (C-013 policy) |
| `hf-card-front-sukhvir.png` | Named founder card; not a public testimonial asset |
| `installed product.jpg` | LCD shows Cu 0.8 (outside published 0.4–0.6) and faceplate "Prevents algae & bacteria" |
| `20260812_130913000_iOS.MP4` | Identifiable hand in frame; not hosted in git |
| Remaining `20260812_*` / `IMG20260812_*` field photos | Pending per-frame people-consent review |
| Raster marketing panels (`how-zincd-works-premium-panel.png`, `market-icons-premium-panel.png`, `target-market-icons.png`, `us-territory-markets-premium.png`, `cta-territory-premium.png`, `benefit-icons-row.png`) | Prefer SVG; raster OCR was empty. Market-icons PNG visually claims-safe but black-bg and redundant with SVG segment list |
| `zincd-product-cutout-transparent-3000px-v2.png` | Filename says transparent; file is black-bg. Not used as ProductFloat overlay |
| `Pool Care New Design..jpg`, `cover-water.jpg`, `brochure-outside.png` | Print / oversized; not web |
| Arroyo-branded product photo (`PHOTO-2026-07-22-23-15-23.jpg`) | Must not publish as Zinc'd |
| Marketing flyers / packaging with blocked claims | Layout reference only; claims blocked |
| Oversized `Pool Care New Design..jpg` | Unsuitable for web as-is |
| Default Next.js `public/*.svg` demos | Not part of Zinc'd brand UI (left in public folder unused by app shell) |
| Higgsfield logo redraw / cutout | Budget reserved; original JPG on plate used instead |

## Favicon

Default Next.js `src/app/favicon.ico` remains until a Zinc'd-approved favicon is supplied. No unverified mark invented.

## Pricing note

Direct offer `$5,000 USD` is client-confirmed. Stripe checkout remains env-gated (`NEXT_PUBLIC_STRIPE_CHECKOUT_URL`).
