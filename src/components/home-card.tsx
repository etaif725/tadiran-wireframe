const av1 =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%238d6a52'/%3E%3Ccircle cx='20' cy='16' r='9' fill='%23d9a882'/%3E%3Cellipse cx='20' cy='38' rx='14' ry='13' fill='%233c3a44'/%3E%3C/svg%3E\")"
const av2 =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23b9b3ad'/%3E%3Ccircle cx='20' cy='15' r='9' fill='%23e8c4a0'/%3E%3Cellipse cx='20' cy='38' rx='14' ry='13' fill='%23786f66'/%3E%3C/svg%3E\")"
const av3 =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23a08b7a'/%3E%3Ccircle cx='20' cy='16' r='9' fill='%23dda882'/%3E%3Cellipse cx='20' cy='38' rx='14' ry='13' fill='%236b4f3f'/%3E%3C/svg%3E\")"

export function HomeCard() {
  return (
    <div className="card">
      <p className="card__eyebrow t-eyebrow"># Aeonix / Estate review</p>
      <h2 className="cardtitle t-title">Outcome Review</h2>
      <div className="meta">
        <div className="avatars">
          <span className="av av1" style={{ backgroundImage: av1 }} />
          <span className="av av2" style={{ backgroundImage: av2 }} />
          <span className="av av3" style={{ backgroundImage: av3 }} />
        </div>
        <svg className="clockicon" viewBox="0 0 14 14" aria-hidden="true">
          <circle cx="7" cy="7" r="7" fill="#d9d9d9" />
          <path d="M7 3.6V7.2l2.3 1.4" fill="none" stroke="#f2f2f2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="metatext t-meta">
          Today at 10:30 a.m. <span className="sep">&bull;</span> 45 mins <span className="sep">&bull;</span> Aligned
        </p>
      </div>
      <div className="tabs" role="tablist" aria-label="Review sections">
        <span className="tab is-active">Outcomes</span>
        <span className="tab t2">Decisions</span>
        <span className="tab t3">Action Items</span>
        <span className="tab t4">Open Questions</span>
      </div>
      <div className="panel">
        <p className="panel__heading t-heading">Key Outcomes</p>
        <div className="row row1">
          <svg className="dot" viewBox="0 0 15 15" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#2a9a30" />
            <path d="M4.1 7.15 6.05 9.05 9.9 5.2" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="rowtitle t-item">Keep one communications foundation across the estate</p>
          <p className="rowowner t-caption">Owner: Product Lead</p>
        </div>
        <div className="row row2">
          <svg className="dot" viewBox="0 0 15 15" aria-hidden="true">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#f6a825" />
            <path d="M7.5 3.8c1.35 0 2.35.9 2.35 2.15 0 1.05-.55 1.65-1.45 2.15-.55.3-.85.6-.85 1.15" fill="none" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" />
            <circle cx="7.5" cy="11.15" r="0.78" fill="#fff" />
          </svg>
          <p className="rowtitle t-item">Align cloud, hybrid, or on-premise to the operation</p>
          <p className="rowowner t-caption">Owner: Operations Lead</p>
        </div>
      </div>
    </div>
  )
}
