/** Approved documents only. Files must live in public/certificates/ and be checked before publishing. */
export type Certificate = { kind: 'sqf' | 'kosher'; title: string; href: string; format: 'PDF'; approved: boolean };
// Confirmed in the round-three PDF, p.7. See assets/reference/certifications/sources.json for artwork provenance.
export const sqfRenewalConfirmed = true;
export const sqfCertificate = { number: '63348', validTo: '2027-10-25', scope: 'Liquid dietary supplements' };
export const certificationClaims = [
  { code: 'SQF', title: 'SQF Certified', detail: 'Liquid dietary supplements', artwork: '/images/certifications/sqf.webp' },
  { code: 'FDA', title: 'FDA Registered Facility', detail: 'Facility registration', artwork: '/images/certifications/fda-registration.svg' },
  { code: 'K', title: 'Kosher', detail: 'Kosher', artwork: '/images/certifications/kosher.svg' },
  { code: 'GMP', title: 'GMP', detail: 'Good Manufacturing Practices', artwork: '/images/certifications/gmp.svg' },
] as const;
export const certificates: Certificate[] = [
  { kind: 'sqf', title: 'SQF certificate 63348', href: '/certificates/sqf-certificate-63348.pdf', format: 'PDF', approved: true },
];
export const publishedCertificates = certificates.filter(c => c.approved && (c.kind !== 'sqf' || sqfRenewalConfirmed));
