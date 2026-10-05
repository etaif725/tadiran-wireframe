'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect,useRef} from 'react'
import type {AnimationItem} from 'lottie-web'
import {gsap,ScrollTrigger} from '@/lib/gsap'
import {cinemaScenes} from '@/content/cinema'
import {storySignal} from '@/lib/story-signals'

export function CinemaStage(){
 const root=useRef<HTMLElement>(null)
 useEffect(()=>{
  const el=root.current;if(!el)return
  let disposed=false
  const players:AnimationItem[]=[]
  const frames=[{frame:0},{frame:0},{frame:0}]
  const scenes=Array.from(el.querySelectorAll<HTMLElement>('.film-scene'))
  const mm=gsap.matchMedia()
  const activate=(index:number)=>{
   scenes.forEach((scene,i)=>{scene.inert=i!==index;scene.setAttribute('aria-hidden',String(i!==index))})
   el.querySelectorAll('.film-chapters span').forEach((label,i)=>label.classList.toggle('is-current',i===index))
  }
  import('lottie-web').then(({default:lottie})=>{
   if(disposed)return
   el.querySelectorAll<HTMLElement>('.film-signal').forEach((container,i)=>{
    const player=lottie.loadAnimation({container,renderer:'svg',loop:false,autoplay:false,animationData:storySignal(i),rendererSettings:{preserveAspectRatio:'xMaxYMid slice'}})
    players[i]=player
    player.addEventListener('DOMLoaded',()=>player.goToAndStop(frames[i].frame,true))
   })
  })
  mm.add({all:'all',reduce:'(prefers-reduced-motion: reduce)',compact:'(max-width: 760px)',short:'(max-height: 620px)'},context=>{
   const {reduce,compact,short}=context.conditions!
   if(reduce||short){
    el.dataset.mode='flow'
    scenes.forEach(scene=>{scene.inert=false;scene.removeAttribute('aria-hidden')})
    if(!reduce)scenes.forEach((scene,i)=>{
     gsap.to(frames[i],{frame:179,ease:'none',scrollTrigger:{trigger:scene,start:'top bottom',end:'bottom top',scrub:.4},onUpdate:()=>players[i]?.goToAndStop(frames[i].frame,true)})
     gsap.fromTo(scene.querySelector('.film-visual'),{scale:1.06},{scale:1,ease:'none',scrollTrigger:{trigger:scene,start:'top bottom',end:'bottom top',scrub:.4}})
    })
    return
   }
   el.dataset.mode='pinned'
   gsap.set(scenes,{autoAlpha:0})
   gsap.set(scenes[0],{autoAlpha:1})
   activate(0)
   const tl=gsap.timeline({defaults:{ease:'power2.inOut'},scrollTrigger:{id:'tadiran-story',trigger:el,start:'top top',end:()=>'+='+Math.round(innerHeight*(compact?2.8:3.4)),pin:el.querySelector('.film-stage'),scrub:.55,invalidateOnRefresh:true,anticipatePin:1},onUpdate:()=>{
    const t=tl.time();activate(t<2.5?0:t<5.5?1:2)
    el.style.setProperty('--film-progress',String(tl.progress()))
   }})
   scenes.forEach((scene,i)=>{
    const start=i*3
    tl.addLabel(['customer','conversation','business'][i],start)
    tl.fromTo(scene.querySelector('.film-visual'),{scale:1.045},{scale:1,duration:3,ease:'none'},start)
    tl.fromTo(frames[i],{frame:0},{frame:179,duration:2.7,ease:'none',onUpdate:()=>players[i]?.goToAndStop(frames[i].frame,true)},start)
    if(i){
     // A luminous photographic wipe hands the conversation to the next person.
     tl.fromTo(scene,{autoAlpha:1,clipPath:'inset(0 0 0 100%)'},{autoAlpha:1,clipPath:'inset(0 0 0 0%)',duration:1},start-1)
     tl.to(scenes[i-1].querySelector('.film-copy'),{autoAlpha:0,y:-24,duration:.4},start-.9)
     tl.fromTo(scene.querySelectorAll('.film-copy > *'),{autoAlpha:0,y:30},{autoAlpha:1,y:0,stagger:.09,duration:.55},start-.25)
     tl.set(scenes[i-1],{autoAlpha:0},start)
    }
   })
   tl.to({}, {duration:.35})
   return ()=>{scenes.forEach(scene=>{scene.inert=false;scene.removeAttribute('aria-hidden')})}
  })
  const refresh=()=>ScrollTrigger.refresh()
  document.fonts.ready.then(()=>{if(!disposed)refresh()})
  return()=>{disposed=true;mm.revert();players.forEach(p=>p.destroy());delete el.dataset.mode}
 },[])
 return <section className="story-film" ref={root} aria-label="The Tadiran connection story" data-engine="gsap-lottie">
  <div className="film-stage">
   {cinemaScenes.map((scene,i)=>{const Heading=i===0?'h1':'h2';return <article className="film-scene" key={scene.label}>
    <div className="film-visual"><Image src={scene.image} alt={scene.alt} fill priority={i===0} sizes="100vw"/><div className="film-signal" aria-hidden="true"/></div>
    <div className="film-copy"><p className="cine-eyebrow">0{i+1} / {scene.label}</p><Heading>{scene.title.split('\n').map((line,n)=><span key={line} className={n?'cine-accent':''}>{line}</span>)}</Heading><p>{scene.body}</p><div className="cine-actions"><Link className="cine-button" href={scene.href}>{scene.action}<span aria-hidden="true">↗</span></Link>{i===0&&<Link className="cine-text-link" href="/contact">Let’s talk ↗</Link>}</div></div>
   </article>})}
   <div className="film-footer"><div className="film-chapters" aria-label="Story chapters">{['People','Conversations','Business'].map((s,i)=><span key={s} className={i===0?'is-current':''}>0{i+1} {s}</span>)}</div><a href="#possibilities" aria-label="Explore below">Explore below ↓</a></div>
   <div className="film-progress" aria-hidden="true"/>
  </div>
 </section>
}
