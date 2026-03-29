#!/usr/bin/env python3
"""
Generate xentnexai-hero-website-building.png
1280 × 640px — geometric illustration style matching existing XentnexAI heroes
Dark navy background, teal accents, browser/monitor with AI neural network nodes
"""

import math
import random
from PIL import Image, ImageDraw, ImageFilter

W, H = 1280, 640
NAVY       = (11, 20, 38)        # #0B1426
NAVY_MID   = (26, 39, 64)        # #1A2740
TEAL       = (45, 212, 191)      # #2DD4BF
TEAL_DIM   = (27, 168, 153)      # #1BA899
TEAL_DARK  = (15, 80, 80)        # deep teal for shadows
WHITE      = (255, 255, 255)
GRAY       = (100, 120, 150)

random.seed(42)

# ── helpers ──────────────────────────────────────────────────────────────────

def lerp_color(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(len(a)))

def blend_pixel(base, color, alpha):
    """Alpha-composite color onto base."""
    a = alpha / 255.0
    return tuple(int(base[i] * (1 - a) + color[i] * a) for i in range(3))

def draw_glow_circle(draw, cx, cy, r, color, layers=6):
    for i in range(layers, 0, -1):
        ratio = i / layers
        alpha = int(180 * (1 - ratio))
        radius = r + (layers - i) * 4
        c = color + (alpha,)
        draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius],
                     fill=c, outline=None)

def draw_glow_line(img_rgba, x0, y0, x1, y1, color, width=2, glow_width=8, glow_alpha=60):
    """Draw a line with a soft glow halo using multiple passes."""
    draw = ImageDraw.Draw(img_rgba)
    # outer glow
    for w in range(glow_width, 0, -2):
        a = int(glow_alpha * (1 - w / glow_width))
        draw.line([(x0, y0), (x1, y1)],
                  fill=color + (a,), width=w + width)
    # core line
    draw.line([(x0, y0), (x1, y1)], fill=color + (220,), width=width)

# ── canvas ───────────────────────────────────────────────────────────────────

img = Image.new("RGB", (W, H), NAVY)
draw = ImageDraw.Draw(img)

# ── background: subtle radial gradient (teal glow bottom-left) ────────────────
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)

for r in range(500, 0, -10):
    t = r / 500
    alpha = int(55 * (1 - t))
    glow_draw.ellipse([-100 - r, H - r, -100 + r * 2, H + r],
                      fill=TEAL + (alpha,))

# secondary glow top-right
for r in range(350, 0, -10):
    t = r / 350
    alpha = int(35 * (1 - t))
    glow_draw.ellipse([W - r, -r, W + r, r * 2],
                      fill=TEAL_DIM + (alpha,))

img = Image.alpha_composite(img.convert("RGBA"), glow_layer).convert("RGB")

# ── background grid ──────────────────────────────────────────────────────────
grid_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
grid_draw = ImageDraw.Draw(grid_layer)

GRID_STEP = 60
for x in range(0, W + GRID_STEP, GRID_STEP):
    # fade vertical grid lines
    alpha = 18
    grid_draw.line([(x, 0), (x, H)], fill=TEAL + (alpha,), width=1)
for y in range(0, H + GRID_STEP, GRID_STEP):
    alpha = 18
    grid_draw.line([(0, y), (W, y)], fill=TEAL + (alpha,), width=1)

img = Image.alpha_composite(img.convert("RGBA"), grid_layer).convert("RGB")

# ── monitor / browser frame ───────────────────────────────────────────────────
# Position: centre-right, slightly inset
MON_X, MON_Y = 360, 80          # top-left of monitor body
MON_W, MON_H = 680, 420         # monitor body size

layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

# Monitor body fill — dark panel
ld.rounded_rectangle([MON_X, MON_Y, MON_X + MON_W, MON_Y + MON_H],
                      radius=12, fill=(16, 28, 52, 230))

# Monitor border glow
for bw in [8, 4, 2]:
    a = 40 if bw == 8 else (80 if bw == 4 else 200)
    ld.rounded_rectangle([MON_X - bw, MON_Y - bw,
                           MON_X + MON_W + bw, MON_Y + MON_H + bw],
                         radius=12 + bw, outline=TEAL + (a,), width=bw)

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── browser chrome (inside monitor) ──────────────────────────────────────────
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

