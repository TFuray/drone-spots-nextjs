/**
 * @type { import("next").NextConfig }
 */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  future: {
    webpack5: true
  }
}
