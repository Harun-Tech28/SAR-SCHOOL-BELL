"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileHeader } from "@/components/mobile-header"
import { MobileMenu } from "@/components/mobile-menu"
import { Dashboard } from "@/components/dashboard"
import { Timetable } from "@/components/timetable"
import { Students } from "@/components/students"
import { CallStudent } from "@/components/call-student"
import { Announcements } from "@/components/announcements"
import { Devices } from "@/components/devices"
import { Logs } from "@/components/logs"
import { Settings } from "@/components/settings"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "timetable":
        return <Timetable />
      case "students":
        return <Students />
      case "call-student":
        return <CallStudent />
      case "announcements":
        return <Announcements />
      case "devices":
        return <Devices />
      case "logs":
        return <Logs />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar - hidden on mobile */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Mobile Header - shown only on mobile */}
      <MobileHeader
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        isMenuOpen={mobileMenuOpen}
        currentPage={currentPage}
      />
      
      {/* Mobile Menu - full screen overlay */}
      <MobileMenu
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      
      {/* Main content area */}
      <main className="flex-1 overflow-auto pt-16 lg:pt-0">{renderPage()}</main>
    </div>
  )
}
