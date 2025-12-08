"use client"

import React from "react"
import dynamic from "next/dynamic"
import { OfflineIndicator } from "@/components/offline-indicator"

// Dynamically import components with ssr: false
const PWAInit = dynamic(
    () => import("@/components/pwa-init").then((mod) => mod.PWAInit),
    { ssr: false }
)
const AutoScheduleBells = dynamic(
    () => import("@/components/auto-schedule-bells").then((mod) => mod.AutoScheduleBells),
    { ssr: false }
)
const ElectronInit = dynamic(
    () => import("@/components/electron-init").then((mod) => mod.ElectronInit),
    { ssr: false }
)

export function AppInit() {
    return (
        <>
            <PWAInit />
            <ElectronInit />
            <AutoScheduleBells />
            <OfflineIndicator position="top" showWhenOnline={true} />
        </>
    )
}
