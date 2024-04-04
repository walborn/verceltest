/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: [ '@svgr/webpack' ],
    })
    return config
  },
}

export default nextConfig;