# address bar strip
BAR_Y = MON_Y + 14
BAR_H = 32
ld.rectangle([MON_X + 12, BAR_Y, MON_X + MON_W - 12, BAR_Y + BAR_H],
             fill=(20, 36, 64, 255))

# 3 traffic-light dots
for i, col in enumerate([(255, 90, 90, 220), (255, 190, 50, 220), TEAL + (220,)]):
    cx = MON_X + 30 + i * 20
    cy = BAR_Y + BAR_H // 2
    ld.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=col)

# URL bar pill
ld.rounded_rectangle([MON_X + 80, BAR_Y + 6, MON_X + MON_W - 80, BAR_Y + BAR_H - 6],
                     radius=6, fill=(30, 52, 88, 255))
# URL text dots
for i in range(8):
    ld.ellipse([MON_X + 100 + i * 22, BAR_Y + 12, MON_X + 115 + i * 22, BAR_Y + 20],
               fill=TEAL + (80,))

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── website content inside browser ───────────────────────────────────────────
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

CONTENT_TOP = MON_Y + 14 + 32 + 8   # below browser bar
CONTENT_BOT = MON_Y + MON_H - 12
CONTENT_L   = MON_X + 12
CONTENT_R   = MON_X + MON_W - 12
CW = CONTENT_R - CONTENT_L

# ── hero section block ──────────────────────────────────────────────────────
HERO_H = 130
ld.rectangle([CONTENT_L, CONTENT_TOP, CONTENT_R, CONTENT_TOP + HERO_H],
             fill=(14, 24, 46, 255))

# hero gradient overlay strip (teal at left)
for x in range(CW):
    t = 1 - (x / CW)
    a = int(55 * t * t)
    ld.rectangle([CONTENT_L + x, CONTENT_TOP,
                  CONTENT_L + x + 1, CONTENT_TOP + HERO_H],
                 fill=TEAL + (a,))

# simulated nav bar inside hero
NAV_Y = CONTENT_TOP + 10
NAV_H = 24
ld.rectangle([CONTENT_L + 6, NAV_Y, CONTENT_R - 6, NAV_Y + NAV_H],
             fill=(20, 36, 64, 200))
# nav items
for i in range(5):
    w = random.randint(28, 50)
    ld.rounded_rectangle([CONTENT_L + 20 + i * 65, NAV_Y + 6,
                           CONTENT_L + 20 + i * 65 + w, NAV_Y + NAV_H - 6],
                         radius=3, fill=TEAL + (60,))
# nav CTA button
ld.rounded_rectangle([CONTENT_R - 90, NAV_Y + 5, CONTENT_R - 14, NAV_Y + NAV_H - 5],
                     radius=4, fill=TEAL + (200,))

# hero heading lines
ld.rounded_rectangle([CONTENT_L + 20, CONTENT_TOP + 46,
                       CONTENT_L + 260, CONTENT_TOP + 62],
                     radius=4, fill=WHITE + (220,))
ld.rounded_rectangle([CONTENT_L + 20, CONTENT_TOP + 70,
                       CONTENT_L + 180, CONTENT_TOP + 82],
                     radius=3, fill=TEAL + (180,))

# hero CTA blocks
ld.rounded_rectangle([CONTENT_L + 20, CONTENT_TOP + 95,
                       CONTENT_L + 110, CONTENT_TOP + 117],
                     radius=5, fill=TEAL + (240,))
ld.rounded_rectangle([CONTENT_L + 124, CONTENT_TOP + 95,
                       CONTENT_L + 220, CONTENT_TOP + 117],
                     radius=5, fill=(30, 52, 88, 200))

# hero right side: abstract shape blocks
ld.rounded_rectangle([CONTENT_R - 260, CONTENT_TOP + 30,
                       CONTENT_R - 20, CONTENT_TOP + 120],
                     radius=8, fill=(20, 40, 72, 220))
for i in range(3):
    ld.rounded_rectangle([CONTENT_R - 250 + i * 80, CONTENT_TOP + 44,
                           CONTENT_R - 180 + i * 80, CONTENT_TOP + 64],
                         radius=3, fill=TEAL + (50 + i * 30,))

# ── card grid section ───────────────────────────────────────────────────────
GRID_TOP = CONTENT_TOP + HERO_H + 10
CARD_H = 76
NCOLS = 3
CARD_W = (CW - 20 - (NCOLS - 1) * 8) // NCOLS

