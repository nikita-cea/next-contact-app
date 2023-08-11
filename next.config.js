/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.w3schools.com", "www.svgrepo.com"],
  },
 env: {
  domainUrl: process.env.DEV_URL,
  mongodbUri: process.env.MONGODB_URI
}
};

module.exports = nextConfig;
