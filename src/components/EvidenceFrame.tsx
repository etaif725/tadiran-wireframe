type EvidenceFrameProps = {
  caption: string
}

export function EvidenceFrame({ caption }: EvidenceFrameProps) {
  return (
    <figure className="evidence-frame">
      <div className="evidence-frame__slot" aria-hidden="true" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
