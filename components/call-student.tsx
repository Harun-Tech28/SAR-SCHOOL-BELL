"use client"

import { useState } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Volume2 } from "lucide-react"
import { VOICE_OPTIONS, translateMessage, playTextToSpeech } from "@/lib/voice-utils"
import type { VoiceType } from "@/lib/store"

export function CallStudent() {
  const { students, devices, settings, addCallRequest } = useStore()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)
  const [customMessage, setCustomMessage] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("office")
  const [selectedVoice, setSelectedVoice] = useState<VoiceType>(settings.defaultVoice)
  const [selectedLanguage, setSelectedLanguage] = useState(settings.defaultLanguage)
  const [isPlaying, setIsPlaying] = useState(false)

  const templates = [
    { id: "office", text: "should report to the office" },
    { id: "parent", text: "your parent is waiting at the gate" },
    { id: "staff", text: "please come to the staff common room" },
  ]

  const filteredStudents = students.filter((s) =>
    `${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCallStudent = async () => {
    if (!selectedStudent) return

    const student = students.find((s) => s.id === selectedStudent)
    if (!student) return

    const baseMessage =
      customMessage ||
      `Student ${student.firstName} ${student.lastName}, ${templates.find((t) => t.id === selectedTemplate)?.text || ""}`

    const finalMessage = translateMessage(baseMessage, selectedLanguage)

    const request = {
      id: Date.now().toString(),
      studentId: selectedStudent,
      message: finalMessage,
      timestamp: new Date().toISOString(),
      status: "played" as const,
      voice: selectedVoice,
      language: selectedLanguage,
    }

    addCallRequest(request)

    setIsPlaying(true)
    await playTextToSpeech(finalMessage, selectedVoice, selectedLanguage)
    setIsPlaying(false)

    setSelectedStudent(null)
    setCustomMessage("")
  }

  const playAudio = async (text: string, voice: VoiceType) => {
    setIsPlaying(true)
    await playTextToSpeech(text, voice, selectedLanguage)
    setIsPlaying(false)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Call Student</h1>
        <p className="text-foreground/60">Use Text-to-Speech to call students in multiple languages</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Search & Call Student</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Search Student</label>
                <Input
                  placeholder="Type student name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  disabled={isPlaying}
                />
              </div>

              {searchTerm && filteredStudents.length > 0 && (
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Results ({filteredStudents.length})
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {filteredStudents.map((student) => (
                      <button
                        key={student.id}
                        onClick={() => setSelectedStudent(student.id)}
                        disabled={isPlaying}
                        className={`w-full p-3 text-left rounded-lg border-2 transition ${selectedStudent === student.id
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                          : "border-border hover:border-blue-300"
                          } ${isPlaying ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <div className="font-semibold text-foreground">
                          {student.firstName} {student.lastName}
                        </div>
                        <div className="text-sm text-foreground/60">{student.class || "No class assigned"}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedStudent && (
                <>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Message Template</label>
                    <div className="space-y-2">
                      {templates.map((tmpl) => (
                        <button
                          key={tmpl.id}
                          onClick={() => setSelectedTemplate(tmpl.id)}
                          disabled={isPlaying}
                          className={`w-full p-3 text-left rounded-lg border-2 transition ${selectedTemplate === tmpl.id
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : "border-border"
                            } ${isPlaying ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          <div className="font-semibold text-foreground">
                            Student {students.find((s) => s.id === selectedStudent)?.firstName}, {tmpl.text}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Custom Message (Optional)
                    </label>
                    <textarea
                      placeholder="Enter custom message or leave blank to use template..."
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      disabled={isPlaying}
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground disabled:opacity-50"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">Voice Selection</label>
                    <select
                      value={selectedVoice}
                      onChange={(e) => setSelectedVoice(e.target.value as VoiceType)}
                      disabled={isPlaying}
                      className="w-full p-3 border border-border rounded-lg bg-background text-foreground disabled:opacity-50"
                    >
                      <option value="standard-male">Male Voice (English)</option>
                      <option value="standard-female">Female Voice (English)</option>
                      <option value="azan-islamic">Islamic Azan (Arabic)</option>
                      <option value="hausa">Hausa</option>
                      <option value="twi">Twi</option>
                      <option value="arabic">Arabic</option>
                    </select>
                  </div>

                  <Button
                    onClick={handleCallStudent}
                    disabled={isPlaying}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 disabled:opacity-50"
                  >
                    <Volume2 className="w-4 h-4" />
                    {isPlaying ? "Playing..." : "Call Now"}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Speaker Zones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {devices.map((device) => (
                <div key={device.id} className="p-3 rounded-lg bg-muted flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{device.name}</div>
                    <div className={`text-xs ${device.status === "online" ? "text-green-600" : "text-red-600"}`}>
                      {device.status === "online" ? "● Online" : "● Offline"}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/70 space-y-2">
              <p>✓ Select a student</p>
              <p>✓ Select message template</p>
              <p>✓ Click "Call Now" to play</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
