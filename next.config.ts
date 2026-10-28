import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  // Note: redirects() and headers() are removed because they don't run in a static export.
};

export default config;