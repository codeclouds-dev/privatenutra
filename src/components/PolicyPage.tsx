import PageShell, { PageIntro } from './PageShell';
import { site } from '@/content/site';
export default function PolicyPage({ title, intro, sections }: { title: string; intro: string; sections: readonly { title: string; text: string }[] }) {
  return <PageShell><article className="policy-page"><PageIntro eyebrow="" title={title}>{intro}</PageIntro>{sections.map(section=><section className="policy-section" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}<section className="policy-section"><h2>Contact Private Label Nutra</h2><a className="phone" href={site.phoneHref}>{site.phone}</a></section></article></PageShell>;
}
