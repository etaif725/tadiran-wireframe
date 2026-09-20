'use client'

import { useEffect } from 'react'

export function HomeEnter() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.removeAttribute('data-enter')
      return
    }

    if (root.getAttribute('data-enter') !== 'pending') {
      root.setAttribute('data-enter', 'pending')
    }

    let done = false
    let fallback = 0
    let timeout = 0
    const copy = document.querySelector('.home-hero .hero-h1')

    function finish() {
      if (done) return
      done = true
      root.setAttribute('data-enter', 'done')
      copy?.removeEventListener('animationend', onEnd)
      window.clearTimeout(timeout)
    }

    function onEnd(event: Event) {
      if (event.target === copy) finish()
    }

    function start() {
      root.setAttribute('data-enter', 'run')
      copy?.addEventListener('animationend', onEnd, { once: true })
      timeout = window.setTimeout(finish, 3000)
    }

    function arm() {
      requestAnimationFrame(() => {
        requestAnimationFrame(start)
      })
    }

    const ready = document.fonts?.ready ?? Promise.resolve()
    ready.then(arm)
    fallback = window.setTimeout(start, 1200)

    return () => {
      window.clearTimeout(fallback)
      window.clearTimeout(timeout)
      copy?.removeEventListener('animationend', onEnd)
      root.removeAttribute('data-enter')
    }
  }, [])

  return null
}
