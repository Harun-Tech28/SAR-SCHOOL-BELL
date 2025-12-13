"use client"

import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { useState } from "react"
import { playBellSound } from "@/lib/bell-sounds"
import { initializeAudio, getAudioState } from "@/lib/audio-init"
import { playAnnouncement } from "@/lib/voice-utils"

export function AudioTestButton() {
  const [testing, setTesting] = useState(false)
  const [audioState, setAudioState] = useState<string>('unknown')

  const testAudio = async () => {
    setTesting(true)
    console.log('[AudioTest] Starting audio test...')

    try {
      // 1. Initialize audio
      console.log('[AudioTest] Initializing audio context...')
      const initialized = await initializeAudio()
      const state = getAudioState()
      setAudioState(state)
      
      console.log(`[AudioTest] Audio initialized: ${initialized}, State: ${state}`)

      if (!initialized) {
        alert('Failed to initialize audio. Please check browser permissions.')
        setTesting(false)
        return
      }

      // 2. Test bell sound
      console.log('[AudioTest] Playing test bell...')
      await playBellSound('bell')
      
      // 3. Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 4. Test voice
      console.log('[AudioTest] Playing test voice...')
      await playAnnouncement('Audio test successful. You should hear this message.', 'standard-female', 'english', 1)
      
      console.log('[AudioTest] Audio test completed successfully')
    } catch (error) {
      console.error('[AudioTest] Audio test failed:', error)
      alert(`Audio test failed: ${error}`)
    } finally {
      setTesting(false)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={testAudio}
        disabled={testing}
        variant="outline"
        size="sm"
        className="gap-2"
      >
        {testing ? (
          <>
            <VolumeX className="w-4 h-4 animate-pulse" />
            Testing...
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4" />
            Test Audio
          </>
        )}
      </Button>
      {audioState !== 'unknown' && (
        <span className="text-xs text-muted-foreground">
          State: {audioState}
        </span>
      )}
    </div>
  )
}
