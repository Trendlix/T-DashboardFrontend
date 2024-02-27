/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'banner2.cleanpng.com',
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
          }
        ],
      },
}

module.exports = nextConfig
