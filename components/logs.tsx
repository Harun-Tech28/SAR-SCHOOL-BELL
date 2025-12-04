"use client"

import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

export function Logs() {
  const { callRequests, timetables, clearCallRequests } = useStore()

  const logs = [
    ...timetables.map((tt) => ({
      id: tt.id,
      type: "bell",
      message: `${tt.name} triggered`,
      timestamp: new Date().toISOString(),
      status: "success",
    })),
    ...callRequests.map((cr) => ({
      id: cr.id,
      type: "student-call",
      message: cr.message,
      timestamp: cr.timestamp,
      status: cr.status,
    })),
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  const handleClearLogs = () => {
    if (window.confirm("Are you sure you want to clear all logs? This cannot be undone.")) {
      clearCallRequests()
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Logs & Reports</h1>
          <p className="text-foreground/60">Activity history and system events</p>
        </div>
        {logs.length > 0 && (
          <Button onClick={handleClearLogs} className="bg-red-600 hover:bg-red-700 text-white gap-2">
            <Trash2 className="w-4 h-4" />
            Clear All Logs
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <p className="text-foreground/60 text-center py-8">No activity yet</p>
          ) : (
            <div className="space-y-3">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="flex justify-between items-start pb-3 border-b border-border last:border-b-0"
                >
                  <div>
                    <div className="text-sm font-semibold text-foreground capitalize">
                      {log.type === "bell" ? "Bell" : "Student Call"}
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">{log.message}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        log.status === "success" || log.status === "played"
                          ? "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200"
                      }`}
                    >
                      {log.status}
                    </span>
                    <p className="text-xs text-foreground/50 mt-1">{new Date(log.timestamp).toLocaleTimeString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
