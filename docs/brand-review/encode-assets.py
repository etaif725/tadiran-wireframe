from pathlib import Path
from PIL import Image
import json
p=Path('__temp__/production/public/brand/reference-assets')
manifest=json.loads((p/'provenance.json').read_text())
for item in manifest:
 im=Image.open(p/item['file']);im.thumbnail((1500,1200)); web=item['file'].replace('.png','.webp'); im.save(p/web,'WEBP',quality=85,method=6)
 item['browserFile']=web;item['browserBytes']=(p/web).stat().st_size
(p/'provenance.json').write_text(json.dumps(manifest,indent=2))
print('Browser assets:',sum(i['browserBytes'] for i in manifest),'bytes')
for name in ['src/components/media-frame.tsx','src/app/about/page.tsx']:
 f=Path('__temp__/production')/name;s=f.read_text(encoding='utf-8');s=s.replace('.png\'', '.webp\'').replace('company-cover.png','company-cover.webp');f.write_text(s,encoding='utf-8')
