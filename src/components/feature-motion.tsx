'use client'
import {useEffect,useRef,type ReactNode} from 'react'
import {gsap} from '@/lib/gsap'
export function FeatureMotion({children,className}:{children:ReactNode;className:string}){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{
  const el=ref.current;if(!el)return
  const mm=gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const tl=gsap.timeline({scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.6}})
   tl.fromTo(el.querySelectorAll('.cine-product-photo img,.cine-enterprise-photo img,.cine-world-feature > img'),{scale:1.09},{scale:1,ease:'none',duration:1},0)
   const ui=el.querySelector('.cine-ui-window')
   if(ui)tl.fromTo(ui,{y:55,rotationY:-7,rotationX:4,transformPerspective:1600},{y:-15,rotationY:0,rotationX:0,ease:'none',duration:1},0)
   const device=el.querySelector('.cine-mobile-device')
   if(device)tl.fromTo(device,{y:40,rotation:-9},{y:-15,rotation:-3,ease:'none',duration:1},0)
  })
  return()=>mm.revert()
 },[])
 return <div ref={ref} className={`${className} cine-feature-motion`} data-engine="gsap">{children}</div>
}
