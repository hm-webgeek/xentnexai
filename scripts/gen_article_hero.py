#!/usr/bin/env python3
"""
gen_article_hero.py — XentnexAI article hero image generator.

Usage:
    python3 gen_article_hero.py <slug> <category> [title]

Categories:
    automation     — Lead Generation (funnel + pipeline stages)
    ai-tools       — Voice Agents / Website Building (waveform + radial rings)
    industry-news  — GEO / AI Search (search panel + magnifying glass)

Output:
    /workspace/xentnexai/public/images/articles/<slug>.webp  (1280×640)

Style: Dark navy + teal geometric illustration. Base elements (grid, nodes,
corner brackets) are consistent across all articles. The focal motif changes
per category. The slug is hashed to a seed so each article gets unique but
reproducible layout variation within its category.
"""

import sys
import math
import random
import hashlib
from PIL import Image, ImageDraw, ImageFilter, ImageFont

# ── args ──────────────────────────────────────────────────────────────────────
if len(sys.argv) < 3:
    print("Usage: gen_article_hero.py <slug> <category> [title]")
    sys.exit(1)

slug     = sys.argv[1]
category = sys.argv[2].lower().strip()
title    = sys.argv[3] if len(sys.argv) > 3 else slug

# Seed from slug — same slug always produces the same image
seed = int(hashlib.md5(slug.encode()).hexdigest()[:8], 16)
random.seed(seed)

# ── palette ───────────────────────────────────────────────────────────────────
W, H      = 1280, 640
NAVY      = (11, 20, 38)       # #0B1426 — background
NAVY_MID  = (26, 39, 64)       # #1A2740 — panel fill
TEAL      = (45, 212, 191)     # #2DD4BF — bright accent
TEAL_DIM  = (27, 168, 153)     # #1BA899 — secondary accent
WHITE     = (255, 255, 255)
GRAY      = (100, 120, 150)

CX, CY = W // 2, H // 2

# ── helpers ───────────────────────────────────────────────────────────────────

def composite(base: Image.Image, layer: Image.Image) -> Image.Image:
    return Image.alpha_composite(base.convert("RGBA"), layer).convert("RGB")

def glow_circle(draw, cx, cy, r, color, layers=5):
    for i in range(layers, 0, -1):
        a  = int(150 * (1 - i / layers))
        rr = r + (layers - i) * 4
        draw.ellipse([cx-rr, cy-rr, cx+rr, cy+rr], fill=color+(a,))
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=color+(200,))
    cr = max(1, r - 2)
    draw.ellipse([cx-cr, cy-cr, cx+cr, cy+cr], fill=WHITE+(230,))

def glow_line(draw, x0, y0, x1, y1, color, w=2, gw=6, ga=50):
    for lw in range(gw, 0, -2):
        a = int(ga * (1 - lw / gw))
        draw.line([(x0, y0), (x1, y1)], fill=color+(a,), width=lw+w)
    draw.line([(x0, y0), (x1, y1)], fill=color+(200,), width=w)

# ── canvas ────────────────────────────────────────────────────────────────────
img = Image.new("RGB", (W, H), NAVY)

# ── background glow ───────────────────────────────────────────────────────────
glow_positions = {
    'automation':    [(-80,  H,    480, 55), (W,      0,   300, 30)],
    'ai-tools':      [(CX,   CY,   420, 45), (-50,    0,   280, 25)],
    'industry-news': [(0,    0,    360, 40), (W,      H,   260, 25)],
}
glows = glow_positions.get(category, glow_positions['ai-tools'])
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow_layer)
for (gx, gy, gr, ga_max) in glows:
    for r in range(gr, 0, -10):
        a = int(ga_max * (1 - r / gr))
        gd.ellipse([gx-r, gy-r, gx+r, gy+r], fill=TEAL+(a,))
img = composite(img, glow_layer)

# ── grid ──────────────────────────────────────────────────────────────────────
grid_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
grid_draw  = ImageDraw.Draw(grid_layer)
STEP = 60
for x in range(0, W + STEP, STEP):
    grid_draw.line([(x, 0), (x, H)], fill=TEAL+(18,), width=1)
