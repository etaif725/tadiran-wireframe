import Image from 'next/image'
import Link from 'next/link'
import {campaignImageFromPath} from '@/content/campaign-images'
export function CinemaInterior({eyebrow,title,body,image,href='/contact',action='Let’s talk',secondary}:{eyebrow:string;title:string;body:string;image:string;href?:string;action?:string;secondary?:{href:string;label:string}}){
 const art=campaignImageFromPath(image)
 const layout=art?.layout??'split-right'
 return <section className={`cine-interior cine-editorial cine-editorial--${layout}`}>
  <div className="cine-editorial-copy"><p className="cine-eyebrow">{eyebrow}</p><h1>{title}</h1><p>{body}</p><div className="cine-actions"><Link href={href} className="cine-button">{action} ↗</Link>{secondary&&<Link className="cine-text-link" href={secondary.href}>{secondary.label} ↗</Link>}</div></div>
  <div className="cine-editorial-image"><Image src={image} alt={art?.alt??''} fill priority sizes={layout==='panorama'?'100vw':'(max-width: 760px) 100vw, 52vw'} style={{objectPosition:art?.position??'center'}}/></div>
 </section>
}
