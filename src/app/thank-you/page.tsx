import PageShell, { PageIntro } from '@/components/PageShell';
import { site, replyTime } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Thank You', 'Thank you for contacting Private Label Nutra.', '/thank-you', false);
/** Design destination; the handoff team routes here only after real delivery. */
export default function ThankYouPage(){return <PageShell><div className="confirmation-page"><PageIntro eyebrow="" title={<>Thanks.<br/><em>We got your request.</em></>}>{replyTime}</PageIntro><p>Prefer to speak with us?</p><a className="phone" href={site.phoneHref}>{site.phone}</a></div></PageShell>;}