for y in range(0, H + STEP, STEP):
    grid_draw.line([(0, y), (W, y)], fill=TEAL+(18,), width=1)
img = composite(img, grid_layer)

# ── base scattered nodes (seeded, consistent style) ───────────────────────────
node_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
nd = ImageDraw.Draw(node_layer)

# Nodes at edges/corners — keep centre clear for focal motif
base_nodes = [
    (random.randint(40,  180), random.randint(60,  180), random.randint(4, 7)),
    (random.randint(40,  180), random.randint(420, 560), random.randint(4, 6)),
    (random.randint(180, 300), random.randint(120, 260), random.randint(5, 7)),
    (random.randint(180, 300), random.randint(360, 500), random.randint(4, 6)),
    (W - random.randint(40,  180), random.randint(60,  180), random.randint(4, 6)),
    (W - random.randint(40,  180), random.randint(420, 560), random.randint(4, 6)),
    (W - random.randint(180, 300), random.randint(120, 260), random.randint(5, 7)),
    (W - random.randint(180, 300), random.randint(360, 500), random.randint(4, 6)),
]
base_conns = [(0,2),(1,3),(2,3),(0,1),(4,6),(5,7),(6,7),(4,5),(2,6),(3,7)]

for i, j in base_conns:
    x0, y0, _ = base_nodes[i]
    x1, y1, _ = base_nodes[j]
    glow_line(nd, x0, y0, x1, y1, TEAL, w=1, gw=4, ga=35)

for (nx, ny, nr) in base_nodes:
    glow_circle(nd, nx, ny, nr, TEAL)

img = composite(img, node_layer)

# ── category focal motif ──────────────────────────────────────────────────────
motif_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
md = ImageDraw.Draw(motif_layer)

if category == 'automation':
    # ── Funnel (left) → Pipeline stages (right) ───────────────────────────────
    # Funnel outline: wide at left edge, narrows to centre-left
    FUNNEL_L = 80
    FUNNEL_R = 520
    FUNNEL_OPEN = 220   # half-height at wide end
    FUNNEL_NECK = 55    # half-height at narrow end

    pts = [
        (FUNNEL_L, CY - FUNNEL_OPEN),
        (FUNNEL_R, CY - FUNNEL_NECK),
        (FUNNEL_R, CY + FUNNEL_NECK),
        (FUNNEL_L, CY + FUNNEL_OPEN),
    ]
    md.polygon(pts, fill=NAVY_MID+(50,))
    md.line([pts[0], pts[1]], fill=TEAL+(120,), width=2)
    md.line([pts[2], pts[3]], fill=TEAL+(120,), width=2)

    # Internal flow lines (horizontal, fading)
    for i, t in enumerate([0.25, 0.5, 0.75]):
        y_top = CY - FUNNEL_OPEN + (FUNNEL_OPEN - FUNNEL_NECK) * t
        y_bot = CY + FUNNEL_OPEN - (FUNNEL_OPEN - FUNNEL_NECK) * t
        x = int(FUNNEL_L + (FUNNEL_R - FUNNEL_L) * t)
        md.line([(x, int(y_top)), (x, int(y_bot))],
                fill=TEAL+(40 + i*20,), width=1)

    # Arrow heads along centre
    for ax in range(180, FUNNEL_R, 80):
        md.polygon([(ax, CY-7), (ax+14, CY), (ax, CY+7)], fill=TEAL+(160,))

    # 3 pipeline stage boxes to the right of funnel
    for i in range(3):
        bx = 570 + i * 230
        by = CY - 48
        bw, bh = 190, 96
        # box
        md.rounded_rectangle([bx, by, bx+bw, by+bh], radius=8,
                              fill=NAVY_MID+(210,), outline=TEAL+(100+i*20,), width=1)
        # icon circle
        md.ellipse([bx+12, by+18, bx+52, by+78], fill=TEAL+(30,))
        md.ellipse([bx+21, by+27, bx+43, by+69], fill=TEAL+(110,))
        # text lines
        tw = 100 - random.randint(0, 20)
        md.rounded_rectangle([bx+62, by+24, bx+62+tw, by+34],
                              radius=3, fill=WHITE+(150,))
        md.rounded_rectangle([bx+62, by+42, bx+62+int(tw*0.8), by+50],
                              radius=3, fill=TEAL+(100,))
        md.rounded_rectangle([bx+62, by+58, bx+62+int(tw*0.6), by+65],
                              radius=3, fill=GRAY+(80,))
        # connector arrow
        if i < 2:
            ax = bx + bw + 4
            md.polygon([(ax, CY-6), (ax+14, CY), (ax, CY+6)], fill=TEAL+(180,))

