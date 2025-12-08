/**
 * Auto-schedule bells hook
 * Automatically schedules all timetable bells when timetables change
 */

import { useEffect } from 'react'
import { useStore } from '@/lib/store'
import { CompleteBellSystem } from '@/lib/complete-bell-system'

export function useAutoScheduleBells() {
  const timetables = useStore((state) => state.timetables)
  const settings = useStore((state) => state.settings)

  useEffect(() => {
    // Clear all existing scheduled bells
    CompleteBellSystem.clearAllScheduledBells()

    if (timetables.length === 0) {
      console.log('[AutoSchedule] No timetables')
      return
    }

    console.log(`[AutoSchedule] Scheduling bells for ${timetables.length} timetable(s)`)

    // Schedule each bell
    timetables.forEach((timetable) => {
      // Calculate next occurrence of this bell
      const nextTime = getNextOccurrence(timetable.bellTime, timetable.day)

      if (!nextTime) return

      // Schedule the bell
      const id = CompleteBellSystem.scheduleBell(
        nextTime,
        timetable.name || 'Bell',
        timetable.customMessage || `${timetable.bellType} bell`,
        {
          bellType: timetable.bellType as any || settings.defaultBellSound,
          voice: timetable.voice || settings.defaultVoice,
          language: settings.defaultLanguage,
          repeatCount: settings.defaultRepeatCount || 1,
          customAudioId: timetable.customAudioId,
        }
      )

      console.log(`[AutoSchedule] Scheduled ${timetable.name} at ${nextTime.toLocaleString()}`)
    })
  }, [timetables, settings])
}

/**
 * Get next occurrence of a scheduled time
 */
function getNextOccurrence(time: string, day: string): Date | null {
  if (!time || !day) return null

  const now = new Date()
  const [hours, minutes] = time.split(':').map(Number)

  // Convert day string to day numbers (0-6)
  const daysMap: Record<string, number> = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4, 'Friday': 5, 'Saturday': 6
  }

  let targetDays: number[] = []
  if (day === 'Daily') {
    targetDays = [1, 2, 3, 4, 5] // Mon-Fri
  } else if (daysMap[day] !== undefined) {
    targetDays = [daysMap[day]]
  } else {
    return null
  }

  // Try today first
  const today = new Date()
  today.setHours(hours, minutes, 0, 0)

  if (today > now && targetDays.includes(today.getDay())) {
    return today
  }

  // Try next 7 days
  for (let i = 1; i <= 7; i++) {
    const nextDay = new Date(now)
    nextDay.setDate(now.getDate() + i)
    nextDay.setHours(hours, minutes, 0, 0)

    if (targetDays.includes(nextDay.getDay())) {
      return nextDay
    }
  }

  return null
}
