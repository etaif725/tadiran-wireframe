import { homeFaqs } from '@/content/home'
import { SectionHeading } from '@/components/ui'

export function HomeFaq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="Questions"
          title="Answers before the first working session."
          body="Short answers for the evaluation. The named floor still decides the rest."
        />
        <div className="ask-list">
          {homeFaqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
