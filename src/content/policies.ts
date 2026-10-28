/** Owner accepted the round-three PDF direction (change A.2) on 2026-10-26.
 * Copy covers known contact fields and manufacturing workflow without adding
 * unconfirmed retention, third-party or jurisdiction promises.
 */
export const policyCopyApproved = true;
export const privacySections = [
  { title: 'Information you provide', text: 'When you contact Private Label Nutra, you may provide your name, email address, phone number and project details. Optional project information can include your company, product type, estimated quantity, target launch date, formula and artwork requirements.' },
  { title: 'How inquiry information is used', text: 'The information you provide is used to respond to your inquiry and discuss your product, formula, packaging and quote requirements.' },
  { title: 'Questions about your information', text: 'Contact our team using the phone number below with questions about information you have provided to Private Label Nutra.' },
] as const;
export const termsSections = [
  { title: 'Manufacturing information', text: 'This website introduces Private Label Nutra’s manufacturing and packaging services. Contact our team to discuss the requirements for your particular product and format.' },
  { title: 'Pricing and project details', text: 'The advertised starting price applies to private label energy shots. Confirm the formula, packaging, quantity, pricing and production requirements for your project with our team.' },
  { title: 'Product and brand examples', text: 'Product images show examples of our manufacturing work. Contact our team to discuss your own formula, label and packaging requirements.' },
] as const;
