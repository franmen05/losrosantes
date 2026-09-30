#!/usr/bin/env python3
"""Genera las imagenes optimizadas de img/site/ a partir de img/colegio/.

Uso (desde la raiz del repo):  python3 _notes/build_images.py
Requiere Pillow con soporte WebP y AVIF. No modifica los originales.
"""
import os
from PIL import Image, ImageOps, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "img", "colegio")
OUT = os.path.join(ROOT, "img", "site")

# nombre, origen, ancho lg
TABLE = [
    ("grupo-mural", "i/contactos.jpg", 1280),
    ("fachada", "i/bienvenida2.jpg", 1189),
    ("inicial-bandera", "foto (6).JPG", 1280),
    ("inicial-coloreando", "i/prescolar.jpg", 833),
    ("primaria-tablets", "i/primaria.jpg", 987),
    ("primaria-aula", "i/cole (7).jpg", 1280),
    ("estudiantes-uniforme", "foto (8).JPG", 1280),
    ("secundaria-graduacion", "secundaria.jpg", 1280),
    ("secundaria-estudiantes", "media.jpg", 1280),
    ("mural-escudo", "i/historia.jpg", 1080),
    ("mural-lema", "i/cole (3).jpg", 1080),
    ("graduacion-inicial", "preescolar.jpg", 1280),
    ("ninos-actividad", "foto(1).JPG", 1280),
    ("estudiantes-amigas", "foto_3.JPG", 1280),
]

# Poner False para desactivar la mejora en una foto concreta.
ENHANCE = {}

Q_AVIF, Q_WEBP, Q_JPG = 55, 78, 82


def load(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)
    im = im.convert("RGB")
    # Reconstruir sin metadatos (EXIF, ICC, etc.)
    clean = Image.new("RGB", im.size)
    clean.paste(im)
    return clean


def enhance(im):
    return ImageOps.autocontrast(im, cutoff=0.5, preserve_tone=True)


def resized(im, width):
    """Reduce a `width` con LANCZOS; nunca amplia. Aplica enfoque suave si redujo."""
    if width >= im.width:
        return im.copy(), False
    h = round(im.height * width / im.width)
    return im.resize((width, h), Image.LANCZOS), True


def sharpen(im):
    return im.filter(ImageFilter.UnsharpMask(radius=0.8, percent=40, threshold=3))


def save_all(im, base):
    im.save(base + ".avif", quality=Q_AVIF, speed=4)
    im.save(base + ".webp", quality=Q_WEBP, method=6)
    im.save(base + ".jpg", quality=Q_JPG, optimize=True, progressive=True)


def build_photos():
    for name, rel, lg in TABLE:
        im = load(os.path.join(SRC, rel))
        if ENHANCE.get(name, True):
            im = enhance(im)
        for suffix, w in (("640", 640), ("lg", lg)):
            out, did = resized(im, w)
            if did:
                out = sharpen(out)
            save_all(out, os.path.join(OUT, f"{name}-{suffix}"))
            print(name, suffix, out.size)


def build_og():
    im = load(os.path.join(SRC, "i", "contactos.jpg"))
    im = enhance(im)
    W, H = 1200, 630
    left = (im.width - W) // 2
    # Recorte centrado en horizontal; en vertical se centra (ver OG_TOP para ajustar).
    top = OG_TOP if OG_TOP is not None else (im.height - H) // 2
    im = im.crop((left, top, left + W, top + H))
    im.save(os.path.join(OUT, "og.jpg"), quality=85, optimize=True, progressive=True)


OG_TOP = 25  # subir el recorte para no cortar el rotulo "Centro Educativo"


def logo_canvas(logo, size, margin_ratio):
    box = round(size * (1 - 2 * margin_ratio))
    scale = min(box / logo.width, box / logo.height, 1.0 if size > logo.height else 10)
    w, h = max(1, round(logo.width * scale)), max(1, round(logo.height * scale))
    l = logo.resize((w, h), Image.LANCZOS)
    canvas = Image.new("RGB", (size, size), "white")
    canvas.paste(l, ((size - w) // 2, (size - h) // 2), l)
    return canvas


def build_logo():
    src = os.path.join(SRC, "logo", "logo_o.png")
    logo = Image.open(src)
    logo = logo.convert("RGBA")
    logo.save(os.path.join(OUT, "logo.png"), optimize=True)
    logo_canvas(logo, 32, 0.06).save(os.path.join(OUT, "favicon-32.png"), optimize=True)
    logo_canvas(logo, 192, 0.12).save(os.path.join(OUT, "icon-192.png"), optimize=True)
    logo_canvas(logo, 180, 0.12).save(os.path.join(OUT, "apple-touch-icon.png"), optimize=True)


def build_video():
    """Solo macOS: recomprime el video (avconvert) y saca el poster (qlmanage)."""
    import shutil, subprocess, tempfile
    src = os.path.join(ROOT, "video", "1000184264.mp4")
    dst = os.path.join(ROOT, "video", "colegio.mp4")
    if not os.path.exists(src):
        return
    subprocess.run(["avconvert", "--preset", "Preset1280x720", "--source", src,
                    "--output", dst, "--replace"], check=True)
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["qlmanage", "-t", "-s", "1280", "-o", tmp, src],
                       check=True, capture_output=True)
        png = os.path.join(tmp, os.path.basename(src) + ".png")
        Image.open(png).convert("RGB").save(
            os.path.join(OUT, "video-poster.jpg"), quality=82, optimize=True, progressive=True)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    build_photos()
    build_og()
    build_logo()
    build_video()
