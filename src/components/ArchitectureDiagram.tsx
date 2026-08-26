type ArchitectureDiagramProps = {
  title?: string
  className?: string
}

export function ArchitectureDiagram({
  title = 'Connected communications architecture',
  className = '',
}: ArchitectureDiagramProps) {
  return (
    <figure className={`architecture-diagram ${className}`.trim()}>
      <svg viewBox="0 0 920 560" role="img" aria-labelledby="architecture-title architecture-desc">
        <title id="architecture-title">{title}</title>
        <desc id="architecture-desc">
          Voice and digital channels connect through the Tadiran communications platform to users,
          enterprise systems, analytics, and flexible deployment environments.
        </desc>
        <defs>
          <linearGradient id="platform-fill" x1="0" x2="1">
            <stop offset="0" stopColor="#0a1d4d" />
            <stop offset="1" stopColor="#177ec2" />
          </linearGradient>
          <filter id="architecture-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0a1d4d" floodOpacity=".14" />
          </filter>
        </defs>

        <g className="architecture-diagram__lines" fill="none" stroke="#76a9ca" strokeWidth="2">
          <path d="M180 120 C310 120 302 260 418 260" />
          <path d="M180 220 C310 220 302 280 418 280" />
          <path d="M180 320 C310 320 302 300 418 300" />
          <path d="M180 420 C310 420 302 320 418 320" />
          <path d="M560 280 C660 280 660 130 748 130" />
          <path d="M560 292 C660 292 660 235 748 235" />
          <path d="M560 304 C660 304 660 340 748 340" />
          <path d="M560 316 C660 316 660 445 748 445" />
        </g>

        {[
          ['Voice', 74, 82],
          ['Messaging', 74, 182],
          ['Video', 74, 282],
          ['Mobile', 74, 382],
        ].map(([label, x, y]) => (
          <g key={label as string} transform={`translate(${x} ${y})`}>
            <rect width="112" height="76" rx="20" fill="#fff" filter="url(#architecture-shadow)" />
            <circle cx="24" cy="38" r="8" fill="#52c7e8" />
            <text x="43" y="43" fill="#0a1d4d" fontSize="14" fontWeight="600">{label}</text>
          </g>
        ))}

        <g transform="translate(388 206)" filter="url(#architecture-shadow)">
          <rect width="202" height="150" rx="32" fill="url(#platform-fill)" />
          <text x="101" y="66" textAnchor="middle" fill="#52c7e8" fontSize="12" letterSpacing="2">ONE PLATFORM</text>
          <text x="101" y="96" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700">Tadiran</text>
        </g>

        {[
          ['People', 736, 92],
          ['CRM & data', 736, 197],
          ['Analytics', 736, 302],
          ['Operations', 736, 407],
        ].map(([label, x, y]) => (
          <g key={label as string} transform={`translate(${x} ${y})`}>
            <rect width="132" height="76" rx="20" fill="#fff" filter="url(#architecture-shadow)" />
            <circle cx="24" cy="38" r="8" fill="#177ec2" />
            <text x="43" y="43" fill="#0a1d4d" fontSize="14" fontWeight="600">{label}</text>
          </g>
        ))}

        <g transform="translate(334 444)">
          <rect width="310" height="70" rx="35" fill="#e8f2f7" />
          <text x="155" y="29" textAnchor="middle" fill="#177ec2" fontSize="11" letterSpacing="1.4">DEPLOY YOUR WAY</text>
          <text x="155" y="50" textAnchor="middle" fill="#0a1d4d" fontSize="14" fontWeight="600">Cloud · Hybrid · On-premise</text>
        </g>
      </svg>
    </figure>
  )
}
