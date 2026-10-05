'use client'

import {useState, type FormEvent} from 'react'
import Link from 'next/link'
import {ArrowRight, Eye, EyeOff, LockKeyhole} from 'lucide-react'

export function PartnerSignIn(){
 const [visible,setVisible]=useState(false)
 const [submitted,setSubmitted]=useState(false)
 function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setSubmitted(true)}
 return <form className="partner-signin" onSubmit={submit}>
  <label htmlFor="partner-email">Email address</label>
  <input id="partner-email" name="email" type="email" autoComplete="username" placeholder="you@company.com" required onChange={()=>setSubmitted(false)}/>
  <div className="partner-signin__label"><label htmlFor="partner-password">Password</label><Link href="/contact?intent=partner-access">Forgot password?</Link></div>
  <div className="partner-signin__password"><input id="partner-password" name="password" type={visible?'text':'password'} autoComplete="current-password" placeholder="Enter your password" required onChange={()=>setSubmitted(false)}/><button type="button" aria-label={visible?'Hide password':'Show password'} aria-pressed={visible} onClick={()=>setVisible(!visible)}>{visible?<EyeOff size={19}/>:<Eye size={19}/>}</button></div>
  <label className="partner-signin__remember"><input type="checkbox" name="remember"/> Remember me on this device</label>
  <button type="submit" className="action partner-signin__submit">Sign in <ArrowRight size={18}/></button>
  {submitted&&<p className="partner-signin__feedback" role="status">This is a design preview. Sign-in is not connected yet.</p>}
  <p className="partner-signin__note"><LockKeyhole size={14}/> For registered Tadiran partners</p>
 </form>
}
