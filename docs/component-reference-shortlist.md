# Component Reference Shortlist — Zinc'd (21st.dev)

Searches via 21st.dev MCP (`search`, type `component`) across the 12 briefed categories. **Do not install.** Cap: **12** shortlisted references. Many results rejected for SaaS/glass overload, fake social proof, or dependency/a11y risk.

Decision vocabulary: **adapt** (rebuild pattern in-house) · **reject** · **install later** (only after Phase 2+ approval—none recommended for immediate install).

---

## Shortlist (12)

### 1. Glassmorphism Navigation — id `15025` (akashsingh890901-crypto)
- **Category:** premium transparent / liquid-glass navigation
- **Purpose:** Reference for light translucent header over hero, solidifying on scroll
- **Decision:** **Adapt**
- **A11y:** Blur can reduce contrast; ensure opaque fallback + focus rings
- **Perf:** `backdrop-filter` cost on mobile—limit blur to 10–12px; disable on low-power if needed
- **Visual changes:** Match Zinc'd steel/white glass; remove decorative excess; IBM Plex nav type
- **Dependency:** Would pull shadcn path if installed—prefer hand-built with Tailwind

### 2. HeroSection – Enterprise Dual CTAs — id `8156` (uniquesonu)
- **Category:** technical physical-product hero (structure)
- **Purpose:** Dual CTA hierarchy pattern (Assessment + Distributor) with enterprise calm
- **Decision:** **Adapt**
- **A11y:** Generally good if semantic headings/buttons used
- **Perf:** Low if no video
- **Visual changes:** Replace SaaS illustration with product/water hero; Zinc'd tokens; no Fortune-500 cliché badges
- **Dependency:** shadcn/ui if installed—adapt without install

### 3. Scroll 01 — id `18041` (felipemenezes098)
- **Category:** scroll storytelling + sticky product explanation
- **Purpose:** Sticky media / swapping visuals while text scrolls—ideal for `/` technology block and `/technology`
- **Decision:** **Adapt**
- **A11y:** Sticky scroll can confuse keyboard/SR users—provide non-sticky stacked fallback under `prefers-reduced-motion`
- **Perf:** Image swaps must be predecoded/sized; avoid pinning >1 section
- **Visual changes:** Zinc'd diagram/product frames; no grayscale fashion masks
- **Dependency:** Likely Motion/Framer—use existing `motion` package later

