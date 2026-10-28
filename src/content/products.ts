import { imagery } from './imagery';
// Portfolio scope: docs/planning/coverage-map.json. Product/flavor sources: client
// PDF pp.3–5 and approved front labels. No consumer efficacy claims are inferred.
export const products = [
  {
    id: 'energy-shot', name: 'Energy Shot',
    image: imagery.energy, imageWidth: 1536, imageHeight: 1024,
    imageAlt: 'Energy Shot Fruit Punch, Grape and Blue Raspberry bottles in a clean lab setting', shownFlavor: 'Fruit Punch, Grape and Blue Raspberry',
    flavors: ['Fruit Punch', 'Grape', 'Blue Raspberry', 'Cherry Limeade', 'Mixed Berry', 'Pomegranate'],
    description: 'Private label energy shots as low as $0.65 per bottle. Explore six flavors and talk to our team about your label and packaging requirements.',
    quoteType: 'white-label', quoteLabel: 'Discuss Energy Shots',
  },
  {
    id: 'b12-overload', name: 'B12 Overload',
    image: imagery.b12, imageWidth: 1536, imageHeight: 1024,
    imageAlt: 'B12 Overload Grape, Mixed Berry and Pomegranate bottles in a clean lab setting', shownFlavor: 'Grape, Mixed Berry and Pomegranate',
    flavors: ['Grape', 'Mixed Berry', 'Pomegranate'],
    description: 'One of the liquid-shot products we produce, with three flavors in a compact bottle and counter-display format.',
    quoteType: 'custom', quoteLabel: 'Discuss Liquid Shots',
  },
  {
    id: '8-hour-sleep', name: '8 Hour Sleep',
    image: imagery.sleep, imageWidth: 1536, imageHeight: 1024,
    imageAlt: 'Front-facing 8 Hour Sleep Mango, Mixed Berry and Strawberry Lemonade bottles', shownFlavor: 'Mango, Mixed Berry and Strawberry Lemonade',
    // Appendix/file shorthand is Strawberry; the approved front label says
    // Strawberry Lemonade. Regenerated photography remains strictly front-facing.
    flavors: ['Mango', 'Mixed Berry', 'Strawberry Lemonade'],
    description: 'A three-flavor liquid-shot product in a compact bottle and counter-display format. Speak with our team about your liquid-shot project.',
    quoteType: 'custom', quoteLabel: 'Discuss Liquid Shots',
  },
] as const;
