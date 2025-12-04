"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileHeaderProps {
  onMenuToggle: () => void
  isMenuOpen: boolean
  currentPage: string
}

const pageNames: Record<string, string> = {
  dashboard: "Dashboard",
  timetable: "Timetables",
  "call-student": "Call Student",
  students: "Students",
  announcements: "Announcements",
  devices: "Devices",
  logs: "Logs & Reports",
  settings: "Settings",
}

export function MobileHeader({ onMenuToggle, isMenuOpen, currentPage }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border lg:hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          <div>
            <h1 className="text-lg font-bold text-foreground">SchoolBell</h1>
            <p className="text-xs text-foreground/60">{pageNames[currentPage] || "Dashboard"}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
