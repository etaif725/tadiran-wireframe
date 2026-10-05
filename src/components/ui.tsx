import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string
  children: ReactNode
  secondary?: boolean
}) {
  return (
    <Link className={`action${secondary ? ' action--secondary' : ''}`} href={href}>
      <span>{children}</span>
      <span className="action__icon" aria-hidden="true">
        ↗
      </span>
    </Link>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function PageHero({
  eyebrow,
  title,
  body,
  id,
  actions,
}: {
  eyebrow: ReactNode
  title: ReactNode
  body: ReactNode
  id?: string
  actions?: ReactNode
}) {
  return (
    <section className="page-hero" id={id}>
      <div className="page-hero__signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container page-hero__inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{body}</p>
        {actions ? <div className="page-hero__actions">{actions}</div> : null}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  aside,
  light = false,
}: {
  eyebrow: ReactNode
  title: ReactNode
  body?: ReactNode
  aside?: ReactNode
  light?: boolean
}) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {(body || aside) && (
        <div className="section-heading__side">
          {body ? <p>{body}</p> : null}
          {aside}
        </div>
      )}
    </div>
  )
}

export function Brand({ variant = 'nav' }: { variant?: 'nav' | 'footer' | 'login' }) {
  const src =
    variant === 'footer'
      ? '/brand/tadiran-official-white.png'
      : '/brand/tadiran-official-lockup.png'
  const width = variant === 'footer' ? 280 : variant === 'login' ? 240 : 176
  const height = variant === 'footer' ? 78 : variant === 'login' ? 66 : 49
  return (
    <Link href="/" className={`brand brand--${variant}`} aria-label="Tadiran Telecom home">
      <Image
        src={src}
        alt="Tadiran, simply done right."
        width={width}
        height={height}
        priority={variant === 'nav'}
      />
    </Link>
  )
}
