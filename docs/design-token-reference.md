# Design Token Reference — Zinc'd

Implements **Controlled Aquatic Engineering** in `website/src/app/globals.css`.

## Semantic colors

| Token | Value / mapping | Tailwind / usage |
|---|---|---|
| `--background` | `#F8FAFC` | `bg-background` |
| `--foreground` | `#0F172A` | `text-foreground` |
| `--surface` | `#FFFFFF` | `bg-surface` |
| `--surface-elevated` | `#FFFFFF` | `bg-surface-elevated` |
| `--surface-muted` | `#EEF2F6` | `bg-surface-muted` |
| `--border` | `#E2E8F0` | `border-border` |
| `--border-strong` | `#CBD5E1` | `border-border-strong` |
| `--primary` | `#0369A1` | `bg-primary` / buttons |
| `--primary-hover` | `#0C4A6E` | hover states |
| `--primary-foreground` | `#FFFFFF` | on primary |
| `--secondary` | surface-muted | secondary surfaces |
| `--accent-aquatic` | `#0E7490` | tech labels, focus-adjacent |
| `--accent-ecological` | `#0F766E` | ecological cue only |
| `--accent-steel` | `#94A3B8` | chrome / partner chips |
| `--success` | `#047857` | success |
| `--warning` | `#B45309` | caution notes |
| `--danger` | `#B91C1C` | errors |
| `--focus-ring` | `#0E7490` | `:focus-visible` |

## Layout tokens

| Token | Value |
|---|---|
| `--container-narrow` | 42rem |
| `--container-default` | 72rem |
| `--container-wide` | 80rem |
| `--page-gutter` | 1.25rem (wider at sm/lg via utilities) |
| `--section-space-sm/md/lg` | 2.5 / 4 / 6rem |
| `--nav-height` | 4.25rem |

## Radius & elevation

| Token | Value |
|---|---|
| `--radius-control` | 0.25rem |
| `--radius-panel` / `--radius` | 0.5rem |
| `--shadow-1` | subtle hairline elevation |
| `--shadow-2` | `0 8px 24px rgba(15,23,42,0.06)` |

## Glass

| Token | Value |
|---|---|
| `--glass-bg` | `rgb(255 255 255 / 0.72)` |
| `--glass-border` | steel translucent |
| `--glass-blur` | 12px |

Utility: `.glass-surface` — header only by default.

## Typography utilities

| Class | Role |
|---|---|
| `.text-display` | Hero display |
| `.text-h1` / `.text-h2` / `.text-h3` | Headings |
| `.text-body-large` / `.text-body` / `.text-small` | Body scale |
| `.text-technical` | Mono uppercase labels |
| `.text-button` | CTA labels |

Fonts via `next/font`: **IBM Plex Sans** (`--font-plex-sans`), **IBM Plex Mono** (`--font-plex-mono`).

## Motion tokens

| Token | Value |
|---|---|
| `--duration-micro` | 160ms |
| `--duration-entrance` | 400ms |
| `--ease-out-premium` | `cubic-bezier(0.16, 1, 0.3, 1)` |

## Rejected visual language

Purple gradients, neon cyan fields, glass-on-every-card, pill CTAs, dark-mode-first SaaS chrome.
