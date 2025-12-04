"use client"

import type React from "react"
import { playTextToSpeech } from "@/lib/voice-utils"
import { useState } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Plus, RotateCcw, Pencil } from "lucide-react"
import { VOICE_OPTIONS } from "@/lib/voice-utils"
import type { VoiceType, Language } from "@/lib/store"

export function Announcements() {
  const { settings } = useStore()
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Assembly Tomorrow",
      content: "All students attend assembly at 8 AM tomorrow",
      date: "2024-01-15",
      voice: settings.defaultVoice as VoiceType,
      language: settings.defaultLanguage,
      repeatCount: 1,
    },
  ])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    voice: settings.defaultVoice as VoiceType,
    language: settings.defaultLanguage,
    repeatCount: settings.defaultRepeatCount || 1,
  })
  const [playingId, setPlayingId] = useState<number | null>(null)
  const [lastPlayedId, setLastPlayedId] = useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newAnnouncement = {
      id: Date.now(),
      title: formData.title,
      content: formData.content,
      date: new Date().toISOString().split("T")[0],
      voice: formData.voice,
      language: formData.language,
      repeatCount: formData.repeatCount,
    }

    if (editingId) {
      setAnnouncements(announcements.map(a => a.id === editingId ? { ...newAnnouncement, id: editingId, date: a.date } : a))
      setEditingId(null)
    } else {
      setAnnouncements([...announcements, newAnnouncement])
    }

    setFormData({
      title: "",
      content: "",
      voice: settings.defaultVoice as VoiceType,
      language: settings.defaultLanguage,
      repeatCount: settings.defaultRepeatCount || 1,
    })
    setShowForm(false)
  }

  const playAnnouncement = async (id: number, text: string, voice: VoiceType, language: string, repeatCount: number = 1) => {
    console.log('Playing announcement with repeat count:', repeatCount)
    setPlayingId(id)

    for (let i = 0; i < repeatCount; i++) {
      console.log(`Playing repetition ${i + 1} of ${repeatCount}`)
      await playTextToSpeech(text, voice, language as Language)

      // Add a small delay between repetitions if not the last one
      if (i < repeatCount - 1) {
        await new Promise(resolve => setTimeout(resolve, 1500))
      }
    }

    setPlayingId(null)
    setLastPlayedId(id)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Announcements</h1>
          <p className="text-foreground/60">Create and manage audio announcements in multiple voices & languages</p>
        </div>
      </div>
      <Button onClick={() => {
        setShowForm(!showForm)
        setEditingId(null)
        setFormData({
          title: "",
          content: "",
          voice: settings.defaultVoice as VoiceType,
          language: settings.defaultLanguage,
          repeatCount: settings.defaultRepeatCount || 1,
        })
      }} className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
        <Plus className="w-4 h-4" />
        New Announcement
      </Button>
      {
        showForm && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-2 border border-border rounded-lg bg-background"
                    placeholder="Announcement title"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Message</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full p-2 border border-border rounded-lg bg-background"
                    placeholder="Write announcement message"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Voice</label>
                  <select
                    value={formData.voice}
                    onChange={(e) => setFormData({ ...formData, voice: e.target.value as VoiceType })}
                    className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="standard-male">Male Voice</option>
                    <option value="standard-female">Female Voice</option>
                    <option value="azan-islamic">Islamic Azan</option>
                    <option value="hausa">Hausa</option>
                    <option value="twi">Twi</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Language</label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value as Language })}
                    className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="english">English</option>
                    <option value="hausa">Hausa</option>
                    <option value="twi">Twi</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-1 block">Repeat Count</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.repeatCount}
                    onChange={(e) => setFormData({ ...formData, repeatCount: parseInt(e.target.value) || 1 })}
                    className="w-full p-2 border border-border rounded-lg bg-background"
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                    {editingId ? "Update Announcement" : "Create Announcement"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )
      }

      <div className="space-y-3">
        {announcements.map((ann) => (
          <Card key={ann.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{ann.title}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-foreground/40 hover:text-foreground"
                      onClick={() => {
                        setFormData({
                          title: ann.title,
                          content: ann.content,
                          voice: ann.voice,
                          language: ann.language as Language,
                          repeatCount: ann.repeatCount || 1,
                        })
                        setEditingId(ann.id)
                        setShowForm(true)
                      }}
                    >
                      <Pencil className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">{ann.content}</p>
                  <div className="flex gap-4 text-xs text-foreground/60 mt-2">
                    <span>Voice: {VOICE_OPTIONS[ann.voice]?.name || "Standard"}</span>
                    <span>Language: {ann.language}</span>
                    <span>Repeats: {ann.repeatCount || 1}</span>
                    <span>{ann.date}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => playAnnouncement(ann.id, ann.content, ann.voice, ann.language, ann.repeatCount || 1)}
                  disabled={playingId === ann.id}
                  className="gap-2"
                >
                  <Volume2 className="w-4 h-4" />
                  {playingId === ann.id ? "Playing..." : "Preview"}
                </Button>
                {lastPlayedId === ann.id && playingId !== ann.id && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playAnnouncement(ann.id, ann.content, ann.voice, ann.language, ann.repeatCount || 1)}
                    className="gap-2 ml-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Replay
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
