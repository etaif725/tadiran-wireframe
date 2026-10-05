'use client'
import {useEffect,useRef,type ReactNode} from 'react'
import {gsap} from '@/lib/gsap'
import {RelationshipMotion} from './relationship-motion'
export function OfferingMotion({children,className}:{children:ReactNode;className:string}){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{
  ref.current?.querySelectorAll<HTMLElement>('[data-product-layer]').forEach(device=>gsap.fromTo(device,{y:8},{y:-8,ease:'none',scrollTrigger:{trigger:device.parentElement,start:'top bottom',end:'bottom top',scrub:.6}}))
 });return()=>mm.revert()},[])
 return <RelationshipMotion className={className}><div ref={ref} style={{display:'contents'}}>{children}</div></RelationshipMotion>
}
