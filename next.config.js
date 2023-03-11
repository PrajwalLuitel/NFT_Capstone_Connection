/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["capstone-project.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;