import Image from 'next/image'
import Link from 'next/link'
import {campaignImages} from '@/content/campaign-images'
export const metadata={title:'Campaign image direction',robots:{index:false,follow:false}}
const colours=[['Heritage Navy','#16145F'],['Aeonix Blue','#0096D6'],['Azure Cyan','#00B4D8'],['Warm Paper','#FAF9F6'],['Slate','#525466']]
export default function StyleTile(){return <div className="cine-style-board cine-wrap">
 <p className="cine-eyebrow">Tadiran / The image collection</p><h1>Different worlds.<br/>One Tadiran.</h1>
 <p>Each composition belongs to its section: a human close-up, a working detail, a balanced conversation or a wide view of an industry. Warm daylight, material texture and the Tadiran palette hold the collection together.</p>
 <div className="cine-style-swatches">{colours.map(([name,colour])=><div key={name}><i style={{background:colour}}/><span>{name}<br/>{colour}</span></div>)}</div>
 <div className="cine-actions"><Link className="cine-button" href="/">Experience the story ↗</Link><Link className="cine-text-link" href="/industries">Explore industries ↗</Link></div>
 <h2>Composition follows context.</h2><p>Left and right image panels keep copy outside intimate scenes. Panoramas sit below their headline. Real product interfaces have their own space. The three opening-story images are reserved for that opening sequence.</p>
 <div className="campaign-gallery">{Object.entries(campaignImages).map(([key,art])=><figure key={key} className={art.layout==='panorama'?'campaign-gallery-wide':''}><div><Image src={art.src} alt={art.alt} fill sizes={art.layout==='panorama'?'100vw':'(max-width:760px) 100vw,50vw'}/></div><figcaption><strong>{key.replaceAll('-',' ')}</strong><span>{art.layout.replaceAll('-',' ')}</span></figcaption></figure>)}</div>
 <h2>A story with movement.</h2><p>Scroll-driven camera movement, directional reveals, staggered text, a travelling connection and two connective passages join the three human chapters. The mobile composition uses its own proportions. The site automatically respects the device’s reduced-motion preference.</p>
 <p>Campaign photographs were generated with the approved built-in image generator. They illustrate use cases, not named customers or actual installations. Supplied Tadiran product interfaces and logos remain the source of product evidence. Motion is browser animation of still photography.</p>
 </div>}
