"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Edit2, Volume2, FileAudio } from "lucide-react"
import { CompleteBellSystem } from "@/lib/complete-bell-system"
import type { BellType } from "@/lib/bell-sounds"
import type { VoiceType } from "@/lib/store"
import { VOICE_OPTIONS } from "@/lib/voice-utils"
import { audioStorage, type AudioMetadata } from "@/lib/audio-storage"

export function Timetable() {
  const { timetables, addTimetable, removeTimetable, updateTimetable } = useStore()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [availableAudios, setAvailableAudios] = useState<AudioMetadata[]>([])
  const [formData, setFormData] = useState({
    name: "",
    day: "Monday",
    bellTime: "",
    bellType: "none",
    voice: "openai-onyx" as VoiceType,
    customMessage: "",
    customAudioId: "",
  })

  // Load available audio files
  useEffect(() => {
    const loadAudios = async () => {
      try {
        const audios = await audioStorage.listAudios()
        setAvailableAudios(audios)
      } catch (error) {
        console.error('Failed to load audio files:', error)
      }
    }
    loadAudios()
  }, [])

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Daily"]
  const bellTypes = [
    "none",
    "ghana-hand-bell",
    "ghana-assembly-bell",
    "ghana-break-bell",
    "bell",
    "classic-hand-bell",
    "brass-school-bell",
    "vintage-bell",
    "mechanical-bell",
    "recess-bell",
    "electronic-bell",
    "westminster-chimes",
    "double-ring",
    "triple-ring",
    "long-ring",
    "chime",
    "announcement",
    "emergency-alert",
    "fire-alarm-bell",
    "dismissal-bell",
    "adhan-call",
    "islamic-chime",
    "prayer-bell"
  ]

  const formatBellTypeName = (type: string): string => {
    const names: Record<string, string> = {
      'none': '🔇 None (Voice Only - No Bell Sound)',
      'ghana-hand-bell': '🇬🇭 Ghana Hand Bell (Manual Ring - AUTHENTIC)',
      'ghana-assembly-bell': '🇬🇭 Ghana Assembly Bell (Long Ring - AUTHENTIC)',
      'ghana-break-bell': '🇬🇭 Ghana Break Bell (Quick Ring - AUTHENTIC)',
      'bell': 'Traditional Bell',
      'classic-hand-bell': '🔔 Classic Hand Bell (Natural)',
      'brass-school-bell': '🔔 Brass School Bell (Deep & Resonant)',
      'vintage-bell': '🔔 Vintage Bell (1950s Style)',
      'mechanical-bell': '🔔 Mechanical Bell (Rapid Ring)',
      'recess-bell': '🔔 Recess Bell (Cheerful)',
      'fire-alarm-bell': '🚨 Fire Alarm Bell (Urgent)',
      'electronic-bell': 'Electronic Bell',
      'westminster-chimes': 'Westminster Chimes',
      'double-ring': 'Double Ring',
      'triple-ring': 'Triple Ring',
      'long-ring': 'Long Ring',
      'chime': 'Soft Chime',
      'announcement': 'Announcement Tone',
      'emergency-alert': 'Emergency Alert',
      'dismissal-bell': 'Dismissal Bell',
      'adhan-call': 'Adhan Call (Islamic)',
      'islamic-chime': 'Islamic Chime',
      'prayer-bell': 'Prayer Bell (Islamic)'
    }
    return names[type] || type
  }

  // Get available voices for selection (only browser voices)
  const getAvailableVoices = (): Array<{ value: VoiceType, label: string, description: string }> => {
    const browserVoices: VoiceType[] = ['standard-male', 'standard-female', 'azan-islamic', 'hausa', 'twi', 'arabic']
    return browserVoices.map(key => ({
      value: key,
      label: VOICE_OPTIONS[key].name,
      description: VOICE_OPTIONS[key].description
    }))
  }

  // Get recommended voices for different bell types
  const getRecommendedVoice = (bellType: string): VoiceType => {
    const recommendations: Record<string, VoiceType> = {
      'emergency-alert': 'standard-male', // Authoritative for emergencies
      'announcement': 'standard-male', // Professional for announcements
      'prayer-bell': 'azan-islamic', // Islamic voice for prayers
      'adhan-call': 'azan-islamic', // Islamic voice for adhan
      'islamic-chime': 'azan-islamic', // Islamic voice for Islamic chimes
      'dismissal-bell': 'standard-female', // Friendly for dismissal
      'chime': 'standard-female', // Warm for breaks
    }
    return recommendations[bellType] || 'standard-male'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("=== TIMETABLE FORM SUBMISSION START ===")
    console.log("Form data:", formData)
    console.log("Editing ID:", editingId)

    // Validation
    if (!formData.name || !formData.bellTime) {
      console.error("❌ Validation failed: Name or Bell Time missing")
      console.error("Name:", formData.name)
      console.error("Bell Time:", formData.bellTime)
      alert("Please fill in both Name and Time fields")
      return
    }

    try {
      if (editingId) {
        console.log("📝 Updating existing timetable:", editingId)
        updateTimetable(editingId, formData)
        console.log("✅ Update completed")
        setEditingId(null)
      } else {
        const newTimetable = {
          id: Date.now().toString(),
          ...formData,
        }
        console.log("➕ Adding new timetable:", newTimetable)
        addTimetable(newTimetable)
        console.log("✅ Add completed")
        console.log("Current timetables count:", timetables.length + 1)
      }

      // Reset form
      setFormData({
        name: "",
        day: "Monday",
        bellTime: "",
        bellType: "bell",
        voice: "openai-onyx",
        customMessage: "",
        customAudioId: ""
      })
      setShowForm(false)
      console.log("=== TIMETABLE FORM SUBMISSION END ===")
    } catch (error) {
      console.error("❌ Error saving timetable:", error)
      alert("Failed to save timetable. Please try again.")
    }
  }

  const startEdit = (id: string) => {
    const timetable = timetables.find((t) => t.id === id)
    if (timetable) {
      setFormData({
        name: timetable.name,
        day: timetable.day,
        bellTime: timetable.bellTime,
        bellType: timetable.bellType,
        voice: timetable.voice || "openai-onyx",
        customMessage: timetable.customMessage || "",
        customAudioId: timetable.customAudioId || "",
      })
      setEditingId(id)
      setShowForm(true)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setFormData({
      name: "",
      day: "Monday",
      bellTime: "",
      bellType: "none",
      voice: "openai-onyx",
      customMessage: "",
      customAudioId: ""
    })
    setShowForm(false)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Timetables</h1>
          <p className="text-foreground/60">Manage bell schedules and announcements</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={async () => {
              // Test the complete bell system
              await CompleteBellSystem.playBellSequence(
                "System Test",
                "This is a test of the complete bell system. Bell tone first, followed by voice announcement.",
                {
                  bellType: "bell",
                  voice: "openai-onyx",
                  useHighQualityVoice: true,
                  repeatCount: 1
                }
              )
            }}
            variant="outline"
            className="gap-2"
          >
            <Volume2 className="w-4 h-4" />
            Test Bell System
          </Button>
          <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
            <Plus className="w-4 h-4" />
            Add New Bell
          </Button>
        </div>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">Bell Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Morning Assembly"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Day</label>
                  <select
                    value={formData.day}
                    onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                    className="w-full p-2 border border-border rounded-lg bg-background"
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Time</label>
                  <Input
                    type="time"
                    value={formData.bellTime}
                    onChange={(e) => setFormData({ ...formData, bellTime: e.target.value })}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Bell Type</label>
                  <div className="flex gap-2">
                    <select
                      value={formData.bellType}
                      onChange={(e) => {
                        const newBellType = e.target.value
                        setFormData({
                          ...formData,
                          bellType: newBellType,
                          voice: getRecommendedVoice(newBellType) // Auto-select recommended voice
                        })
                      }}
                      className="flex-1 p-2 border border-border rounded-lg bg-background"
                    >
                      {bellTypes.map((type) => (
                        <option key={type} value={type}>
                          {formatBellTypeName(type)}
                        </option>
                      ))}
                    </select>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        const { playBellSound } = await import("@/lib/bell-sounds")
                        playBellSound(formData.bellType as any)
                      }}
                      className="gap-1 px-3"
                      title="Preview this bell sound"
                    >
                      <Volume2 className="w-4 h-4" />
                      Test
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">
                    Click "Test" to hear this bell sound
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">
                    Voice Selection
                    <span className="text-xs text-foreground/60 ml-2">(AI Voice for Announcement)</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.voice}
                      onChange={(e) => setFormData({ ...formData, voice: e.target.value as VoiceType })}
                      className="flex-1 p-2 border border-border rounded-lg bg-background"
                    >
                      {getAvailableVoices().map((voice) => (
                        <option key={voice.value} value={voice.value}>
                          {voice.label} - {voice.description}
                        </option>
                      ))}
                    </select>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={async () => {
                        const voiceName = VOICE_OPTIONS[formData.voice]?.name || 'this voice'
                        const voiceDesc = VOICE_OPTIONS[formData.voice]?.description || ''
                        
                        // Create a descriptive message that highlights voice characteristics
                        let previewMessage = `Hello! I am ${voiceName}. `
                        
                        // Add characteristic-specific phrases
                        if (formData.voice.includes('onyx') || formData.voice.includes('clyde')) {
                          previewMessage += "I have a deep, authoritative tone perfect for important announcements."
                        } else if (formData.voice.includes('shimmer') || formData.voice.includes('nova') || formData.voice.includes('aria')) {
                          previewMessage += "I have a bright, clear voice ideal for friendly announcements."
                        } else if (formData.voice.includes('echo') || formData.voice.includes('drew')) {
                          previewMessage += "I have a warm, professional tone suitable for general announcements."
                        } else if (formData.voice.includes('fable')) {
                          previewMessage += "I have a distinctive storytelling voice with a British accent."
                        } else if (formData.voice.includes('azan') || formData.voice.includes('islamic')) {
                          previewMessage += "I am designed for Islamic prayer calls with a reverent tone."
                        } else {
                          previewMessage += `${voiceDesc}. This is how I will sound for your announcements.`
                        }
                        
                        const { playCustomAnnouncement } = await import("@/lib/high-quality-announcements")
                        await playCustomAnnouncement(previewMessage, { voice: formData.voice, withTone: false })
                      }}
                      className="gap-1 px-3"
                      title="Preview this voice"
                    >
                      <Volume2 className="w-4 h-4" />
                      Test
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/60 mt-1">
                    Recommended: {VOICE_OPTIONS[getRecommendedVoice(formData.bellType)]?.name} • Click "Test" to hear this voice
                  </p>
                </div>
              </div>

              {/* Preview Complete Bell System */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">🔔 Preview Complete Bell</h4>
                    <p className="text-xs text-foreground/60">
                      Test how your bell will sound: Bell tone + Voice announcement
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="default"
                    onClick={async () => {
                      const message = formData.customMessage || `Attention all students, it is time for ${formData.name || 'the scheduled event'}.`
                      await CompleteBellSystem.playBellSequence(
                        formData.name || "Preview",
                        message,
                        {
                          bellType: formData.bellType as any,
                          voice: formData.voice,
                          useHighQualityVoice: true,
                          repeatCount: 1
                        }
                      )
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    Preview Complete Bell
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block">
                  Custom Message (Optional)
                  <span className="text-xs text-foreground/60 ml-2">(Leave empty for auto-generated message)</span>
                </label>
                <Input
                  value={formData.customMessage}
                  onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                  placeholder="e.g., Attention all students, please proceed to the main hall for assembly."
                />
                <p className="text-xs text-foreground/60 mt-1">
                  If empty, message will be auto-generated based on bell name and type
                </p>
              </div>

              {/* Custom Audio Selection */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-1 block flex items-center gap-2">
                  <FileAudio className="w-4 h-4" />
                  Custom Audio (Optional)
                  <span className="text-xs text-foreground/60 font-normal">(Use your own recording instead of TTS)</span>
                </label>
                <select
                  value={formData.customAudioId}
                  onChange={(e) => setFormData({ ...formData, customAudioId: e.target.value })}
                  className="w-full p-2 border border-border rounded-lg bg-background"
                >
                  <option value="">No custom audio (use text-to-speech)</option>
                  {availableAudios.map((audio) => (
                    <option key={audio.id} value={audio.id}>
                      {audio.name} ({Math.floor(audio.duration)}s)
                    </option>
                  ))}
                </select>
                {formData.customAudioId && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={async () => {
                      const { playStoredAudio } = await import("@/lib/audio-storage")
                      await playStoredAudio(formData.customAudioId)
                    }}
                    className="mt-2 gap-2"
                  >
                    <Volume2 className="w-4 h-4" />
                    Preview Custom Audio
                  </Button>
                )}
                <p className="text-xs text-foreground/60 mt-1">
                  {availableAudios.length === 0
                    ? "No audio files uploaded yet. Upload audio files in Settings → Audio Library"
                    : "Select a custom audio file to play instead of text-to-speech announcement"
                  }
                </p>
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                  {editingId ? "Update Bell" : "Save Bell"}
                </Button>
                <Button type="button" variant="outline" onClick={cancelEdit}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {timetables.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-foreground/60">
              No timetables yet. Create your first bell schedule.
            </CardContent>
          </Card>
        ) : (
          timetables.map((tt) => (
            <Card key={tt.id}>
              <CardContent className="pt-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-foreground">{tt.name}</h3>
                  <p className="text-sm text-foreground/60">
                    {tt.day} at {tt.bellTime} • {formatBellTypeName(tt.bellType)}
                  </p>
                  <p className="text-xs text-foreground/50">
                    Voice: {VOICE_OPTIONS[tt.voice as VoiceType]?.name || VOICE_OPTIONS["openai-onyx"].name}
                    {tt.customMessage && " • Custom Message"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={async () => {
                      // Use custom message if provided, otherwise generate based on task type
                      let message: string

                      if (tt.customMessage) {
                        message = tt.customMessage
                      } else {
                        // Auto-generate message based on task type
                        const taskType = tt.name.toLowerCase().includes("assembly") ? "assembly" :
                          tt.name.toLowerCase().includes("break") ? "break" :
                            tt.name.toLowerCase().includes("lunch") ? "lunch" :
                              tt.name.toLowerCase().includes("dismissal") ? "dismissal" :
                                tt.name.toLowerCase().includes("emergency") ? "emergency" : "class"

                        switch (taskType) {
                          case "class":
                            message = `Attention all students, it is time for ${tt.name}. Please proceed to your classrooms.`
                            break
                          case "break":
                            message = `Attention all students, it is time for ${tt.name}. You may now leave your classrooms.`
                            break
                          case "assembly":
                            message = `Attention all students and staff, it is time for ${tt.name}. Please proceed to the assembly hall.`
                            break
                          case "lunch":
                            message = `Attention all students, it is time for ${tt.name}. Please proceed to the dining hall.`
                            break
                          case "dismissal":
                            message = `Attention all students, it is time for ${tt.name}. Please collect your belongings and proceed to the exit.`
                            break
                          case "emergency":
                            message = `Emergency alert. ${tt.name}. All students and staff must follow emergency procedures immediately.`
                            break
                          default:
                            message = `Attention all students, it is time for ${tt.name}.`
                        }
                      }

                      console.log("🔔 Playing timetable bell:")
                      console.log("  Name:", tt.name)
                      console.log("  Bell Type:", tt.bellType)
                      console.log("  Voice:", tt.voice || "openai-onyx")
                      console.log("  Message:", message)
                      
                      await CompleteBellSystem.playBellSequence(
                        tt.name,
                        message,
                        {
                          bellType: tt.bellType as BellType,
                          voice: tt.voice as VoiceType || "openai-onyx", // Use selected voice
                          useHighQualityVoice: true,
                          repeatCount: 1,
                          customAudioId: tt.customAudioId // Pass custom audio ID
                        }
                      )
                    }}
                    className="text-green-600 hover:text-green-700"
                    title="Test Complete Bell (Tone + Voice)"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => startEdit(tt.id)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTimetable(tt.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
