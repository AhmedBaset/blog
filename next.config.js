const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      domains: ['picsum.photos', "github.com"
   ]
   }
}

module.exports = withContentlayer(nextConfig)
