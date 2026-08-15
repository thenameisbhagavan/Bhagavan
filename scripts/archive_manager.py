import os
import shutil

src_content = r"C:\Users\rocky\Desktop\BhagavanPortfolio\src\content"
archive_dir = os.path.join(src_content, "archive")

if not os.path.exists(archive_dir):
    os.makedirs(archive_dir)

# 1. Move non-core directories to archive
core_dirs = ["careeros", "auraos", "veritas", "voltdrive", "portfolio", "journey", "vision", "future", "archive"]

for item in os.listdir(src_content):
    item_path = os.path.join(src_content, item)
    if os.path.isdir(item_path) and item not in core_dirs:
        dest_path = os.path.join(archive_dir, item)
        print(f"Moving directory {item} to archive...")
        shutil.move(item_path, dest_path)

# 2. In each core directory, identify the 5 new articles and move the rest to archive
# We'll identify the 5 new articles by reading their content and looking for <architecture-diagram> or <technical-callout>
# Wait, actually some new ones might not have that. Let's look for `status: "Implemented"` or `status: "Experimental"` or `status: "Planned"` or `articleType: "` because old articles likely didn't have `articleType:` or `heroImage:`
# Also, we can just sort by modification time if they were generated recently. Let's use `articleType:` to distinguish new vs old.

for core in core_dirs:
    if core == "archive": continue
    core_path = os.path.join(src_content, core)
    if not os.path.exists(core_path): continue
    
    # Create subfolder in archive
    core_archive = os.path.join(archive_dir, core)
    
    files = [f for f in os.listdir(core_path) if f.endswith(".md")]
    new_articles = []
    legacy_articles = []
    
    for f in files:
        f_path = os.path.join(core_path, f)
        with open(f_path, "r", encoding="utf-8") as file:
            content = file.read()
            if "articleType:" in content or "seriesOrder:" in content:
                new_articles.append(f)
            else:
                legacy_articles.append(f)
                
    # If for some reason we have more than 5 new articles, we keep the latest 5.
    # Actually, we generated exactly 5 per folder in the last run.
    print(f"[{core}] Found {len(new_articles)} new articles and {len(legacy_articles)} legacy articles.")
    
    if len(legacy_articles) > 0:
        if not os.path.exists(core_archive):
            os.makedirs(core_archive)
        for lf in legacy_articles:
            print(f"  -> Archiving {lf}")
            shutil.move(os.path.join(core_path, lf), os.path.join(core_archive, lf))

print("Archival complete.")
