"use client"

import { Bell, Users, Megaphone, Wifi, FileText, Settings, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileMenuProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ currentPage, setCurrentPage, isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Bell, description: "Overview & Stats" },
    { id: "timetable", label: "Timetables", icon: Clock, description: "Bell Schedules" },
    { id: "call-student", label: "Call Student", icon: Phone, description: "Student Announcements" },
    { id: "students", label: "Students", icon: Users, description: "Student Database" },
    { id: "announcements", label: "Announcements", icon: Megaphone, description: "Public Announcements" },
    { id: "devices", label: "Devices", icon: Wifi, description: "Connected Devices" },
    { id: "logs", label: "Logs & Reports", icon: FileText, description: "System Logs" },
    { id: "settings", label: "Settings", icon: Settings, description: "System Configuration" },
  ]

  const handlePageSelect = (pageId: string) => {
    setCurrentPage(pageId)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Full-screen menu overlay */}
      <div className="fixed inset-0 z-50 bg-background lg:hidden">
        {/* Menu content with padding for header */}
        <div className="pt-20 pb-6 px-4 h-full overflow-y-auto">
          {/* App branding */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-1">SchoolBell</h2>
            <p className="text-sm text-foreground/60">Automation System</p>
          </div>

          {/* Menu grid - shows all pages clearly */}
          <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageSelect(item.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all",
                    "min-h-[120px] text-center",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                      : "bg-card text-card-foreground border-border hover:border-primary/50 hover:shadow-md active:scale-95"
                  )}
                >
                  <Icon className={cn("w-8 h-8 mb-3", isActive ? "text-primary-foreground" : "text-primary")} />
                  <span className="font-semibold text-sm mb-1">{item.label}</span>
                  <span className={cn("text-xs", isActive ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {item.description}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Footer info */}
          <div className="mt-8 text-center text-xs text-muted-foreground">
            <p>Tap any option to navigate</p>
          </div>
        </div>
      </div>
    </>
  )
}
