"use client"

import { useAutoScheduleBells } from "@/hooks/use-auto-schedule-bells"

/**
 * Auto Schedule Bells Component
 * Automatically schedules all timetable bells in the background
 */
export function AutoScheduleBells() {
  useAutoScheduleBells()
  return null
}
