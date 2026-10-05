'use client'

import {useEffect,useRef,useState,type KeyboardEvent} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight,ArrowDown} from 'lucide-react'
import type {AnimationItem} from 'lottie-web'
import {gsap} from '@/lib/gsap'
import {solutions} from '@/content/portfolio'
import {campaignImage} from '@/content/campaign-images'
import {RelationshipMotion} from './relationship-motion'

const stories=[
 {label:'Connect your people',title:'Great work starts with a connection.',body:'Bring offices, mobile teams and the people in between closer together. Give every conversation a place to happen.',steps:['Office','On the move','One team'],product:'Aeonix + Mobile / Touch',href:'/products/aeonix'},
 {label:'Care for your customers',title:'One conversation. Every channel.',body:'Help your people pick up where the customer left off. Connect voice, digital channels and customer context in one workspace.',steps:['Customer','Context','Conversation'],product:'Powered by OmniCX',href:'/products/omnicx'},
 {label:'See what comes next',title:'Turn interactions into understanding.',body:'Bring useful intelligence into everyday service. Help teams see patterns, support agents and make more informed decisions.',steps:['Interaction','Insight','Action'],product:'Explore AI & Analytics',href:'/products/analytics'},
 {label:'Keep operations moving',title:'Be there when it matters most.',body:'Keep control rooms, field teams and essential services within reach. Build communications around the moments that cannot wait.',steps:['Control room','Field team','Response'],product:'Built on Aeonix',href:'/products/aeonix'},
]

// A three-stage connection diagram. GSAP advances the Lottie path in sync
// with each selected story; it is a workflow graphic, not an image overlay.
function connectionAnimation(){return {v:'5.13.0',fr:60,ip:0,op:120,w:600,h:48,nm:'Connected workflow',ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:'Connection',sr:1,ip:0,op:120,st:0,bm:0,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[0,0,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},shapes:[{ty:'sh',ks:{a:0,k:{c:false,v:[[20,24],[300,24],[580,24]],i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]]}}},{ty:'st',c:{a:0,k:[0,.65,.83,1]},o:{a:0,k:100},w:{a:0,k:2},lc:2,lj:2},{ty:'tm',s:{a:0,k:0},e:{a:1,k:[{t:0,s:[0],e:[100],i:{x:[.7],y:[1]},o:{x:[.3],y:[0]}},{t:119,s:[100]}]},o:{a:0,k:0},m:1}]}]}}

function Workflow({steps}:{steps:string[]}){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{
  let disposed=false,player:AnimationItem|undefined,tween:gsap.core.Tween|undefined
  import('lottie-web').then(({default:lottie})=>{
   if(disposed||!ref.current)return
   player=lottie.loadAnimation({container:ref.current,renderer:'svg',autoplay:false,loop:false,animationData:connectionAnimation()})
   player.addEventListener('DOMLoaded',()=>{
    if(disposed)return
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){player?.goToAndStop(119,true);return}
    const progress={frame:0};tween=gsap.to(progress,{frame:119,duration:1.5,ease:'power1.inOut',onUpdate:()=>player?.goToAndStop(progress.frame,true)})
   })
  })
  return()=>{disposed=true;tween?.kill();player?.destroy()}
 },[])
 return <div className="solution-workflow"><div ref={ref} className="solution-workflow__line" aria-hidden="true"/><ol>{steps.map((step,i)=><li key={step}><span>{i+1}</span>{step}</li>)}</ol></div>
}

