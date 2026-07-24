# Component Implementation Log — Zinc'd (Phase 3)

## 21st.dev usage

| Shortlist item | Decision | Reason |
|---|---|---|
| Glassmorphism Navigation (`15025`) | **Rejected install** | Phase 2 already marked adapt/hand-built; installing would pull demo styling and registry coupling. Internal header implements selective glass + scroll solidify with Zinc'd tokens and shadcn Sheet. |
| Footer (`4712`) / Cta 13 (`2206`) | **Rejected install** | Footer and button system built internally using design tokens + shadcn `Button` / `Separator`. Avoid template chrome and fake social/cert rows. |
| All other shortlist items | **Not used this phase** | Hero, sticky scroll, tables, FAQ accordion content deferred. |

**Installed from 21st.dev this phase: none (0 of 2 allowed).**

## shadcn/ui initialized

Style: `base-nova` · CSS variables · Lucide · RSC

| Component | Status | Notes |
|---|---|---|
| button | Installed | Used for CTAs; radius overridden toward `--radius-control` at call sites |
| sheet | Installed | Mobile navigation |
| accordion | Installed | Available; not wired to FAQ content yet |
| card | Installed | Available; homepage audience routes use bordered panels instead |
| badge | Installed | Available for later chips if needed |
| separator | Installed | Footer / mobile sheet |

Transitive deps added by shadcn: `@base-ui/react`, `class-variance-authority`, `shadcn`, `tw-animate-css`.

## Internal components created

| Component | Path |
|---|---|
| ZincdLogo | `components/brand/zincd-logo.tsx` |
| SiteHeader | `components/layout/site-header.tsx` |
| MobileNavigation | `components/layout/mobile-navigation.tsx` |
| SiteFooter | `components/layout/site-footer.tsx` |
| Container / Section / PageShell | `components/layout/*` |
| MotionProvider / Reveal | `components/motion/*` |
| GlassPanel, SectionHeading, TechnicalLabel, AudienceChip, StatusNote | `components/ui/*` |
