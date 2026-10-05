import Image from 'next/image'
import {campaignImage} from '@/content/campaign-images'

// Each scene owns its background, foreground and safe area. Foregrounds keep
// their native aspect ratio; no percentage-height box or negative inset.
export function ProductComposition({kind,photo,context='hero'}:{kind:'workspace'|'phone'|'mobile';photo:string;context?:'hero'|'feature'}){
 const background=campaignImage(photo)!
 const subject={
  workspace:{file:'omnicx-workspace',alt:'OmniCX agent workspace',width:1500,height:844},
  phone:{file:'business-phone',alt:'Tadiran business video phone',width:1156,height:783},
  mobile:{file:'aeonix-mobile',alt:'Aeonix Touch mobile application',width:655,height:1200},
 }[kind]
 return <figure className={`product-composition product-composition--${kind} product-composition--${context} product-composition--${photo}`} aria-label={`${subject.alt} in context`}>
  <Image className="product-composition__background" src={background.src} alt={background.alt} fill sizes={kind==='workspace'?'(max-width:760px) 100vw,90vw':'(max-width:760px) 100vw,50vw'}/>
  <div className="product-composition__object" data-product-layer>
   <Image src={`/brand/reference-assets/${subject.file}.webp`} alt={subject.alt} width={subject.width} height={subject.height} sizes={kind==='workspace'?'(max-width:760px) 85vw,48vw':'(max-width:760px) 50vw,30vw'}/>
  </div>
 </figure>
}
