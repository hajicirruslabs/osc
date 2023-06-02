/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.glsl/,
      type: "asset/source",
    });
    config.module.rules.push({
      test: /\.(frag|vert)$/,
      type: "asset/source",
    });
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader", "glslify-loader"],
    });
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["static01.nyt.com", "operating-as-usual.vercel.app"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
  },
  exprimental: {
    forceSwcTransforms: true,
    styledComponents: true,
  },
};

module.exports = nextConfig;
