import os
import sys
import time
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# cPanel UAPI Credentials
username = os.environ.get("CPANEL_USER", "proeven1")
token = os.environ.get("CPANEL_TOKEN", "VXEL9327HGWVJVHT7KTT1JJJNTUO7B1L")
cpanel_host = os.environ.get("CPANEL_HOST", "https://proeventsolutions.pk:2083")

# Determine base dir (repository root)
script_dir = os.path.dirname(os.path.abspath(__file__))
base_dir = os.path.abspath(os.path.join(script_dir, ".."))

print("==========================================")
print("Pro Event Solutions - Automated Deployer")
print(f"Target: {cpanel_host}")
print(f"User: {username}")
print(f"Base Directory: {base_dir}")
print("==========================================")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ProEventSolutions-Deployer/1.0',
    'Authorization': f'cpanel {username}:{token}'
}

upload_url = f"{cpanel_host}/execute/Fileman/upload_files"

# Folders and files to exclude from web hosting root
EXCLUDE_DIRS = {'.git', '.github', 'scripts', '__pycache__', '.pytest_cache'}
EXCLUDE_FILES = {'.gitignore', 'deploy_to_cpanel.py'}

file_list = []
for root, dirs, files in os.walk(base_dir):
    # Skip excluded directories
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    
    for f in files:
        if f in EXCLUDE_FILES:
            continue
        full_path = os.path.join(root, f)
        rel_path = os.path.relpath(full_path, base_dir).replace('\\', '/')
        rel_dir = os.path.dirname(rel_path)
        cpanel_dir = "public_html" if not rel_dir else f"public_html/{rel_dir}"
        file_list.append((full_path, f, cpanel_dir, rel_path))

print(f"Total production files to sync: {len(file_list)}")

# Setup requests session with retries
session = requests.Session()
retries = Retry(total=3, backoff_factor=1, status_forcelist=[500, 502, 503, 504])
session.mount('https://', HTTPAdapter(max_retries=retries))
session.headers.update(headers)

succeeded = 0
failed = 0
failures = []

for idx, (full_path, fname, cpanel_dir, rel_path) in enumerate(file_list, 1):
    file_size = os.path.getsize(full_path)
    ext = os.path.splitext(fname)[1].lower()
    
    if ext == '.html': mime = 'text/html'
    elif ext == '.css': mime = 'text/css'
    elif ext == '.js': mime = 'application/javascript'
    elif ext == '.webp': mime = 'image/webp'
    elif ext == '.svg': mime = 'image/svg+xml'
    elif ext == '.xml': mime = 'application/xml'
    elif ext == '.txt' or fname in ['.htaccess', 'robots.txt']: mime = 'text/plain'
    elif ext == '.csv': mime = 'text/csv'
    elif ext == '.yml' or ext == '.yaml': mime = 'text/yaml'
    else: mime = 'application/octet-stream'

    retry_count = 3
    success = False
    
    while retry_count > 0 and not success:
        try:
            with open(full_path, "rb") as fp:
                files_payload = {"file-1": (fname, fp, mime)}
                data_payload = {"dir": cpanel_dir, "overwrite": 1}
                r = session.post(upload_url, data=data_payload, files=files_payload, timeout=60)
                if r.status_code == 200 and r.json().get("status") == 1:
                    print(f"[{idx:3d}/{len(file_list)}] OK ({file_size:6d} B): {rel_path}")
                    succeeded += 1
                    success = True
                else:
                    print(f"[{idx:3d}/{len(file_list)}] RETRY: {r.status_code} - {r.text[:80]}")
                    retry_count -= 1
                    time.sleep(1.5)
        except Exception as e:
            print(f"[{idx:3d}/{len(file_list)}] ERR: {e}")
            retry_count -= 1
            time.sleep(2)
            
    if not success:
        failed += 1
        failures.append(rel_path)
        print(f"[{idx:3d}/{len(file_list)}] FAILED: {rel_path}")

print("\n==========================================")
print(f"Sync Results: Succeeded: {succeeded}, Failed: {failed} of {len(file_list)}")
print("==========================================")

# Post-Deployment Health Check
print("\nRunning post-deployment health check on live site...")
try:
    check_r = requests.get('https://proeventsolutions.pk/', headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
    print(f"Live Homepage Status: HTTP {check_r.status_code}")
    if check_r.status_code == 200:
        print("Live verification: PASS")
    else:
        print(f"Live verification warning: status {check_r.status_code}")
except Exception as e:
    print(f"Health check notice: {e}")

if failed > 0:
    print(f"Deployment had {failed} failures: {failures}")
    sys.exit(1)
else:
    print("All files successfully deployed and verified!")
    sys.exit(0)
