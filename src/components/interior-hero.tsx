import Image from 'next/image'
import Link from 'next/link'

type HeroLink = {
  href: string
  label: string
}

export function InteriorHero({
  eyebrow,
  title,
  body,
  image,
  primary,
  secondary,
}: {
  eyebrow: string
  title: string
  body: string
  image: string
  primary?: HeroLink
  secondary?: HeroLink
}) {
  return (
    <section className="interior-hero">
      <div className="interior-hero__media" aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="interior-hero__photo"
        />
      </div>
      <div className="interior-hero__scrim" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-eyebrow">{eyebrow}</p>
        <h1 className="hero-h1">{title}</h1>
        <p className="hero-sub">{body}</p>
        {(primary || secondary) && (
          <div className="hero-cta">
            {primary ? (
              <Link className="btn btn--hero" href={primary.href}>
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <Link className="hero-subcta" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}
