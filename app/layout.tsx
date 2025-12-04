import type React from "react"
// ... existing code ...
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { PWAInit } from "@/components/pwa-init"
import { OfflineIndicator } from "@/components/offline-indicator"
import "./globals.css"

export const metadata: Metadata = {
  // SAR Educational Complex Bell System
  title: "SAR Educational Complex Bell System",
  description: "Automated school bell and announcement system for SAR Educational Complex - Nurturing Minds And Hearts",
  generator: "v0.app",
  applicationName: "SAR Bell System",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SAR Bells",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        url: "/icon-512x512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#DC2626" },
    { media: "(prefers-color-scheme: dark)", color: "#DC2626" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SAR Bells" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans antialiased`}>
        <PWAInit />
        <OfflineIndicator position="top" showWhenOnline={true} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
