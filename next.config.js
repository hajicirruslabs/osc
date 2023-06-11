/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  exprimental: {
    forceSwcTransforms: true,
    styledComponents: true,
  },
};

module.exports = nextConfig;
