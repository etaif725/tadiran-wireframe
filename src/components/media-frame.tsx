import Image from 'next/image'

const mediaFiles: Record<string, string> = {
  'enterprise-hero': '/media/enterprise-hero.webp',
  heritage: '/media/heritage.webp',
  healthcare: '/media/healthcare.webp',
  utilities: '/media/utilities.webp',
  transportation: '/media/transportation.webp',
  hospitality: '/media/hospitality.webp',
  education: '/media/education.webp',
  partners: '/media/partners.webp',
  'partner-stage': '/media/partners/stage.webp',
}

export const homeMedia: Record<string, string> = {
  heritage: '/media/heritage.webp',
  'cap-voice': '/media/home/cap-voice-v4.webp',
  'cap-cloud': '/media/home/cap-cloud-v4.webp',
  'cap-cx': '/media/home/cap-cx-v4.webp',
  'cap-collab': '/media/home/cap-collab-v4.webp',
  'cap-critical': '/media/home/cap-critical-v4.webp',
  'sol-enterprise': '/media/home/sol-enterprise-v4.webp',
  'sol-cx': '/media/home/sol-cx-v4.webp',
  'sol-ai': '/media/home/sol-ai-v4.webp',
  'sol-critical': '/media/home/sol-critical-v4.webp',
  'dep-cloud': '/media/home/dep-cloud-v4.webp',
  'dep-hybrid': '/media/home/dep-hybrid-v4.webp',
  'dep-onprem': '/media/home/dep-onprem-v4.webp',
  'ind-healthcare': '/media/home/ind-healthcare-v4.webp',
  'ind-utilities': '/media/home/ind-utilities-v4.webp',
  'ind-transport': '/media/home/ind-transport-v4.webp',
  'ind-hospitality': '/media/home/ind-hospitality-v4.webp',
  'res-it': '/media/home/res-it-v4.webp',
  'res-cx': '/media/home/res-cx-v4.webp',
  'res-ops': '/media/home/res-ops-v4.webp',
  'partner-stage': '/media/partners/stage.webp',
  'partner-cloud': '/media/partners/cloud.webp',
  'partner-carrier': '/media/partners/carrier.webp',
  'partner-distributor': '/media/partners/distributor.webp',
  'partner-integrator': '/media/partners/integrator.webp',
  'partner-oem': '/media/partners/oem.webp',
}

export function MediaFrame({
  name,
  alt,
  priority = false,
  ratio = 'landscape',
}: {
  name: string
  alt: string
  priority?: boolean
  ratio?: 'landscape' | 'portrait' | 'wide'
}) {
  const src = mediaFiles[name]

  return (
    <figure className={`media-frame media-frame--${ratio} media-frame--${name}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 100vw, 60vw"
          quality={88}
        />
      ) : null}
      <span className="media-frame__grade" aria-hidden="true" />
    </figure>
  )
}

export function HomeMedia({
  name,
  alt,
  ratio = 'landscape',
  sizes = '(max-width: 479px) 100vw, (max-width: 939px) 50vw, 33vw',
  priority = false,
  cover = false,
}: {
  name: string
  alt: string
  ratio?: 'portrait' | 'landscape'
  sizes?: string
  priority?: boolean
  cover?: boolean
}) {
  const src = homeMedia[name]

  return (
    <div className={`home-media home-media--${ratio}${cover ? ' home-media--cover' : ''}`}>
      {src ? <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} /> : null}
    </div>
  )
}
