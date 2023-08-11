/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.w3schools.com", "www.svgrepo.com"],
  },
 env: {
  domainUrl: process.env.PROD_URL,
  mongodbUri: process.env.MONGODB_URI
}
};

module.exports = nextConfig;
