import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AIVoiceSettings, AIVoiceProfile } from "./ai-voice-types"

export type VoiceType =
  | "standard-male"
  | "standard-female"
  | "azan-islamic"
  | "hausa"
  | "twi"
  | "arabic"
  // OpenAI Voices
  | "openai-alloy"
  | "openai-echo"
  | "openai-fable"
  | "openai-onyx"
  | "openai-nova"
  | "openai-shimmer"
  // ElevenLabs Voices
  | "elevenlabs-rachel"
  | "elevenlabs-drew"
  | "elevenlabs-clyde"
  | "elevenlabs-paul"
  // Azure Voices
  | "azure-jenny"
  | "azure-guy"
  | "azure-aria"
  | "azure-davis"
export type Language = "english" | "hausa" | "twi" | "arabic"

export interface Student {
  id: string
  firstName: string
  lastName: string
  class?: string
}

export interface Timetable {
  id: string
  name: string
  day: string
  bellTime: string
  bellType: string
  voice?: VoiceType // Optional voice selection for this timetable
  customMessage?: string // Optional custom message override
  customAudioId?: string // Optional custom audio file ID from storage
}

export interface Device {
  id: string
  name: string
  type: "esp32" | "raspberry-pi"
  status: "online" | "offline"
  lastSeen: string
}

export interface CallRequest {
  id: string
  studentId: string
  message: string
  timestamp: string
  status: "pending" | "played" | "failed"
  voice: VoiceType
  language: Language
}

export interface SystemSettings {
  defaultVoice: VoiceType
  defaultLanguage: Language
  defaultRepeatCount: number
  defaultBellRingsBeforeVoice: number // How many times to ring bell before voice plays
  azanEnabled: boolean
  prayerTimes?: {
    fajr: string
    dhuhr: string
    asr: string
    maghrib: string
    isha: string
  }
  prayerAudioIds?: {
    fajr?: string
    dhuhr?: string
    asr?: string
    maghrib?: string
    isha?: string
  }
  backgroundEnabled?: boolean
  // AI Voice settings - optional for backward compatibility
  aiVoice?: AIVoiceSettings
  // Browser voice mapping
  browserVoiceMapping?: {
    male?: string
    female?: string
  }
}

interface SchoolStore {
  students: Student[]
  timetables: Timetable[]
  devices: Device[]
  callRequests: CallRequest[]
  settings: SystemSettings
  addStudent: (student: Student) => void
  removeStudent: (id: string) => void
  addTimetable: (timetable: Timetable) => void
  removeTimetable: (id: string) => void
  updateTimetable: (id: string, timetable: Partial<Timetable>) => void
  addDevice: (device: Device) => void
  removeDevice: (id: string) => void
  addCallRequest: (request: CallRequest) => void
  clearCallRequests: () => void
  updateSettings: (settings: Partial<SystemSettings>) => void
}

// Import storage sync functions
import { syncTimetablesToDB, syncStudentsToDB } from "./pwa/zustand-storage-adapter"

