'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { products } from '@/content/portfolio'

const slugs = ['aeonix', 'omnicx', 'ava', 'mobile-touch'] as const

const slides = slugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is (typeof products)[number] => Boolean(product))

const heroImages: Record<(typeof slugs)[number], string> = {
  aeonix: '/media/hero/aeonix-v4.webp',
  omnicx: '/media/hero/omnicx-v4.webp',
  ava: '/media/hero/ava-v4.webp',
  'mobile-touch': '/media/hero/mobile-touch-v4.webp',
}

export function HomeHero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const labelId = useId()
  const current = slides[index] ?? slides[0]
  const pointer = useRef<{ x: number; y: number } | null>(null)

  const go = useCallback((delta: number) => {
    setIndex((value) => (value + delta + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (paused) return
    const timer = window.setInterval(() => go(1), 6500)
    return () => window.clearInterval(timer)
  }, [paused, go])

  if (!current) return null

  return (
    <section
      className="home-hero"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setPaused(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault()
          go(1)
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          go(-1)
        }
      }}
      onPointerDown={(event) => {
        if (event.pointerType !== 'touch') return
        pointer.current = { x: event.clientX, y: event.clientY }
      }}
      onPointerUp={(event) => {
        if (event.pointerType !== 'touch' || !pointer.current) return
        const dx = event.clientX - pointer.current.x
        const dy = event.clientY - pointer.current.y
        pointer.current = null
        if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return
        go(dx < 0 ? 1 : -1)
      }}
      onPointerCancel={() => {
        pointer.current = null
      }}
    >
      <p id={labelId} className="visually-hidden">
        Featured products
      </p>
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index
        const src = heroImages[slide.slug as (typeof slugs)[number]]
        return (
          <article
            className={`hero-slide${active ? ' is-active' : ''}`}
            key={slide.slug}
            inert={!active}
            aria-hidden={!active}
            aria-label={`${slideIndex + 1} of ${slides.length}`}
          >
            <div className="hero-slide__media" aria-hidden="true">
              <Image
                src={src}
                alt=""
                fill
                priority={slideIndex === 0}
                sizes="100vw"
                className="hero-slide__photo"
              />
            </div>
            <div className="hero-slide__scrim" aria-hidden="true" />
            <div className="hero-copy">
              <p className="hero-eyebrow">{slide.eyebrow}</p>
              <p className="hero-product">{slide.title}</p>
              <h1 className="hero-h1">{slide.headline}</h1>
              <p className="hero-sub">{slide.summary}</p>
              <div className="hero-cta">
                <Link className="btn btn--hero" href={`/products/${slide.slug}`}>
                  Explore {slide.title.split(' ')[0]}
                </Link>
                <Link className="hero-subcta" href="/contact">
                  Talk to sales
                </Link>
              </div>
            </div>
          </article>
        )
      })}
      <div className="hero-controls">
        <button type="button" className="hero-dir" aria-label="Previous product" onClick={() => go(-1)}>
          <span />
        </button>
        <div className="hero-dots" role="group" aria-label="Choose featured product">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.slug}
              type="button"
              aria-pressed={slideIndex === index}
              aria-label={slide.title}
              className={slideIndex === index ? 'is-active' : ''}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
        <button type="button" className="hero-dir hero-dir--next" aria-label="Next product" onClick={() => go(1)}>
          <span />
        </button>
      </div>
    </section>
  )
}
