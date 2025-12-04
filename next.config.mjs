/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for PWA
  output: 'export',

  // Required for static export - images must be unoptimized
  images: {
    unoptimized: true,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false, // Enable type checking for production
  },

  // Disable features incompatible with static export
  // No server-side rendering or API routes

  // Configure trailing slashes for better static hosting compatibility
  trailingSlash: true,

  // Base path for GitHub Pages (if deploying to username.github.io/repo-name)
  // Only apply in production to ensure localhost works at root
  basePath: process.env.NODE_ENV === 'production' ? '/SAR-SCHOOL-BELL' : '',


}

export default nextConfig
