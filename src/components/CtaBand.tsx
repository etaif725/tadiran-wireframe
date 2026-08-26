import { Link } from 'react-router-dom'
import { MediaVisual } from './MediaVisual'

type Cta = { label: string; to: string }

type CtaBandProps = {
  title: string
  body?: string
  primary: Cta
  secondary?: Cta
  media?: string
}

export function CtaBand({ title, body, primary, secondary, media }: CtaBandProps) {
  return (
    <section className={`cta-band${media ? ' cta-band--media' : ''}`}>
      {media ? (
        <div className="cta-band__media" aria-hidden="true">
          <MediaVisual name={media} alt="" ratio="hero" />
        </div>
      ) : null}
      <div className="wrap cta-inner">
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
        <div className="btn-row">
          <Link className="btn cta-band__primary" to={primary.to}>
            {primary.label}
          </Link>
          {secondary ? (
            <Link className="btn btn-secondary" to={secondary.to}>
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
