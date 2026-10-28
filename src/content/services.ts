import { imagery } from './imagery';

/** Four services and exact page map from the round-three client PDF. */
export const services = [
  {
    id: 'energy', slug: 'private-label-energy-shots', href: '/private-label-energy-shots',
    name: 'Private Label Energy Shots', title: 'Private label energy shots, from $0.65 a bottle.',
    seoTitle: 'Private Label Energy Shots From $0.65',
    description: 'Private label (white label) energy shots, made for your brand. Use our ready formulas or bring your own.',
    intro: 'Use our ready formulas and add your label, or bring your own formula. We make, pack and ship your private label (white label) energy shots.',
    chips: ['Ready formulas', 'Your own formula'],
    bullets: ['Use our ready formulas: choose from six flavors and add your label.', 'Bring your own formula: tell us the product you want to make.', '1.93 FL OZ (57 mL) bottles with a full shrink-sleeve label.'],
    image: imagery.energy, width: 1536, height: 1024,
    imageAlt: 'Energy Shot bottles in Fruit Punch, Grape and Blue Raspberry packaging', sqf: true,
  },
  {
    id: 'liquid', slug: 'liquid-shot-co-packing', href: '/liquid-shot-co-packing',
    name: 'Liquid Shot Co-Packing', title: 'Liquid shot co-packing. Bring your formula, we fill and ship.',
    seoTitle: 'Liquid Shot Co-Packing',
    description: 'Bring your formula, we fill and ship. Filling, shrink-sleeve labeling and packing on our liquid line.',
    intro: 'Bring your formula and packaging requirements. Our liquid line has capacity for 200,000 shots a week.',
    chips: ['Filling', 'Labeling', 'Packing'],
    bullets: ['Liquid-shot filling on our production line.', 'Full shrink-sleeve labeling for your brand.', 'Packing and shipping, with capacity for 200,000 shots a week.'],
    image: '/motion/factory/01-filling-poster.jpg', width: 576, height: 1024,
    imageAlt: 'The liquid-shot filling line with bottles moving under the filling heads', sqf: true,
  },
  {
    id: 'packing', slug: 'powders-capsules-tablets', href: '/powders-capsules-tablets',
    name: 'Powders, Capsules and Tablets', title: 'Powders, capsules and tablets, made to your formula.',
    seoTitle: 'Powders, Capsules and Tablets Manufacturing',
    description: 'Tell us your formula and format. We make it and pack it.',
    intro: 'Tell us your formula and format. We make it and pack it.',
    chips: ['Powders', 'Capsules', 'Tablets'],
    bullets: ['Manufacturing to your formula and chosen format.', 'Packaging requirements planned around your product.', 'Your finished powders, capsules or tablets, made and packed.'],
    image: imagery.formats, width: 1536, height: 1024,
    imageAlt: 'Powder, capsules and tablets on a clean work surface', sqf: false,
  },
  {
    id: 'blister', slug: 'blister-packaging', href: '/blister-packaging',
    name: 'Blister Packaging', title: 'Custom blister packaging for capsules, tablets and gummies.',
    seoTitle: 'Custom Blister Packaging for Supplements',
    description: 'Single-dose packaging and 1–4 count hanging retail cards for capsules, tablets and gummies.',
    intro: 'Tell us your product and the count you need per pack. We work through your single-dose or hanging-card packaging requirements with you.',
    chips: ['Single-dose', '1–4 count hanging cards'],
    bullets: ['Single-dose blister packaging for your product.', 'Hanging retail cards with one to four units.', 'Pack format and artwork planned around your retail requirements.'],
    image: imagery.blister, width: 1536, height: 1024,
    imageAlt: 'Single-count and four-count hanging blister cards', sqf: false,
  },
] as const;

export type ManufacturingService = typeof services[number];
