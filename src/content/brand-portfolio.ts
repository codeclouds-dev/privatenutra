/** Client brand examples received 2026-10-26. Background edits use the supplied
 * product photos. Sources and prompts are retained under assets/client and
 * assets/generated/brand-portfolio-v1. These are manufacturing examples.
 */
export const brandPortfolio = [
  { id: 'e6', name: 'e6', detail: 'Berry, Peach, Grape and Fruit Punch', group: true, alt: 'Four e6 Energy Shot bottles in Berry, Peach, Grape and Fruit Punch packaging' },
  { id: 'zap', name: 'ZAP', detail: 'Power Shot · Four packaging examples', group: true, alt: 'Four ZAP Power Shot bottles, including the Australian flag sleeve' },
  { id: 'kabam', name: 'KABAM', detail: 'Energy Shot · Mojito', group: false, alt: 'Black KABAM Mojito shot bottle with its green label' },
  { id: 'joe-cool', name: 'Joe Cool', detail: 'Double Espresso', group: false, alt: 'Joe Cool Double Espresso bottle with its coffee-themed sleeve' },
  { id: 'fit-fuel', name: 'FitFuel', detail: 'TurboShot · Natural Mixed Berry', group: false, alt: 'Red FitFuel TurboShot bottle in Natural Mixed Berry packaging' },
  // Use the clearly legible product name instead of guessing the stylized
  // vertical wordmark. The photo remains the authority for the brand artwork.
  { id: 'brain-boost', name: 'Brain Boost', detail: 'Blue Raspberry', group: false, alt: 'Cyan and white Brain Boost Blue Raspberry bottle with gear artwork' },
  { id: 'night-shift', name: 'Night Shift', detail: 'After Shift', group: false, alt: 'Night Shift After Shift bottle with its black and red sleeve' },
  { id: '6-hour-sleep', name: '6 Hour Sleep', detail: 'Liquid shot', group: false, alt: 'Yellow and violet 6 Hour Sleep bottle with the clock-shaped number six' },
  { id: 'hit-me', name: 'Hit Me', detail: 'Berry', group: false, alt: 'Hit Me Berry shot bottle with its red poker-chip artwork and green cap' },
  { id: 'dop', name: 'DOP', detail: 'Men’s Power Shot', group: false, alt: 'Black DOP Men’s Power Shot bottle with red and white lettering' },
].map(brand => ({ ...brand, image: `/images/brand-portfolio-v1/${brand.id}.webp` }));
