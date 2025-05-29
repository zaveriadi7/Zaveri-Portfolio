/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   turbopack: true,
  // },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
