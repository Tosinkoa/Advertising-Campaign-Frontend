/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
