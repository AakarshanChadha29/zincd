# Asset Ingest Plan — `Pool ionizer/` → Website

**Purpose:** Map the 58 new client assets to site slots, with optimization, claims check, and routing rules. Follows `docs/design-system.md`, `docs/motion-system.md`, `docs/asset-register.md`, and `website/src/content/media.ts`.

**Generated:** 2026-08-19 · **Status:** Phase 3 shipped for people-free, claims-safe stills. Raster OCR on marketing PNGs returned empty; SVG sources used instead. Identifiable-people assets and the field MP4 remain gated.

---

## 1. Source inventory (from `Pool ionizer/`, 58 files, ~105 MB)

| Group | Files | Dimensions | Notes |
|-------|-------|-----------|-------|
| Product cutouts | `zincd-product-cutout-transparent-3000px-v2.png` (3000×1688), `product hero.png` (1672×941), `product hero blank background.png` | high-res | transparent / clean bg for hero + product gallery |
| Product / brand photos | `logo.jpg` (1600×666), `Logo Zinc_d su sfondo trasparente.png` (1983×793), `Pool Care New Design..jpg` (25069×11273), `product front.jpg` (1067×1280), `installed product.jpg` (1122×1402), `room.png` | mixed | logo = brand lockup |
| Branded panels | `how-zincd-works-premium-panel.png` (2400×5089) + `.svg`, `market-icons-premium-panel.png` (2400×3520), `target-market-icons.png` (2400×1800), `benefit-icons-row.png` (2400×880), `cu-ag-zn-circles.png` (1600×542), `cta-territory-premium.png` (2400×660) + `.svg`, `cta-territory-cu-ag-zn.png` (2400×891), `us-territory-markets-premium.png` (2400×3200) + `.svg`, `us-territory-motif.png` (2400×1360) | tall panels | SVG text claims-checked ✅ (see assessment doc) |
| Hero/banner JPGs | `zincd-clear-water-return-3840x2160.jpg`, `zincd-distributor-discussion-3840x2160.jpg`, `zincd-pool-industry-decision-maker-3840x2160.jpg`, `zincd-premium-commercial-pool-3840x2160.jpg`, `zincd-technical-flow-3840x2160.jpg` | 3840×2160 | hero-ready 16:9 |
| Application imagery | `seg-hotel.jpg` (1100×618), `premium-commercial-hotel-wellness-pool-2400x1800.png` (2400×1800) | 16:10/3:2 | hotels/resorts + commercial segments |
| Field / install photos | `IMG20260812_171129/171547/172317/180047/183602` (4096×2304 / 2304×4096), `20260812_115522453/123052633/123150326/123328287/123334062/123354417/130602647` (2304×4096 / 4096×2304), `20260812_130836000/130850000/132454000/132707000/132732000/140315000/140430000` (1052×1280 → 1280×720), `6c449197-b5c7-417b-b4f2-5ea501d07cc1.jpg` (1448×1086), `d5100ea0-541f-4c5b-9472-e67158f894de.jpg` (1536×1024), `f3c87eb5-9006-41b7-b4e9-8519f5d16497.jpg` (1090×1600), `hf-card-front-sukhvir.png` (2688×1520), `hf-in-v2.png` (2336×1744), `hf-out-v2.png` (2336×1744), `hf_20260811_144822_*.png` (1744×2336) | mixed | real installs — verify each shows actual Zinc'd hardware |
| Video | `20260812_130913000_iOS.MP4` | — | real install/demo clip |
| Print/other | `cover-water.jpg` (1200×1807), `brochure-outside.png` (4096×3072) | — | print collateral; sync footnote with site |

---

## 2. Route → asset mapping