export const useStore = create<SchoolStore>()(
  persist(
    (set) => ({
      students: [],
      timetables: [],
      devices: [],
      callRequests: [],
      settings: {
        defaultVoice: "standard-female",
        defaultLanguage: "english",
        defaultRepeatCount: 1,
        defaultBellRingsBeforeVoice: 3, // Ring bell 3 times before voice
        azanEnabled: false,
        prayerTimes: {
          fajr: "05:30",
          dhuhr: "12:30",
          asr: "15:00",
          maghrib: "17:45",
          isha: "19:00",
        },
        // Default AI voice settings
        aiVoice: {
          aiVoiceEnabled: false,
          primaryProvider: "openai",
          fallbackProvider: "azure",
          voiceProfiles: {
            announcement: {
              id: "default-announcement",
              name: "Professional Announcer",
              language: "english",
              gender: "neutral",
              category: "announcement",
              provider: "openai"
            },
            prayer: {
              id: "default-prayer",
              name: "Islamic Prayer Voice",
              language: "arabic",
              gender: "male",
              category: "religious",
              provider: "openai"
            },
            bell: {
              id: "default-bell",
              name: "School Bell Voice",
              language: "english",
              gender: "neutral",
              category: "bell",
              provider: "openai"
            },
            general: {
              id: "default-general",
              name: "General Purpose Voice",
              language: "english",
              gender: "female",
              category: "standard",
              provider: "openai"
            }
          },
          cacheSettings: {
            maxSize: 100, // 100MB
            maxAge: 30, // 30 days
            enabled: true
          },
          usageSettings: {
            monthlyLimit: 100000, // 100k characters
            costThreshold: 50, // $50 USD
            optimizationEnabled: true
          },
          providerConfigs: {
            openai: {
              apiKey: "",
              enabled: false,
              priority: 1,
              rateLimit: {
                requestsPerMinute: 50,
                charactersPerDay: 50000
              }
            },
            elevenlabs: {
              apiKey: "",
              enabled: false,
              priority: 2,
              rateLimit: {
                requestsPerMinute: 20,
                charactersPerDay: 20000
              }
            },
            azure: {
              apiKey: "",
              endpoint: "",
              enabled: false,
              priority: 3,
              rateLimit: {
                requestsPerMinute: 100,
                charactersPerDay: 100000
              }
            }
          }
        }
      },
      addStudent: (student) => set((state) => {
        const newStudents = [...state.students, student]
        // Sync to IndexedDB
        syncStudentsToDB(newStudents).catch(console.error)
        return { students: newStudents }
      }),
      removeStudent: (id) => set((state) => {
        const newStudents = state.students.filter((s) => s.id !== id)
        // Sync to IndexedDB
        syncStudentsToDB(newStudents).catch(console.error)
        return { students: newStudents }
      }),
      addTimetable: (timetable) => {
        console.log("🔵 Store: addTimetable called with:", timetable)
        set((state) => {
          const newTimetables = [...state.timetables, timetable]
          console.log("🔵 Store: New timetables array:", newTimetables)
          // Sync to IndexedDB
          syncTimetablesToDB(newTimetables).catch(console.error)
          return { timetables: newTimetables }
        })
        console.log("🔵 Store: addTimetable completed")
      },
      removeTimetable: (id) => {
        console.log("🔵 Store: removeTimetable called with id:", id)
        set((state) => {
          const newTimetables = state.timetables.filter((t) => t.id !== id)
          // Sync to IndexedDB
          syncTimetablesToDB(newTimetables).catch(console.error)
          return { timetables: newTimetables }
        })
      },
      updateTimetable: (id, updates) => {
        console.log("🔵 Store: updateTimetable called with id:", id, "updates:", updates)
        set((state) => {
          const newTimetables = state.timetables.map((t) => (t.id === id ? { ...t, ...updates } : t))
          // Sync to IndexedDB
          syncTimetablesToDB(newTimetables).catch(console.error)
          return { timetables: newTimetables }
        })
      },
      addDevice: (device) => set((state) => ({ devices: [...state.devices, device] })),
      removeDevice: (id) => set((state) => ({ devices: state.devices.filter((d) => d.id !== id) })),
      addCallRequest: (request) => set((state) => ({ callRequests: [...state.callRequests, request] })),
      clearCallRequests: () => set(() => ({ callRequests: [] })),
      updateSettings: (newSettings) => set((state) => ({ settings: { ...state.settings, ...newSettings } })),
    }),
    {
      name: "school-bell-storage",
      onRehydrateStorage: () => (state) => {
        console.log("🔄 Store rehydrated from localStorage")
        if (state) {
          console.log("📊 Rehydrated state:", {
            studentsCount: state.students.length,
            timetablesCount: state.timetables.length,
            devicesCount: state.devices.length,
          })
        }
      },
    },
  ),
)