for col in range(NCOLS):
    cx = CONTENT_L + 10 + col * (CARD_W + 8)
    cy = GRID_TOP
    ld.rounded_rectangle([cx, cy, cx + CARD_W, cy + CARD_H],
                         radius=6, fill=(18, 32, 58, 240))
    ld.rounded_rectangle([cx, cy, cx + CARD_W, cy + CARD_H],
                         radius=6, outline=TEAL + (60,), width=1)
    # icon placeholder circle
    ld.ellipse([cx + 10, cy + 14, cx + 38, cy + 42],
               fill=TEAL + (40,))
    ld.ellipse([cx + 17, cy + 21, cx + 31, cy + 35],
               fill=TEAL + (120,))
    # text lines
    ld.rounded_rectangle([cx + 48, cy + 18, cx + CARD_W - 12, cy + 28],
                         radius=3, fill=WHITE + (160,))
    ld.rounded_rectangle([cx + 48, cy + 34, cx + CARD_W - 24, cy + 42],
                         radius=3, fill=GRAY + (120,))
    ld.rounded_rectangle([cx + 48, cy + 48, cx + CARD_W - 36, cy + 56],
                         radius=3, fill=GRAY + (80,))

# ── second row of cards ─────────────────────────────────────────────────────
GRID_TOP2 = GRID_TOP + CARD_H + 10
NCOLS2 = 4
CARD_W2 = (CW - 20 - (NCOLS2 - 1) * 6) // NCOLS2
CARD_H2 = 60

for col in range(NCOLS2):
    cx = CONTENT_L + 10 + col * (CARD_W2 + 6)
    cy = GRID_TOP2
    ld.rounded_rectangle([cx, cy, cx + CARD_W2, cy + CARD_H2],
                         radius=5, fill=(16, 28, 52, 220))
    ld.rounded_rectangle([cx, cy, cx + CARD_W2, cy + CARD_H2],
                         radius=5, outline=TEAL + (40,), width=1)
    # header strip
    ld.rectangle([cx + 1, cy + 1, cx + CARD_W2 - 1, cy + 18],
                 fill=TEAL + (25,))
    for i in range(3):
        ld.rounded_rectangle([cx + 8, cy + 26 + i * 12,
                               cx + CARD_W2 - 8 - i * 18, cy + 33 + i * 12],
                             radius=2, fill=GRAY + (100 - i * 20,))

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── monitor stand ─────────────────────────────────────────────────────────────
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

STAND_X = MON_X + MON_W // 2
STAND_TOP = MON_Y + MON_H
STAND_BOT = STAND_TOP + 48

# neck
ld.polygon([(STAND_X - 18, STAND_TOP),
            (STAND_X + 18, STAND_TOP),
            (STAND_X + 28, STAND_BOT),
            (STAND_X - 28, STAND_BOT)],
           fill=(20, 36, 64, 220))

