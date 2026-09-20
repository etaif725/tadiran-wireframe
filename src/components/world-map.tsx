import type { CSSProperties } from 'react'
import { offices } from '@/content/about'

type MapPoint = {
  x: number
  y: number
}

function project(lat: number, lon: number): MapPoint {
  return {
    x: lon + 180,
    y: 90 - lat,
  }
}

function route(from: MapPoint, to: MapPoint) {
  const controlX = (from.x + to.x) / 2
  const controlY = Math.min(from.y, to.y) - Math.max(8, Math.abs(from.x - to.x) * 0.1)
  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`
}

export function WorldMap() {
  const hub = offices.find((office) => office.hub) ?? offices[0]
  const hubPoint = project(hub.lat, hub.lon)

  return (
    <figure className="world-map" aria-labelledby="world-map-caption">
      <div className="world-map__canvas">
        <div
          className="world-map__land"
          role="img"
          aria-label="Dotted world map showing Tadiran Telecom offices"
        />

        <svg className="world-map__routes" viewBox="0 0 360 180" aria-hidden="true">
          {offices
            .filter((office) => office.city !== hub.city)
            .map((office) => (
              <path d={route(hubPoint, project(office.lat, office.lon))} key={office.city} />
            ))}
        </svg>

        <div className="world-map__markers">
          {offices.map((office) => {
            const point = project(office.lat, office.lon)
            const slug = office.city.toLowerCase().replaceAll(' ', '-')
            const style = {
              '--map-x': `${(point.x / 360) * 100}%`,
              '--map-y': `${(point.y / 180) * 100}%`,
            } as CSSProperties

            return (
              <button
                type="button"
                className={`world-map__marker${office.hub ? ' is-hub' : ''}`}
                style={style}
                aria-describedby={`office-${slug}`}
                key={office.city}
              >
                <span className="world-map__pin" aria-hidden="true" />
                <span className="world-map__tooltip" id={`office-${slug}`} role="tooltip">
                  <small>{office.hub ? 'Global headquarters' : 'Regional office'}</small>
                  <strong>
                    {office.city}, {office.country}
                  </strong>
                  <em>{office.role}</em>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <figcaption id="world-map-caption">
        <span>Global operating network</span>
        <strong>Headquarters in Israel. Regional teams across three continents.</strong>
      </figcaption>
    </figure>
  )
}
