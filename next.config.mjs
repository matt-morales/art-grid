/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Opt into Turbopack builds
      // run: `next build --turbopack` for faster builds
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};
export default nextConfig;
