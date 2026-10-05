from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
p=Path('__temp__/production/docs/brand-review')
files=list(p.glob('*.png'))
thumbs=[]
for f in files:
 im=Image.open(f); im.thumbnail((340,310)); tile=Image.new('RGB',(360,340),'#ddd'); tile.paste(im,((360-im.width)//2,20)); ImageDraw.Draw(tile).text((6,324),f.stem[-48:],fill='black'); thumbs.append(tile)
out=Image.new('RGB',(1440,340*((len(thumbs)+3)//4)),'white')
for i,im in enumerate(thumbs): out.paste(im,((i%4)*360,(i//4)*340))
out.save(p/'contact-sheet.jpg')
