import { Brand } from './Header';
import { site } from '@/content/site';
export default function Footer() {
  return <footer><div className="footer-top"><Brand/><div className="footer-hours"><address>{site.address.streetAddress}<br/>{site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</address><p>{site.hours}<br/>{site.closed}</p></div><div className="footer-sales"><a className="phone" href={site.phoneHref}>{site.phone}</a></div></div><div className="footer-bottom"><span>© 2026 Private Label Nutra. All rights reserved.</span><nav className="footer-links" aria-label="Footer"><a href="/#services">Services</a><a href="/products">Products</a><a href="/quality">Quality</a><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></nav></div></footer>;
}
