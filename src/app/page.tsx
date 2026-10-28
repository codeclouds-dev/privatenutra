import { imagery } from '@/content/imagery';
import Image from 'next/image';
import ScrollHero from '@/components/ScrollHero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatWeMake from '@/components/WhatWeMake';
import FactoryFloor from '@/components/FactoryFloor';
import QuoteForm from '@/components/QuoteForm';
import { ServiceData } from '@/components/StructuredData';
import { site, quoteHref } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = { ...pageMetadata('Private Label Supplement Manufacturer', 'Energy shots, powders, capsules and tablets, made in the USA. Bring your formula and artwork or get help with both. We make, pack and ship.', '/'), title: 'Private Label Supplement Manufacturer | Made in the USA' };
export default function Home(){return <><Header/><main id="main" tabIndex={-1}>
  <ServiceData/>
  <ScrollHero><div className="hero-copy"><p className="eyebrow">Private label nutraceutical manufacturing</p><h1>Private label supplements,<br/><em>made in the USA.</em></h1><p className="intro">Your US contract manufacturer for energy shots, powders, capsules and tablets. Bring your formula or use ours. Send your artwork or we create it. We make, pack and ship.</p><p className="price-chip">Energy shots from $0.65 a bottle</p><ul className="format-chips" aria-label="Product formats"><li>Energy shots</li><li>Powders</li><li>Capsules and tablets</li><li>Blister packs</li></ul><div className="actions"><a className="button" href={quoteHref}>Get a Quote</a></div></div></ScrollHero>
  <FactoryFloor/>
  <WhatWeMake/>
  <section className="manufacturer-story" id="about"><div><p className="eyebrow">Direct from the manufacturer</p><h2>Your brand.<br/>Our expertise.<br/>One partnership.</h2></div><div><p>We are manufacturers — not middlemen or brokers. Work directly with the people who make your product, from your first idea to the finished goods.</p></div></section>
  <figure className="cinematic-facility"><Image src={imagery.facility} alt="Stainless liquid-shot filling equipment in a clean production environment" width={1600} height={900} sizes="100vw"/></figure>
  <section id="contact" className="home-quote section" aria-labelledby="home-quote-heading">
    <ol className="how-it-works" aria-label="How it works"><li><span>1.</span> Tell us what you want to make</li><li><span>2.</span> Get your quote</li><li><span>3.</span> We make, pack and ship</li></ol>
    <div className="quote-heading"><div><p className="eyebrow">Let’s build your brand together</p><h2 id="home-quote-heading">What do you want to make?</h2><p className="reading-copy">Bring a formula, artwork, or just an idea. Tell us your format, packaging, quantity and launch plans.</p></div><div className="contact-detail"><a className="phone" href={site.phoneHref}>{site.phone}</a></div></div><QuoteForm/>
  </section>
</main><Footer/></>}
