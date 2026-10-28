import Image from 'next/image';
import PageShell, { PageIntro } from '@/components/PageShell';
import Certifications from '@/components/Certifications';
import { imagery } from '@/content/imagery';
import { publishedCertificates, sqfCertificate } from '@/content/quality';
import { quoteHref } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('SQF Certified Supplement Manufacturer', 'SQF Certified for liquid dietary supplements. FDA Registered Facility, Kosher and GMP. Request certification documentation from Private Label Nutra.', '/quality');
export default function QualityPage(){return <PageShell>
  <PageIntro eyebrow="" title={<>SQF certified.<br/><em>FDA-registered. Kosher. GMP.</em></>}>Manufacturing credentials for your next product. Our SQF certification covers liquid dietary supplements.</PageIntro>
  <Certifications/>
  <div className="quality-certification-layout">
    <figure><Image src={imagery.facility} alt="Stainless filling equipment in a clean liquid-shot production environment" width={1600} height={900} sizes="(max-width:800px) 88vw, 53vw"/></figure>
    <div><p className="eyebrow">Liquid dietary supplements</p><h2>Certification documentation.</h2><p className="reading-copy">SQF certificate {sqfCertificate.number}, valid to October 25, 2027.</p>
      {publishedCertificates.length > 0 && <ul className="document-list">{publishedCertificates.map(c => <li key={c.kind}><a href={c.href} download>{c.title}<span>{c.format} · Download</span></a></li>)}</ul>}
      <a className="button section-action" href={quoteHref}>Request certificates</a>
    </div>
  </div>
</PageShell>}
