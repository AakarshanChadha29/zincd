# Design Directions — Zinc'd

UI/UX Pro Max was run for three briefed directions. Outputs were **adapted** for Zinc'd: reject Inter-as-identity, purple CTAs, full-page horizontal-scroll hijacking, and greenwashing. Brief analyzed: independent US swimming-pool ionization technology company; dual B2B/B2C; selective glass; restrained 3D.

Provisional client visual cue (Needs confirmation): “Clean, premium, corporate and luxury; blue, green and aquamarine” (`meeting-1.known.visual-direction`).

---

## Direction A — Precision Water Engineering

### Visual concept
Technically authoritative equipment brand. Engineered grids, stainless-steel neutrals, precise data blocks, calm blue accents. Reads as US commercial pool equipment—not SaaS.

### Homepage structure
Hero (product + dual CTA) → authority strip (qualified facts only) → audience routing → how it works (diagram-led) → specs table → applications → distributor CTA → FAQ → contact → footer.

### Color system
Deep slate `#0F172A`, stainless `#C0C7CE` / `#8B949E`, white `#FFFFFF`, primary blue `#0369A1`, aquamarine `#0E7490`. Minimal green. Avoid sky-blue fills on every section.

### Typography
Display/headings: **Söhne-like geometric** → implement as **IBM Plex Sans** (or similar industrial sans). Specs/labels: **IBM Plex Mono** or JetBrains Mono. Avoid Inter as brand face.

### Navigation
Solid / light translucent on scroll; sharp divider; B2B link (“Distributors”) always visible. No playful morphing.

### Cards & panels
Hairline borders, 4–8px radius max, white or cool-gray surfaces. Grid aligned to 8px. Cards only for interactive choice.

### Button hierarchy
Primary filled blue; secondary outline steel; tertiary text link. No neon, no oversized pills.

### Icon style
1.5px stroke technical line icons (Lucide/Phosphor). No emoji.

### Product presentation
Orthographic / studio product on stainless-grid backdrop; callouts to components.

### Photography
Real pools + equipment context; cool color grade; no smiling-family stock as identity.

### Technical diagrams
Restyled asset #6 block diagram; monochrome + one accent; labeled steps.

### Comparison tables
Semantic HTML table; restrained highlight column; no fake “winner” badges unless claims-approved.

### Forms
Dense, labeled, B2B fields optional; high contrast; honeypot-ready.

### Mobile
Stack grids; sticky compact CTA bar optional; no pin-heavy scroll.

### Motion
150–300ms micro; spec reveal fades; no scroll lock.

### Glassmorphism
Nav only, light blur ≤12px, high text contrast.

### 3D
Optional stainless brand plate with logo texture; product model optional later.

### Accessibility risks
Low if contrast held; mono labels must stay ≥14px.

### Performance risks
Low.

### Commercial strengths
Strong B2B trust; distributor-ready; differentiated from lifestyle pool brands.

### Commercial weaknesses
Can feel cold for residential; less memorable storytelling.

---

## Direction B — Aquatic Performance Technology

### Visual concept
Immersive water movement and product visualization; bold scroll storytelling; performance energy. Balanced B2B/B2C spectacle.

### Homepage structure
Cinematic hero → scroll chapters (problem → mechanism → product → outcomes) → sticky product explain → applications mosaic → partner CTA → contact.

### Color system
Deep teal `#0B3A4A`, bright aquamarine `#14B8A6`, white, controlled cyan highlights. Risk: blue-on-every-section if undisciplined.

### Typography
**Space Grotesk** headings + readable sans body. Energetic but not street/brutalist.

### Navigation
Transparent → glass on scroll; progress indicator optional.

### Cards & panels
Larger radii (12–16px); selective glass panels over water imagery.

### Button hierarchy
Bold primary; ghost secondary; floating sticky CTA allowed on long scroll.

### Icon style
Filled/outline hybrid; motion-friendly.

### Product presentation
Hero-dominant product; scroll-linked rotation or depth.

