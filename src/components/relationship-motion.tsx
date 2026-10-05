'use client'
import {useEffect,useRef,type ReactNode} from 'react'
import {gsap,ScrollTrigger} from '@/lib/gsap'
export function RelationshipMotion({children,className=''}:{children:ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{
  const el=ref.current;if(!el)return
  const mm=gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.fromTo(el.querySelectorAll('[data-arrive]'),{y:32,opacity:0},{y:0,opacity:1,duration:.85,stagger:.12,ease:'power3.out'})
   el.querySelectorAll<HTMLElement>('[data-photo]').forEach(photo=>gsap.fromTo(photo.querySelector('img'),{scale:1.08},{scale:1,ease:'none',scrollTrigger:{trigger:photo,start:'top bottom',end:'bottom top',scrub:.65}}))
   el.querySelectorAll<HTMLElement>('[data-stagger]').forEach(group=>gsap.fromTo(group.children,{y:24,opacity:0},{y:0,opacity:1,duration:.65,stagger:.09,ease:'power2.out',scrollTrigger:{trigger:group,start:'top 94%',once:true}}))
   const timeline=el.querySelector('.about-chronicle')
   if(timeline)gsap.fromTo(timeline,{'--journey-progress':0},{'--journey-progress':1,ease:'none',scrollTrigger:{trigger:timeline,start:'top 75%',end:'bottom 75%',scrub:.4}})
  })
  let active=true
  document.fonts.ready.then(()=>{if(active)ScrollTrigger.refresh()})
  return()=>{active=false;mm.revert()}
 },[])
 return <div ref={ref} className={className}>{children}</div>
}
