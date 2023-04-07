/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL
  },
  images: {
    remotePatterns: [{
     protocol: 'https',
     hostname: 'apod.nasa.gov'
    }]
  }
}

module.exports = nextConfig
