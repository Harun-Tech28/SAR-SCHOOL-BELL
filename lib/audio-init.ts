/**
 * Audio Initialization Utility
 * Ensures audio context is properly initialized and resumed
 * This is critical for browser audio to work properly
 */

let globalAudioContext: AudioContext | null = null

/**
 * Get or create the global audio context
 * This ensures we reuse the same context across the app
 */
export const getAudioContext = (): AudioContext => {
  if (!globalAudioContext) {
    globalAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    console.log('[AudioInit] Created new AudioContext')
  }
  return globalAudioContext
}

/**
 * Initialize and resume audio context
 * MUST be called from a user interaction (click, touch, etc.)
 */
export const initializeAudio = async (): Promise<boolean> => {
  try {
    const audioContext = getAudioContext()
    
    if (audioContext.state === 'suspended') {
      console.log('[AudioInit] Resuming suspended audio context...')
      await audioContext.resume()
      console.log('[AudioInit] Audio context resumed successfully')
    }
    
    console.log(`[AudioInit] Audio context state: ${audioContext.state}`)
    return audioContext.state === 'running'
  } catch (error) {
    console.error('[AudioInit] Failed to initialize audio:', error)
    return false
  }
}

/**
 * Check if audio is ready to play
 */
export const isAudioReady = (): boolean => {
  if (!globalAudioContext) return false
  return globalAudioContext.state === 'running'
}

/**
 * Get audio context state
 */
export const getAudioState = (): AudioContextState | 'not-initialized' => {
  if (!globalAudioContext) return 'not-initialized'
  return globalAudioContext.state
}

// Auto-initialize on first user interaction
if (typeof window !== 'undefined') {
  const autoInit = () => {
    initializeAudio().then((success) => {
      if (success) {
        console.log('[AudioInit] Auto-initialized audio on user interaction')
        // Remove listeners after successful init
        document.removeEventListener('click', autoInit)
        document.removeEventListener('touchstart', autoInit)
        document.removeEventListener('keydown', autoInit)
      }
    })
  }
  
  document.addEventListener('click', autoInit, { once: true })
  document.addEventListener('touchstart', autoInit, { once: true })
  document.addEventListener('keydown', autoInit, { once: true })
}
