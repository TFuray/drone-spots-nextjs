/**
 * @type { import("next").NextConfig }
 */
module.exports = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  future: {
    webpack5: true
  }
}
