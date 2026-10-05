import fitz,pathlib,collections
out=pathlib.Path('__temp__/production/docs/brand-review'); out.mkdir(parents=True,exist_ok=True)
texts=[]
for n in ['SmartHotel_Modern_Corporate_Brochure_A4','Tadiran_Telecom_Company_Profile','OmniCX_BPO_Brochure_100dpi_lossless','OmniCX_Rollup_Comparison']:
 d=fitz.open('C:/Users/Etai/Downloads/'+n+'.pdf'); colors=collections.Counter(); fonts=collections.Counter()
 texts.append('\n### '+n+'\n'+''.join(p.get_text() for p in d))
 for i,p in enumerate(d):
  for b in p.get_text('dict')['blocks']:
   for l in b.get('lines',[]):
    for s in l['spans']: fonts[s['font']]+=len(s['text']); colors[hex(s['color'])]+=len(s['text'])
  for draw in p.get_drawings():
   if draw['fill']: colors[str(draw['fill'])]+=1
  p.get_pixmap(matrix=fitz.Matrix(.6,.6)).save(str(out/(n+'-'+str(i)+'.png')))
 print(n,len(d),'pages',fonts.most_common(5),colors.most_common(8))
(out/'extracted.txt').write_text(''.join(texts),encoding='utf-8')
