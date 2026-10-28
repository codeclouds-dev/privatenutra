/** Contact provenance: https://www.privatelabelnutra.com/ — checked 2026-10-22.
 * Hours are reproduced as published. The current site does not specify a timezone.
 * Round-three owner confirmation supplies the current certification facts.
 */
export const site = {
  name: 'Private Label Nutra',
  phone: '800-259-4544',
  telephone: '+1-800-259-4544',
  phoneHref: 'tel:8002594544',
  hours: 'Monday–Friday, 8am–5pm',
  closed: 'Saturday & Sunday closed',
  address: { streetAddress: '3 N Colonial Avenue', addressLocality: 'Wilmington', addressRegion: 'DE', postalCode: '19805', addressCountry: 'US' },
};

export { services } from './services';

export const productionTerms: { minimumOrder: string | null; leadTime: string | null } = {
  // Publish only ownership-confirmed values, with service scope and units.
  minimumOrder: null,
  leadTime: null,
};

/** Confirmed by the owner on 2026-10-26; shared by forms and confirmation. */
export const replyTime = 'We reply within 1 business day.';
export const quoteHref = '/quote?type=private-label';
