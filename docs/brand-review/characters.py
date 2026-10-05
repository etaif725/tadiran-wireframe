import fitz,pathlib
from PIL import Image,ImageDraw
p=pathlib.Path('__temp__/production/docs/brand-review/characters');p.mkdir(exist_ok=True)
d=fitz.open('C:/Users/Etai/Downloads/OmniCX_Rollup_Comparison.pdf'); done=set();ims=[]
for page in d:
 for item in page.get_images():
  x=item[0]
  if x in done:continue
  done.add(x);pix=fitz.Pixmap(d,x)
  if item[1]:pix=fitz.Pixmap(pix,fitz.Pixmap(d,item[1]))
  if pix.colorspace and pix.colorspace.n>3:pix=fitz.Pixmap(fitz.csRGB,pix)
  pix.save(str(p/(str(x)+'.png')))
  im=Image.open(p/(str(x)+'.png'));im.thumbnail((220,200));tile=Image.new('RGB',(240,230),'#eef4f8');tile.paste(im,((240-im.width)//2,0),im if im.mode=='RGBA' else None);ImageDraw.Draw(tile).text((8,210),str(x)+' '+str(item[2:4]),fill='black');ims.append(tile)
out=Image.new('RGB',(1200,230*((len(ims)+4)//5)),'white')
for i,im in enumerate(ims):out.paste(im,((i%5)*240,(i//5)*230))
out.save(p/'sheet.jpg');print('Images:',len(ims))
