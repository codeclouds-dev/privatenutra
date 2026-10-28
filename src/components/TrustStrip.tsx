/** Owner-confirmed manufacturing facts; certification scope is shown separately. */
export default function TrustStrip() {
  return <ul className="trust-strip" aria-label="Manufacturing at a glance">
    <li><strong>8 years</strong><span>in business</span></li>
    <li><strong>Made in the USA</strong><span>Wilmington, DE</span></li>
    <li><strong>200,000 shots a week</strong><span>Liquid line · ~10M/year capacity</span></li>
    <li><strong>150+ SKUs</strong><span>produced</span></li>
  </ul>;
}