### Photography
Immersive water surfaces, hospitality pools, dusk lighting—still real, not bubble wallpaper.

### Technical diagrams
Animated flow lines; keep fallback static.

### Comparison tables
Cardized mobile; table desktop.

### Forms
More spacious, lifestyle-leaning labels.

### Mobile
Critical: replace pin/scrub with stacked reveals.

### Motion
Scroll-linked storytelling; max 1–2 sticky sections (Pro Max warning: poor a11y/perf if excessive).

### Glassmorphism
Hero overlays + nav; never on body text blocks.

### 3D
Product WebGL showcase candidate; must have static fallback.

### Accessibility risks
High if motion required to read; reduced-motion mandatory.

### Performance risks
High (parallax, blur, WebGL).

### Commercial strengths
Memorable; strong product desire; hospitality appeal.

### Commercial weaknesses
Can look like consumer lifestyle or generic “immersive brand site”; weakens distributor seriousness if overdone.

---

## Direction C — Premium Sustainable Pool Systems

### Visual concept
Lighter, cleaner, ecological cues; hospitality and residential comfort; controlled green accents; clarity over spectacle.

### Homepage structure
Quiet hero → comfort benefits (qualified) → simple how-it-works → applications (residential + hotels first) → soft trust → assessment CTA → footer.

### Color system
White `#FAFCFB`, soft aqua `#E0F2F1`, primary blue `#1E3A5F`, controlled green `#0F766E` / `#047857`. **Reject** purple accents from generic “sustainable” palettes (Pro Max healthcare/agency hits included violet—do not use).

### Typography
Clean humanist sans (e.g. **Source Sans 3** or **IBM Plex Sans**); avoid decorative serif menus (Playfair SC from Pro Max hospitality hit—too culinary).

### Navigation
Light, airy, high whitespace; simple links.

### Cards & panels
Soft surfaces, larger padding, minimal borders; avoid organic-food illustration language.

### Button hierarchy
Large, calm primary; secondary outline green-steel.

### Icon style
Rounded stroke; nature metaphors only if abstract (droplet/leaf sparingly).

### Product presentation
Product in bright, clean residential/hospitality context.

### Photography
Morning light, clear water, restrained green landscape—no greenwashing claims.

### Technical diagrams
Simplified consumer diagrams; advanced specs deeper on `/technology`.

### Comparison tables
Benefit-oriented rows; omit $ figures until evidence (C-010).

### Forms
Friendly assessment form; low friction.

### Mobile
Excellent by default (spacious single column).

### Motion
Gentle fades only.

### Glassmorphism
Minimal or none.

### 3D
Usually unnecessary; logo badge optional.

### Accessibility risks
Low; watch low-contrast sage text.

### Performance risks
Low.

### Commercial strengths
B2C and hospitality comfort; approachable.

### Commercial weaknesses
Can under-sell engineering; risk of “organic startup” if green dominates; weaker distributor authority.

---

## Final selection — Controlled Aquatic Engineering (disciplined hybrid)

**Not an average of A+B+C.** Hierarchy:

1. **Structural authority from A** — grids, specs, stainless neutrals, B2B credibility, comparison/spec discipline.
2. **Selective storytelling from B** — one sticky technology section, restrained product motion, memorable hero depth.
3. **Restrained ecological cues from C** — controlled green as secondary accent only; hospitality/residential clarity in B2C copy and application pages.

### Hybrid principles
- Light-first corporate surfaces with cool depth—not dark SaaS.
- Blue + aquamarine + white + stainless; green for “healthier ops / lower chemical dependence” cues only.
- Glass only on nav / rare hero overlays.
- Motion serves comprehension; never gates content.
- 3D decorative, lazy, fallback-first.
- Differentiate from Arroyo: cooler steel-grid authority, US commercial equipment tone, no India-market luxury villa atmosphere, no chemical-free hero language.

Full tokens and component rules: `docs/design-system.md`.
