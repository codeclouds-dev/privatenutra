import { imagery } from '@/content/imagery';
import Image from 'next/image';
import PageShell, { PageIntro } from '@/components/PageShell';
import TrustStrip from '@/components/TrustStrip';
import { site, quoteHref } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('About Our Manufacturing', 'We are manufacturers, not middlemen or brokers. Eight years of manufacturing and packaging, made in the USA.', '/about');
export default function AboutPage(){return <PageShell>
  <div className="about-opening"><PageIntro eyebrow="" title={<>Manufacturers.<br/><em>Not middlemen.</em></>}>We are Private Label Nutra, a US supplement manufacturer with eight years in business. Work directly with the people who make and pack your product, from your first idea to the finished goods.</PageIntro><figure className="about-plant"><Image src={imagery.facility} alt="Stainless filling equipment in a clean liquid-shot production environment" width={1600} height={900} sizes="(max-width:800px) 88vw, 40vw" preload/></figure></div>
  <TrustStrip/>
  <section className="information-section about-contact" aria-labelledby="about-contact-heading"><div><h2 id="about-contact-heading">Your idea.<br/>Our production floor.</h2><p className="reading-copy">Bring your formula or use ours. Send your artwork or ask us to create it. From liquid shots to powder, capsule and tablet formats, we’ll discuss what your product needs.</p><a className="button section-action" href={quoteHref}>Get a Quote</a></div><div className="contact-detail"><a className="phone" href={site.phoneHref}>{site.phone}</a></div></section>
</PageShell>}
