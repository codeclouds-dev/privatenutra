import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/metadata';
import { indexingEnabled } from '@/lib/deployment';
export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) return { rules: { userAgent: '*', disallow: '/' } };
  const excluded = ['/motion-study','/motion/hero-v1.mp4','/images/hero-scene-v1.webp'];
  return {rules:[{userAgent:'*',allow:'/',disallow:excluded},{userAgent:['GPTBot','PerplexityBot','ClaudeBot','Google-Extended'],allow:'/',disallow:excluded}],sitemap:absoluteUrl('/sitemap.xml')};
}
