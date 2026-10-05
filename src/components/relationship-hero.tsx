import Image from 'next/image'
import Link from 'next/link'
export function RelationshipHero({kind}:{kind:'about'|'partners'}){
 const about=kind==='about'
 return <section className={`relationship-hero relationship-hero--${kind}`}>
  <div className="relationship-hero__copy">
   <p className="cine-eyebrow" data-arrive>{about?'Tadiran Telecom / Since 1963':'The Tadiran partner ecosystem'}</p>
   <h1 data-arrive>{about?<>A world of technology.<br/><em>A company of people.</em></>:<>Your relationships.<br/><em>Our technology.</em><br/>More possibilities.</>}</h1>
   <p data-arrive>{about?'Connecting people, customer conversations and critical operations. Built on more than sixty years of communications experience.':'Build your communications business with Tadiran. Bring your market expertise; we’ll bring the platform, product knowledge and regional support.'}</p>
   <div className="cine-actions" data-arrive><Link className="cine-button" href={about?'#story':'/partners/apply'}>{about?'Discover our story':'Become a partner'} ↗</Link><Link className="cine-text-link" href={about?'/contact':'/partners/login'}>{about?'Talk to our team':'Partner access'} ↗</Link></div>
  </div>
  <div className="relationship-hero__photo" data-photo><Image src={`/brand/cinema/sections/${about?'company':'partners'}.png`} alt={about?'People connecting in a bright shared workplace':'Business partners working together on a laptop'} fill priority sizes="(max-width:760px) 100vw,70vw"/><span>{about?'People. Technology. Connection.':'Global technology. Local relationships.'}</span></div>
 </section>
}
