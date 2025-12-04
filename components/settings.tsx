"use client"

import { useState, useEffect } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SettingsIcon, Volume2, Clock, Mic, Wifi } from "lucide-react"
import { VOICE_OPTIONS } from "@/lib/voice-utils"
import { AudioUpload } from "@/components/audio-upload"
import { PWAStatus } from "@/components/pwa-status"
import { audioStorage, type AudioMetadata } from "@/lib/audio-storage"
import type { VoiceType } from "@/lib/store"

export function Settings() {
  const { settings, updateSettings } = useStore()
  const [tempSettings, setTempSettings] = useState(settings)
  const [availableAudios, setAvailableAudios] = useState<AudioMetadata[]>([])

  useEffect(() => {
    const loadAudios = async () => {
      const audios = await audioStorage.listAudios()
      setAvailableAudios(audios)
    }
    loadAudios()
  }, [])

  const handleSave = () => {
    updateSettings(tempSettings)
    alert("Settings saved successfully!")
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">System Settings</h1>
        <p className="text-foreground/60">Configure voices, languages, and Islamic prayer times</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Default Voice & Language */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              Default Voice & Language
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Default Voice</label>
              <select
                value={tempSettings.defaultVoice}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    defaultVoice: e.target.value as VoiceType,
                  })
                }
                className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
              >
                <optgroup label="Browser Voices (Free)">
                  <option value="standard-male">Male Voice</option>
                  <option value="standard-female">Female Voice</option>
                  <option value="azan-islamic">Islamic Azan</option>
                  <option value="hausa">Hausa</option>
                  <option value="twi">Twi</option>
                  <option value="arabic">Arabic</option>
                </optgroup>
              </select>
              <p className="text-xs text-foreground/60 mt-2">{VOICE_OPTIONS[tempSettings.defaultVoice].description}</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Default Language</label>
              <select
                value={tempSettings.defaultLanguage}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    defaultLanguage: e.target.value as any,
                  })
                }
                className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="english">English</option>
                <option value="hausa">Hausa</option>
                <option value="twi">Twi</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Default Repeat Count</label>
              <input
                type="number"
                min="1"
                max="10"
                value={tempSettings.defaultRepeatCount}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    defaultRepeatCount: parseInt(e.target.value) || 1,
                  })
                }
                className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
              />
              <p className="text-xs text-foreground/60 mt-1">How many times to repeat the entire sequence (bell + voice)</p>
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Bell Rings Before Voice</label>
              <input
                type="number"
                min="1"
                max="10"
                value={tempSettings.defaultBellRingsBeforeVoice || 3}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    defaultBellRingsBeforeVoice: parseInt(e.target.value) || 3,
                  })
                }
                className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
              />
              <p className="text-xs text-foreground/60 mt-1">How many times to ring the bell BEFORE the voice plays</p>
            </div>
          </CardContent>
        </Card>

        {/* Islamic Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Islamic Prayer Times (Azan)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={tempSettings.azanEnabled}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    azanEnabled: e.target.checked,
                  })
                }
                className="w-4 h-4"
              />
              <label className="text-sm font-semibold text-foreground">Enable Azan (Islamic Call to Prayer)</label>
            </div>

            {tempSettings.azanEnabled && tempSettings.prayerTimes && (
              <div className="space-y-3">
                {Object.entries(tempSettings.prayerTimes).map(([prayer, time]) => (
                  <div key={prayer} className="p-3 border border-border rounded-lg bg-background/50">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-foreground capitalize">{prayer} Time</label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-foreground/60 mb-1 block">Time</label>
                        <input
                          type="time"
                          value={time}
                          onChange={(e) =>
                            setTempSettings({
                              ...tempSettings,
                              prayerTimes: {
                                ...tempSettings.prayerTimes!,
                                [prayer]: e.target.value,
                              },
                            })
                          }
                          className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-foreground/60 mb-1 block">Custom Audio (Optional)</label>
                        <select
                          value={tempSettings.prayerAudioIds?.[prayer as keyof typeof tempSettings.prayerAudioIds] || ""}
                          onChange={(e) =>
                            setTempSettings({
                              ...tempSettings,
                              prayerAudioIds: {
                                ...tempSettings.prayerAudioIds,
                                [prayer]: e.target.value || undefined,
                              },
                            })
                          }
                          className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                        >
                          <option value="">Default Azan</option>
                          {availableAudios.map((audio) => (
                            <option key={audio.id} value={audio.id}>
                              {audio.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Custom Audio Library */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="w-5 h-5" />
              Custom Audio Library
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/60 mb-4">
              Upload your own voice recordings or custom sounds to use in timetables and announcements.
              Files are stored locally in your browser.
            </p>
            <AudioUpload />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              Background & Offline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="background-mode"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                checked={tempSettings.backgroundEnabled ?? false}
                onChange={e => setTempSettings({ ...tempSettings, backgroundEnabled: e.target.checked })}
              />
              <label htmlFor="background-mode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Enable background bell playback (runs when app is closed)
              </label>
            </div>
            <p className="text-xs text-foreground/60 mt-2 ml-6">
              Allows the bell system to run in the background using a Service Worker. Requires permission.
            </p>
          </CardContent>
        </Card>

        {/* PWA Status */}
        <PWAStatus />
      </div>

      <div className="mt-8 flex gap-3">
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
          <SettingsIcon className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
        <Button variant="outline" onClick={() => setTempSettings(settings)}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
