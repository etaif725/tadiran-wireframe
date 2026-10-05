import { CinemaInterior } from './cinema-interior'

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
  return <CinemaInterior eyebrow={eyebrow} title={title} body={body} image={image} href={primary?.href} action={primary?.label} secondary={secondary} />
}
