/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com'
      }
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
