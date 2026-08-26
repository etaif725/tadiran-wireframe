type EvidenceNoteProps = {
  /** What kind of proof is reserved. */
  label?: string
}

/** Compact end-of-page note. Replaces mid-funnel empty evidence frames. */
export function EvidenceNote({
  label = 'Customer stories, metrics, and quotes',
}: EvidenceNoteProps) {
  return (
    <aside className="evidence-note" role="note">
      <p className="eyebrow">Proof pending approval</p>
      <p>
        {label} appear here once Tadiran clears them for public use. Until then, this site does not
        invent logos, testimonials, or outcomes.
      </p>
    </aside>
  )
}
