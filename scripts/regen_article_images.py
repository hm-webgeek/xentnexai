#!/usr/bin/env python3
"""
regen_article_images.py — Regenerate article hero images via ComfyUI.

Each article gets a unique prompt derived from its title and topic.
Photorealistic style for ai-tools and local-business categories.
Geometric illustration style for automation and industry-news.

Output goes to both:
  - public/images/articles/  (site)
  - Documents/Public/xentnexai/  (review)

Usage:
    python3 scripts/regen_article_images.py
"""

import hashlib
import json
import time
import urllib.request
from pathlib import Path
from PIL import Image
import io

# ── config ────────────────────────────────────────────────────────────────────
COMFYUI_URL  = "http://127.0.0.1:8188"
SITE_IMG_DIR = Path("/Users/mini-claw/Documents/Projects/xentnexai/public/images/articles")
REVIEW_DIR   = Path("/Users/mini-claw/Documents/Public/xentnexai")

NEG_GEOMETRIC     = "photorealistic, photography, photo, human, person, face, portrait, bokeh, realistic, 3d render, text, words, letters, labels, watermark"
NEG_PHOTOREALISTIC = "cartoon, illustration, drawing, painting, ugly, blurry, low quality, text, watermark, logo"

# ── articles — each has a unique article-specific prompt ──────────────────────
ARTICLES = [
    # ── automation (geometric) ────────────────────────────────────────────────
    {
        "slug":     "2026-04-07-ai-crm-lead-capture-5-minute-rule",
        "style":    "geometric",
        "prompt":   (
            "geometric CRM lead capture pipeline diagram, clock icon with glowing teal nodes "
            "representing instant 5-minute response window, funnel narrowing to a confirmed lead card, "
            "dark navy background, muted orange accent highlights, flat digital illustration, no people"
        ),
    },
    {
        "slug":     "2026-04-03-ai-lead-generation-data-enrichment-small-business",
        "style":    "geometric",
        "prompt":   (
            "geometric data enrichment pipeline, database cylinder nodes feeding into glowing lead profile cards "
            "connected by teal circuit lines, orange accent nodes marking enrichment stages, "
            "dark navy background, flat digital illustration, no people"
        ),
    },
    {
        "slug":     "2026-03-27-every-back-office-ai-agents-small-business",
        "style":    "geometric",
        "prompt":   (
            "geometric back-office workflow diagram, three interconnected agent nodes labelled CFO bookkeeper CHRO "
            "in teal hexagons, document and spreadsheet icons as geometric shapes, orange accent lines, "
            "dark navy background, flat digital illustration, no people"
        ),
    },
    {
        "slug":     "2026-03-27-meta-autonomous-ai-ad-campaigns-small-business",
        "style":    "geometric",
        "prompt":   (
            "geometric advertising automation flow diagram, ad creative nodes feeding through audience targeting "
            "funnel into campaign result metrics, teal circuit lines with orange accent highlights, "
            "dark navy background, flat digital illustration, no people"
        ),
    },

    # ── ai-tools (photorealistic) ─────────────────────────────────────────────
    {
        "slug":     "2026-03-28-ai-coding-agents-uncomfortable-truths",
        "style":    "photorealistic",
        "prompt":   (
            "laptop screen showing AI code suggestions with subtle warning indicators highlighted in amber, "
            "dark moody developer desk with teal monitor glow, cables and coffee cup softly out of focus, "
            "editorial product photography, no faces, shallow depth of field"
        ),
    },
    {
        "slug":     "2026-03-28-mistral-voxtral-tts-free-voice-ai",
        "style":    "photorealistic",
        "prompt":   (
            "professional condenser microphone with glowing teal audio waveform visualisation floating beside it, "
            "dark studio background with warm amber and teal rim lighting, "
            "editorial product photography, no faces, shallow depth of field"
        ),
    },
    {
        "slug":     "2026-03-26-claude-code-auto-mode-ai-coding",
        "style":    "photorealistic",
        "prompt":   (
            "dark terminal screen filled with flowing teal and white code output, ambient monitor glow "
            "illuminating a keyboard in soft blue light, no other light source, "
            "editorial tech photography, no faces, shallow depth of field"
        ),
    },

    # ── industry-news (geometric) ─────────────────────────────────────────────
    {
        "slug":     "2026-03-27-businesses-choosing-claude-over-chatgpt-2026",
        "style":    "geometric",
        "prompt":   (
            "geometric AI comparison interface panel, two chat interface nodes side by side with a business "
            "decision arrow pivoting toward one, teal selection highlight and orange accent lines, "
            "dark navy background, flat digital illustration, no people"
        ),
    },
    {
        "slug":     "2026-03-26-arc-agi-3-benchmark-ai-intelligence",
        "style":    "geometric",
        "prompt":   (
            "geometric intelligence benchmark visualisation, ascending stepped bar chart of AI capability scores "
            "in teal and orange, grid scoring panel with node markers, a gap at the top suggesting distance "
            "still to reach, dark navy background, flat digital illustration, no people"
        ),
    },
    {
        "slug":     "2026-03-26-perplexity-ai-scraping-content-rights",
        "style":    "geometric",
        "prompt":   (
            "geometric web content flow diagram, website document nodes with scraping arrows being intercepted "
            "by a shield protection icon in orange, teal circuit lines, dark navy background, "
            "flat digital illustration, no people"
        ),
    },
]

