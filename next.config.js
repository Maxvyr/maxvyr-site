/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    AIRTABLE_API_KEY: 'my-value',
  },
};

module.exports = nextConfig;
