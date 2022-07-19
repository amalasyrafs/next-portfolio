/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    BASE_URL: "http://localhost:1337",
  },
};

module.exports = nextConfig;
