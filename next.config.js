/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "github.githubassets.com", 
      "i.imgur.com", 
    ],
  },
  // env: {
  //   AIRTABLE_API_KEY: '',
  // },
};

module.exports = nextConfig;
