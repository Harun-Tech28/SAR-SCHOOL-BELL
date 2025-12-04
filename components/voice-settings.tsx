"use client"

import { useState, useEffect } from "react"
import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Play, Volume2 } from "lucide-react"

export function VoiceSettings() {
    const { settings, updateSettings } = useStore()
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
    const [testText, setTestText] = useState("This is a test of the selected voice.")
    const [playingVoice, setPlayingVoice] = useState<string | null>(null)

    useEffect(() => {
        const loadVoices = () => {
            if (typeof window !== "undefined" && window.speechSynthesis) {
                const availableVoices = window.speechSynthesis.getVoices()
                setVoices(availableVoices)
            }
        }

        loadVoices()

        if (typeof window !== "undefined" && window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = loadVoices
        }

        return () => {
            if (typeof window !== "undefined" && window.speechSynthesis) {
                window.speechSynthesis.onvoiceschanged = null
            }
        }
    }, [])

    const handleTestVoice = (voiceName: string) => {
        if (typeof window === "undefined" || !window.speechSynthesis) return

        window.speechSynthesis.cancel()

        const voice = voices.find((v) => v.name === voiceName)
        if (!voice) return

        const utterance = new SpeechSynthesisUtterance(testText)
        utterance.voice = voice
        utterance.onstart = () => setPlayingVoice(voiceName)
        utterance.onend = () => setPlayingVoice(null)
        utterance.onerror = () => setPlayingVoice(null)

        window.speechSynthesis.speak(utterance)
    }

    const handleMappingChange = (type: "male" | "female", voiceName: string) => {
        updateSettings({
            browserVoiceMapping: {
                ...settings.browserVoiceMapping,
                [type]: voiceName,
            },
        })
    }

    // Filter for English voices primarily, but allow others
    const englishVoices = voices.filter((v) => v.lang.startsWith("en"))
    const otherVoices = voices.filter((v) => !v.lang.startsWith("en"))

    // Helper to identify "Natural" voices
    const isNatural = (name: string) => name.toLowerCase().includes("natural") || name.toLowerCase().includes("google")

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Mic className="w-5 h-5" />
                    Browser Voice Selection
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                    <p className="mb-2">
                        Select specific browser voices to be used when "Standard Male" or "Standard Female" is chosen.
                        Voices marked as <strong>Natural</strong> or <strong>Google</strong> usually sound the best.
                    </p>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-blue-200 dark:border-blue-800">
                        <span className="font-semibold">Missing voices?</span>
                        <span>"Natural" voices may require an internet connection.</span>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="ml-auto h-8"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Male Voice Mapping */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground block">Preferred Male Voice</label>
                        <div className="flex gap-2">
                            <select
                                value={settings.browserVoiceMapping?.male || ""}
                                onChange={(e) => handleMappingChange("male", e.target.value)}
                                className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground text-sm"
                            >
                                <option value="">-- System Default --</option>
                                <optgroup label="English Voices">
                                    {englishVoices.map((voice) => (
                                        <option key={voice.name} value={voice.name}>
                                            {voice.name} {isNatural(voice.name) ? "(Natural)" : ""}
                                        </option>
                                    ))}
                                </optgroup>
                                <optgroup label="Other Languages">
                                    {otherVoices.map((voice) => (
                                        <option key={voice.name} value={voice.name}>
                                            {voice.name} ({voice.lang})
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => settings.browserVoiceMapping?.male && handleTestVoice(settings.browserVoiceMapping.male)}
                                disabled={!settings.browserVoiceMapping?.male || playingVoice === settings.browserVoiceMapping.male}
                            >
                                {playingVoice === settings.browserVoiceMapping?.male ? (
                                    <Volume2 className="w-4 h-4 animate-pulse" />
                                ) : (
                                    <Play className="w-4 h-4" />
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Female Voice Mapping */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground block">Preferred Female Voice</label>
                        <div className="flex gap-2">
                            <select
                                value={settings.browserVoiceMapping?.female || ""}
                                onChange={(e) => handleMappingChange("female", e.target.value)}
                                className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground text-sm"
                            >
                                <option value="">-- System Default --</option>
                                <optgroup label="English Voices">
                                    {englishVoices.map((voice) => (
                                        <option key={voice.name} value={voice.name}>
                                            {voice.name} {isNatural(voice.name) ? "(Natural)" : ""}
                                        </option>
                                    ))}
                                </optgroup>
                                <optgroup label="Other Languages">
                                    {otherVoices.map((voice) => (
                                        <option key={voice.name} value={voice.name}>
                                            {voice.name} ({voice.lang})
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => settings.browserVoiceMapping?.female && handleTestVoice(settings.browserVoiceMapping.female)}
                                disabled={!settings.browserVoiceMapping?.female || playingVoice === settings.browserVoiceMapping.female}
                            >
                                {playingVoice === settings.browserVoiceMapping?.female ? (
                                    <Volume2 className="w-4 h-4 animate-pulse" />
                                ) : (
                                    <Play className="w-4 h-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-border">
                    <label className="text-sm font-semibold text-foreground mb-2 block">Test Phrase</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={testText}
                            onChange={(e) => setTestText(e.target.value)}
                            className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground text-sm"
                            placeholder="Enter text to test voices..."
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
