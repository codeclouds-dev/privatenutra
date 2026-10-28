
import type { NextConfig } from 'next';
import { indexingEnabled } from './src/lib/deployment';

const config: NextConfig = {
  output: 'export',

  reactStrictMode: true,
  poweredByHeader: false,

  async redirects() {
    // The PDF requests 301 explicitly.
    // Static export does not support Next.js redirects.
    return [];
  },

  async headers() {
    // Static export does not support Next.js headers.
    return [];
  },
};

export default config;
