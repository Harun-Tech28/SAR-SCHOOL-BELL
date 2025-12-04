"use client"

import { useMediaQuery } from "./use-media-query"

/**
 * Breakpoint values matching Tailwind CSS defaults
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

/**
 * Custom hook to get current viewport breakpoint information
 * @returns Object with boolean flags for each breakpoint
 */
export function useViewport() {
  const isSm = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`)
  const isMd = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`)
  const isLg = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`)
  const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`)

  return {
    // Direct breakpoint checks
    isSm,
    isMd,
    isLg,
    isXl,
    
    // Semantic device type checks
    isMobile: !isLg, // < 1024px
    isTablet: isMd && !isLg, // 768px - 1023px
    isDesktop: isLg, // >= 1024px
    
    // Extra small check
    isXs: !isSm, // < 640px
  }
}
