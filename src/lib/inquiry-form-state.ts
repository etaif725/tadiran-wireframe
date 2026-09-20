import { inquirySchema, type Inquiry } from './inquiry-schema';

/** Editable state may be incomplete; only schema output is a valid request. */
export type InquiryDraft = Omit<Inquiry, 'consent'> & { consent: boolean };
export type InquiryField = keyof InquiryDraft;
export type FieldErrors = Partial<Record<InquiryField, string>>;

export const partnerStepFields: readonly (readonly InquiryField[])[] = [
  ['name', 'email', 'phone', 'partnerType'],
  ['company', 'country', 'companyWebsite'],
  ['interest', 'territory'],
  ['capabilities'],
  ['message', 'consent'],
];

export const inquiryFieldLabels: Record<InquiryField, string> = {
  kind: 'Inquiry type', name: 'Full name', email: 'Email address',
  phone: 'Phone', company: 'Company', country: 'Country or region',
  interest: 'Area of interest', message: 'Goal', consent: 'Privacy acknowledgement',
  website: 'Verification field', partnerType: 'Partner type',
  companyWebsite: 'Company website', territory: 'Markets and territories',
  capabilities: 'Capabilities',
};

export function salesRoutingNote(draft: Pick<InquiryDraft, 'interest' | 'name' | 'company' | 'phone'>) {
  return `Website inquiry: ${draft.interest}. From ${draft.name} at ${draft.company}. Phone: ${draft.phone}.`
}

export function validateInquiry(draft: InquiryDraft, fields?: readonly InquiryField[]) {
  const result = inquirySchema.safeParse(draft);
  const errors: FieldErrors = {};
  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path[0] as InquiryField;
      if (fields && !fields.includes(field)) continue;
      errors[field] ??= field === 'consent'
        ? 'Please acknowledge the privacy notice.'
        : `Please enter a valid ${(inquiryFieldLabels[field] ?? 'value').toLowerCase()}.`;
    }
  }
  return { errors, inquiry: result.success ? result.data : null };
}

export function stepForErrors(errors: FieldErrors): number {
  const step = partnerStepFields.findIndex(fields => fields.some(field => errors[field]));
  return step < 0 ? 4 : step;
}

/** Same validated payload keeps its key, including after editing and reverting. */
export function submissionIdentity(
  attempts: Map<string, string>,
  inquiry: Inquiry,
  createKey: () => string,
): string {
  const payload = JSON.stringify(inquiry);
  const existing = attempts.get(payload);
  if (existing) return existing;
  const key = createKey();
  attempts.set(payload, key);
  return key;
}
