import { Link } from 'react-router-dom'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`logo${light ? ' logo--light' : ''}`} to="/" aria-label="Tadiran home">
      <span className="logo-wordmark">TADIRAN</span>
    </Link>
  )
}
