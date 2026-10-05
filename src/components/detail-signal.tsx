'use client'
import {useEffect,useRef,useState} from 'react'
import type {AnimationItem} from 'lottie-web'
import {gsap} from '@/lib/gsap'

type SignalKind='network'|'voice'|'review'|'insight'
const patterns:Record<SignalKind,number[][][]>={
 network:[[[70,45],[190,120],[310,45]],[[70,195],[190,120],[310,195]],[[70,45],[70,195],[310,195],[310,45],[70,45]]],
 voice:[Array.from({length:49},(_,i)=>[15+i*7.3,120+(i%2?1:-1)*(12+Math.sin(i*.43)**2*65)])],
 review:[[[30,120],[70,120],[90,72],[110,168],[130,90],[150,150],[175,120],[350,120]],[[30,200],[145,200],[260,200],[350,200]]],
 insight:[[[50,195],[50,150]],[[115,195],[115,110]],[[180,195],[180,125]],[[245,195],[245,65]],[[310,195],[310,35]]],
}
function animation(kind:SignalKind){return {v:'5.13.0',fr:60,ip:0,op:120,w:380,h:240,nm:`${kind} concept`,ddd:0,assets:[],layers:patterns[kind].map((points,i)=>({ddd:0,ind:i+1,ty:4,nm:`${kind} path ${i+1}`,sr:1,ip:0,op:120,st:0,bm:0,ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:0,k:[0,0,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},shapes:[{ty:'sh',ks:{a:0,k:{c:false,v:points,i:points.map(()=>[0,0]),o:points.map(()=>[0,0])}}},{ty:'st',c:{a:0,k:[.1,.75,.9,1]},o:{a:0,k:100},w:{a:0,k:kind==='insight'?22:3},lc:2,lj:2},{ty:'tm',s:{a:0,k:0},e:{a:1,k:[{t:0,s:[0],e:[100],i:{x:[.7],y:[1]},o:{x:[.3],y:[0]}},{t:119,s:[100]}]},o:{a:0,k:0},m:1}]}))}}

export function DetailSignal({kind,steps}:{kind:SignalKind;steps:[string,string][]}){
 const root=useRef<HTMLDivElement>(null),canvas=useRef<HTMLDivElement>(null)
 const [selected,setSelected]=useState(0)
 useEffect(()=>{
  let disposed=false,player:AnimationItem|undefined
  const mm=gsap.matchMedia()
  import('lottie-web').then(({default:lottie})=>{
   if(disposed||!canvas.current)return
   player=lottie.loadAnimation({container:canvas.current,renderer:'svg',loop:false,autoplay:false,animationData:animation(kind)})
   player.addEventListener('DOMLoaded',()=>{
    if(disposed)return
    mm.add({normal:'(prefers-reduced-motion: no-preference)',reduce:'(prefers-reduced-motion: reduce)'},ctx=>{
     if(ctx.conditions?.reduce){player?.goToAndStop(119,true);return}
     const progress={frame:0};gsap.to(progress,{frame:119,ease:'none',scrollTrigger:{trigger:root.current,start:'top 85%',end:'center 48%',scrub:.6},onUpdate:()=>player?.goToAndStop(progress.frame,true)})
    })
   })
  })
  return()=>{disposed=true;mm.revert();player?.destroy()}
 },[kind])
 useEffect(()=>{
  const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{if(root.current)gsap.fromTo(root.current.querySelector('.detail-signal__description'),{y:8,opacity:.3},{y:0,opacity:1,duration:.3})});return()=>mm.revert()
 },[selected])
 return <div className={`detail-signal detail-signal--${kind}`} ref={root} data-engine="gsap-lottie"><div className="detail-signal__visual"><small>{kind==='network'?'Connected operations':kind==='voice'?'The shape of a conversation':kind==='review'?'Listen. Review. Learn.':'From activity to understanding'}</small><div ref={canvas} aria-hidden="true"/><span>Illustrative {kind==='network'?'connection model':kind==='insight'?'data visualization':'workflow'}</span></div><div className="detail-signal__controls"><div className="detail-signal__buttons" aria-label="Explore the workflow">{steps.map(([label],i)=><button key={label} aria-pressed={selected===i} onClick={()=>setSelected(i)}><small>0{i+1}</small>{label}<span aria-hidden="true">↗</span></button>)}</div><p className="detail-signal__description" aria-live="polite">{steps[selected][1]}</p></div></div>
}

const deployments=[{title:'Cloud',body:'A service model for distributed organizations. Plan connectivity, support ownership and the communications your teams need.',items:['Distributed users','Service responsibilities','Connectivity planning']},{title:'Hybrid',body:'Bring existing and new environments into one transition plan. Connect sites and services as your organization evolves.',items:['Existing investments','Connected environments','Phased transition']},{title:'On premises',body:'Keep communications infrastructure under local control. Plan access, operations and continuity around your requirements.',items:['Local control','Operational ownership','Continuity planning']}]
export function DeploymentExplorer(){
 const [active,setActive]=useState(0)
 return <div className="detail-deployment"><div className="detail-deployment__choices" aria-label="Explore deployment approaches">{deployments.map((d,i)=><button key={d.title} aria-pressed={i===active} onClick={()=>setActive(i)}><span>0{i+1}</span>{d.title}<span aria-hidden="true">↗</span></button>)}</div><div className="detail-deployment__answer" aria-live="polite"><p className="cine-eyebrow">A path that fits</p><h3>{deployments[active].title}</h3><p>{deployments[active].body}</p><ul>{deployments[active].items.map(x=><li key={x}>{x}</li>)}</ul></div></div>
}