| Route / slot | Primary asset(s) | Backup / alt | Notes |
|--------------|------------------|--------------|-------|
| Homepage hero | `zincd-premium-commercial-pool-3840x2160.jpg` | `zincd-clear-water-return-3840x2160.jpg` | 16:9 hero, WebP + AVIF, `<Image priority>` |
| Product page hero | `zincd-product-cutout-transparent-3000px-v2.png` | `product hero blank background.png` | transparent PNG; alt="" (decorative) with text adjacent |
| Product gallery | `product front.jpg`, `product hero.png`, `room.png`, `Pool Care New Design..jpg` | — | real product shots replace generated product imagery |
| Technology / how-it-works | `how-zincd-works-premium-panel.png` (or SVG) | `zincd-technical-flow-3840x2160.jpg` | claims-safe panel; verify raster text via OCR before shipping |
| Distributors page | `zincd-distributor-discussion-3840x2160.jpg` (hero), `us-territory-markets-premium.png` (territory panel), `cta-territory-premium.png/svg` (CTA), `market-icons-premium-panel.png`, `target-market-icons.png` | — | partner CTA + territory imagery |
| Applications (hotels-resorts) | `seg-hotel.jpg`, `premium-commercial-hotel-wellness-pool-2400x1800.png` | — | segment cards / hero |
| Applications (commercial) | `zincd-pool-industry-decision-maker-3840x2160.jpg` | `premium-commercial-hotel-wellness-pool-2400x1800.png` | decision-maker / facility context |
| Installation & maintenance | `IMG20260812_*.jpg`, `20260812_*.jpg`, `installed product.jpg`, `hf-*.png` | — | real field installs = trust strip + install steps |
| Gallery / trust strip (new) | field photos (select 4–6) | `hf-card-front-sukhvir.png` | resize to consistent crop; captions neutral |
| Video slot | `20260812_130913000_iOS.MP4` | — | poster = first frame; `preload="none"`, lazy; optional `/api/leads` gate |
| Logo / brand | `Logo Zinc_d su sfondo trasparente.png` | `logo.jpg` | use transparent PNG for nav/footer; verify brand color vs design tokens |
| FAQ / benefits | `benefit-icons-row.png`, `cu-ag-zn-circles.png` | — | decorative row; alt="" |

**Do NOT map yet (pending client decision):** `zincd-technical-flow-3840x2160.jpg` if OCR reveals gated claims; `cover-water.jpg`, `brochure-outside.png` (print, not web). Keep originals; do not hot-link from the repo.

---

## 3. Optimization rules (all web assets)

1. **Pipeline:** use `next/image` with `sizes`; convert to WebP (AVIF where `quality` allows) — do **not** ship 3000px PNGs raw. Target < 200 KB per hero image, < 120 KB per card.
2. **SVG panels:** prefer the `.svg` sources (vector, scale-free) where layout permits; rasterize PNG only when needed for specific sizes. Inline-critical SVGs (icons) per design-system.
3. **Field photos:** downscale to 1600px max edge for web; consistent 4:3 or 16:9 crop per slot; EXIF-strip before deploy.
4. **Video:** transcode to H.264 + poster; host on Vercel/cloud storage, not git.
5. **Naming:** follow `docs/asset-register.md` conventions; add every file to `asset-register.md` + `asset-usage-log.md`.
6. **Copyright/provenance:** all 58 files are client-supplied; log source = `source/client/Pool ionizer/` (git-ignored). Never publish without the client's confirmation that any people in field photos have consented to public display.

---

## 4. Claims check (before shipping any asset)

- ✅ SVG text verified claims-safe: `how-zincd-works-premium-panel.svg` (5-stage flow), `cta-territory-premium.svg` ("LET'S DISCUSS / PARTNER WITH ZINC'D YOUR TERRITORY"), `us-territory-markets-premium.svg` (segment list).
- 🟡 **OCR the raster panels** (`how-zincd-works-premium-panel.png`, `market-icons-premium-panel.png`, `target-market-icons.png`, `us-territory-markets-premium.png`, `zincd-technical-flow-3840x2160.jpg`) — the PNG/SVG text may differ. Flag any of: percentages, "eliminates", "chemical-free", "certified", "NASA", "EPA", testimonials.
- 🟡 Field-photo review: confirm each image shows genuine Zinc'd equipment (chamber, control panel, anodes) before use; avoid implying a sanitizer-free pool.
- 🟡 People consent: any person identifiable in field photos needs a signed release (aligns with C-013 policy).

---

## 5. Delivery order

1. Copy selected originals into `website/public/assets/` (git-tracked) or serve via cloud storage; keep full-res masters in `source/client/Pool ionizer/`.
2. Update `website/src/content/media.ts` with new asset keys, dimensions, and alt text (decorative = empty alt for cutouts).
3. Update `docs/asset-register.md` + `docs/asset-usage-log.md`.
4. Ship Phase-3 (media swap) only after: (a) raster OCR passes, (b) people-consent confirmed, (c) spec reconciliation answered (so product images don't contradict published specs).