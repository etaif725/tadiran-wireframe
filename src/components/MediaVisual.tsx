type MediaVisualProps = {
  name: string
  alt: string
  ratio?: 'hero' | 'landscape' | 'portrait'
  priority?: boolean
  className?: string
  caption?: string
}

export function MediaVisual({
  name,
  alt,
  ratio = 'landscape',
  priority = false,
  className = '',
  caption,
}: MediaVisualProps) {
  return (
    <figure className={`media-visual media-visual--${ratio} ${className}`.trim()}>
      <picture>
        <source srcSet={`/media/${name}.avif`} type="image/avif" />
        <source srcSet={`/media/${name}.webp`} type="image/webp" />
        <img
          src={`/media/${name}.jpg`}
          alt={alt}
          width={ratio === 'portrait' ? 900 : ratio === 'hero' ? 1920 : 1200}
          height={ratio === 'portrait' ? 1200 : ratio === 'hero' ? 1080 : 900}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            event.currentTarget.parentElement?.parentElement?.classList.add('is-fallback')
          }}
        />
      </picture>
      <span className="media-visual__fallback" aria-hidden="true">
        Tadiran
      </span>
      {caption ? <figcaption className="media-visual__caption">{caption}</figcaption> : null}
    </figure>
  )
}
