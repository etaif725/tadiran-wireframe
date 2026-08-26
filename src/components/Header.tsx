import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNav } from '../data/site'
import { Logo } from './Logo'
import { MediaVisual } from './MediaVisual'
import { SearchOverlay } from './SearchOverlay'

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  )
}

export function Header() {
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const wrapRef = useRef<HTMLElement>(null)
  const openTimer = useRef<number>(0)
  const closeTimer = useRef<number>(0)
  const menuId = useId()

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
    setOpenAccordion(null)
    setSearchOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
        setSearchOpen(false)
      }
    }

    function onClick(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen, searchOpen])

  function scheduleOpen(id: string) {
    window.clearTimeout(closeTimer.current)
    openTimer.current = window.setTimeout(() => setOpenMenu(id), 110)
  }

  function scheduleClose() {
    window.clearTimeout(openTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160)
  }

  const mainNav = primaryNav.filter((item) => item.id !== 'resources')
  const resourcesItem = primaryNav.find((item) => item.id === 'resources')
  const activeItem = primaryNav.find((item) => item.id === openMenu)

  return (
    <header className={`header${openMenu ? ' is-open' : ''}`} ref={wrapRef}>
      <div className="wrap header-main">
        <Logo />

        <nav className="nav" aria-label="Primary" onMouseLeave={scheduleClose}>
          {mainNav.map((item, index) => {
            const expanded = openMenu === item.id
            return (
              <div
                key={item.id}
                onMouseEnter={() => scheduleOpen(item.id)}
                onFocus={() => setOpenMenu(item.id)}
              >
                <button
                  className={`nav-btn${location.pathname.startsWith(item.to) ? ' is-current' : ''}`}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${menuId}-${item.id}`}
                  onClick={() => setOpenMenu(expanded ? null : item.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowRight') {
                      event.preventDefault()
                      const next = mainNav[(index + 1) % mainNav.length]
                      setOpenMenu(next.id)
                    }
                    if (event.key === 'ArrowLeft') {
                      event.preventDefault()
                      const prev = mainNav[(index - 1 + mainNav.length) % mainNav.length]
                      setOpenMenu(prev.id)
                    }
                  }}
                >
                  {item.label}
                </button>
              </div>
            )
          })}
        </nav>

        <div className="header-cta">
          {resourcesItem ? (
            <div
              className="header-resource"
              onMouseEnter={() => scheduleOpen(resourcesItem.id)}
              onMouseLeave={scheduleClose}
              onFocus={() => setOpenMenu(resourcesItem.id)}
            >
              <button
                aria-controls={`${menuId}-${resourcesItem.id}`}
                aria-expanded={openMenu === resourcesItem.id}
                className={`header-util header-resource__trigger${
                  location.pathname.startsWith(resourcesItem.to) ? ' is-current' : ''
                }`}
                type="button"
                onClick={() =>
                  setOpenMenu(openMenu === resourcesItem.id ? null : resourcesItem.id)
                }
              >
                Resources
                <span aria-hidden="true">⌄</span>
              </button>
            </div>
          ) : null}
          <Link className="header-util" to="/partners/login">
            Partner Login
          </Link>
          <button
            aria-label="Search"
            className="header-search"
            title="Search"
            type="button"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>
          <Link className="btn" to="/contact">
            Contact Sales
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {activeItem?.menu ? (
        <>
          <div className="mega-dim" aria-hidden="true" />
          <div className="mega-wrap" onMouseEnter={() => scheduleOpen(activeItem.id)} onMouseLeave={scheduleClose}>
            <div className="wrap">
              <div className="mega" id={`${menuId}-${activeItem.id}`} role="region" aria-label={`${activeItem.label} menu`}>
                <div className="mega-cols">
                  {activeItem.menu.columns.map((column) => (
                    <div className="mega-col" key={column.title}>
                      <h3>{column.title}</h3>
                      {column.links.map((link) => (
                        <Link key={link.to + link.label} to={link.to}>
                          <strong>{link.label}</strong>
                          {link.note ? <span>{link.note}</span> : null}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link className="mega-viewall" to={activeItem.menu.viewAll.to}>
                    {activeItem.menu.viewAll.label}
                  </Link>
                </div>
                <aside className="mega-feature">
                  {activeItem.menu.featured.media ? (
                    <MediaVisual
                      name={activeItem.menu.featured.media}
                      alt=""
                      ratio="landscape"
                    />
                  ) : null}
                  <div className="mega-feature__copy">
                    <p className="eyebrow">{activeItem.menu.featured.label}</p>
                    <h3>{activeItem.menu.featured.title}</h3>
                    <p>{activeItem.menu.featured.body}</p>
                    <Link className="btn" to={activeItem.menu.featured.to}>
                      {activeItem.menu.featured.cta}
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {mobileOpen ? (
        <div className="mobile-sheet" id="mobile-nav">
          {primaryNav.map((item) => {
            const open = openAccordion === item.id
            return (
              <div className="mobile-acc" key={item.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenAccordion(open ? null : item.id)}
                >
                  {item.label}
                </button>
                {open && item.menu ? (
                  <div className="mobile-acc-panel">
                    <NavLink to={item.to}>Overview</NavLink>
                    {item.menu.columns.flatMap((column) =>
                      column.links.map((link) => (
                        <NavLink key={link.to + link.label} to={link.to}>
                          {link.label}
                        </NavLink>
                      )),
                    )}
                    <NavLink className="mobile-feature" to={item.menu.featured.to}>
                      {item.menu.featured.cta}
                    </NavLink>
                  </div>
                ) : null}
              </div>
            )
          })}
          <div className="mobile-sheet__actions">
            <button
              aria-label="Search"
              className="header-search"
              title="Search"
              type="button"
              onClick={() => {
                setMobileOpen(false)
                setSearchOpen(true)
              }}
            >
              <SearchIcon />
            </button>
            <Link to="/partners/login">Partner Login</Link>
            <Link className="btn" to="/contact">
              Get started
            </Link>
          </div>
        </div>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
