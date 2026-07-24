# Motion System — Zinc'd

Controlled motion for **Controlled Aquatic Engineering**. Complements `docs/homepage-storyboard.md` and `docs/3d-visualization-plan.md`.

## Principles

1. Motion clarifies hierarchy and product understanding—never entertains for its own sake.
2. Content must be readable with motion disabled.
3. Native-feeling scroll; no hijacking.
4. Prefer CSS for simple states; **Motion** (`motion` package already installed) for scroll/layout orchestration; **Three.js** only for optional decorative 3D (future).

## Allowed

- Subtle hero depth / layered parallax (low amplitude)
- Scroll-linked product rotation (decorative)
- Controlled water-flow **line** animation (SVG/canvas stroke—not bubble fields)
- Specification row/section reveals
- Section entrance transitions (opacity + small Y)
- Sticky technology explanation (max **one** pinned/sticky narrative section on homepage)
- CTA hover/focus microinteractions
- Smooth native scroll (CSS `scroll-behavior` optional; no Lenis required for launch)

## Not allowed

- Full-page scroll locking / scrolljacking
- Animation required to read copy
- Constant background motion / ambient blob loops
- Excessive blur animation
- Cursor-following effects
- Autoplay audio
- Large WebGL scenes in multiple sections
- Ignoring `prefers-reduced-motion`
- Horizontal-scroll page journeys as primary IA (Pro Max “Horizontal Scroll Journey” rejected for launch)

## Section animation map

| Section | Animate? | Properties | Notes |
|---|---|---|---|
| Nav | Yes | background, border, blur | On scroll threshold |
| Hero | Optional | parallax layers translateY 2–6% | Disable on mobile reduced |
| Audience routing | Yes | opacity, y: 12→0; selection scale 1→1.02 | Micro |
| Core value | Optional | staggered children opacity/y | ≤3 items |
| How it works | Yes | sticky step state; media crossfade | Reduced-motion: static stack |
| Product viz | Optional | rotateY or frame index on scroll | Decorative |
| Applications | Optional | stagger 40–60ms | |
| Specs | Optional | rows fade/slide 8px | |
| Install | No / minimal | | |
| Distributor CTA | Micro | button states | |
| FAQ | Optional | height | Prefer CSS grid/auto |
| Contact | Micro | success check | |
| Footer | No | | |

## Timing & easing

| Class | Duration | Easing |
|---|---|---|
| Micro (hover, focus, button) | 150–200ms | `cubic-bezier(0.16, 1, 0.3, 1)` or ease-out |
| Entrance | 300–500ms | Same; stagger ≤60ms |
| Scroll scrub | Tied to scroll | Linear scrub; damp 0.5–1.0 if using Motion |
| Sticky tech chapter | Scroll-distance defined | No time-based forced wait |

Exit faster than enter when toggling UI (≈70% of enter).

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* disable parallax, scrub, stagger, 3D rotation */
  /* keep opacity color transitions ≤150ms if helpful for state */
}
```

- Sticky tech → stacked sections, all text visible.
- Product 3D → static poster image.
- Accordion may snap open without height tween.

## Mobile fallback

- No pin/sticky storytelling; use vertical steps.
- Parallax amplitude 0 or replace with static layers.
- Prefer CSS; defer Motion scroll plugins until needed.
- Touch targets unaffected by hover-only motion.

## Performance budget

| Budget | Target |
|---|---|
| Motion-related JS on homepage | Prefer < 50KB gz incremental beyond existing `motion` |
| Concurrent blur filters | ≤1 (nav) |
| Sticky sections | ≤1 homepage |
| WebGL | 0 on load; lazy 1 max (see 3D plan) |
| Main-thread animation | Prefer compositor props: transform, opacity |
| LCP | Not delayed by animation libraries initializing |

Avoid animating `top/left/width/height/blur` continuously.

## Ownership matrix

| Concern | Owner |
|---|---|
| Hover, focus, nav solidify, accordion height | **CSS** (+ Tailwind transitions) |
| Section entrances, sticky step sync, scroll-linked opacity | **Motion** (future implementation) |
| Product model rotation, logo plaque | **Three.js / R3F** (future, optional) — never required for comprehension |
| Water-flow line | SVG + CSS or Motion path—avoid full fluid sims |

## Implementation sequence (later phases)

1. CSS tokens + reduced-motion baselines  
2. Nav + CTA microinteractions  
3. One sticky tech section with Motion  
4. Optional product scroll viz  
5. Evaluate Three.js only if approved assets exist  

Lenis / GSAP ScrollTrigger: **not required** for launch; revisit only if Motion cannot meet a single approved sticky section cleanly.
