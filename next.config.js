/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HASURA_URI: process.env.NEXT_PUBLIC_HASURA_URI,
    NEXT_PUBLIC_HASURA_ADMIN_KEY: process.env.NEXT_PUBLIC_HASURA_ADMIN_KEY
  }
}

module.exports = nextConfig