elif category == 'ai-tools':
    # ── Waveform (bottom) + radiating rings + radial lines from centre ─────────
    # Concentric rings from centre
    for r in range(240, 0, -40):
        a = int(75 * (1 - r / 240))
        md.ellipse([CX-r, CY-r, CX+r, CY+r], outline=TEAL+(a,), width=1)

    # Radial spokes from centre
    for angle_deg in range(0, 360, 20):
        angle  = math.radians(angle_deg + (seed % 20))
        r_near = 55
        r_far  = 200 + (seed + angle_deg) % 80
        x0 = int(CX + r_near * math.cos(angle))
        y0 = int(CY + r_near * math.sin(angle))
        x1 = int(CX + r_far  * math.cos(angle))
        y1 = int(CY + r_far  * math.sin(angle))
        md.line([(x0, y0), (x1, y1)], fill=TEAL+(40,), width=1)

    # Central bright node
    glow_circle(md, CX, CY, 14, TEAL, layers=7)

    # Waveform bar chart across lower portion
    BAR_Y   = H - 160
    N_BARS  = 52
    BAR_GAP = 2
    BAR_W   = (W - 80) // N_BARS - BAR_GAP
    for i in range(N_BARS):
        # Compound sine for natural waveform shape
        h_val = int(
            55 + 45 * math.sin(i * 0.28 + seed * 0.001)
               + 22 * math.sin(i * 0.71 + seed * 0.002)
               + 12 * math.sin(i * 1.30)
        )
        h_val = max(6, h_val)
        bx = 40 + i * (BAR_W + BAR_GAP)
        a  = 80 + int(130 * abs(math.sin(i * 0.28)))
        md.rounded_rectangle([bx, BAR_Y - h_val, bx + BAR_W, BAR_Y],
                              radius=2, fill=TEAL+(a,))

