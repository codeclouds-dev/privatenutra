import type { Metadata } from 'next';
import { indexingEnabled } from './deployment';

// Existing official domain; hosting can override this origin at build time.
const configured = new URL(process.env.SITE_URL || 'https://www.privatelabelnutra.com');
if (!['https:', 'http:'].includes(configured.protocol) || configured.pathname !== '/' || configured.search || configured.hash || configured.username || configured.password) {
  throw new Error('SITE_URL must be an HTTP(S) origin with no credentials, path, query or fragment.');
}
export const siteOrigin = configured.origin;
// Render supplies its public preview URL at build/runtime; production keeps its canonical domain.
// https://render.com/docs/environment-variables#render_external_url
const shareOrigin = !indexingEnabled && process.env.RENDER_EXTERNAL_URL ? new URL(process.env.RENDER_EXTERNAL_URL).origin : siteOrigin;
export const shareImage = { url: new URL('/images/pln-share-v1.png', shareOrigin).toString(), width: 1200, height: 630, alt: 'Private Label Nutra — Your brand. Made in the USA.' };
export const absoluteUrl = (path = '/') => new URL(path, siteOrigin).toString();
export function pageMetadata(title: string, description: string, path: string, index = true): Metadata {
  const fullTitle = `${title} | Private Label Nutra`;
  return {
    title: fullTitle, description, alternates: { canonical: absoluteUrl(path) },
    robots: { index: index && indexingEnabled, follow: indexingEnabled },
    openGraph: { type: 'website', title: fullTitle, description, url: absoluteUrl(path), siteName: 'Private Label Nutra', images: [shareImage] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [shareImage.url] },
  };
}
