import fitz,pathlib,json
p=pathlib.Path('__temp__/production/public/brand/reference-assets');p.mkdir(exist_ok=True)
d=fitz.open('C:/Users/Etai/Downloads/Tadiran_Telecom_Company_Profile.pdf')
assets={5:'company-cover',43:'business-phone',228:'communications-devices',311:'aeonix-mobile',346:'omnicx-workspace',367:'tel-aviv-red-line',399:'connolly-hospital',428:'norman-hotel'}
meta=[]
for x,name in assets.items():
 base=fitz.Pixmap(d,x)
 smask=next((i[1] for i in d[0].get_images() if i[0]==x),0)
 if smask:base=fitz.Pixmap(base,fitz.Pixmap(d,smask))
 base.save(str(p/(name+'.png')))
 meta.append({'file':name+'.png','source':'Tadiran_Telecom_Company_Profile.pdf','pdfImageXref':x,'width':base.width,'height':base.height,'treatment':'Extracted original with original transparency; no retouching or generation'})
(p/'provenance.json').write_text(json.dumps(meta,indent=2))
