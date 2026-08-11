# Zinc'd LLC business cards

## Deliverables

- `zincd-business-cards-print.pdf` — six-page, press-ready master:
  1. common front
  2. Sukhvir Singh Josan back
  3. common front
  4. Bharati back
  5. common front
  6. Simranjot Singh Josan back
- `front-editable.svg` and `back-*-editable.svg` — editable vector sources.
- `*-preview-300dpi.png` — 300 DPI visual proofs at the full bleed size.
- `generate.py` — deterministic source generator.

## Print specification

- Trim: **89 × 51 mm**
- Bleed: **3 mm on every edge**
- PDF media/bleed size: **95 × 57 mm**
- PDF color: **CMYK process**, plus a named **Metallic Silver** spot separation
- Accent: electric blue, CMYK `100 / 64 / 0 / 0`
- Background: matte charcoal, CMYK `70 / 60 / 50 / 75`
- Typography: embedded Inter

The metallic appearance requires a printer capable of applying metallic silver
spot ink or foil. If that process is unavailable, the spot color's neutral-gray
CMYK fallback is used.

## Editable placeholders

- Sukhvir Singh Josan: `[PHONE]`, `[EMAIL]`, and `[QR CODE]`
- Bharati: `[EMAIL]` and `[QR CODE]`
- Simranjot Singh Josan: `[EMAIL]` and `[QR CODE]`

The QR areas are intentional placeholders, not scannable QR codes. Replace
bracketed text in the SVG sources after the missing contact details and QR
destinations are confirmed, then regenerate the print master.

## Regeneration

Requires Python 3 with ReportLab, Pillow, and pypdf:

```bash
python3 design/business-cards/generate.py
```
