from pathlib import Path
from PIL import Image
import json
root=Path('public/brand/reference-assets');manifest=json.loads((root/'provenance.json').read_text())
for item in manifest:
 for key in ['file','browserFile']:
  p=root/item[key]
  assert p.is_file(),p
  with Image.open(p) as im:im.verify()
print('Verified',len(manifest),'original images and',len(manifest),'browser encodings; all paths resolve.')
for name in ['tadiran-lockup.svg','tadiran-lockup-on-dark.svg']:
 p=Path('public/brand')/name
 assert p.is_file() and '<svg' in p.read_text(encoding='utf-8-sig')
print('Both preserved full logo lockups resolve.')
