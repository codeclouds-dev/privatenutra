import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { OrganizationData } from '@/components/StructuredData';
import { siteOrigin, shareImage } from '@/lib/metadata';
import { indexingEnabled } from '@/lib/deployment';
const sans = localFont({ src: '../../public/fonts/InstrumentSans-VF-latin.woff2', display: 'swap', variable: '--font-sans' });
export const metadata: Metadata = { metadataBase:new URL(siteOrigin), title: 'Private Label Nutra | Your Brand. Our Expertise.', description: 'Private label energy shots and co-packing for liquid shots, powders, capsules and tablets. Speak with Private Label Nutra about your next product.', robots: { index: indexingEnabled, follow: indexingEnabled }, openGraph: { type: 'website', siteName: 'Private Label Nutra', images: [shareImage] }, twitter: { card: 'summary_large_image', images: [shareImage.url] } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body className={sans.variable}><a className="skip" href="#main">Skip to content</a><OrganizationData/>{children}</body></html>; }
