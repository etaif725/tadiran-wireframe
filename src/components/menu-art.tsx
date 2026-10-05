import Image from 'next/image'
const art:Record<string,{src:string;product?:string;position?:string}>={
 products:{src:'/brand/cinema/sections/products-overview.png',product:'/brand/reference-assets/business-phone.webp'},
 solutions:{src:'/brand/cinema/sections/solutions-overview.png'},
 industries:{src:'/brand/cinema/sections/industries-overview.png'},
 partners:{src:'/brand/cinema/sections/partners.png'},
 resources:{src:'/brand/cinema/sections/resources.png'},
 company:{src:'/brand/cinema/sections/company.png'},
}
export function MenuArt({id}:{id:string}){
 const image=art[id];if(!image)return null
 return <div className={`menu-art menu-art--${id}`}><Image src={image.src} alt="" fill sizes="300px" style={{objectPosition:image.position??'center'}}/>{image.product&&<Image className="menu-product" src={image.product} alt="Tadiran communications devices" fill sizes="190px"/>}</div>
}
