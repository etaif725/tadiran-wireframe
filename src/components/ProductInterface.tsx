type ProductInterfaceProps = {
  variant?: 'cx' | 'analytics' | 'operations' | 'uc'
  title?: string
  className?: string
}

const presets = {
  cx: {
    brand: 'Omni workspace',
    status: 'Live operations',
    rail: ['Voice', 'WhatsApp', 'Email', 'Chat'],
    queueTitle: 'Active conversations',
    queueMeta: '12 open',
    rows: [
      ['Maya Chen', 'Billing question', '2m'],
      ['Daniel Reed', 'Service request', '5m'],
      ['Ana Silva', 'Account update', '8m'],
      ['Chris Morgan', 'Technical help', '11m'],
    ],
    stageTitle: 'Maya Chen',
    stageMeta: 'Voice · Customer since 2021',
    messages: [
      ['customer', 'I need help understanding a charge on our latest invoice.'],
      ['agent', 'I can help with that. I have the account and invoice open now.'],
      ['customer', 'Great, it’s the international service line.'],
    ],
    composer: 'Write a response…',
    action: 'Send',
    assistLabel: 'AI assistance',
    assistTitle: 'Suggested next step',
    assistBody: 'Confirm service dates and explain the prorated international charge.',
    sentiment: 'Positive sentiment',
    stats: [
      ['Quality', '94'],
      ['Resolution', 'Likely'],
    ],
  },
  operations: {
    brand: 'Supervisor workspace',
    status: 'Live operations',
    rail: ['Voice', 'WhatsApp', 'Email', 'Chat'],
    queueTitle: 'Teams on shift',
    queueMeta: '4 queues',
    rows: [
      ['Floor A', 'SLA 94%', '8'],
      ['Floor B', 'SLA 88%', '14'],
      ['After hours', 'SLA 91%', '3'],
      ['Escalations', 'SLA 97%', '2'],
    ],
    stageTitle: 'Floor A · live quality',
    stageMeta: 'Supervisor · coaching queue',
    messages: [
      ['customer', 'Hold time on Floor A crossed the warning threshold.'],
      ['agent', 'Coaching prompt sent to two agents on the billing queue.'],
      ['customer', 'Quality score on the last 20 interactions is 94.'],
    ],
    composer: 'Note for the shift…',
    action: 'Send',
    assistLabel: 'Supervisor assist',
    assistTitle: 'Recommended action',
    assistBody: 'Move two idle agents from Floor B to the billing queue.',
    sentiment: 'Queues inside target',
    stats: [
      ['Quality', '94'],
      ['Occupancy', '71%'],
    ],
  },
  analytics: {
    brand: 'Analytics workspace',
    status: 'Live reporting',
    rail: ['Dash', 'Trends', 'Quality', 'Export'],
    queueTitle: 'Insight panels',
    queueMeta: 'Today',
    rows: [
      ['Service level', '94% · target 90%', '↑'],
      ['Avg handle', '4m 12s', '↓'],
      ['First contact', '78%', '↑'],
      ['QA coverage', '100%', '—'],
    ],
    stageTitle: 'Quality & volume trend',
    stageMeta: 'Last 7 days · all queues',
    messages: [
      ['customer', 'Peak volume sits between 10:00 and 13:00 on weekdays.'],
      ['agent', 'QA flags concentrate on billing and international charges.'],
      ['customer', 'First-contact resolution improved 6 points this week.'],
    ],
    composer: 'Ask a natural-language question…',
    action: 'Run',
    assistLabel: 'Insight assist',
    assistTitle: 'Recommended view',
    assistBody: 'Compare billing QA scores against average handle time by queue.',
    sentiment: 'Within weekly target',
    stats: [
      ['Coverage', '100%'],
      ['Trend', '+6 pts'],
    ],
  },
  uc: {
    brand: 'Aeonix',
    status: 'All sites connected',
    rail: ['Sites', 'Users', 'Hunt', 'Admin'],
    queueTitle: 'Active sites',
    queueMeta: '4 estates',
    rows: [
      ['HQ campus', 'Voice · video · hunt', '412'],
      ['North plant', 'Attendant overflow', '86'],
      ['Field fleet', 'Mobile / Touch', '140'],
      ['Control room', 'Dispatch console', '12'],
    ],
    stageTitle: 'HQ campus · attendant',
    stageMeta: 'Hybrid · hunt group 200',
    messages: [
      ['customer', 'Hunt group 200 overflowed to the night attendant.'],
      ['agent', 'Site mesh path restored after the WAN flap.'],
      ['customer', 'Dispatch console acknowledged incident 14.'],
    ],
    composer: 'Page a site or hunt group…',
    action: 'Send',
    assistLabel: 'Continuity assist',
    assistTitle: 'Recommended next step',
    assistBody: 'Fail hunt group 200 to North plant until the primary trunk recovers.',
    sentiment: 'Mesh path healthy',
    stats: [
      ['Sites', '4'],
      ['Mode', 'Hybrid'],
    ],
  },
} as const

export function ProductInterface({
  variant = 'cx',
  title = 'Unified interaction workspace',
  className = '',
}: ProductInterfaceProps) {
  const preset = presets[variant]

  return (
    <div
      className={`product-interface product-interface--${variant} ${className}`.trim()}
      role="img"
      aria-label={title}
    >
      <div className="product-interface__topbar">
        <span className="product-interface__brand">{preset.brand}</span>
        <div className="product-interface__status">
          <i />
          {preset.status}
        </div>
      </div>
      <div className="product-interface__body">
        <nav className="product-interface__rail" aria-label="Interface preview navigation">
          {preset.rail.map((item, index) => (
            <span key={item} className={index === 0 ? 'is-active' : ''} title={item}>
              {item.slice(0, 1)}
            </span>
          ))}
        </nav>
        <div className="product-interface__queue">
          <div className="product-interface__queue-head">
            <strong>{preset.queueTitle}</strong>
            <span>{preset.queueMeta}</span>
          </div>
          {preset.rows.map(([name, subject, time], index) => (
            <div
              className={`product-interface__contact ${index === 0 ? 'is-selected' : ''}`}
              key={name}
            >
              <span className="product-interface__avatar">{name.slice(0, 1)}</span>
              <div>
                <strong>{name}</strong>
                <small>{subject}</small>
              </div>
              <time>{time}</time>
            </div>
          ))}
        </div>
        <div className="product-interface__conversation">
          <header>
            <div>
              <strong>{preset.stageTitle}</strong>
              <span>{preset.stageMeta}</span>
            </div>
            <button type="button" aria-label="More interaction options">
              •••
            </button>
          </header>
          <div className="product-interface__messages">
            {preset.messages.map(([tone, text]) => (
              <div className={tone === 'agent' ? 'is-agent' : 'is-customer'} key={text}>
                {text}
              </div>
            ))}
          </div>
          <div className="product-interface__composer">
            <span>{preset.composer}</span>
            <b>{preset.action}</b>
          </div>
        </div>
        <aside className="product-interface__insight">
          <p>{preset.assistLabel}</p>
          <strong>{preset.assistTitle}</strong>
          <span>{preset.assistBody}</span>
          <div className="product-interface__sentiment">
            <i />
            {preset.sentiment}
          </div>
          <dl>
            {preset.stats.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </div>
  )
}