# base
BASE_W = 180
ld.rounded_rectangle([STAND_X - BASE_W // 2, STAND_BOT,
                       STAND_X + BASE_W // 2, STAND_BOT + 16],
                     radius=4, fill=(20, 36, 64, 220))
ld.rounded_rectangle([STAND_X - BASE_W // 2, STAND_BOT,
                       STAND_X + BASE_W // 2, STAND_BOT + 16],
                     radius=4, outline=TEAL + (80,), width=1)

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── AI neural network nodes (left side flowing into monitor) ──────────────────
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

# Define node clusters: left area and some overlapping the monitor border
nodes = [
    # far-left cluster
    (80,  120, 7),
    (50,  260, 5),
    (140, 320, 6),
    (90,  420, 5),
    (200, 180, 5),
    (180, 480, 6),
    (260, 380, 5),
    (260, 90,  6),
    # mid cluster (bridging into monitor)
    (330, 200, 7),
    (310, 340, 6),
    (330, 500, 5),
    # nodes that sit on the left edge of the monitor / just inside
    (MON_X - 10, 160, 7),
    (MON_X + 20, 280, 6),
    (MON_X - 20, 400, 6),
    # right-side trailing nodes
    (MON_X + MON_W + 40, 140, 5),
    (MON_X + MON_W + 60, 320, 6),
    (MON_X + MON_W + 30, 480, 5),
    (W - 60, 200, 5),
    (W - 80, 420, 5),
    # top & bottom accent nodes
    (520, 50,  5),
    (720, 600, 5),
    (900, 40,  4),
    (1050, 580, 4),
]

# ── draw connecting lines first (behind nodes) ──────────────────────────────
connections = [
    (0,1),(0,4),(1,2),(1,3),(2,3),(2,5),(3,5),(4,7),(4,8),
    (5,10),(6,9),(6,10),(7,8),(8,9),(9,11),(10,12),(11,12),
    (11,13),(12,13),(8,11),(9,12),(13,14),(14,15),(15,16),
    (16,18),(17,18),(14,17),(19,8),(20,13),(21,14),(22,16),
]

for i, j in connections:
    x0, y0, _ = nodes[i]
    x1, y1, _ = nodes[j]
    # line glow
    for lw in [6, 3, 1]:
        a = 15 if lw == 6 else (35 if lw == 3 else 120)
        ld.line([(x0, y0), (x1, y1)], fill=TEAL + (a,), width=lw)

# ── draw nodes ──────────────────────────────────────────────────────────────
for (nx, ny, nr) in nodes:
    # outer glow rings
    for gr in [nr + 10, nr + 6, nr + 3]:
        ga = int(40 * (1 - (gr - nr) / 12))
        ld.ellipse([nx - gr, ny - gr, nx + gr, ny + gr],
                   fill=TEAL + (ga,))
    # node fill
    ld.ellipse([nx - nr, ny - nr, nx + nr, ny + nr],
               fill=TEAL + (180,))
    # bright core
    cr = max(1, nr - 2)
    ld.ellipse([nx - cr, ny - cr, nx + cr, ny + cr],
               fill=WHITE + (220,))

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── pill badge labels ─────────────────────────────────────────────────────────
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

try:
    from PIL import ImageFont
    font = ImageFont.load_default(size=16)
    small_font = ImageFont.load_default(size=13)
except Exception:
    font = ImageFont.load_default()
    small_font = font

badges = [
    ("AI-Powered", 60, 70),
    ("SEO", 170, 530),
    ("Fast", W - 120, 260),
    ("Mobile", W - 140, 540),
    ("Secure", 40, 500),
]

for text, bx, by in badges:
    bbox = ld.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad_x, pad_y = 14, 7
    rx0, ry0 = bx, by
    rx1, ry1 = bx + tw + pad_x * 2, by + th + pad_y * 2
    # pill background
    ld.rounded_rectangle([rx0, ry0, rx1, ry1], radius=(ry1 - ry0) // 2,
                         fill=(45, 212, 191, 30), outline=TEAL + (160,), width=1)
    # text
    ld.text((rx0 + pad_x, ry0 + pad_y), text, font=font,
            fill=TEAL + (220,))

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── corner accent triangles (geometric flair) ────────────────────────────────
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ld = ImageDraw.Draw(layer)

# top-left corner bracket
corner_size = 40
ld.line([(20, 20), (20 + corner_size, 20)], fill=TEAL + (140,), width=2)
ld.line([(20, 20), (20, 20 + corner_size)], fill=TEAL + (140,), width=2)

# top-right corner bracket
ld.line([(W - 20, 20), (W - 20 - corner_size, 20)], fill=TEAL + (140,), width=2)
ld.line([(W - 20, 20), (W - 20, 20 + corner_size)], fill=TEAL + (140,), width=2)

# bottom-left
ld.line([(20, H - 20), (20 + corner_size, H - 20)], fill=TEAL + (140,), width=2)
ld.line([(20, H - 20), (20, H - 20 - corner_size)], fill=TEAL + (140,), width=2)

# bottom-right
ld.line([(W - 20, H - 20), (W - 20 - corner_size, H - 20)], fill=TEAL + (140,), width=2)
ld.line([(W - 20, H - 20), (W - 20, H - 20 - corner_size)], fill=TEAL + (140,), width=2)

img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

# ── final soft blur for anti-aliasing effect ─────────────────────────────────
img = img.filter(ImageFilter.SMOOTH)

# ── save ─────────────────────────────────────────────────────────────────────
out_path = "/Users/mini-claw/Documents/Projects/xentnexai/public/images/xentnexai-hero-website-building.webp"
img.save(out_path, "WEBP", quality=90, method=6)
print(f"Saved: {out_path}  ({W}x{H})")
