#!/usr/bin/env python3
"""Generate Zinc'd LLC print-ready business cards and editable SVG sources."""

from __future__ import annotations

from pathlib import Path
from xml.sax.saxutils import escape

from PIL import Image, ImageDraw, ImageFont
from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, FloatObject, NameObject
from reportlab.lib.colors import CMYKColor, CMYKColorSep
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


MM = 72 / 25.4
BLEED_MM = 3
TRIM_WIDTH_MM = 89
TRIM_HEIGHT_MM = 51
PAGE_WIDTH_MM = TRIM_WIDTH_MM + 2 * BLEED_MM
PAGE_HEIGHT_MM = TRIM_HEIGHT_MM + 2 * BLEED_MM
PAGE_SIZE = (PAGE_WIDTH_MM * MM, PAGE_HEIGHT_MM * MM)
OUTPUT_DIR = Path(__file__).resolve().parent

FONT_REGULAR = Path("/usr/share/fonts/truetype/macos/Inter-Regular.ttf")
FONT_MEDIUM = Path("/usr/share/fonts/truetype/macos/Inter-Medium.ttf")
FONT_SEMIBOLD = Path("/usr/share/fonts/truetype/macos/Inter-SemiBold.ttf")

# Process-color fallbacks. Silver is also emitted as a named spot separation in PDF.
CHARCOAL_CMYK = (70, 60, 50, 75)
SILVER_CMYK = (0, 0, 0, 24)
BLUE_CMYK = (100, 64, 0, 0)
CHARCOAL_HEX = "#202326"
SILVER_HEX = "#C7CBD0"
BLUE_HEX = "#087CFF"

PEOPLE = [
    {
        "slug": "sukhvir-singh-josan",
        "name": "Sukhvir Singh Josan",
        "phone": "[PHONE]",
        "email": "[EMAIL]",
    },
    {
        "slug": "bharati",
        "name": "Bharati",
        "phone": "+14165653692",
        "email": "[EMAIL]",
    },
    {
        "slug": "simranjot-singh-josan",
        "name": "Simranjot Singh Josan",
        "phone": "+14252864992",
        "email": "[EMAIL]",
    },
]


def mm(value: float) -> float:
    return value * MM


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Inter", str(FONT_REGULAR)))
    pdfmetrics.registerFont(TTFont("Inter-Medium", str(FONT_MEDIUM)))
    pdfmetrics.registerFont(TTFont("Inter-Semibold", str(FONT_SEMIBOLD)))


def pdf_colors():
    charcoal = CMYKColor(*CHARCOAL_CMYK)
    silver = CMYKColorSep(*SILVER_CMYK, spotName="Metallic Silver")
    blue = CMYKColor(*BLUE_CMYK)
    return charcoal, silver, blue


def draw_pdf_z(c: canvas.Canvas, x: float, y: float, size: float, silver) -> None:
    """Draw a geometric Z with square terminals."""
    stroke = mm(1.15)
    c.setStrokeColor(silver)
    c.setLineWidth(stroke)
    c.setLineCap(0)
    c.line(x, y + size, x + size, y + size)
    c.line(x + size, y + size, x, y)
    c.line(x, y, x + size, y)


def draw_pdf_front(c: canvas.Canvas) -> None:
    charcoal, silver, blue = pdf_colors()
    width, height = PAGE_SIZE
    c.setFillColor(charcoal)
    c.rect(0, 0, width, height, fill=1, stroke=0)

    mark_size = mm(13.5)
    mark_x = mm(15)
    mark_y = (height - mark_size) / 2
    draw_pdf_z(c, mark_x, mark_y, mark_size, silver)

    rule_x = mm(36)
    c.setStrokeColor(blue)
    c.setLineWidth(mm(0.55))
    c.line(rule_x, mm(20.25), rule_x, mm(36.75))

    c.setFillColor(silver)
    c.setFont("Inter-Semibold", 13)
    c.drawString(mm(42), mm(31.4), "Zinc'd LLC")
    c.setFont("Inter-Medium", 6.8)
    c.drawString(mm(42), mm(24.8), "www.zincd.net")


