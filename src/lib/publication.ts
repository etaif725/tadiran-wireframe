export type PublicationStatus = 'draft' | 'review' | 'published' | 'future'

export function isPubliclyIndexable(status: PublicationStatus) {
  if (status === 'future' || status === 'draft') return false
  return status === 'published' && process.env.LAUNCH_APPROVED === 'true'
}

export function isPubliclyVisible(status: PublicationStatus) {
  return status !== 'draft'
}
