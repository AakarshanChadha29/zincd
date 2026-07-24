# 3D Visualization Plan — Zinc'd

Plan only. **Do not implement** Three.js or ship WebGL in this phase. Three.js is not installed (`docs/technical-architecture.md`).

## Goals

- Add premium engineered presence without becoming a WebGL showcase site.
- Keep all understanding available in 2D/static HTML.
- Never expose Arroyo branding on any 3D texture, mesh, or plate.

## Brand / logo 3D (optional accent)

The **Zinc'd logo asset** (vector preferred; raster candidate in asset register) may be used as a **texture** on one of:

| Treatment | Use |
|---|---|
| Glass plaque | Hero or About accent |
| Stainless-steel brand plate | Specs / product section |
| Premium technical badge | Small hero device—not a floating sticker pile |

**Do not** recreate the Zinc'd wordmark with an approximate 3D font or extruded generic letters.

Requirements:

- Texture from approved Zinc'd artwork only
- Static PNG/WebP fallback of the same composition
- Lazy-load; offscreen default
- Respect `prefers-reduced-motion` (show static)
- Decorative: removing it must not remove meaning

## Product visualization

| Rule | Detail |
|---|---|
| Source asset | Final **Zinc'd-approved** product model or photogrammetry—**not** Arroyo-branded photo #5 as-is |
| Public branding | Zinc'd only |
| Fallback | High-quality static product image / turntable frames |
| Loading | Dynamic import; idle/near-viewport trigger |
| Role | Decorative enhancement of section 5 (homepage) or `/product` |
| Without WebGL | Full page still works with image + hotspots |
| Reduced motion | Freeze on hero angle; no auto-spin |
| Mobile | Prefer static or CSS frame-swap; skip WebGL under memory/GPU heuristics |

### Allowed product behaviors

- Slow scroll-linked Y rotation (±15–25°)
- Manual drag rotate (optional, desktop)
- Hotspot labels synced to 2D fallback

### Disallowed

- Full-scene water simulations
- Multiple simultaneous WebGL canvases
- Autoplay spin loops on land
- Using 3D to hide missing real photography forever (still need real assets)

## Technical approach (future)

```
Static image (default)
    │
    ├─ enhanced: CSS/sprite turntable (no WebGL)
    │
    └─ progressive: Three.js / React Three Fiber
           - one canvas max
           - DRACO/meshopt compressed GLB
           - no shadows extravagance
           - pause when offscreen
```

Ownership: see `docs/motion-system.md` (Three.js only for optional 3D).

## Asset pipeline blockers

| Blocker | Action |
|---|---|
| Arroyo-branded product photo | Reshoot / rebrand before any public 3D or 2D hero product |
| Logo vector unconfirmed | Obtain SVG/AI for clean texture maps |
| No GLB/model yet | Do not invent geometry; stay 2D until client delivers |

## Success criteria

- Looks premium and engineered on desktop
- Zero functional regression with WebGL blocked
- No claim badges baked into 3D scenes
- Lighthouse/perf: 3D never on critical path for LCP