def draw_pdf_qr_placeholder(c: canvas.Canvas, x: float, y: float, size: float, silver) -> None:
    c.setStrokeColor(silver)
    c.setLineWidth(mm(0.32))
    c.rect(x, y, size, size, fill=0, stroke=1)
    finder = size * 0.25
    inset = size * 0.12
    for fx, fy in (
        (x + inset, y + size - inset - finder),
        (x + size - inset - finder, y + size - inset - finder),
        (x + inset, y + inset),
    ):
        c.rect(fx, fy, finder, finder, fill=0, stroke=1)
        c.rect(
            fx + finder * 0.28,
            fy + finder * 0.28,
            finder * 0.44,
            finder * 0.44,
            fill=1,
            stroke=0,
        )
    c.setFont("Inter-Medium", 4.5)
    label = "[QR CODE]"
    label_width = pdfmetrics.stringWidth(label, "Inter-Medium", 4.5)
    c.drawString(x + (size - label_width) / 2, y + size * 0.46, label)


def draw_pdf_back(c: canvas.Canvas, person: dict[str, str]) -> None:
    charcoal, silver, blue = pdf_colors()
    width, height = PAGE_SIZE
    c.setFillColor(charcoal)
    c.rect(0, 0, width, height, fill=1, stroke=0)

    left = mm(10)
    c.setFillColor(silver)
    name_size = 12.2 if len(person["name"]) < 19 else 10.8
    c.setFont("Inter-Semibold", name_size)
    c.drawString(left, mm(42.2), person["name"])
    c.setFont("Inter-Medium", 6.2)
    c.drawString(left, mm(37.8), "Founder")

    c.setStrokeColor(blue)
    c.setLineWidth(mm(0.55))
    c.line(left, mm(34.1), mm(30), mm(34.1))

    c.setFillColor(silver)
    c.setFont("Inter", 6.25)
    lines = [
        person["phone"],
        person["email"],
        "www.zincd.net",
        "13613 Meridian Avenue East, Suite 250",
        "Puyallup, WA 98373",
    ]
    y = 28.4
    for index, line in enumerate(lines):
        c.drawString(left, mm(y), line)
        y -= 4.25 if index < 2 else 3.8

    draw_pdf_qr_placeholder(c, mm(69.5), mm(20), mm(17), silver)

    # Tiny geometric brand mark, aligned to the QR block.
    draw_pdf_z(c, mm(77), mm(9.5), mm(6.5), silver)


def add_pdf_boxes(source: Path, destination: Path) -> None:
    reader = PdfReader(source)
    writer = PdfWriter()
    trim = ArrayObject(
        [
            FloatObject(mm(BLEED_MM)),
            FloatObject(mm(BLEED_MM)),
            FloatObject(mm(BLEED_MM + TRIM_WIDTH_MM)),
            FloatObject(mm(BLEED_MM + TRIM_HEIGHT_MM)),
        ]
    )
    bleed = ArrayObject(
        [
            FloatObject(0),
            FloatObject(0),
            FloatObject(mm(PAGE_WIDTH_MM)),
            FloatObject(mm(PAGE_HEIGHT_MM)),
        ]
    )
    for page in reader.pages:
        page[NameObject("/TrimBox")] = trim
        page[NameObject("/BleedBox")] = bleed
        page[NameObject("/ArtBox")] = trim
        writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": "Zinc'd LLC Business Cards",
            "/Subject": "89 x 51 mm trim; 3 mm bleed; CMYK; metallic silver spot ink",
            "/Creator": "Zinc'd LLC card generator",
        }
    )
    with destination.open("wb") as output:
        writer.write(output)


def generate_pdf() -> None:
    temporary = OUTPUT_DIR / "_zincd-business-cards.pdf"
    c = canvas.Canvas(str(temporary), pagesize=PAGE_SIZE, pageCompression=1)
    c.setTitle("Zinc'd LLC Business Cards")
    for person in PEOPLE:
        draw_pdf_front(c)
        c.showPage()
        draw_pdf_back(c, person)
        c.showPage()
    c.save()
    add_pdf_boxes(temporary, OUTPUT_DIR / "zincd-business-cards-print.pdf")
    temporary.unlink()


