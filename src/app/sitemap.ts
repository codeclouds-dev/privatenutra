import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/metadata';
import { services } from '@/content/services';
import { policyCopyApproved } from '@/content/policies';
import { indexingEnabled } from '@/lib/deployment';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) return [];
  const paths = ['/', ...services.map(service => service.href), '/products', '/quality', '/about', '/quote'];
  // Accepted policies join the public sitemap when production indexing is enabled.
  if (policyCopyApproved) paths.push('/privacy', '/terms');
  return paths.map(path=>({url:absoluteUrl(path)}));
}
