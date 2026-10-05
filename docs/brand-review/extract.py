import fitz,pathlib
from PIL import Image,ImageDraw
p=pathlib.Path('__temp__/production/docs/brand-review'); d=fitz.open('C:/Users/Etai/Downloads/Tadiran_Telecom_Company_Profile.pdf')
ims=[]
for x in [5,15,43,45,98,134,228,265,276,311,336,346,367,399,428]:
 pix=fitz.Pixmap(d,x); pix.save(str(p/('asset-'+str(x)+'.png')))
 im=Image.open(p/('asset-'+str(x)+'.png')).convert('RGB'); im.thumbnail((280,200)); tile=Image.new('RGB',(300,230),'#eef4f8');tile.paste(im,((300-im.width)//2,5));ImageDraw.Draw(tile).text((10,210),str(x),fill='black');ims.append(tile)
out=Image.new('RGB',(1500,690),'white')
for i,im in enumerate(ims):out.paste(im,((i%5)*300,(i//5)*230))
out.save(p/'asset-sheet.jpg')
