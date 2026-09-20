import { describe, expect, it } from 'vitest';
import { inquirySchema } from '../src/lib/inquiry-schema';
import { inquiryFieldLabels, partnerStepFields, salesRoutingNote, stepForErrors, submissionIdentity, validateInquiry, type InquiryDraft } from '../src/lib/inquiry-form-state';

const draft: InquiryDraft = {
  kind: 'partner', name: 'Test User', email: 'test@example.com', phone: '+1 (404) 555-1212',
  company: 'Example Company', country: 'United States', interest: 'Partner program',
  message: 'Evaluate a communications deployment.', consent: true, website: '',
  companyWebsite: 'https://example.com', partnerType: 'System Integrator',
  territory: 'United States', capabilities: 'Deployment and integration',
};

describe('inquiry validation', () => {
  it('keeps an unacknowledged draft out of submission data', () => {
    const result = validateInquiry({ ...draft, consent: false });
    expect(result.inquiry).toBeNull();
    expect(result.errors.consent).toBeDefined();
  });
  it('catches an invalid optional company URL on its own step', () => {
    const result = validateInquiry({ ...draft, companyWebsite: 'invalid' }, partnerStepFields[1]);
    expect(result.errors.companyWebsite).toBeDefined();
    expect(stepForErrors(result.errors)).toBe(1);
  });
  it('does not discard optional-field errors at final validation', () => {
    const result = validateInquiry({ ...draft, companyWebsite: 'invalid' });
    expect(result.inquiry).toBeNull();
    expect(result.errors.companyWebsite).toBeDefined();
  });
  it('allows blank optional URLs', () => {
    expect(validateInquiry({ ...draft, companyWebsite: '' }).inquiry).not.toBeNull();
  });
  it('validates fields on each early step without demanding final consent yet', () => {
    expect(validateInquiry({ ...draft, consent: false, message: '' }, partnerStepFields[0]).errors).toEqual({});
  });
  it('returns trimmed schema output, not the raw draft', () => {
    expect(validateInquiry({ ...draft, name: '  Test User  ' }).inquiry?.name).toBe('Test User');
  });
  it('rejects a populated bot trap', () => {
    expect(validateInquiry({ ...draft, website: 'spam' }).inquiry).toBeNull();
  });
  it('requires a usable phone number on every inquiry', () => {
    expect(validateInquiry({ ...draft, phone: '' }).errors.phone).toBeDefined();
    expect(validateInquiry({ ...draft, phone: 'abc' }).errors.phone).toBeDefined();
    expect(validateInquiry({ ...draft, phone: '123' }).errors.phone).toBeDefined();
    expect(validateInquiry({ ...draft, phone: '+972 3-557-5700' }).inquiry?.phone).toBe('+972 3-557-5700');
  });
  it('requires partner type, territory, and capabilities', () => {
    expect(validateInquiry({ ...draft, partnerType: '' }).errors.partnerType).toBeDefined();
    expect(validateInquiry({ ...draft, territory: '' }).errors.territory).toBeDefined();
    expect(validateInquiry({ ...draft, capabilities: '' }).errors.capabilities).toBeDefined();
  });
  it('routes each partner field error to its visible step', () => {
    partnerStepFields.forEach((fields, step) => {
      fields.forEach((field) => {
        expect(stepForErrors({ [field]: 'Required' })).toBe(step);
      });
    });
  });
  it('provides human labels for every review field', () => {
    expect(inquiryFieldLabels.phone).toBe('Phone');
    expect(inquiryFieldLabels.partnerType).toBe('Partner type');
    expect(inquiryFieldLabels.companyWebsite).toBe('Company website');
    expect(Object.values(inquiryFieldLabels).every(label => /^[A-Z]/.test(label))).toBe(true);
  });
  it('does not require partner fields on a sales inquiry', () => {
    const sales = validateInquiry({ ...draft, kind: 'sales', partnerType: '', territory: '', capabilities: '' });
    expect(sales.inquiry).not.toBeNull();
  });
  it('builds a routing note so sales inquiries do not need a typed message', () => {
    const sales = { ...draft, kind: 'sales' as const, message: '', partnerType: '', territory: '', capabilities: '' };
    expect(validateInquiry(sales).inquiry).toBeNull();
    expect(salesRoutingNote(sales)).toContain(sales.phone);
    expect(validateInquiry({ ...sales, message: salesRoutingNote(sales) }).inquiry).not.toBeNull();
  });
});

describe('submission identity', () => {
  const inquiry = inquirySchema.parse(draft);
  it('reuses an unchanged request identity across retries', () => {
    const attempts = new Map<string, string>();
    expect(submissionIdentity(attempts, inquiry, () => 'first')).toBe('first');
    expect(submissionIdentity(attempts, { ...inquiry }, () => 'second')).toBe('first');
  });
  it('uses a different identity for changed content and remembers the original', () => {
    const attempts = new Map<string, string>();
    submissionIdentity(attempts, inquiry, () => 'first');
    expect(submissionIdentity(attempts, { ...inquiry, message: 'A different deployment request.' }, () => 'second')).toBe('second');
    expect(submissionIdentity(attempts, inquiry, () => 'third')).toBe('first');
  });
});
