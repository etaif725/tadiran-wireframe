'use client'

import { useState } from 'react'
import { Action } from './ui'

const layers = [
  {
    id: 'voice',
    label: 'Voice',
    title: 'Keep the customer context with the call.',
    body: 'Inbound, outbound, and transferred calls stay connected to the person and workflow that own the next action.',
  },
  {
    id: 'digital',
    label: 'Digital',
    title: 'Let digital conversations continue the same case.',
    body: 'Chat and other digital threads land in the same workspace, so agents can continue the interaction without starting over.',
  },
  {
    id: 'quality',
    label: 'Quality',
    title: 'Give supervisors evidence they can use.',
    body: 'Recording and evaluation sit next to the work, so coaching is connected to the interaction that needs to improve.',
  },
  {
    id: 'ai',
    label: 'Governed AI',
    title: 'Use AI where a person owns the outcome.',
    body: 'AVA and analytics enter a defined workflow. Escalation, review, and customer responsibility stay with your team.',
  },
]

export function ChannelScene() {
  const [active, setActive] = useState(0)
  const layer = layers[active]

  return (
    <div className="channel-scene">
      <div>
        <p className="eyebrow">For CX and contact-center teams</p>
        <h2>Give every handoff the context it needs.</h2>
        <p className="channel-scene__lead">
          OmniCX connects the customer conversation to the workspace, quality process, and operating decision behind it.
        </p>
        <div className="channel-scene__tabs" role="tablist" aria-label="OmniCX layers">
          {layers.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="channel-scene__detail" role="tabpanel">
          <h3>{layer.title}</h3>
          <p>{layer.body}</p>
        </div>
        <Action href="/products/omnicx">Meet OmniCX</Action>
      </div>
      <div className="channel-scene__panel">
        <p className="eyebrow">{layer.label}</p>
        <h3>{layer.title}</h3>
        <p>{layer.body}</p>
      </div>
    </div>
  )
}
