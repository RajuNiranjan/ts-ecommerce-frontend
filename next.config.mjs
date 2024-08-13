/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*', // Matches all requests starting with /api/
        destination: 'https://localhost:5000/:path*', // Proxy these requests to an external API server
      },
    ];
  },
};

export default nextConfig;
