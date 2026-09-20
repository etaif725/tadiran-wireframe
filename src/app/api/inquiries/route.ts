import { NextResponse } from 'next/server';
import { submissionSchema,isAllowedOrigin } from '@/lib/inquiry-schema';
import { inquiryConfiguration } from '@/lib/config';
export const runtime='nodejs';
function reply(body:object,status:number){return NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}})}
export async function POST(request:Request){
 if(!inquiryConfiguration().available)return reply({error:'Online inquiries are not available yet. Nothing has been submitted.'},503);
 if(!isAllowedOrigin(request.headers.get('origin'),process.env.SITE_URL))return reply({error:'This request could not be verified.'},403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply({error:'Unsupported request format.'},415);
 const reader=request.body?.getReader();if(!reader)return reply({error:'Missing request.'},400);
 let bytes=0;let raw='';const decoder=new TextDecoder();try{while(true){const {value,done}=await reader.read();if(done)break;bytes+=value.length;if(bytes>16384){await reader.cancel();return reply({error:'Your message is too long.'},413)}raw+=decoder.decode(value,{stream:true})}raw+=decoder.decode()}catch{return reply({error:'The request could not be read.'},400)}
 let parsed:unknown;try{parsed=JSON.parse(raw)}catch{return reply({error:'Invalid request.'},400)}
 const result=submissionSchema.safeParse(parsed);if(!result.success)return reply({error:'Please review the required fields.'},400);
 const {inquiry,token,idempotencyKey}=result.data;
 try{
  const verification=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret:process.env.TURNSTILE_SECRET_KEY!,response:token}),signal:AbortSignal.timeout(10000)});
  const challenge=await verification.json();
  if(!challenge.success||challenge.hostname!==new URL(process.env.SITE_URL!).hostname||challenge.action!=='inquiry')return reply({error:'Verification expired or failed. Please verify again.'},422);
  const delivery=await fetch(process.env.INQUIRY_WEBHOOK_URL!,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}`,'Idempotency-Key':idempotencyKey},body:JSON.stringify({inquiry,submittedAt:new Date().toISOString(),source:'tadiran-website'}),signal:AbortSignal.timeout(15000),redirect:'error'});
  if(!delivery.ok)return reply({error:delivery.status===429?'Please wait before trying again.':'Delivery could not be confirmed. Contact your Tadiran representative before trying again.'},delivery.status===429?429:502);
  const acknowledgement=await delivery.json();
  if(acknowledgement.accepted!==true||typeof acknowledgement.reference!=='string'||!acknowledgement.reference.trim()||acknowledgement.reference.length>120)return reply({error:'Delivery could not be confirmed. Please contact your Tadiran representative.'},502);
  return reply({accepted:true,reference:acknowledgement.reference},200);
 }catch{return reply({error:'Delivery could not be confirmed. Please contact your Tadiran representative before trying again.'},502)}
}
