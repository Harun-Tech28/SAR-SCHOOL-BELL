"use client"

import { useState, useEffect } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SettingsIcon, Volume2, Clock, Mic, Wifi, Sparkles, Key } from "lucide-react"
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

  // Group voices by provider
  const groupedVoices = Object.entries(VOICE_OPTIONS).reduce((acc, [key, option]) => {
    let group = "Browser Voices (Free)"
    if (key.startsWith("openai")) group = "OpenAI (Natural)"
    if (key.startsWith("elevenlabs")) group = "ElevenLabs (Premium)"
    if (key.startsWith("azure")) group = "Azure (Standard)"

    if (!acc[group]) acc[group] = []
    acc[group].push({ key: key as VoiceType, ...option })
    return acc
  }, {} as Record<string, typeof VOICE_OPTIONS[keyof typeof VOICE_OPTIONS] & { key: VoiceType }[]>)

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
                {Object.entries(groupedVoices).map(([group, voices]) => (
                  <optgroup key={group} label={group}>
                    {voices.map((voice: any) => (
                      <option key={voice.key} value={voice.key}>
                        {voice.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
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

        {/* AI Voice Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              AI Voice Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="ai-enabled"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                checked={tempSettings.aiVoice?.aiVoiceEnabled ?? false}
                onChange={(e) =>
                  setTempSettings({
                    ...tempSettings,
                    aiVoice: {
                      ...tempSettings.aiVoice!,
                      aiVoiceEnabled: e.target.checked
                    }
                  })
                }
              />
              <label htmlFor="ai-enabled" className="text-sm font-medium leading-none">
                Enable Natural AI Voices
              </label>
            </div>

            {tempSettings.aiVoice?.aiVoiceEnabled && (
              <div className="space-y-4 border-t pt-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Primary Provider</label>
                  <select
                    value={tempSettings.aiVoice.primaryProvider}
                    onChange={(e) =>
                      setTempSettings({
                        ...tempSettings,
                        aiVoice: {
                          ...tempSettings.aiVoice!,
                          primaryProvider: e.target.value as any
                        }
                      })
                    }
                    className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
                  >
                    <option value="openai">OpenAI (Best Quality)</option>
                    <option value="elevenlabs">ElevenLabs (Most Natural)</option>
                    <option value="azure">Azure (Fastest)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <Key className="w-4 h-4" /> API Keys
                  </h3>

                  {/* OpenAI Config */}
                  <div className="p-3 bg-background/50 rounded-lg border">
                    <label className="text-xs font-medium block mb-1">OpenAI API Key</label>
                    <input
                      type="password"
                      placeholder="sk-..."
                      value={tempSettings.aiVoice.providerConfigs.openai.apiKey}
                      onChange={(e) =>
                        setTempSettings({
                          ...tempSettings,
                          aiVoice: {
                            ...tempSettings.aiVoice!,
                            providerConfigs: {
                              ...tempSettings.aiVoice!.providerConfigs,
                              openai: {
                                ...tempSettings.aiVoice!.providerConfigs.openai,
                                apiKey: e.target.value,
                                enabled: !!e.target.value
                              }
                            }
                          }
                        })
                      }
                      className="w-full p-2 text-sm border border-border rounded bg-background"
                    />
                  </div>

                  {/* ElevenLabs Config */}
                  <div className="p-3 bg-background/50 rounded-lg border">
                    <label className="text-xs font-medium block mb-1">ElevenLabs API Key</label>
                    <input
                      type="password"
                      placeholder="xi-..."
                      value={tempSettings.aiVoice.providerConfigs.elevenlabs.apiKey}
                      onChange={(e) =>
                        setTempSettings({
                          ...tempSettings,
                          aiVoice: {
                            ...tempSettings.aiVoice!,
                            providerConfigs: {
                              ...tempSettings.aiVoice!.providerConfigs,
                              elevenlabs: {
                                ...tempSettings.aiVoice!.providerConfigs.elevenlabs,
                                apiKey: e.target.value,
                                enabled: !!e.target.value
                              }
                            }
                          }
                        })
                      }
                      className="w-full p-2 text-sm border border-border rounded bg-background"
                    />
                  </div>

                  {/* Azure Config */}
                  <div className="p-3 bg-background/50 rounded-lg border space-y-2">
                    <div>
                      <label className="text-xs font-medium block mb-1">Azure Speech Key</label>
                      <input
                        type="password"
                        value={tempSettings.aiVoice.providerConfigs.azure.apiKey}
                        onChange={(e) =>
                          setTempSettings({
                            ...tempSettings,
                            aiVoice: {
                              ...tempSettings.aiVoice!,
                              providerConfigs: {
                                ...tempSettings.aiVoice!.providerConfigs,
                                azure: {
                                  ...tempSettings.aiVoice!.providerConfigs.azure,
                                  apiKey: e.target.value,
                                  enabled: !!e.target.value && !!tempSettings.aiVoice!.providerConfigs.azure.endpoint
                                }
                              }
                            }
                          })
                        }
                        className="w-full p-2 text-sm border border-border rounded bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1">Azure Region (e.g., eastus)</label>
                      <input
                        type="text"
                        placeholder="eastus"
                        value={tempSettings.aiVoice.providerConfigs.azure.endpoint?.split('.')[0].replace('https://', '') || ''}
                        onChange={(e) => {
                          const region = e.target.value;
                          const endpoint = region ? `https://${region}.tts.speech.microsoft.com/` : '';
                          setTempSettings({
                            ...tempSettings,
                            aiVoice: {
                              ...tempSettings.aiVoice!,
                              providerConfigs: {
                                ...tempSettings.aiVoice!.providerConfigs,
                                azure: {
                                  ...tempSettings.aiVoice!.providerConfigs.azure,
                                  endpoint: endpoint,
                                  enabled: !!tempSettings.aiVoice!.providerConfigs.azure.apiKey && !!endpoint
                                }
                              }
                            }
                          })
                        }}
                        className="w-full p-2 text-sm border border-border rounded bg-background"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
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

        {/* Custom Audio Library */}
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

        {/* Background & Offline */}
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
        <div className="lg:col-span-2">
          <PWAStatus />
        </div>
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
