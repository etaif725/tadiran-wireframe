import {campaignImage} from './campaign-images'
export const cinemaScenes=[
 {label:'A world of connection',title:'Intelligence in\nevery interaction.',body:'Bring people, conversations and your business together. Enterprise communications and customer experience, simply done right.',action:'Explore solutions',href:'/solutions',image:'/brand/cinema/customer.png',alt:'A customer using her phone, connected by a blue light trail'},
 {label:'Every channel. One conversation.',title:'Make every\nconversation count.',body:'Help your people deliver a more personal experience. OmniCX connects your service channels, customer context and teams.',action:'Discover OmniCX',href:'/products/omnicx',image:'/brand/cinema/agent.png',alt:'An attentive service agent surrounded by a continuous blue light trail'},
 {label:'People. Teams. Possibilities.',title:'Connected people.\nConfident business.',body:'From the office to critical operations. Keep your people within reach with communications that fit the way you work.',action:'Meet Aeonix',href:'/products/aeonix',image:'/brand/cinema/enterprise.png',alt:'Colleagues coordinating their work on a tablet'}
] as const
export function storyImage(slug:string,collection=''){
 return campaignImage(slug)?.src??campaignImage(`${collection}-overview`)?.src??'/brand/reference-assets/company-cover.webp'
}