# ── ComfyUI helpers ───────────────────────────────────────────────────────────

def api(path, payload=None):
    url = f"{COMFYUI_URL}{path}"
    if payload:
        data = json.dumps(payload).encode()
        req  = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    else:
        req = urllib.request.Request(url)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def build_workflow(prompt_text, seed, width=1200, height=630):
    return {
        "1": {
            "class_type": "UnetLoaderGGUF",
            "inputs": {"unet_name": "flux1-schnell-Q8_0.gguf"},
        },
        "2": {
            "class_type": "DualCLIPLoader",
            "inputs": {
                "clip_name1": "clip_l.safetensors",
                "clip_name2": "t5xxl_fp8.safetensors",
                "type": "flux",
            },
        },
        "3": {
            "class_type": "VAELoader",
            "inputs": {"vae_name": "flux_ae.safetensors"},
        },
        "4": {
            "class_type": "CLIPTextEncodeFlux",
            "inputs": {
                "clip":     ["2", 0],
                "clip_l":   prompt_text,
                "t5xxl":    prompt_text,
                "guidance": 3.5,
            },
        },
        "5": {
            "class_type": "CLIPTextEncodeFlux",
            "inputs": {
                "clip":     ["2", 0],
                "clip_l":   "",
                "t5xxl":    "",
                "guidance": 1.0,
            },
        },
        "6": {
            "class_type": "EmptyLatentImage",
            "inputs": {"width": width, "height": height, "batch_size": 1},
        },
        "7": {
            "class_type": "KSampler",
            "inputs": {
                "model":        ["1", 0],
                "positive":     ["4", 0],
                "negative":     ["5", 0],
                "latent_image": ["6", 0],
                "seed":         seed,
                "steps":        8,
                "cfg":          1.0,
                "sampler_name": "euler",
                "scheduler":    "simple",
                "denoise":      1.0,
            },
        },
        "8": {
            "class_type": "VAEDecode",
            "inputs": {"samples": ["7", 0], "vae": ["3", 0]},
        },
        "9": {
            "class_type": "SaveImage",
            "inputs": {"images": ["8", 0], "filename_prefix": "regen"},
        },
    }


def submit(workflow):
    result = api("/prompt", {"prompt": workflow})
    return result["prompt_id"]


def wait_for(prompt_id, poll=2, timeout=300):
    start = time.time()
    while time.time() - start < timeout:
        history = api(f"/history/{prompt_id}")
        if prompt_id in history:
            outputs = history[prompt_id].get("outputs", {})
            for node_out in outputs.values():
                if "images" in node_out:
                    return node_out["images"][0]
        time.sleep(poll)
    raise TimeoutError(f"ComfyUI timed out after {timeout}s for {prompt_id}")


def download_image(img_info):
    url = (f"{COMFYUI_URL}/view"
           f"?filename={img_info['filename']}"
           f"&subfolder={img_info.get('subfolder', '')}"
           f"&type={img_info.get('type', 'output')}")
    with urllib.request.urlopen(url, timeout=30) as r:
        return r.read()


def save_webp(png_bytes, slug):
    img = Image.open(io.BytesIO(png_bytes))
    for dest_dir in [SITE_IMG_DIR, REVIEW_DIR]:
        dest_dir.mkdir(parents=True, exist_ok=True)
        out = dest_dir / f"{slug}.webp"
        img.save(out, "WEBP", quality=85, method=6)
        print(f"  Saved: {out}")


# ── main ──────────────────────────────────────────────────────────────────────

def main():
    print(f"ComfyUI at {COMFYUI_URL}")
    print(f"Processing {len(ARTICLES)} articles\n")

    for article in ARTICLES:
        slug   = article["slug"]
        style  = article["style"]
        prompt = article["prompt"]
        neg    = NEG_PHOTOREALISTIC if style == "photorealistic" else NEG_GEOMETRIC
        seed   = int(hashlib.md5(slug.encode()).hexdigest()[:8], 16) % (2**32)

        print(f"[{slug}]")
        print(f"  Style  : {style}")
        print(f"  Seed   : {seed}")

        workflow  = build_workflow(f"{prompt}, negative: {neg}", seed)
        prompt_id = submit(workflow)
        print(f"  Queued : {prompt_id}")

        img_info  = wait_for(prompt_id)
        print(f"  Done   : {img_info['filename']}")

        png_bytes = download_image(img_info)
        save_webp(png_bytes, slug)
        print()

    print("All done.")


if __name__ == "__main__":
    main()
