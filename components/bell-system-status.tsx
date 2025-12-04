"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Bell, Mic, Settings } from "lucide-react"
import { CompleteBellSystem } from "@/lib/complete-bell-system"
import { useState } from "react"

export function BellSystemStatus() {
  const [isTestingBell, setIsTestingBell] = useState(false)
  const [isTestingVoice, setIsTestingVoice] = useState(false)
  const [isTestingComplete, setIsTestingComplete] = useState(false)

  const systemStatus = CompleteBellSystem.getSystemStatus()

  const testBellOnly = async () => {
    setIsTestingBell(true)
    try {
      const { playBellSound } = await import("@/lib/bell-sounds")
      playBellSound("bell")
      setTimeout(() => setIsTestingBell(false), 3000)
    } catch (error) {
      console.error("Bell test failed:", error)
      setIsTestingBell(false)
    }
  }

  const testVoiceOnly = async () => {
    setIsTestingVoice(true)
    try {
      const { playCustomAnnouncement } = await import("@/lib/high-quality-announcements")
      await playCustomAnnouncement(
        "This is a test of the high-quality AI voice system.",
        { voice: "openai-nova", withTone: false }
      )
    } catch (error) {
      console.error("Voice test failed:", error)
    } finally {
      setIsTestingVoice(false)
    }
  }

  const testCompleteBell = async () => {
    setIsTestingComplete(true)
    try {
      await CompleteBellSystem.playBellSequence(
        "Complete System Test",
        "This demonstrates the complete bell system with perfect tone and voice synchronization.",
        {
          bellType: "bell",
          voice: "openai-nova",
          useHighQualityVoice: true,
          repeatCount: 1
        }
      )
    } catch (error) {
      console.error("Complete bell test failed:", error)
    } finally {
      setIsTestingComplete(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {/* System Status Card with Enhanced Shadow */}
      <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#DC2626] to-[#B91C1C] shadow-lg">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Bell System Status
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-foreground/60">Bell Tones Available</span>
              <span className="font-semibold text-green-600">{systemStatus.bellTypes}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/60">Premium Voices</span>
              <span className="font-semibold text-green-600">{systemStatus.voices}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/60">System Status</span>
              <span className="font-semibold text-green-600">Ready</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-foreground/60">Integration</span>
              <span className="font-semibold text-green-600">Active</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-semibold mb-2">Features Active:</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              {systemStatus.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-foreground/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Controls Card with Enhanced Shadow */}
      <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-border/50 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-[#FCD34D]/5 to-transparent">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] shadow-lg">
              <Volume2 className="w-5 h-5 text-gray-900" />
            </div>
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Test Bell System
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Button
              onClick={testBellOnly}
              disabled={isTestingBell}
              variant="outline"
              className="w-full justify-start gap-3 h-12 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/50"
            >
              <div className="p-1.5 rounded-md bg-blue-500/10">
                <Bell className="w-4 h-4 text-blue-600" />
              </div>
              <span className="font-medium">
                {isTestingBell ? "Playing Bell Tone..." : "Test Bell Tone Only"}
              </span>
            </Button>

            <Button
              onClick={testVoiceOnly}
              disabled={isTestingVoice}
              variant="outline"
              className="w-full justify-start gap-3 h-12 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border/50"
            >
              <div className="p-1.5 rounded-md bg-purple-500/10">
                <Mic className="w-4 h-4 text-purple-600" />
              </div>
              <span className="font-medium">
                {isTestingVoice ? "Playing Voice..." : "Test AI Voice Only"}
              </span>
            </Button>

            <Button
              onClick={testCompleteBell}
              disabled={isTestingComplete}
              className="w-full justify-start gap-3 h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-1.5 rounded-md bg-white/20">
                <Volume2 className="w-4 h-4" />
              </div>
              <span className="font-medium">
                {isTestingComplete ? "Playing Complete Bell..." : "Test Complete Bell System"}
              </span>
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="text-sm text-foreground/60">
              <p className="mb-2"><strong>Complete Bell System:</strong></p>
              <p>🔔 Plays bell tone first</p>
              <p>🗣️ Follows with AI voice announcement</p>
              <p>🎯 Perfect synchronization</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}