def svg_header(title: str) -> str:
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{PAGE_WIDTH_MM}mm" height="{PAGE_HEIGHT_MM}mm"
     viewBox="0 0 {PAGE_WIDTH_MM} {PAGE_HEIGHT_MM}" role="img" aria-labelledby="title desc">
  <title id="title">{escape(title)}</title>
  <desc id="desc">Trim size {TRIM_WIDTH_MM} × {TRIM_HEIGHT_MM} mm with {BLEED_MM} mm bleed on every edge. Text remains editable.</desc>
  <metadata>CMYK intent: charcoal {CHARCOAL_CMYK}; metallic silver spot ink with process fallback {SILVER_CMYK}; electric blue {BLUE_CMYK}.</metadata>
  <rect width="{PAGE_WIDTH_MM}" height="{PAGE_HEIGHT_MM}" fill="{CHARCOAL_HEX}" data-cmyk="{CHARCOAL_CMYK}"/>
"""


def svg_z(x: float, y: float, size: float) -> str:
    return f"""  <g fill="none" stroke="{SILVER_HEX}" stroke-width="1.15" stroke-linecap="square" data-ink="Metallic Silver">
    <path d="M{x} {y}H{x + size}L{x} {y + size}H{x + size}"/>
  </g>
"""


def generate_front_svg() -> None:
    content = svg_header("Zinc'd LLC business card front")
    content += svg_z(15, 21.75, 13.5)
    content += f"""  <line x1="36" y1="20.25" x2="36" y2="36.75" stroke="{BLUE_HEX}" stroke-width="0.55" data-cmyk="{BLUE_CMYK}"/>
  <g fill="{SILVER_HEX}" font-family="Inter, sans-serif" data-ink="Metallic Silver">
    <text x="42" y="25.6" font-size="4.59" font-weight="600">Zinc'd LLC</text>
    <text x="42" y="32.2" font-size="2.40" font-weight="500">www.zincd.net</text>
  </g>
</svg>
"""
    (OUTPUT_DIR / "front-editable.svg").write_text(content, encoding="utf-8")


def generate_back_svg(person: dict[str, str]) -> None:
    name_size = 4.30 if len(person["name"]) < 19 else 3.81
    content = svg_header(f"Zinc'd LLC business card back — {person['name']}")
    content += f"""  <g fill="{SILVER_HEX}" font-family="Inter, sans-serif" data-ink="Metallic Silver">
    <text x="10" y="14.8" font-size="{name_size}" font-weight="600">{escape(person["name"])}</text>
    <text x="10" y="19.2" font-size="2.19" font-weight="500">Founder</text>
    <text x="10" y="28.6" font-size="2.20">{escape(person["phone"])}</text>
    <text x="10" y="32.85" font-size="2.20">{escape(person["email"])}</text>
    <text x="10" y="37.1" font-size="2.20">www.zincd.net</text>
    <text x="10" y="40.9" font-size="2.20">13613 Meridian Avenue East, Suite 250</text>
    <text x="10" y="44.7" font-size="2.20">Puyallup, WA 98373</text>
  </g>
  <line x1="10" y1="22.9" x2="30" y2="22.9" stroke="{BLUE_HEX}" stroke-width="0.55" data-cmyk="{BLUE_CMYK}"/>
  <g transform="translate(69.5 20)" fill="none" stroke="{SILVER_HEX}" stroke-width="0.32" data-ink="Metallic Silver">
    <rect width="17" height="17"/>
    <rect x="2.04" y="2.04" width="4.25" height="4.25"/>
    <rect x="10.71" y="2.04" width="4.25" height="4.25"/>
    <rect x="2.04" y="10.71" width="4.25" height="4.25"/>
    <rect x="3.23" y="3.23" width="1.87" height="1.87" fill="{SILVER_HEX}" stroke="none"/>
    <rect x="11.90" y="3.23" width="1.87" height="1.87" fill="{SILVER_HEX}" stroke="none"/>
    <rect x="3.23" y="11.90" width="1.87" height="1.87" fill="{SILVER_HEX}" stroke="none"/>
    <text x="8.5" y="9.25" text-anchor="middle" fill="{SILVER_HEX}" stroke="none"
          font-family="Inter, sans-serif" font-size="1.59" font-weight="500">[QR CODE]</text>
  </g>
