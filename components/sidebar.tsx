"use client"

import { Bell, Users, Megaphone, Wifi, FileText, Settings, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Bell },
    { id: "timetable", label: "Timetables", icon: Clock },
    { id: "call-student", label: "Call Student", icon: Phone },
    { id: "students", label: "Students", icon: Users },
    { id: "announcements", label: "Announcements", icon: Megaphone },
    { id: "devices", label: "Devices", icon: Wifi },
    { id: "logs", label: "Logs & Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside className="hidden lg:block w-64 bg-sidebar border-r border-sidebar-border p-6 overflow-y-auto">
      <div className="mb-8 text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full p-2 shadow-lg">
            <img 
              src="/sar-logo.png" 
              alt="SAR Educational Complex" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>
        <h1 className="text-xl font-bold text-sidebar-foreground">SAR Educational Complex</h1>
        <p className="text-sm text-sidebar-foreground/80 font-medium mt-1">Bell System</p>
        <p className="text-xs text-sidebar-foreground/60 mt-1 italic">Nurturing Minds And Hearts</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                isActive && "bg-sidebar-primary text-sidebar-primary-foreground",
              )}
              onClick={() => setCurrentPage(item.id)}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Button>
          )
        })}
      </nav>
    </aside>
  )
}
