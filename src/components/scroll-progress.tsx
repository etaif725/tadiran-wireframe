'use client'

import {useEffect,useRef} from 'react'
import {gsap} from '@/lib/gsap'
import {usePathname} from 'next/navigation'

export function ScrollProgress() {
  const ref=useRef<HTMLDivElement>(null)
  const path=usePathname()
  useEffect(()=>{
    const ctx=gsap.context(()=>{gsap.fromTo(ref.current,{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.25}})})
    return()=>ctx.revert()
  },[path])
  return <div ref={ref} className="scroll-progress" style={{transformOrigin:'left'}} aria-hidden="true" />
}
