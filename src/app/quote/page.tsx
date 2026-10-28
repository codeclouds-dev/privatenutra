import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';
import QuoteForm from '@/components/QuoteForm';
export const metadata=pageMetadata('Get a Quote','Tell us about your supplement, formula and packaging needs. Speak with Private Label Nutra about your next product.','/quote');
export default function Quote(){return <><Header/><main id="main" className="quote-page" tabIndex={-1}><h1>Tell us what you<br/>want to make.</h1><p className="intro">Bring your formula, artwork, or just an idea. We’ll help you work through your product and packaging requirements.</p><p className="contact-hours">Prefer to talk? <a className="text-link" href={site.phoneHref}>{site.phone}</a><br/>{site.hours}. {site.closed}.</p><QuoteForm/></main><Footer/></>}
