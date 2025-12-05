"use client"

import { useState, useEffect } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SettingsIcon, Volume2, Clock, Mic, Wifi, Sparkles, Key, Monitor, Download, Upload } from "lucide-react"
import { VOICE_OPTIONS } from "@/lib/voice-utils"
import { AudioUpload } from "@/components/audio-upload"
import { PWAStatus } from "@/components/pwa-status"
import { audioStorage, type AudioMetadata } from "@/lib/audio-storage"
import type { VoiceType } from "@/lib/store"
import { isElectron } from "@/lib/electron-utils"
import { printStorageDiagnostics, testPersistence, exportLocalStorage } from "@/lib/storage-diagnostics"

export function Settings() {
  const { settings, updateSettings } = useStore()
  const [tempSettings, setTempSettings] = useState(settings)
  const [availableAudios, setAvailableAudios] = useState<AudioMetadata[]>([])
  const [autoStartEnabled, setAutoStartEnabled] = useState(false)
  const [isElectronApp, setIsElectronApp] = useState(false)

  useEffect(() => {
    const loadAudios = async () => {
      const audios = await audioStorage.listAudios()
      setAvailableAudios(audios)
    }
    loadAudios()

    // Check if running in Electron
    setIsElectronApp(isElectron())

    // Load Electron settings
    if (isElectron() && window.electronAPI) {
      window.electronAPI.getAutoStart().then((result) => {
        if (result.success && result.enabled !== undefined) {
          setAutoStartEnabled(result.enabled)
        }
      })
    }
  }, [])

  const handleSave = () => {
    updateSettings(tempSettings)
    alert("Settings saved successfully!")
  }

  const handleAutoStartToggle = async (enabled: boolean) => {
    if (!window.electronAPI) return

    const result = await window.electronAPI.setAutoStart(enabled)
    if (result.success) {
      setAutoStartEnabled(enabled)
      alert(`Auto-start ${enabled ? 'enabled' : 'disabled'} successfully!`)
    } else {
      alert(`Failed to ${enabled ? 'enable' : 'disable'} auto-start: ${result.error}`)
    }
  }

  const handleExportData = async () => {
    if (!window.electronAPI) return

    const result = await window.electronAPI.exportData()
    if (result.success) {
      alert('Data exported successfully!')
    } else {
      alert(`Failed to export data: ${result.error}`)
    }
  }

  const handleImportData = async () => {
    if (!window.electronAPI) return

    // This would typically open a file dialog
    // For now, we'll just show a message
    alert('Import functionality will open a file dialog to select data to import')
  }

  // Group voices by provider
  // Group voices by provider
  type VoiceOptionWithKey = typeof VOICE_OPTIONS[keyof typeof VOICE_OPTIONS] & { key: VoiceType }

  const groupedVoices = Object.entries(VOICE_OPTIONS).reduce((acc, [key, option]) => {
    let group = "Browser Voices (Free)"
    if (key.startsWith("openai")) group = "OpenAI (Natural)"
    if (key.startsWith("elevenlabs")) group = "ElevenLabs (Premium)"
    if (key.startsWith("azure")) group = "Azure (Standard)"

    if (!acc[group]) acc[group] = [] as VoiceOptionWithKey[]
    acc[group].push({ key: key as VoiceType, ...option })
    return acc
  }, {} as Record<string, VoiceOptionWithKey[]>)

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

        {/* AI Voice Configuration - Hide in Electron */}
        {!isElectronApp && (
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
        )}

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

        {/* Electron Desktop Features */}
        {isElectronApp && (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-500" />
                Desktop Application Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Auto-start */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">System Integration</h3>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="auto-start"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      checked={autoStartEnabled}
                      onChange={(e) => handleAutoStartToggle(e.target.checked)}
                    />
                    <label htmlFor="auto-start" className="text-sm font-medium leading-none">
                      Start automatically when computer boots
                    </label>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2 ml-6">
                    The bell system will launch automatically when you log in to your computer
                  </p>
                </div>

                {/* Data Export/Import */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Data Management</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleExportData}
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Export Data
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleImportData}
                      className="flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Import Data
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/60 mt-2">
                    Backup or restore your settings, timetables, and student data
                  </p>
                </div>

                {/* Offline Voice Info */}
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold mb-2">Offline Voice Synthesis</h3>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      ✓ Running in desktop mode with offline voice synthesis
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                      All voice synthesis works without internet connection using bundled voice engines
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* PWA Status - Only show if not in Electron */}
        {!isElectronApp && (
          <div className="lg:col-span-2">
            <PWAStatus />
          </div>
        )}
      </div>

      {/* Storage Diagnostics */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="w-5 h-5 text-orange-500" />
            Storage Diagnostics & Backup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-foreground/60">
              Use these tools to diagnose storage issues and backup your data.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  printStorageDiagnostics()
                  alert('Storage diagnostics printed to console. Press F12 to view.')
                }}
              >
                Run Diagnostics
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const result = testPersistence()
                  if (result) {
                    alert('✅ Storage is working correctly!')
                  } else {
                    alert('❌ Storage test failed! Check console for details.')
                  }
                }}
              >
                Test Storage
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const data = exportLocalStorage()
                  const blob = new Blob([data], { type: 'application/json' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `school-bell-backup-${Date.now()}.json`
                  a.click()
                  URL.revokeObjectURL(url)
                  alert('✅ Backup downloaded!')
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Backup Data
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const input = document.createElement('input')
                  input.type = 'file'
                  input.accept = '.json'
                  input.onchange = (e: any) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (event) => {
                        try {
                          const { importLocalStorage } = require('@/lib/storage-diagnostics')
                          const result = importLocalStorage(event.target?.result as string)
                          if (result) {
                            alert('✅ Data restored! Refreshing page...')
                            window.location.reload()
                          } else {
                            alert('❌ Failed to restore data. Check console for details.')
                          }
                        } catch (error) {
                          alert('❌ Failed to restore data: ' + error)
                        }
                      }
                      reader.readAsText(file)
                    }
                  }
                  input.click()
                }}
              >
                <Upload className="w-4 h-4 mr-2" />
                Restore Backup
              </Button>
            </div>
            
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>⚠️ Important:</strong> If your settings are being lost when you turn off your device:
              </p>
              <ul className="text-xs text-yellow-700 dark:text-yellow-300 mt-2 ml-4 list-disc space-y-1">
                <li>Make sure you're not in "Incognito/Private" browsing mode</li>
                <li>Check that your browser allows localStorage</li>
                <li>Try backing up your data regularly</li>
                <li>Consider using the Desktop app (Electron) for better persistence</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-2 mt-8 flex gap-3">
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