elif category == 'industry-news':
    # ── Search panel (left) + magnifying glass (right) ────────────────────────
    # Search bar + results panel on left
    PX, PY = 60, 80
    PW, PH = 460, 480

    # Panel background
    md.rounded_rectangle([PX, PY, PX+PW, PY+PH], radius=10,
                         fill=NAVY_MID+(180,), outline=TEAL+(60,), width=1)

    # Search bar
    SBY = PY + 20
    md.rounded_rectangle([PX+16, SBY, PX+PW-16, SBY+36],
                         radius=6, fill=(20, 36, 64, 255))
    md.rounded_rectangle([PX+16, SBY, PX+PW-16, SBY+36],
                         radius=6, outline=TEAL+(100,), width=1)
    # Search icon dot
    md.ellipse([PX+30, SBY+10, PX+48, SBY+26], fill=TEAL+(80,))
    # Cursor line
    md.rounded_rectangle([PX+56, SBY+11, PX+220, SBY+20],
                         radius=2, fill=TEAL+(60,))
    md.rounded_rectangle([PX+222, SBY+8, PX+225, SBY+27],
                         radius=1, fill=TEAL+(180,))

    # Result rows
    for i in range(4):
        ry = SBY + 52 + i * 96
        row_w = PW - 32

        # Row background
        md.rounded_rectangle([PX+16, ry, PX+16+row_w, ry+80],
                             radius=5, fill=(18, 32, 58, 200))
        md.rounded_rectangle([PX+16, ry, PX+16+row_w, ry+80],
                             radius=5, outline=TEAL+(30+i*8,), width=1)

        # Teal top-strip
        md.rectangle([PX+17, ry+1, PX+15+row_w, ry+14],
                     fill=TEAL+(15+i*5,))

        # Text lines
        line_widths = [row_w-40, row_w-80, row_w-120]
        for li, lw in enumerate(line_widths):
            lw = max(40, lw - random.randint(0, 30))
            ly = ry + 20 + li * 18
            col = WHITE+(140,) if li == 0 else GRAY+(100-li*15,)
            md.rounded_rectangle([PX+26, ly, PX+26+lw, ly+9],
                                 radius=2, fill=col)

    # Magnifying glass on right side
    SCX, SCY = 920, CY + 20
    SR = 145
    # Outer glow rings
    for gr in [SR+20, SR+10]:
        a = 20 if gr == SR+20 else 40
        md.ellipse([SCX-gr, SCY-gr, SCX+gr, SCY+gr],
                   outline=TEAL+(a,), width=1)
    # Main circle
    md.ellipse([SCX-SR, SCY-SR, SCX+SR, SCY+SR],
               outline=TEAL+(150,), width=3)
    # Inner ring
    md.ellipse([SCX-SR+8, SCY-SR+8, SCX+SR-8, SCY+SR-8],
               outline=TEAL+(40,), width=1)

    # Handle
    angle = math.radians(130)
    hx0 = int(SCX + SR * math.cos(angle))
    hy0 = int(SCY + SR * math.sin(angle))
    hx1 = int(SCX + (SR+75) * math.cos(angle))
    hy1 = int(SCY + (SR+75) * math.sin(angle))
    for lw in [10, 5, 2]:
        a = 35 if lw==10 else (80 if lw==5 else 200)
        md.line([(hx0, hy0), (hx1, hy1)], fill=TEAL+(a,), width=lw)

    # Content inside lens — miniature result lines
    for i in range(3):
        lw = 130 - i * 20
        ly = SCY - 36 + i * 32
        md.rounded_rectangle([SCX-lw//2, ly, SCX+lw//2, ly+10],
                             radius=3, fill=TEAL+(50+i*25,))

else:
    # ── Fallback: symmetric node grid ─────────────────────────────────────────
    for ix in range(4):
        for iy in range(3):
            nx = 200 + ix * 300
            ny = 160 + iy * 160
            glow_circle(md, nx, ny, 6, TEAL)
            if ix < 3:
                glow_line(md, nx, ny, nx+300, ny, TEAL, w=1)
            if iy < 2:
                glow_line(md, nx, ny, nx, ny+160, TEAL, w=1)

img = composite(img, motif_layer)

# ── corner bracket accents ────────────────────────────────────────────────────
bracket_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
bd = ImageDraw.Draw(bracket_layer)
SZ = 40
corners = [(20, 20, 1, 1), (W-20, 20, -1, 1), (20, H-20, 1, -1), (W-20, H-20, -1, -1)]
for (bx, by, dx, dy) in corners:
    bd.line([(bx, by), (bx + dx*SZ, by)],         fill=TEAL+(140,), width=2)
    bd.line([(bx, by), (bx, by + dy*SZ)],          fill=TEAL+(140,), width=2)
img = composite(img, bracket_layer)

# ── category pill badge ───────────────────────────────────────────────────────
badge_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
bl = ImageDraw.Draw(badge_layer)
labels = {
    'automation':    'Automation',
    'ai-tools':      'AI Tools',
    'industry-news': 'Industry News',
    'local-business':'Local Business',
}
label = labels.get(category, category.replace('-', ' ').title())
try:
    font = ImageFont.load_default(size=16)
except Exception:
    font = ImageFont.load_default()

bbox = bl.textbbox((0, 0), label, font=font)
tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
pad = 14
px, py = 30, H - 52
bl.rounded_rectangle([px, py, px + tw + pad*2, py + th + 10],
                     radius=(th + 10) // 2,
                     fill=TEAL+(30,), outline=TEAL+(160,), width=1)
bl.text((px + pad, py + 5), label, font=font, fill=TEAL+(220,))
img = composite(img, badge_layer)

# ── final smooth pass ─────────────────────────────────────────────────────────
img = img.filter(ImageFilter.SMOOTH)

# ── save ──────────────────────────────────────────────────────────────────────
out_path = f"/workspace/xentnexai/public/images/articles/{slug}.webp"
img.save(out_path, "WEBP", quality=85, method=6)
print(f"Saved: {out_path}  ({W}×{H})")
