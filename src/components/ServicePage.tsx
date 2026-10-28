import Image from 'next/image';
import PageShell, { PageIntro } from './PageShell';
import TrustStrip from './TrustStrip';
import Certifications from './Certifications';
import QuoteForm from './QuoteForm';
import { ServiceData } from './StructuredData';
import { services, type ManufacturingService } from '@/content/services';
import './manufacturing-pages.css';

export default function ServicePage({ service }: { service: ManufacturingService }) {
  const productType = service.id === 'energy' ? 'White label' : service.id === 'blister' ? 'Blister' : 'Custom';
  const formats = <ul className="service-format-labels" aria-label="Service formats">{service.chips.map(chip => <li key={chip}>{chip}</li>)}</ul>;
  return <PageShell>
    <ServiceData/>
    <div className="service-page-opening">
      <div><PageIntro eyebrow="Manufacturing & packaging" title={service.title}>{service.intro}</PageIntro>
        {service.sqf ? <div className="service-format-row">{formats}<Certifications liquidOnly/></div> : formats}
        <ul className="service-inclusions">{service.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        {service.id === 'energy' && <a className="text-link" href="/products">Explore our ready formulas</a>}
      </div>
      <figure className={`service-page-figure${service.id === 'liquid' ? ' production-still' : ''}`}><Image src={service.image} alt={service.imageAlt} width={service.width} height={service.height} sizes="(max-width:800px) 88vw, 43vw" preload/></figure>
    </div>
    <TrustStrip/>
    <section className="service-quote" aria-labelledby="service-quote-heading"><h2 id="service-quote-heading">Tell us about your project.</h2><QuoteForm initialProductType={productType} service={service.name}/></section>
    <nav className="other-services" aria-label="Other manufacturing services"><h2>Other services</h2>{services.filter(other => other.id !== service.id).map(other => <a className="text-link" key={other.id} href={other.href}>{other.name}<span aria-hidden="true">↗</span></a>)}</nav>
  </PageShell>;
}
