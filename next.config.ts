import type { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/lux-venit',
  }),
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
}

export default nextConfig
