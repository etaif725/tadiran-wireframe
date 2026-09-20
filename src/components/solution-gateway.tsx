'use client'

import Link from 'next/link'
import { useState } from 'react'

const families = [
  {
    id: 'enterprise',
    name: 'IT & Communications',
    question: 'Need to modernize voice without rebuilding the estate?',
    outcome: 'Give teams, sites, and field users one communications foundation. Choose cloud, hybrid, or on-premise around the infrastructure you already operate.',
    href: '/solutions/enterprise-communications',
    chips: ['Voice', 'Video', 'Routing', 'Mobility'],
  },
  {
    id: 'cx',
    name: 'CX & Contact Center',
    question: 'Are customers repeating themselves at every handoff?',
    outcome: 'Bring voice, digital interactions, quality, and customer context into one workspace so agents and supervisors can act on the whole conversation.',
    href: '/solutions/omnichannel-cx',
    chips: ['OmniCX', 'Quality', 'Context', 'CRM'],
  },
  {
    id: 'ai',
    name: 'AI & Analytics',
    question: 'Have interaction data but no clear next action?',
    outcome: 'Apply governed assistance, quality review, and operational insight to named workflows. Keep ownership, escalation, and review with your team.',
    href: '/solutions/ai-analytics',
    chips: ['AVA', 'Quality', 'Reporting', 'Governance'],
  },
  {
    id: 'critical',
    name: 'Operations & Critical',
    question: 'What happens when the next call cannot wait?',
    outcome: 'Support dispatch, redundancy, and escalation workflows for control rooms, care teams, receiving centers, and field operations.',
    href: '/solutions/critical-communications',
    chips: ['Dispatch', 'Redundancy', 'Escalation', 'Continuity'],
  },
]

export function SolutionGateway() {
  const [active, setActive] = useState(0)
  const current = families[active]

  return (
    <div className="gateway">
      <div className="gateway__list" role="tablist" aria-label="Solution families">
        {families.map((family, index) => (
          <button
            key={family.id}
            type="button"
            role="tab"
            id={`gateway-tab-${index}`}
            aria-selected={index === active}
            aria-controls="gateway-stage"
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onKeyDown={(event) => {
              let next = index
              if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % families.length
              else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + families.length) % families.length
              else return
              event.preventDefault()
              setActive(next)
              document.getElementById(`gateway-tab-${next}`)?.focus()
            }}
          >
            <small>0{index + 1}</small>
            <strong>{family.name}</strong>
            <span>{family.question}</span>
          </button>
        ))}
      </div>
      <div className="gateway__stage" id="gateway-stage" role="tabpanel" aria-labelledby={`gateway-tab-${active}`}>
        <div className="gateway__scene">
          <p className="eyebrow">{current.name}</p>
          <h3>{current.question}</h3>
          <p>{current.outcome}</p>
          <div className="chip-row">
            {current.chips.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <Link className="action" href={current.href}>
            <span>Explore this path</span>
            <span className="action__icon" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
