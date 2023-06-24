const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ['picsum.photos']
   }
}

module.exports = withContentlayer(nextConfig)