export function SolutionsExperience(){
 const [active,setActive]=useState(0)
 const panel=useRef<HTMLDivElement>(null)
 const tabs=useRef<HTMLDivElement>(null)
 const item=solutions[active],story=stories[active],photo=campaignImage(item.slug)!
 useEffect(()=>{
  const mm=gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   if(!panel.current)return
   const tl=gsap.timeline()
   tl.fromTo(panel.current.querySelector('.solution-scene__photo'),{opacity:.35,scale:1.045},{opacity:1,scale:1,duration:.85,ease:'power2.out'})
   tl.fromTo(panel.current.querySelectorAll('.solution-scene__copy > :not(.solution-workflow)'),{opacity:0,y:16},{opacity:1,y:0,duration:.55,stagger:.07,ease:'power2.out'},.1)
  })
  return()=>mm.revert()
 },[active])
 function navigate(event:KeyboardEvent<HTMLButtonElement>,index:number){
  let next=index
  if(event.key==='ArrowRight')next=(index+1)%4
  else if(event.key==='ArrowLeft')next=(index+3)%4
  else if(event.key==='Home')next=0
  else if(event.key==='End')next=3
  else return
  event.preventDefault();setActive(next);tabs.current?.querySelectorAll('button')[next]?.focus()
 }
 return <RelationshipMotion className="page solutions-experience relationship-page">
  <header className="solutions-intro relationship-shell">
   <div data-arrive><p className="cine-eyebrow">Solutions / Built around you</p><h1>More connected.<br/><em>More possible.</em></h1></div>
   <div data-arrive><p>Every organization has its own way of working. Bring your people, customer experiences and critical operations together—with technology that fits yours.</p><a className="solution-text-link" href="#explore-solutions">Find your connection <ArrowDown size={18}/></a></div>
  </header>
  <section className="solutions-tour relationship-shell" id="explore-solutions" aria-label="Explore solutions">
   <div className="solution-tabs" ref={tabs} role="tablist" aria-label="What would you like to make possible?">{stories.map((s,i)=><button id={`solution-tab-${i}`} key={s.label} role="tab" aria-selected={i===active} aria-controls="solution-panel" tabIndex={i===active?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>navigate(e,i)}><small>0{i+1}</small><span>{s.label}</span><ArrowRight size={17}/></button>)}</div>
   <div ref={panel} id="solution-panel" role="tabpanel" aria-labelledby={`solution-tab-${active}`} tabIndex={0} className={`solution-scene solution-scene--${active}`}>
    <div className="solution-scene__photo"><Image key={photo.src} src={photo.src} alt={photo.alt} fill priority={active===0} sizes="(max-width:760px) 100vw,60vw" style={{objectPosition:photo.position}}/>{active===0&&<div className="solution-scene__device"><Image src="/brand/reference-assets/aeonix-mobile.webp" alt="Aeonix Touch mobile application" fill sizes="180px"/></div>}<Link className="solution-scene__product" href={story.href}>{story.product}<ArrowRight size={16}/></Link></div>
    <div className="solution-scene__copy"><p className="cine-eyebrow">{item.title}</p><h2>{story.title}</h2><p>{story.body}</p><Workflow key={active} steps={story.steps}/><Link className="action" href={`/solutions/${item.slug}`}>Explore solution <ArrowRight size={17}/></Link></div>
   </div>
  </section>
  <section className="solution-foundations"><div className="relationship-shell"><div className="relationship-section-head"><div><p className="cine-eyebrow">Confidence behind every connection</p><h2>A foundation that<br/><em>moves with you.</em></h2></div><p>Keep what works. Connect what’s next. Shape the infrastructure, integrations and continuity your organization needs.</p></div><div className="solution-foundations__grid" data-stagger>{solutions.slice(4).map((s,i)=>{const image=campaignImage(s.slug)!;return <Link href={`/solutions/${s.slug}`} className="solution-foundation" key={s.slug}><div className="solution-foundation__photo"><Image src={image.src} alt={image.alt} fill sizes="(max-width:760px) 100vw,33vw" style={{objectPosition:image.position}}/></div><div><small>0{i+5}</small><h3>{s.title}</h3><p>{['Build resilience into the way your systems connect, recover and stay operational.','Bring your business systems together. Choose a deployment path that fits your organization.','Create room to grow, with infrastructure planned around your people and sites.','Build communications into the products and services you bring to market.','Bring a broader communications portfolio to the customers you already serve.'][i]}</p><span>Discover more <ArrowRight size={17}/></span></div></Link>})}</div></div></section>
  <section className="solution-fit relationship-shell"><div><p className="cine-eyebrow">Your organization. Your choice.</p><h2>Move forward.<br/><em>On your terms.</em></h2><p>Cloud, hybrid or on premises. Start with where you are today, and plan for where you want to go.</p><Link className="solution-text-link" href="/solutions/integrations-deployment">Explore deployment options <ArrowRight size={18}/></Link></div><ol data-stagger>{[['Cloud','Connect distributed teams with a service model that can evolve.'],['Hybrid','Bring existing and new environments into one plan.'],['On premises','Keep communications infrastructure and control close.']].map(([title,body],i)=><li key={title}><small>0{i+1}</small><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
  <section className="relationship-closing"><p className="cine-eyebrow">Let’s make it work for you</p><h2>Start with a conversation.<br/><em>Build what comes next.</em></h2><Link className="action" href="/contact">Talk to a specialist <ArrowRight size={17}/></Link></section>
 </RelationshipMotion>
}

