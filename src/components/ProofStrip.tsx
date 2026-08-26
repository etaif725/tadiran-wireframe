type ProofItem = {
  value: string
  label: string
}

export function ProofStrip({ items }: { items: ProofItem[] }) {
  return (
    <div className="proof-strip" aria-label="Tadiran Telecom at a glance">
      {items.map((item) => (
        <div className="proof-item" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
