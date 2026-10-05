'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import { useEffect, useId, useRef, useState } from 'react'
import { primaryNav } from '@/content/navigation'
import { searchCatalog } from '@/content/search'
import { MenuArt } from './menu-art'
import {gsap} from '@/lib/gsap'
import { Brand } from './ui'

const SHOW_SEARCH = false

function PartnerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="8" r="3.1" />
      <path d="M5.4 18.6c1.3-2.6 3.6-4 6.6-4s5.3 1.4 6.6 4" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="6.4" />
      <path d="m16.2 16.2 4.1 4.1" />
    </svg>
  )
}

export function Header() {
  const path = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const wrapRef = useRef<HTMLElement>(null)
  const searchButton = useRef<HTMLButtonElement>(null)
  const burgerButton = useRef<HTMLButtonElement>(null)
  const searchInput = useRef<HTMLInputElement>(null)
  const openTimer = useRef(0)
  const closeTimer = useRef(0)
  const menuId = useId()

  useEffect(()=>{
    if(!openMenu||matchMedia('(prefers-reduced-motion: reduce)').matches)return
    const ctx=gsap.context(()=>{
      gsap.fromTo('.mega',{y:-10,autoAlpha:0},{y:0,autoAlpha:1,duration:.25,ease:'power2.out'})
      gsap.fromTo('.menu-art img',{scale:1.06},{scale:1,duration:.6,ease:'power2.out'})
    },wrapRef)
    return()=>ctx.revert()
  },[openMenu])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpenMenu(null)
      setMobileOpen(false)
      setOpenAccordion(null)
      setSearchOpen(false)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [path])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (mobileOpen && event.key === 'Tab') {
        const items = Array.from(wrapRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []).filter(el => el.getClientRects().length > 0)
        const first = items[0], last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
      if (event.key !== 'Escape') return
      if (searchOpen) {
        setSearchOpen(false)
        searchButton.current?.focus()
        return
      }
      if (mobileOpen) {
        setMobileOpen(false)
        burgerButton.current?.focus()
        return
      }
      if (openMenu) document.getElementById(`nav-${openMenu}`)?.focus()
      setOpenMenu(null)
    }
    function onClick(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setMobileOpen(false)
        setOpenMenu(null)
      }
    }
    function onResize() {
      if (window.innerWidth > 1100) {
        setMobileOpen(false)
        setOpenAccordion(null)
      } else {
        setOpenMenu(null)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      window.removeEventListener('resize', onResize)
    }
  }, [mobileOpen, searchOpen, openMenu])

  useEffect(() => {
    const background = Array.from(document.querySelectorAll<HTMLElement>('main, footer'))
    const previous = background.map(el => el.inert)
    if (mobileOpen) background.forEach(el => { el.inert = true })
    return () => background.forEach((el, i) => { el.inert = previous[i] })
  }, [mobileOpen])

  useEffect(() => {
    document.body.style.overflow = searchOpen || mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [searchOpen, mobileOpen])

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    return () => {
      window.clearTimeout(openTimer.current)
      window.clearTimeout(closeTimer.current)
    }
  }, [])

  function cancelClose() {
    window.clearTimeout(closeTimer.current)
  }

  function scheduleOpen(id: string) {
    cancelClose()
    window.clearTimeout(openTimer.current)
    openTimer.current = window.setTimeout(() => setOpenMenu(id), 70)
  }

  function scheduleClose() {
    window.clearTimeout(openTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160)
  }

  function toggleMenu(id: string) {
    cancelClose()
    window.clearTimeout(openTimer.current)
    setOpenMenu((current) => (current === id ? null : id))
  }

  function closeMobile() {
    setMobileOpen(false)
    setOpenAccordion(null)
  }

  const activeItem = primaryNav.find((item) => item.id === openMenu)
  const results = searchCatalog(query)

  return (
    <header className={`site-header nav${mobileOpen ? ' is-open' : ''}${openMenu ? ' is-mega' : ''}`} ref={wrapRef} onClick={(event) => {
      if ((event.target as HTMLElement).closest('a[href]')) {
        window.clearTimeout(openTimer.current)
        window.clearTimeout(closeTimer.current)
        setOpenMenu(null)
        closeMobile()
      }
    }}>
      <div className="header-main">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary">
          {primaryNav.map((item, index) => {
            const expanded = openMenu === item.id
            const current =
              item.href !== '/' &&
              (path === item.href ||
                path.startsWith(`${item.href}/`) ||
                (item.id === 'solutions' && path.startsWith('/industries')) ||
                (item.href === '/about' && path.startsWith('/about')))
            return (
              <div
                key={item.id}
                onMouseEnter={() => scheduleOpen(item.id)}
                onMouseLeave={scheduleClose}
              >
                <button
                  className={`nav-btn${current ? ' is-current' : ''}`}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${menuId}-${item.id}`}
                  onClick={() => toggleMenu(item.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' && !expanded) {
                      event.preventDefault()
                      setOpenMenu(item.id)
                    }
                    if (event.key === 'ArrowRight') {
                      event.preventDefault()
                      const next = primaryNav[(index + 1) % primaryNav.length]
                      setOpenMenu(next.id)
                      document.getElementById(`nav-${next.id}`)?.focus()
                    }
                    if (event.key === 'ArrowLeft') {
                      event.preventDefault()
                      const previous = primaryNav[(index - 1 + primaryNav.length) % primaryNav.length]
                      setOpenMenu(previous.id)
                      document.getElementById(`nav-${previous.id}`)?.focus()
                    }
                  }}
                  id={`nav-${item.id}`}
                >
                  <span>{item.label}</span>
                  <span className="nav-btn__chevron" aria-hidden="true" />
                </button>
              </div>
            )
          })}
        </nav>

        <div className="header-cta">
          <Link className="header-util" href="/partners/login">
            <PartnerIcon />
            <span>Partner Login</span>
          </Link>
          {SHOW_SEARCH ? (
            <button
              ref={searchButton}
              aria-label="Search"
              className="header-search"
              type="button"
              onClick={() => {
                setOpenMenu(null)
                setMobileOpen(false)
                setQuery('')
                setSearchOpen(true)
              }}
            >
              <SearchIcon />
            </button>
          ) : null}
          <Link className="btn btn--nav" href="/contact">
            Contact Sales
          </Link>
          <button
            ref={burgerButton}
            className="burger"
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="nav-menu"
            onClick={(event) => {
              event.stopPropagation()
              setOpenMenu(null)
              setMobileOpen((value) => !value)
            }}
          >
            <span className="burger__bar" />
            <span className="burger__bar" />
          </button>
        </div>

        <nav
          className="navmenu"
          id="nav-menu"
          aria-label="Mobile navigation"
          hidden={!mobileOpen}
          onClick={(event) => event.stopPropagation()}
        >
          {primaryNav.map((item) => {
            const open = openAccordion === item.id
            return (
              <div className="mobile-acc" key={item.id}>
                <button type="button" aria-label={item.label} aria-expanded={open} aria-controls={`${menuId}-mobile-${item.id}`} onClick={() => setOpenAccordion(open ? null : item.id)}>
                  {item.label}
                </button>
                {open ? (
                  <div className="mobile-acc-panel" id={`${menuId}-mobile-${item.id}`}>
                    <Link href={item.href} onClick={closeMobile}>
                      Overview
                    </Link>
                    {item.menu.columns.map((column) => (
                      <div key={column.title}>
                        <p className="mobile-acc-heading">{column.title}</p>
                        {column.links.map((link) => (
                          <Link key={link.href + link.label} href={link.href} onClick={closeMobile}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.menu.industries ? (
                      <div>
                        <p className="mobile-acc-heading">{item.menu.industries.title}</p>
                        {item.menu.industries.links.map((link) => (
                          <Link key={link.href + link.label} href={link.href} onClick={closeMobile}>
                            {link.label}
                          </Link>
                        ))}
                        <Link href={item.menu.industries.viewAll.href} onClick={closeMobile}>
                          {item.menu.industries.viewAll.label}
                        </Link>
                      </div>
                    ) : null}
                    <Link className="mobile-feature" href={item.menu.featured.href} onClick={closeMobile}>
                      {item.menu.featured.cta}
                    </Link>
                  </div>
                ) : null}
              </div>
            )
          })}
          {SHOW_SEARCH ? (
            <button
              aria-label="Search"
              className="mobile-search"
              type="button"
              onClick={() => {
                closeMobile()
                setQuery('')
                setSearchOpen(true)
              }}
            >
              <SearchIcon />
              <span>Search the site</span>
            </button>
          ) : null}
          <Link className="navmenu__link" href="/partners/login" onClick={closeMobile}>
            <PartnerIcon />
            <span>Partner Login</span>
          </Link>
          <Link className="navmenu__cta" href="/contact" onClick={closeMobile}>
            Contact Sales
          </Link>
        </nav>
      </div>

      {activeItem ? (
        <div
          className="mega-wrap"
          onMouseEnter={() => {
            cancelClose()
            scheduleOpen(activeItem.id)
          }}
          onMouseLeave={scheduleClose}
        >
          <div
            className="mega"
            id={`${menuId}-${activeItem.id}`}
            data-cols={activeItem.menu.columns.length}
            role="region"
            aria-label={`${activeItem.label} menu`}
          >
            <div className="mega-body">
              <div className="mega-cols">
                {activeItem.menu.columns.map((column) => (
                  <div className="mega-col" key={column.title}>
                    <h3>{column.title}</h3>
                    {column.links.map((link) => (
                      <Link key={link.href + link.label} href={link.href}>
                        <strong>{link.label}</strong>
                        {link.note ? <span>{link.note}</span> : null}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <Link className="mega-viewall" href={activeItem.menu.viewAll.href}>
                {activeItem.menu.viewAll.label}
              </Link>
              {activeItem.menu.industries ? (
                <div className="mega-industries">
                  <div className="mega-industries__head">
                    <h3>{activeItem.menu.industries.title}</h3>
                    <Link href={activeItem.menu.industries.viewAll.href}>{activeItem.menu.industries.viewAll.label}</Link>
                  </div>
                  <div className="mega-industries__list">
                    {activeItem.menu.industries.links.map((link) => (
                      <Link key={link.href + link.label} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <aside className="mega-feature">
              <MenuArt id={activeItem.id}/>
              <div className="mega-feature__copy">
                <p className="eyebrow">{activeItem.menu.featured.label}</p>
                <h3>{activeItem.menu.featured.title}</h3>
                <p>{activeItem.menu.featured.body}</p>
                <Link className="action" href={activeItem.menu.featured.href}>
                  <span>{activeItem.menu.featured.cta}</span>
                  <span className="action__icon" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      ) : null}

      {SHOW_SEARCH && searchOpen
        ? createPortal(
            <div
              className="search-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="search-title"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setSearchOpen(false)
                  searchButton.current?.focus()
                }
              }}
            >
              <div className="search-panel">
                <div className="search-heading">
                  <h2 id="search-title">Search the site</h2>
                  <button
                    className="search-close"
                    type="button"
                    aria-label="Close search"
                    onClick={() => {
                      setSearchOpen(false)
                      searchButton.current?.focus()
                    }}
                  >
                    Close
                  </button>
                </div>
                <label htmlFor="site-search">Products, solutions, and industries</label>
                <input
                  id="site-search"
                  ref={searchInput}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try OmniCX, healthcare, or cloud"
                />
                <p className="search-status" role="status">
                  {query.trim().length < 2 ? 'Enter at least two characters.' : `${results.length} results`}
                </p>
                <div className="search-results">
                  {results.map((hit) => (
                    <Link href={hit.href} key={hit.href} onClick={() => setSearchOpen(false)}>
                      <small>{hit.type}</small>
                      <strong>{hit.title}</strong>
                      <span>{hit.body}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  )
}
