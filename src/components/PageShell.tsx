import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import './explore.css';

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return <div className="page-intro">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p className="intro">{children}</p></div>;
}
export function SectionLinks({ links }: { links: readonly { label: string; id: string }[] }) {
  return <nav className="section-links" aria-label="On this page">{links.map(link=><a href={`#${link.id}`} key={link.id}>{link.label}</a>)}</nav>;
}
export default function PageShell({ children }: { children: ReactNode }) {
  return <><Header/><main id="main" tabIndex={-1}><div className="explore-page">{children}</div></main><Footer/></>;
}
