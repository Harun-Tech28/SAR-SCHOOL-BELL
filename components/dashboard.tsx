"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Users, Volume2, Wifi, Monitor, Calendar } from "lucide-react"
import { useStore } from "@/lib/store"
import { playAzanCall, getTTSStatus } from "@/lib/voice-utils"
import { CompleteBellSystem } from "@/lib/complete-bell-system"
import { BellSystemStatus } from "./bell-system-status"
import { useEffect, useRef, useState, useCallback } from "react"
import { isElectron } from "@/lib/electron-utils"

// Helper function to derive task type from timetable name
const deriveTaskType = (name: string): string => {
  const lowerName = name.toLowerCase()

  if (lowerName.includes("assembly") || lowerName.includes("meeting")) return "assembly"
  if (lowerName.includes("break") || lowerName.includes("recess")) return "break"
  if (lowerName.includes("lunch") || lowerName.includes("meal")) return "lunch"
  if (lowerName.includes("dismissal") || lowerName.includes("end") || lowerName.includes("home")) return "dismissal"
  if (lowerName.includes("emergency") || lowerName.includes("drill") || lowerName.includes("fire")) return "emergency"
  if (lowerName.includes("class") || lowerName.includes("period") || lowerName.includes("lesson")) return "class"

  // Default to class for most school activities
  return "class"
}

import { registerBellSync, syncTimetablesToSW } from "@/lib/background-sync"
import { initBellWorker, updateWorkerSchedules, checkSchedulesNow, terminateBellWorker } from "@/lib/background-bell-manager"
import { InstallButton } from "@/components/install-button"

