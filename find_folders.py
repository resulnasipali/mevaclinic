import os

paths = [r"C:\Users\Lenovo\Desktop", r"C:\Users\Lenovo\Downloads", r"C:\Users\Lenovo\Pictures", r"C:\Users\Lenovo\.gemini\antigravity\scratch"]

found = False
for base_path in paths:
    if not os.path.exists(base_path):
        continue
    for root, dirs, files in os.walk(base_path):
        for d in dirs:
            d_lower = d.lower()
            if 'hotel' in d_lower or 'hospital' in d_lower or 'vip' in d_lower:
                print(f"FOUND DIR: {os.path.join(root, d)}")
                found = True
        for f in files:
            f_lower = f.lower()
            if 'hotel' in f_lower or 'hospital' in f_lower or 'vip' in f_lower:
                print(f"FOUND FILE: {os.path.join(root, f)}")
                found = True

if not found:
    print("No folders or files found matching criteria.")
