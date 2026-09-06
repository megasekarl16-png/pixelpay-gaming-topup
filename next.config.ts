import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export',
        assetPrefix: '/pixelpay-gaming-topup',
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
