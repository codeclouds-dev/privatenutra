import type { NextConfig } from 'next';
import { indexingEnabled } from './src/lib/deployment';
const config: NextConfig = {
  reactStrictMode: true, poweredByHeader: false, agentRules: false,
  async redirects() {
    // The PDF requests 301 explicitly (Next's permanent:true would emit 308).
    return [{ source: '/services', destination: '/#services', statusCode: 301 }];
  },
  async headers() {
    return indexingEnabled ? [] : [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
};
export default config;
