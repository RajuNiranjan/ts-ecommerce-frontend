/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pinimg.com', "d30b9hrf6faw09.cloudfront.net"]
  },
  webpack: (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

export default nextConfig;