export function Dashboard() {
  const { timetables, students, devices, settings } = useStore()
  const lastCheckedPrayerRef = useRef<string>("")
  const lastCheckedTimetableRef = useRef<string>("")
  const [ttsStatus, setTtsStatus] = useState({ available: true, message: "TTS is ready" })
  const [isElectronApp, setIsElectronApp] = useState(false)
  const [audioQueueStatus, setAudioQueueStatus] = useState<any>(null)
  const [backgroundWorkerActive, setBackgroundWorkerActive] = useState(false)

  // Handler for bell triggers from web worker
  const handleWorkerBellTrigger = useCallback(async (schedule: { id: string; name: string; time: string; day: string }) => {
    console.log("[Dashboard] Bell triggered from worker:", schedule.name)

    // Find the full timetable entry
    const timetable = timetables.find(t => t.id === schedule.id)
    if (!timetable) {
      console.warn("[Dashboard] Timetable not found for schedule:", schedule.id)
      return
    }

    // Generate message
    let message: string
    if (timetable.customMessage) {
      message = timetable.customMessage
    } else {
      const taskType = deriveTaskType(timetable.name)
      switch (taskType) {
        case "class":
          message = `Attention all students, it is time for ${timetable.name}. Please proceed to your classrooms.`
          break
        case "break":
          message = `Attention all students, it is time for ${timetable.name}. You may now leave your classrooms.`
          break
        case "assembly":
          message = `Attention all students and staff, it is time for ${timetable.name}. Please proceed to the assembly hall.`
          break
        case "lunch":
          message = `Attention all students, it is time for ${timetable.name}. Please proceed to the dining hall.`
          break
        case "dismissal":
          message = `Attention all students, it is time for ${timetable.name}. Please collect your belongings and proceed to the exit.`
          break
        case "emergency":
          message = `Emergency alert. ${timetable.name}. All students and staff must follow emergency procedures immediately.`
          break
        default:
          message = `Attention all students, it is time for ${timetable.name}.`
      }
    }

    // Play the bell sequence
    await CompleteBellSystem.playBellSequence(
      timetable.name,
      message,
      {
        bellType: timetable.bellType as any,
        voice: timetable.voice as any || settings.defaultVoice,
        language: settings.defaultLanguage,
        repeatCount: settings.defaultRepeatCount,
        bellRingsBeforeVoice: settings.defaultBellRingsBeforeVoice || 3,
        useHighQualityVoice: true,
        customAudioId: timetable.customAudioId
      }
    )
  }, [timetables, settings])

  useEffect(() => {
    // Check TTS status on client side only
    setTtsStatus(getTTSStatus())

    // Check if running in Electron
    setIsElectronApp(isElectron())

    // Initialize background worker for PWA (always enabled now for reliable background)
    if (!isElectron()) {
      initBellWorker(handleWorkerBellTrigger)
      setBackgroundWorkerActive(true)
      registerBellSync()
      console.log("[Dashboard] Background bell worker initialized")
    }

    // Handle visibility change - check schedules when returning from background
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        console.log("[Dashboard] Page became visible, checking schedules")
        checkSchedulesNow()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Load Electron audio queue status
    if (isElectron() && window.electronAPI) {
      const loadQueueStatus = async () => {
        if (!window.electronAPI) return
        const result = await window.electronAPI.getAudioQueueStatus()
        if (result.success) {
          setAudioQueueStatus(result.data)
        }
      }
      loadQueueStatus()

      // Update queue status every 5 seconds
      const interval = setInterval(loadQueueStatus, 5000)
      return () => {
        clearInterval(interval)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (!isElectron()) {
        terminateBellWorker()
      }
    }
  }, [handleWorkerBellTrigger])

  // Sync timetables to both SW and Web Worker whenever they change
  useEffect(() => {
    syncTimetablesToSW(timetables)
    updateWorkerSchedules(timetables)
  }, [timetables])

  useEffect(() => {
    if (!settings.azanEnabled || !settings.prayerTimes) return

    const checkPrayerTimes = async () => {
      const now = new Date()
      const currentTime =
        now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0")

      // Only play once per minute to avoid multiple triggers
      if (currentTime === lastCheckedPrayerRef.current) return
      lastCheckedPrayerRef.current = currentTime

      console.log("[v0] Checking prayer times. Current time:", currentTime)

      for (const [prayer, time] of Object.entries(settings.prayerTimes || {})) {
        if (currentTime === time) {
          console.log("[v0] Prayer time matched! Playing Azan for:", prayer)
          // Get custom audio ID for this prayer if available
          const customAudioId = settings.prayerAudioIds?.[prayer as keyof typeof settings.prayerAudioIds]
          console.log("[v0] Custom audio ID for", prayer, ":", customAudioId || "none")
          await playAzanCall(prayer, customAudioId)
        }
      }
    }

    // Check immediately on mount
    checkPrayerTimes()

    // Check every minute
    const interval = setInterval(checkPrayerTimes, 60000)
    return () => clearInterval(interval)
  }, [settings.azanEnabled, settings.prayerTimes])

  // Electron timetable scheduler - Schedule all timetables for today
  useEffect(() => {
    if (!isElectronApp || !window.electronAPI || timetables.length === 0) return

    const scheduleTimetablesInElectron = async () => {
      console.log('[Electron] Scheduling timetables for today...')

      const now = new Date()
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' })

      for (const timetable of timetables) {
        // Check if this timetable applies today
        if (timetable.day !== "Daily" && timetable.day !== currentDay) {
          continue
        }

        // Parse time and create schedule date
        const [hours, minutes] = timetable.bellTime.split(':').map(Number)
        const scheduleTime = new Date()
        scheduleTime.setHours(hours, minutes, 0, 0)

        // Only schedule future times
        if (scheduleTime > now) {
          // Generate message
          let message: string
          if (timetable.customMessage) {
            message = timetable.customMessage
          } else {
            const taskType = deriveTaskType(timetable.name)
            switch (taskType) {
              case "class":
                message = `Attention all students, it is time for ${timetable.name}. Please proceed to your classrooms.`
                break
              case "break":
                message = `Attention all students, it is time for ${timetable.name}. You may now leave your classrooms.`
                break
              case "assembly":
                message = `Attention all students and staff, it is time for ${timetable.name}. Please proceed to the assembly hall.`
                break
              case "lunch":
                message = `Attention all students, it is time for ${timetable.name}. Please proceed to the dining hall.`
                break
              case "dismissal":
                message = `Attention all students, it is time for ${timetable.name}. Please collect your belongings and proceed to the exit.`
                break
              case "emergency":
                message = `Emergency alert. ${timetable.name}. All students and staff must follow emergency procedures immediately.`
                break
              default:
                message = `Attention all students, it is time for ${timetable.name}.`
            }
          }

          // Schedule via Electron audio scheduler
          const audioConfig = {
            type: 'combined',
            bellSound: timetable.bellType || 'bell',
            announcement: message,
            voice: timetable.voice || settings.defaultVoice,
            repeat: settings.defaultRepeatCount || 1,
            title: timetable.name
          }

          const result = await window.electronAPI!.scheduleAudio(scheduleTime, audioConfig)
          if (result.success) {
            console.log(`[Electron] Scheduled: ${timetable.name} at ${timetable.bellTime} (ID: ${result.id})`)
          } else {
            console.error(`[Electron] Failed to schedule: ${timetable.name}`, result.error)
          }
        }
      }
    }

    // Schedule timetables
    scheduleTimetablesInElectron()

    // Re-schedule every hour to catch new day transitions
    const interval = setInterval(scheduleTimetablesInElectron, 3600000) // Every hour
    return () => clearInterval(interval)
  }, [timetables, settings.defaultVoice, settings.defaultLanguage, settings.defaultRepeatCount, isElectronApp])

  // Browser/PWA timetable scheduler (original logic)
  useEffect(() => {
    // Skip if in Electron mode (use Electron scheduler instead)
    if (isElectronApp) return

    if (timetables.length === 0) return

    const checkTimetables = async () => {
      const now = new Date()
      const currentTime =
        now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0")
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' })

      // Only play once per minute to avoid multiple triggers
      if (currentTime === lastCheckedTimetableRef.current) return
      lastCheckedTimetableRef.current = currentTime

      console.log("[v0] Checking timetables. Current time:", currentTime, "Day:", currentDay)

      for (const timetable of timetables) {
        // Check if this timetable should trigger now
        const shouldTrigger =
          currentTime === timetable.bellTime &&
          (timetable.day === "Daily" || timetable.day === currentDay)

        if (shouldTrigger) {
          console.log("[v0] Timetable matched! Triggering:", timetable.name, "Type:", timetable.bellType)

          // Use Complete Bell System - perfect tone + voice combination
          let message: string

          // Use custom message if provided, otherwise generate based on task type
          if (timetable.customMessage) {
            message = timetable.customMessage
          } else {
            // Auto-generate message based on task type
            const taskType = deriveTaskType(timetable.name)

            switch (taskType) {
              case "class":
              case "lesson":
                message = `Attention all students, it is time for ${timetable.name}. Please proceed to your classrooms.`
                break
              case "break":
              case "recess":
                message = `Attention all students, it is time for ${timetable.name}. You may now leave your classrooms.`
                break
              case "assembly":
              case "meeting":
                message = `Attention all students and staff, it is time for ${timetable.name}. Please proceed to the assembly hall.`
                break
              case "lunch":
              case "meal":
                message = `Attention all students, it is time for ${timetable.name}. Please proceed to the dining hall.`
                break
              case "dismissal":
              case "end":
                message = `Attention all students, it is time for ${timetable.name}. Please collect your belongings and proceed to the exit.`
                break
              case "emergency":
              case "drill":
                message = `Emergency alert. ${timetable.name}. All students and staff must follow emergency procedures immediately.`
                break
              default:
                message = `Attention all students, it is time for ${timetable.name}.`
            }
          }

          // Play complete bell sequence: tone first → voice announcement
          await CompleteBellSystem.playBellSequence(
            timetable.name,
            message,
            {
              bellType: timetable.bellType as any,
              voice: timetable.voice as any || settings.defaultVoice, // Use timetable voice or fallback to default
              language: settings.defaultLanguage,
              repeatCount: settings.defaultRepeatCount,
              bellRingsBeforeVoice: settings.defaultBellRingsBeforeVoice || 3, // Ring bell multiple times before voice
              useHighQualityVoice: true,
              customAudioId: timetable.customAudioId // Use custom audio if available
            }
          )
        }
      }
    }

    // Check immediately on mount
    checkTimetables()

    // Check every minute
    const interval = setInterval(checkTimetables, 60000)
    return () => clearInterval(interval)
  }, [timetables, settings.defaultVoice, settings.defaultLanguage])

  // Calculate next timetable event
  const getNextTimetableEvent = () => {
    if (timetables.length === 0) {
      return { name: "No Timetables Set", timeUntil: "Create in Timetables" }
    }

    const now = new Date()
    const currentTime = now.getHours() * 60 + now.getMinutes()
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' })

    // Get today's timetables
    const todayTimetables = timetables
      .filter(tt => tt.day === "Daily" || tt.day === currentDay)
      .map(tt => {
        const [hours, minutes] = tt.bellTime.split(':').map(Number)
        const eventMinutes = hours * 60 + minutes
        return { ...tt, minutes: eventMinutes }
      })
      .sort((a, b) => a.minutes - b.minutes)

    // Find next event today
    let nextEvent = todayTimetables.find(tt => tt.minutes > currentTime)

    if (nextEvent) {
      const minutesUntil = nextEvent.minutes - currentTime
      const hoursUntil = Math.floor(minutesUntil / 60)
      const minsUntil = minutesUntil % 60
      return {
        name: nextEvent.name,
        timeUntil: `In ${hoursUntil}h ${minsUntil}m`
      }
    }

    // If no event today, find tomorrow's first event
    const tomorrowEvents = timetables
      .filter(tt => tt.day === "Daily")
      .map(tt => {
        const [hours, minutes] = tt.bellTime.split(':').map(Number)
        return { ...tt, minutes: hours * 60 + minutes }
      })
      .sort((a, b) => a.minutes - b.minutes)

    if (tomorrowEvents.length > 0) {
      const nextEvent = tomorrowEvents[0]
      const minutesUntil = (24 * 60) - currentTime + nextEvent.minutes
      const hoursUntil = Math.floor(minutesUntil / 60)
      const minsUntil = minutesUntil % 60
      return {
        name: `${nextEvent.name} (Tomorrow)`,
        timeUntil: `In ${hoursUntil}h ${minsUntil}m`
      }
    }

    return { name: "No Upcoming Events", timeUntil: "Check timetables" }
  }

  // Calculate next prayer time
  const getNextPrayerTime = () => {
    if (!settings.azanEnabled || !settings.prayerTimes) {
      return { name: "No Prayer Times Set", timeUntil: "Configure in Settings" }
    }

    const now = new Date()
    const currentTime = now.getHours() * 60 + now.getMinutes() // Convert to minutes since midnight

    const prayerTimes = Object.entries(settings.prayerTimes).map(([name, time]) => {
      const [hours, minutes] = time.split(':').map(Number)
      const prayerMinutes = hours * 60 + minutes
      return { name: name.charAt(0).toUpperCase() + name.slice(1), time, minutes: prayerMinutes }
    }).sort((a, b) => a.minutes - b.minutes)

    // Find next prayer time
    let nextPrayer = prayerTimes.find(prayer => prayer.minutes > currentTime)

    // If no prayer found today, use first prayer of tomorrow
    if (!nextPrayer) {
      nextPrayer = prayerTimes[0]
      const minutesUntil = (24 * 60) - currentTime + nextPrayer.minutes
      const hoursUntil = Math.floor(minutesUntil / 60)
      const minsUntil = minutesUntil % 60
      return {
        name: `${nextPrayer.name} (Tomorrow)`,
        timeUntil: `In ${hoursUntil}h ${minsUntil}m`
      }
    }

    const minutesUntil = nextPrayer.minutes - currentTime
    const hoursUntil = Math.floor(minutesUntil / 60)
    const minsUntil = minutesUntil % 60

    return {
      name: nextPrayer.name,
      timeUntil: `In ${hoursUntil}h ${minsUntil}m`
    }
  }

  const nextPrayer = getNextPrayerTime()
  const nextTimetableEvent = getNextTimetableEvent()

  const stats = [
    {
      title: "Active Timetables",
      value: timetables.length,
      icon: Bell,
      color: "text-blue-600",
    },
    {
      title: "Students",
      value: students.length,
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Announcements Today",
      value: "3",
      icon: Volume2,
      color: "text-purple-600",
    },
    // Show different stat based on Electron vs PWA
    isElectronApp
      ? {
        title: "Scheduled Audio",
        value: audioQueueStatus?.scheduledCount || 0,
        icon: Calendar,
        color: "text-cyan-600",
      }
      : {
        title: "Connected Devices",
        value: devices.filter((d) => d.status === "online").length,
        icon: Wifi,
        color: "text-orange-600",
      },
  ]

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header Section with Enhanced Styling */}
      <div className="mb-8 md:mb-10 flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-[#DC2626] to-[#B91C1C] bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-sm md:text-base text-muted-foreground flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Overview & Quick Stats
          </p>
        </div>
        <InstallButton variant="default" size="default" />
      </div>

      {/* Stats Cards with Enhanced Shadows and Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card
              key={idx}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#DC2626]/20 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 relative z-10">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#DC2626]/10 to-transparent rounded-full blur-2xl -z-10 pointer-events-none"></div>

                <CardTitle className="text-sm font-medium text-foreground/80">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Electron Status Card */}
      {isElectronApp && audioQueueStatus && (
        <Card className="mb-6 md:mb-8 shadow-xl border-border/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardHeader className="border-b border-border/50">
            <CardTitle className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <Monitor className="w-5 h-5 text-blue-600" />
              Desktop Application Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Monitor className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Mode</p>
                  <p className="text-sm font-semibold">Offline Desktop</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Scheduled Audio</p>
                  <p className="text-sm font-semibold">{audioQueueStatus.scheduledCount} queued</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Volume2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Audio Queue</p>
                  <p className="text-sm font-semibold">
                    {audioQueueStatus.currentlyPlaying ? 'Playing' : audioQueueStatus.queueLength > 0 ? `${audioQueueStatus.queueLength} waiting` : 'Empty'}
                  </p>
                </div>
              </div>
            </div>

            {audioQueueStatus.currentlyPlaying && (
              <div className="mt-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-xs text-muted-foreground mb-1">Currently Playing</p>
                <p className="text-sm font-medium">
                  {audioQueueStatus.currentlyPlaying.config?.title || 'Audio'}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Main Content Cards with Enhanced Shadows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
            <CardTitle className="text-lg md:text-xl font-semibold flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gradient-to-b from-[#DC2626] to-[#B91C1C] rounded-full"></span>
              Next Timetable Event
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-xl md:text-2xl font-bold text-green-600">{nextTimetableEvent.name}</p>
            <p className="text-sm md:text-base text-foreground/60 mt-2">{nextTimetableEvent.timeUntil}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Next Prayer Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl md:text-2xl font-bold text-blue-600">{nextPrayer.name}</p>
            <p className="text-sm md:text-base text-foreground/60 mt-2">{nextPrayer.timeUntil}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Today's Prayer Times</CardTitle>
          </CardHeader>
          <CardContent>
            {settings.azanEnabled && settings.prayerTimes ? (
              <div className="space-y-2">
                {Object.entries(settings.prayerTimes).map(([prayer, time]) => (
                  <div key={prayer} className="flex justify-between text-sm md:text-base">
                    <span className="text-foreground/60 capitalize">{prayer}</span>
                    <span className="font-semibold">{time}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm md:text-base text-foreground/60">Prayer times not configured</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-foreground/60">Database</span>
                <span className="text-green-600 font-semibold">Online</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-foreground/60">TTS Engine</span>
                <span className={ttsStatus.available ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {ttsStatus.available ? "Ready" : "Unavailable"}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-foreground/60">Prayer Scheduler</span>
                <span className={settings.azanEnabled ? "text-green-600 font-semibold" : "text-gray-500 font-semibold"}>
                  {settings.azanEnabled ? "Active" : "Disabled"}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="text-foreground/60">Timetable Scheduler</span>
                <span className={timetables.length > 0 ? "text-green-600 font-semibold" : "text-gray-500 font-semibold"}>
                  {timetables.length > 0 ? "Active" : "No Timetables"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Complete Bell System Status with Enhanced Shadow */}
      <div className="mt-8 transform transition-all duration-300 hover:scale-[1.01]">
        <BellSystemStatus />
      </div>
    </div>
  )
}
