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
  // Leave empty if deploying to custom domain or username.github.io
  basePath: '/SAR-SCHOOL-BELL',


}

export default nextConfig
