type Faq = {
  q: string
  a: string
}

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>
            <span>{item.q}</span>
            <i aria-hidden="true" />
          </summary>
          <p className="faq__answer">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
