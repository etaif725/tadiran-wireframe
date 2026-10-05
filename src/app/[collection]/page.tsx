import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CinemaInterior } from '@/components/cinema-interior'
import { SolutionsExperience } from '@/components/solutions-experience'
import { storyImage } from '@/content/cinema'
import { collectionIntro, industries, products, solutions, type Collection } from '@/content/portfolio'
export const dynamicParams=false
const catalogs={products,solutions,industries}
export function generateStaticParams(){return Object.keys(catalogs).map(collection=>({collection}))}
export async function generateMetadata({params}:{params:Promise<{collection:string}>}):Promise<Metadata>{const {collection}=await params;const intro=collectionIntro[collection as Collection];return intro?{title:intro.label,description:intro.summary}:{}}
export default async function CollectionPage({params}:{params:Promise<{collection:string}>}){
 const {collection}=await params;if(!Object.hasOwn(catalogs,collection))notFound();const c=collection as Collection;const intro=collectionIntro[c]
 if(c==='solutions')return <SolutionsExperience/>
 return <div className={`page collection-page collection-page--${c}`}><CinemaInterior eyebrow={intro.label} title={c==='products'?'Technology that brings us together.':'Your world. Connected.'} body={intro.summary} image={storyImage(`${c}-overview`,c)}/><section className="section"><div className="container cine-catalog">{catalogs[c].map((entry,i)=><Link className="cine-catalog-card" href={`/${c}/${entry.slug}`} key={entry.slug}><small>{String(i+1).padStart(2,'0')} / {intro.label}</small><div className="cine-catalog-image"><Image src={storyImage(entry.slug,c)} alt="" fill sizes="(max-width:760px) 100vw,60vw"/></div><h2>{entry.title}<span aria-hidden="true">↗</span></h2><p>{'summary' in entry?entry.summary:'outcome' in entry?entry.outcome:''}</p></Link>)}</div></section></div>
}

