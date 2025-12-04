"use client"

import type React from "react"

import { useState } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wifi, WifiOff, Plus, Trash2 } from "lucide-react"

export function Devices() {
  const { devices, addDevice, removeDevice } = useStore()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    type: "esp32" as const,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name) return

    addDevice({
      id: Date.now().toString(),
      name: formData.name,
      type: formData.type,
      status: "online",
      lastSeen: new Date().toISOString(),
    })

    setFormData({ name: "", type: "esp32" })
    setShowForm(false)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Devices</h1>
          <p className="text-foreground/60">Manage speakers and hardware devices</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <Plus className="w-4 h-4" />
          Add Device
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Device Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Office Speaker"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Device Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  className="w-full p-2 border border-border rounded-lg bg-background"
                >
                  <option value="esp32">ESP32 + DFPlayer</option>
                  <option value="raspberry-pi">Raspberry Pi</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                  Add Device
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {devices.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="pt-6 text-center text-foreground/60">No devices paired yet.</CardContent>
          </Card>
        ) : (
          devices.map((device) => (
            <Card key={device.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{device.name}</h3>
                    <p className="text-xs text-foreground/60 capitalize">{device.type.replace("-", " ")}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeDevice(device.id)} className="text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  {device.status === "online" ? (
                    <>
                      <Wifi className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-semibold">Online</span>
                    </>
                  ) : (
                    <>
                      <WifiOff className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-red-600 font-semibold">Offline</span>
                    </>
                  )}
                </div>

                <p className="text-xs text-foreground/50">
                  Last seen: {new Date(device.lastSeen).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-blue-900 dark:text-blue-100">Offline Mode Support</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-800 dark:text-blue-100 space-y-2">
          <p>✓ All devices store schedules locally</p>
          <p>✓ Bells ring automatically even without internet</p>
          <p>✓ Student name calls queued and played when online</p>
        </CardContent>
      </Card>
    </div>
  )
}
