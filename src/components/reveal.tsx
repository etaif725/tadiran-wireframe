'use client'
import {useEffect,useRef,type ReactNode} from 'react'
import {gsap} from '@/lib/gsap'
export function Reveal({children,className=''}:{children:ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{
  const el=ref.current;if(!el)return
  const mm=gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.fromTo(el.children,{y:26,autoAlpha:0},{y:0,autoAlpha:1,duration:.75,stagger:.09,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 96%',once:true}})
  })
  return()=>mm.revert()
 },[])
 return <div className={className} ref={ref} data-engine="gsap-reveal">{children}</div>
}