"""
    content += svg_z(77, 41, 6.5)
    content += "</svg>\n"
    (OUTPUT_DIR / f"back-{person['slug']}-editable.svg").write_text(content, encoding="utf-8")


def cmyk_to_rgb(cmyk: tuple[int, int, int, int]) -> tuple[int, int, int]:
    c, m, y, k = [value / 100 for value in cmyk]
    return (
        round(255 * (1 - c) * (1 - k)),
        round(255 * (1 - m) * (1 - k)),
        round(255 * (1 - y) * (1 - k)),
    )


def px(mm_value: float, dpi: int = 300) -> int:
    return round(mm_value / 25.4 * dpi)


def preview_fonts(scale: float):
    return {
        "name": ImageFont.truetype(str(FONT_SEMIBOLD), round(13 * scale)),
        "long_name": ImageFont.truetype(str(FONT_SEMIBOLD), round(11 * scale)),
        "body": ImageFont.truetype(str(FONT_REGULAR), round(6.6 * scale)),
        "small": ImageFont.truetype(str(FONT_MEDIUM), round(6.4 * scale)),
    }


def draw_preview_z(draw: ImageDraw.ImageDraw, xy: tuple[int, int], size: int, color, width: int) -> None:
    x, y = xy
    draw.line([(x, y), (x + size, y), (x, y + size), (x + size, y + size)], fill=color, width=width)


def generate_previews() -> None:
    dpi = 300
    width, height = px(PAGE_WIDTH_MM, dpi), px(PAGE_HEIGHT_MM, dpi)
    scale = dpi / 72
    fonts = preview_fonts(scale)
    charcoal = cmyk_to_rgb(CHARCOAL_CMYK)
    silver = cmyk_to_rgb(SILVER_CMYK)
    blue = cmyk_to_rgb(BLUE_CMYK)

    front = Image.new("RGB", (width, height), charcoal)
    draw = ImageDraw.Draw(front)
    draw_preview_z(draw, (px(15), px(21.75)), px(13.5), silver, px(1.15))
    draw.line([(px(36), px(20.25)), (px(36), px(36.75))], fill=blue, width=px(0.55))
    draw.text((px(42), px(22.2)), "Zinc'd LLC", font=fonts["name"], fill=silver)
    draw.text((px(42), px(29.1)), "www.zincd.net", font=fonts["small"], fill=silver)
    front.save(OUTPUT_DIR / "front-preview-300dpi.png", dpi=(dpi, dpi))

    for person in PEOPLE:
        back = Image.new("RGB", (width, height), charcoal)
        draw = ImageDraw.Draw(back)
        font = fonts["name"] if len(person["name"]) < 19 else fonts["long_name"]
        draw.text((px(10), px(10.7)), person["name"], font=font, fill=silver)
        draw.text((px(10), px(17)), "Founder", font=fonts["small"], fill=silver)
        draw.line([(px(10), px(22.9)), (px(30), px(22.9))], fill=blue, width=px(0.55))
        for y, line in zip(
            (26.4, 30.65, 34.9, 38.7, 42.5),
            (
                person["phone"],
                person["email"],
                "www.zincd.net",
                "13613 Meridian Avenue East, Suite 250",
                "Puyallup, WA 98373",
            ),
        ):
            draw.text((px(10), px(y)), line, font=fonts["body"], fill=silver)

        qx, qy, qs = px(69.5), px(20), px(17)
        line_width = px(0.32)
        draw.rectangle((qx, qy, qx + qs, qy + qs), outline=silver, width=line_width)
        finder = px(4.25)
        inset = px(2.04)
        for fx, fy in (
            (qx + inset, qy + inset),
            (qx + qs - inset - finder, qy + inset),
            (qx + inset, qy + qs - inset - finder),
        ):
            draw.rectangle((fx, fy, fx + finder, fy + finder), outline=silver, width=line_width)
        qr_label = "[QR CODE]"
        box = draw.textbbox((0, 0), qr_label, font=fonts["small"])
        draw.text(
            (qx + (qs - (box[2] - box[0])) / 2, qy + qs * 0.43),
            qr_label,
            font=fonts["small"],
            fill=silver,
        )
        draw_preview_z(draw, (px(77), px(41)), px(6.5), silver, px(0.7))
        back.save(OUTPUT_DIR / f"back-{person['slug']}-preview-300dpi.png", dpi=(dpi, dpi))


def main() -> None:
    register_fonts()
    generate_front_svg()
    for person in PEOPLE:
        generate_back_svg(person)
    generate_pdf()
    generate_previews()
    print(f"Generated Zinc'd LLC card package in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
