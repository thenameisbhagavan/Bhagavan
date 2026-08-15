import os
import glob
from PIL import Image, ImageFilter, ImageDraw

SOURCE_DIR = r"C:\Users\rocky\Desktop\BhagavanPortfolio\Acdemic certificates"
DEST_DIR = r"C:\Users\rocky\Desktop\BhagavanPortfolio\src\assets\academic"

# Files to explicitly include (excluding IMG_*, caste, income, etc)
ACADEMIC_FILES = [
    "10th Class Certificate.jpg",
    "10th class study certificate.jpg",
    "6th class study certificate.jpg",
    "9th class study certificate.jpg",
    "B tech Provessional certificate.jpg",
    "Intermediate Certificate.jpg",
    "b Tech CMM.jpg",
    "b tech 3rd sem.jpg",
    "b tech 4th sem.jpg",
    "b tech 5th sem.jpg",
    "b tech 6 th sem.jpg",
    "b tech 7th sem.jpg",
    "b tech 8th sem.jpg",
    "b tech sem 1 chemistry supply passed.jpg",
    "b tech sem 1.jpg",
    "b tech sem 2 supply 1 .jpg",
    "b tech sem 2 supply 2.jpg",
    "b tech sem 2.jpg",
    "b tech sem 3 suply 1.jpg",
    "intemmediate study and conduct certificate.jpg"
]

def redact_and_copy():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    for filename in ACADEMIC_FILES:
        src_path = os.path.join(SOURCE_DIR, filename)
        if not os.path.exists(src_path):
            print(f"Skipping (not found): {filename}")
            continue

        try:
            with Image.open(src_path) as img:
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                width, height = img.size
                
                # Heavily blur the top 20% and bottom 15% to redact PII
                top_crop_h = int(height * 0.22)
                bottom_crop_h = int(height * 0.15)
                
                top_region = img.crop((0, 0, width, top_crop_h))
                bottom_region = img.crop((0, height - bottom_crop_h, width, height))
                
                top_region = top_region.filter(ImageFilter.GaussianBlur(radius=40))
                bottom_region = bottom_region.filter(ImageFilter.GaussianBlur(radius=40))
                
                img.paste(top_region, (0, 0))
                img.paste(bottom_region, (0, height - bottom_crop_h))
                
                # Resize for web performance if it's too large (max 1920px width)
                if width > 1920:
                    ratio = 1920 / width
                    new_size = (1920, int(height * ratio))
                    img = img.resize(new_size, Image.Resampling.LANCZOS)
                
                # Clean up filename for web
                clean_name = filename.lower().replace(" ", "_").replace(".", "_", filename.count(".") - 1)
                dest_path = os.path.join(DEST_DIR, clean_name)
                
                img.save(dest_path, "JPEG", quality=85, optimize=True)
                print(f"Processed: {clean_name}")
                
        except Exception as e:
            print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    redact_and_copy()
