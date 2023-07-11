// @ts-check

const { withContentlayer } = require('next-contentlayer')
const withPWA = require("@ducanh2912/next-pwa").default({
	dest: "public",
	register: true,
	disable: process.env.NODE_ENV === "development",
	scope: "/app",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["github.com", "localhost"],
	},
}

module.exports = withContentlayer(withPWA(nextConfig))