### 4. Interactive Scrolling Story — id `6265` (minhxthanh)
- **Category:** scroll storytelling section
- **Purpose:** Left text / right media progressive disclosure for ionization steps
- **Decision:** **Adapt** (secondary pattern to #3)
- **A11y:** Fade/slide must not be required to read—content in DOM in order
- **Perf:** Medium; limit to one homepage section
- **Visual changes:** Technical steps, not lifestyle slideshow
- **Dependency:** Motion-based

### 5. Animated Card Options — id `2501` (isaiahbjork)
- **Category:** B2B/B2C audience routing cards
- **Purpose:** Preference/option picker metaphor for Wholesale vs Residential routing
- **Decision:** **Adapt**
- **A11y:** Must be real links/buttons with clear names; don’t rely on animation to show selection
- **Perf:** Stagger OK if short; respect reduced motion
- **Visual changes:** Two primary routes (+ optional commercial); remove playful randomness; steel/aqua styling
- **Dependency:** Framer Motion if installed—map to `motion`

### 6. Table (cnippet) — id `19769` (cnippet.dev)
- **Category:** product specification table
- **Purpose:** Semantic table primitives with horizontal scroll container
- **Decision:** **Adapt**
- **A11y:** Keep real `<table>` semantics; caption; scope headers
- **Perf:** Low
- **Visual changes:** Mono cells for values; Zinc'd borders; no “card table” chrome overload
- **Dependency:** Minimal (`cn` only)—still **do not install**; rebuild

### 7. Comparison Table — id `7469` (ruixen.ui)
- **Category:** accessible comparison table
- **Purpose:** Interaction ideas for comparing treatment approaches
- **Decision:** **Adapt with extreme claims caution**
- **A11y:** Toggle buttons need clear pressed state; table structure preferred over button-per-row only
- **Perf:** Low
- **Visual changes:** No competitor bashing; omit $ and absolute safety claims (C-008, C-010); use only approved comparison rows
- **Dependency:** shadcn path—rebuild

### 8. Cards Grid — id `8862` (kavikatiyar)
- **Category:** application / industry cards
- **Purpose:** Icon + title + CTA grid for applications sectors
- **Decision:** **Adapt**
- **A11y:** Whole-card hit target or clear link; decorative icons `aria-hidden`
- **Perf:** Stagger entrance OK
- **Visual changes:** Drop “resource timestamp” meta; Zinc'd icon line style; no logo salad
- **Dependency:** framer-motion—optional

### 9. Cta 13 — id `2206` (shadcnblockscom)
- **Category:** distributor-partner CTA
- **Purpose:** Simple headline + description + dual buttons for partner conversion
- **Decision:** **Adapt**
- **A11y:** High if native buttons/links
- **Perf:** Excellent
- **Visual changes:** Deep blue/steel band; partner-specific copy tone; no stock gallery
- **Dependency:** shadcnblocks—rebuild

### 10. Contact 2 — id `2199` (shadcnblockscom)
- **Category:** lead qualification form
- **Purpose:** Contact details + form layout split
- **Decision:** **Adapt**
- **A11y:** Labels, errors, autocomplete; don’t publish placeholder phone
- **Perf:** Low
- **Visual changes:** Intent selector; honeypot; remove unverified address/phone until C-017 confirmed; no fake stats
- **Dependency:** shadcn—rebuild with zod + RHF later

### 11. FAQ Accordion — id `10579` (moumensoliman) / pattern shared with FAQ 1 `681`
- **Category:** accessible FAQ accordion
- **Purpose:** Homepage FAQ preview + `/faq`
- **Decision:** **Adapt** (prefer Radix/shadcn Accordion semantics when system is initialized later)
- **A11y:** `button` + `aria-expanded`; one tab order; no instant height jank without respect for reduced motion
- **Perf:** Low
- **Visual changes:** Claims-safe answers only; chlorine honesty from `TS`
- **Dependency:** Accordion primitive later—no install now

### 12. Footer (meschacirung) — id `4712`
- **Category:** premium technical footer
- **Purpose:** Multi-column technical footer with legal + sitemap
- **Decision:** **Adapt**
- **A11y:** Landmark `<footer>`; coherent heading structure; contrast
- **Perf:** Low (reject Motion Footer `11714` aurora/marquee)
- **Visual changes:** Quiet steel/ink; Zinc'd wordmark; legal links per refined sitemap; no cert icon row
- **Dependency:** Avoid; rebuild

---

## Explicit rejects (searched, not shortlisted)

| Result | Why reject |
|---|---|
| Apple Tahoe Liquid Glass Button `12460` | Excessive refraction/WebP displacement; decorative dependency; not equipment-brand |
| GlassRefractionHero `8754` | Animated blue blobs = SaaS anti-pattern |
| Glass Video Hero `12005` | Video autoplay + glass nav combo; perf/a11y risk |
| Alice Scroll Story `7970` | Narrative novelty; GSAP-heavy; off-brand |
| Immersive Scroll Gallery `2025` | Portfolio spectacle; delays information |
| Sticky Scroll Reveal `952` | Aceternity-style overused SaaS pattern; adapt #3 instead |
| Motion Footer `11714` | Aurora, marquee, magnetic pills—explicit anti-patterns |
| Premium Contact `2575` | Fake stats + heavy glass/gradients |
| Us vs Them Comparison `21217` | Aggressive competitor framing; claims risk |
| Pricing tables / CTA with avatars | Implies pricing/social proof not approved |
| Integrations logo grids | Fake partner logos risk |

## Dependency policy

- **No installs in this phase.**
- Prefer rebuilding patterns with Next.js + Tailwind + existing `motion` / `lucide-react`.
- When UI primitives are needed later, initialize deliberately—do not bulk-install 21st.dev registries.

## Usage rule

Impressive isolation ≠ fit. Every shortlisted item is a **pattern reference** for Controlled Aquatic Engineering, not a drop-in.
