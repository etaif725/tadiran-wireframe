import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{const live=process.env.LAUNCH_APPROVED==='true'&&process.env.SITE_URL;return live?{rules:{userAgent:'*',allow:'/',disallow:['/api/','/partners/apply','/partners/login']},sitemap:`${process.env.SITE_URL?.replace(/\/$/,'')}/sitemap.xml`}:{rules:{userAgent:'*',disallow:'/'}}}
