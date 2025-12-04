"use client"

import { useEffect, useState } from "react"

/**
 * Custom hook to detect media query matches
 * @param query - CSS media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return

    const media = window.matchMedia(query)
    
    // Set initial value
    setMatches(media.matches)

    // Create listener for changes
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    
    // Add listener (using deprecated addListener for broader compatibility)
    if (media.addEventListener) {
      media.addEventListener("change", listener)
    } else {
      // Fallback for older browsers
      media.addListener(listener)
    }

    // Cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [query])

  return matches
}
