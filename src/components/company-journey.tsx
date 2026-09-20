import { journey } from '@/content/about'

export function CompanyJourney() {
  return (
    <ol className="about-chronicle">
      {journey.map((item) => (
        <li key={item.year}>
          <p className="about-chronicle__year">{item.year}</p>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
