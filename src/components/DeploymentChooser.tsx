import { useState } from 'react'
import { Link } from 'react-router-dom'

const options = [
  {
    id: 'cloud',
    title: 'Cloud speed',
    body: 'Stand up communications quickly while keeping enterprise control points.',
  },
  {
    id: 'hybrid',
    title: 'Hybrid estate',
    body: 'Connect existing sites and cloud services without a forced cutover.',
  },
  {
    id: 'onprem',
    title: 'On-premise control',
    body: 'Air-gapped or on-site recording and operations where policy requires it.',
  },
]

export function DeploymentChooser() {
  const [selected, setSelected] = useState('hybrid')
  const current = options.find((item) => item.id === selected) ?? options[1]

  return (
    <div className="deploy-chooser">
      <div className="chooser" role="group" aria-label="Deployment constraint">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected === option.id}
            onClick={() => setSelected(option.id)}
          >
            <strong>{option.title}</strong>
            <p>{option.body}</p>
          </button>
        ))}
      </div>
      <div className="deploy-chooser__result">
        <p>
          Selected: <strong>{current.title}</strong>. This is a consultative path, not a price card.
        </p>
        <Link className="btn" to={`/contact?intent=technical&deployment=${selected}`}>
          Discuss this deployment
        </Link>
      </div>
    </div>
  )
}
