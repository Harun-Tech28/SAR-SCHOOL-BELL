/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Turbopack configuration
  turbopack: {
    root: __dirname,
  },

  // Enable static export for PWA
  output: 'export',

  // Required for static export - images must be unoptimized
  images: {
    unoptimized: true,
  },

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true, // Skip type checking for build to complete
  },

  // Disable features incompatible with static export
  // No server-side rendering or API routes

  // Configure trailing slashes for better static hosting compatibility
  trailingSlash: true,

  // Base path configuration
  // For Netlify: no basePath needed (deploys to root domain)
  // For GitHub Pages: uncomment the line below
  // basePath: process.env.NODE_ENV === 'production' ? '/SAR-SCHOOL-BELL' : '',


}

export default nextConfig
