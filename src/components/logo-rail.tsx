import { floorMarks } from '@/content/home'

export function LogoRail() {
  const row = [...floorMarks, ...floorMarks]

  return (
    <section className="logo-rail" aria-label="Floors Tadiran already designs for">
      <p className="visually-hidden">{floorMarks.map((item) => item.name).join(', ')}</p>
      <div className="logo-rail__viewport">
        <div className="logo-rail__track" aria-hidden="true">
          {row.map((item, index) => (
            <span className="logo-rail__mark" key={`${item.name}-${index}`}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
