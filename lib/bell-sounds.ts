/**
 * Bell Sound Generation using Web Audio API
 * Generates pleasant tones for different bell types
 */

import {
    playBrassSchoolBell,
    playVintageBell,
    playMechanicalBell,
    playFireAlarmBell,
    playRecessBell
} from './bell-sounds-extended'

export type BellType =
    | 'none'  // No bell sound - voice only
    | 'bell'
    | 'announcement'
    | 'chime'
    | 'electronic-bell'
    | 'westminster-chimes'
    | 'double-ring'
    | 'triple-ring'
    | 'long-ring'
    | 'emergency-alert'
    | 'dismissal-bell'
    | 'adhan-call'
    | 'islamic-chime'
    | 'prayer-bell'
    // New natural school bell sounds
    | 'classic-hand-bell'
    | 'brass-school-bell'
    | 'vintage-bell'
    | 'mechanical-bell'
    | 'fire-alarm-bell'
    | 'recess-bell'
    // Ghanaian traditional school bells
    | 'ghana-hand-bell'
    | 'ghana-assembly-bell'
    | 'ghana-break-bell'

/**
 * Play a bell sound based on the type
 */
export const playBellSound = (type: BellType): void => {
    // If 'none' is selected, don't play any bell sound
    if (type === 'none') {
        console.log('[BellSound] No bell selected - voice only mode')
        return
    }

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

    switch (type) {
        case 'bell':
            playSchoolBell(audioContext)
            break
        case 'announcement':
            playAnnouncementTone(audioContext)
            break
        case 'chime':
            playChime(audioContext)
            break
        case 'electronic-bell':
            playElectronicBell(audioContext)
            break
        case 'westminster-chimes':
            playWestminsterChimes(audioContext)
            break
        case 'double-ring':
            playDoubleRing(audioContext)
            break
        case 'triple-ring':
            playTripleRing(audioContext)
            break
        case 'long-ring':
            playLongRing(audioContext)
            break
        case 'emergency-alert':
            playEmergencyAlert(audioContext)
            break
        case 'dismissal-bell':
            playDismissalBell(audioContext)
            break
        case 'adhan-call':
            playAdhanCall(audioContext)
            break
        case 'islamic-chime':
            playIslamicChime(audioContext)
            break
        case 'prayer-bell':
            playPrayerBell(audioContext)
            break
        // New natural school bell sounds
        case 'classic-hand-bell':
            playClassicHandBell(audioContext)
            break
        case 'brass-school-bell':
            playBrassSchoolBell(audioContext)
            break
        case 'vintage-bell':
            playVintageBell(audioContext)
            break
        case 'mechanical-bell':
            playMechanicalBell(audioContext)
            break
        case 'fire-alarm-bell':
            playFireAlarmBell(audioContext)
            break
        case 'recess-bell':
            playRecessBell(audioContext)
            break
        // Ghanaian traditional school bells
        case 'ghana-hand-bell':
            playGhanaHandBell(audioContext)
            break
        case 'ghana-assembly-bell':
            playGhanaAssemblyBell(audioContext)
            break
        case 'ghana-break-bell':
            playGhanaBreakBell(audioContext)
            break
    }
}

/**
 * Helper function to add metallic shimmer effect
 */
const addMetallicShimmer = (audioContext: AudioContext, startTime: number, duration: number, volume: number): void => {
    // Create white noise for metallic shimmer
    const bufferSize = audioContext.sampleRate * duration
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
    const data = buffer.getChannelData(0)

    // Generate white noise
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * volume
    }

    const noise = audioContext.createBufferSource()
    const filter = audioContext.createBiquadFilter()
    const gainNode = audioContext.createGain()

    noise.buffer = buffer

    // High-pass filter for metallic shimmer
    filter.type = 'highpass'
    filter.frequency.setValueAtTime(4000, startTime)

    gainNode.gain.setValueAtTime(volume, startTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

    noise.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(audioContext.destination)

    noise.start(startTime)
    noise.stop(startTime + duration)
}

// ============================================================================
// GHANAIAN TRADITIONAL SCHOOL BELLS
// ============================================================================

/**
 * Ghana Hand Bell - Traditional manual hand-rung bell
 * Mimics the sound of a teacher ringing a hand bell manually
 * Pattern: CLANG-CLANG-CLANG with irregular timing (human-like)
 */
const playGhanaHandBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    
    // Manual ringing pattern - slightly irregular timing like a real person
    const ringTimes = [0, 0.35, 0.68, 1.05, 1.38, 1.75]
    
    ringTimes.forEach((time) => {
        playGhanaianBellStrike(audioContext, now + time, 0.4, 1.0)
    })
}

/**
 * Ghana Assembly Bell - Longer continuous ringing for assembly
 * Pattern: Continuous rapid ringing for 4-5 seconds
 */
const playGhanaAssemblyBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const strikeCount = 15
    const baseInterval = 0.28
    
    for (let i = 0; i < strikeCount; i++) {
        // Add slight variation to timing (human factor)
        const variation = (Math.random() - 0.5) * 0.05
        const strikeTime = now + (i * baseInterval) + variation
        
        // Vary intensity slightly
        const intensity = 0.9 + (Math.random() * 0.2)
        
        playGhanaianBellStrike(audioContext, strikeTime, 0.35, intensity)
    }
}

/**
 * Ghana Break Bell - Short burst for break time
 * Pattern: Quick 3-4 rings
 */
const playGhanaBreakBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    
    // Quick burst pattern
    const ringTimes = [0, 0.3, 0.58, 0.88]
    
    ringTimes.forEach((time) => {
        playGhanaianBellStrike(audioContext, now + time, 0.38, 1.0)
    })
}

/**
 * Helper: Create a single Ghanaian bell strike
 * Mimics the metallic CLANG sound of a real hand bell
 */
const playGhanaianBellStrike = (
    audioContext: AudioContext,
    startTime: number,
    duration: number,
    intensity: number
): void => {
    // Ghanaian school bells have a distinctive metallic clang
    // Multiple inharmonic frequencies create the "clang" sound
    
    // Ensure startTime is never negative
    const safeStartTime = Math.max(startTime, audioContext.currentTime)
    
    // Fundamental and overtones (slightly detuned for realism)
    const frequencies = [
        850,   // Fundamental
        1702,  // 2nd harmonic (slightly sharp)
        2548,  // 3rd harmonic
        3405,  // 4th harmonic
        4250,  // 5th harmonic
        5100,  // 6th harmonic
        6800,  // High overtone
        8500   // Very high overtone
    ]
    
    const gains = [0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.08, 0.05]
    
    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        // Use triangle wave for metallic quality
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(freq, safeStartTime)
        
        // Sharp attack, quick decay (characteristic of metal bell)
        const adjustedGain = gains[index] * intensity
        gainNode.gain.setValueAtTime(0.01, safeStartTime)
        gainNode.gain.exponentialRampToValueAtTime(adjustedGain, safeStartTime + 0.01) // Very fast attack
        gainNode.gain.exponentialRampToValueAtTime(adjustedGain * 0.3, safeStartTime + 0.08) // Quick initial decay
        gainNode.gain.exponentialRampToValueAtTime(0.01, safeStartTime + duration) // Long tail
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.start(safeStartTime)
        oscillator.stop(safeStartTime + duration)
    })
    
    // Add metallic "clang" noise component
    const bufferSize = audioContext.sampleRate * 0.05 // 50ms of noise
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate)
    const data = buffer.getChannelData(0)
    
    // Generate metallic noise burst
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.3 * intensity
    }
    
    const noise = audioContext.createBufferSource()
    const noiseFilter = audioContext.createBiquadFilter()
    const noiseGain = audioContext.createGain()
    
    noise.buffer = buffer
    
    // Band-pass filter for metallic character
    noiseFilter.type = 'bandpass'
    noiseFilter.frequency.setValueAtTime(3000, startTime)
    noiseFilter.Q.setValueAtTime(2, startTime)
    
    noiseGain.gain.setValueAtTime(0.4 * intensity, startTime)
    noiseGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.05)
    
    noise.connect(noiseFilter)
    noiseFilter.connect(noiseGain)
    noiseGain.connect(audioContext.destination)
    
    noise.start(startTime)
}

/**
 * Traditional school bell sound
 * Multiple harmonics with decay for realistic bell tone
 */
const playSchoolBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const duration = 2.5

    // Create multiple oscillators for rich bell sound
    const frequencies = [800, 1000, 1200, 1600] // Harmonics
    const gains = [0.3, 0.5, 0.2, 0.1]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, now)

        // Exponential decay for realistic bell
        gainNode.gain.setValueAtTime(gains[index], now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(now)
        oscillator.stop(now + duration)
    })
}

/**
 * Modern electronic bell/buzzer
 * Sharp, clear electronic tone
 */
const playElectronicBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const beepDuration = 0.15
    const beepCount = 3
    const gap = 0.1

    for (let i = 0; i < beepCount; i++) {
        const startTime = now + (beepDuration + gap) * i
        createTone(audioContext, 1200, startTime, beepDuration, 0.4, 'square')
    }
}

/**
 * Westminster chimes (like Big Ben)
 * Classic four-note chime sequence
 */
const playWestminsterChimes = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const noteDuration = 0.6
    const gap = 0.1

    // Westminster quarter chime notes (E-C-D-G)
    const notes = [659.25, 523.25, 587.33, 783.99]

    notes.forEach((freq, index) => {
        const startTime = now + (noteDuration + gap) * index
        createChimeTone(audioContext, freq, startTime, noteDuration + 0.8, 0.3)
    })
}

/**
 * Double ring - two quick rings
 */
const playDoubleRing = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const ringDuration = 0.8
    const gap = 0.3

    // First ring
    playSchoolBellAtTime(audioContext, now, ringDuration)
    // Second ring
    playSchoolBellAtTime(audioContext, now + ringDuration + gap, ringDuration)
}

/**
 * Triple ring - three quick rings
 */
const playTripleRing = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const ringDuration = 0.6
    const gap = 0.2

    for (let i = 0; i < 3; i++) {
        playSchoolBellAtTime(audioContext, now + (ringDuration + gap) * i, ringDuration)
    }
}

/**
 * Long continuous ring
 */
const playLongRing = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const duration = 4.0

    const frequencies = [800, 1000, 1200, 1600]
    const gains = [0.25, 0.4, 0.15, 0.08]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, now)

        // Sustained with slow fade
        gainNode.gain.setValueAtTime(gains[index], now)
        gainNode.gain.setValueAtTime(gains[index], now + duration - 0.5)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(now)
        oscillator.stop(now + duration)
    })
}

/**
 * Emergency alert - urgent siren-like sound
 */
const playEmergencyAlert = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const cycleDuration = 0.4
    const cycles = 6

    for (let i = 0; i < cycles; i++) {
        const startTime = now + cycleDuration * i

        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'sawtooth'

        // Sweep from high to low
        oscillator.frequency.setValueAtTime(1400, startTime)
        oscillator.frequency.exponentialRampToValueAtTime(700, startTime + cycleDuration)

        gainNode.gain.setValueAtTime(0.5, startTime)
        gainNode.gain.setValueAtTime(0.5, startTime + cycleDuration - 0.05)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + cycleDuration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(startTime)
        oscillator.stop(startTime + cycleDuration)
    }
}

/**
 * Dismissal bell - cheerful ascending melody
 */
const playDismissalBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const noteDuration = 0.3
    const gap = 0.05

    // Happy ascending scale (C-D-E-G-C)
    const notes = [523.25, 587.33, 659.25, 783.99, 1046.50]

    notes.forEach((freq, index) => {
        const startTime = now + (noteDuration + gap) * index
        createChimeTone(audioContext, freq, startTime, noteDuration + 0.4, 0.3)
    })
}

/**
 * Attention-getting announcement tone
 * Two-tone alert sound
 */
const playAnnouncementTone = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const toneDuration = 0.3
    const gap = 0.1

    // First tone (higher)
    createTone(audioContext, 1000, now, toneDuration, 0.4)

    // Second tone (lower)
    createTone(audioContext, 800, now + toneDuration + gap, toneDuration, 0.4)

    // Repeat for emphasis
    createTone(audioContext, 1000, now + (toneDuration + gap) * 2, toneDuration, 0.3)
    createTone(audioContext, 800, now + (toneDuration + gap) * 3, toneDuration, 0.3)
}

/**
 * Soft melodic chime
 * Pleasant ascending notes
 */
const playChime = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const noteDuration = 0.4
    const gap = 0.05

    // Ascending melody (C-E-G chord)
    const notes = [523.25, 659.25, 783.99] // C5, E5, G5

    notes.forEach((freq, index) => {
        const startTime = now + (noteDuration + gap) * index
        createChimeTone(audioContext, freq, startTime, noteDuration + 0.5, 0.25)
    })
}

/**
 * Helper function to play school bell at specific time
 */
const playSchoolBellAtTime = (audioContext: AudioContext, startTime: number, duration: number): void => {
    const frequencies = [800, 1000, 1200, 1600]
    const gains = [0.3, 0.5, 0.2, 0.1]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, startTime)

        gainNode.gain.setValueAtTime(gains[index], startTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(startTime)
        oscillator.stop(startTime + duration)
    })
}

/**
 * Helper function to create a simple tone
 */
const createTone = (
    audioContext: AudioContext,
    frequency: number,
    startTime: number,
    duration: number,
    volume: number,
    type: OscillatorType = 'sine'
): void => {
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, startTime)

    gainNode.gain.setValueAtTime(volume, startTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.start(startTime)
    oscillator.stop(startTime + duration)
}

/**
 * Helper function to create a chime tone with harmonics
 */
const createChimeTone = (
    audioContext: AudioContext,
    frequency: number,
    startTime: number,
    duration: number,
    volume: number
): void => {
    // Fundamental frequency
    const oscillator1 = audioContext.createOscillator()
    const gainNode1 = audioContext.createGain()

    oscillator1.type = 'sine'
    oscillator1.frequency.setValueAtTime(frequency, startTime)

    gainNode1.gain.setValueAtTime(volume, startTime)
    gainNode1.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

    oscillator1.connect(gainNode1)
    gainNode1.connect(audioContext.destination)

    // Add subtle harmonic for richness
    const oscillator2 = audioContext.createOscillator()
    const gainNode2 = audioContext.createGain()

    oscillator2.type = 'sine'
    oscillator2.frequency.setValueAtTime(frequency * 2, startTime)

    gainNode2.gain.setValueAtTime(volume * 0.2, startTime)
    gainNode2.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

    oscillator2.connect(gainNode2)
    gainNode2.connect(audioContext.destination)

    oscillator1.start(startTime)
    oscillator1.stop(startTime + duration)
    oscillator2.start(startTime)
    oscillator2.stop(startTime + duration)
}

/**
 * Adhan Call - Islamic call to prayer tone
 * Reverent, melodic tone inspired by the call to prayer
 */
const playAdhanCall = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const noteDuration = 0.8
    const gap = 0.15

    // Melodic sequence inspired by traditional Adhan intervals
    // Using maqam-like intervals (Middle Eastern scale)
    const notes = [
        440.00,  // A
        493.88,  // B
        523.25,  // C
        587.33,  // D
        523.25,  // C (return)
        493.88,  // B
        440.00   // A (return to root)
    ]

    notes.forEach((freq, index) => {
        const startTime = now + (noteDuration + gap) * index
        createPrayerTone(audioContext, freq, startTime, noteDuration + 1.0, 0.25)
    })
}

/**
 * Islamic Chime - Gentle reminder for prayer times
 * Soft, respectful chime
 */
const playIslamicChime = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const noteDuration = 0.5
    const gap = 0.1

    // Peaceful descending pattern
    const notes = [
        783.99,  // G5
        659.25,  // E5
        523.25,  // C5
        392.00   // G4
    ]

    notes.forEach((freq, index) => {
        const startTime = now + (noteDuration + gap) * index
        createPrayerTone(audioContext, freq, startTime, noteDuration + 0.8, 0.2)
    })
}

/**
 * Prayer Bell - Simple, reverent bell for prayer time
 * Single sustained tone with gentle decay
 */
const playPrayerBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const duration = 3.0

    // Lower, more reverent frequencies
    const frequencies = [440, 550, 660]  // A, C#, E (harmonious triad)
    const gains = [0.3, 0.2, 0.1]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, now)

        // Gentle, sustained tone with slow decay
        gainNode.gain.setValueAtTime(gains[index], now)
        gainNode.gain.setValueAtTime(gains[index] * 0.8, now + duration * 0.7)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(now)
        oscillator.stop(now + duration)
    })
}

/**
 * Helper function to create prayer tones with warm character
 */
const createPrayerTone = (
    audioContext: AudioContext,
    frequency: number,
    startTime: number,
    duration: number,
    volume: number
): void => {
    // Fundamental with warm character
    const oscillator1 = audioContext.createOscillator()
    const gainNode1 = audioContext.createGain()

    oscillator1.type = 'sine'
    oscillator1.frequency.setValueAtTime(frequency, startTime)

    // Gentle attack and decay
    gainNode1.gain.setValueAtTime(0.01, startTime)
    gainNode1.gain.exponentialRampToValueAtTime(volume, startTime + 0.1)
    gainNode1.gain.setValueAtTime(volume * 0.7, startTime + duration * 0.6)
    gainNode1.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

    oscillator1.connect(gainNode1)
    gainNode1.connect(audioContext.destination)

    // Add subtle lower harmonic for warmth
    const oscillator2 = audioContext.createOscillator()
    const gainNode2 = audioContext.createGain()

    oscillator2.type = 'sine'
    oscillator2.frequency.setValueAtTime(frequency * 0.5, startTime)

    gainNode2.gain.setValueAtTime(0.01, startTime)
    gainNode2.gain.exponentialRampToValueAtTime(volume * 0.15, startTime + 0.1)
    gainNode2.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

    oscillator2.connect(gainNode2)
    gainNode2.connect(audioContext.destination)

    oscillator1.start(startTime)
    oscillator1.stop(startTime + duration)
    oscillator2.start(startTime)
    oscillator2.stop(startTime + duration)
}

// ============================================================================
// NEW NATURAL SCHOOL BELL SOUNDS
// ============================================================================

/**
 * Classic Hand Bell - Traditional teacher's hand bell
 * High-pitched metallic ring with natural decay
 * Mimics the sound of a brass hand bell being rung
 */
const playClassicHandBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const duration = 3.0

    // Hand bells have a bright, high-pitched fundamental with many harmonics
    const frequencies = [1200, 2400, 3600, 4800, 6000, 7200]
    const gains = [0.4, 0.25, 0.15, 0.1, 0.06, 0.04]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        // Mix of sine and triangle for metallic quality
        oscillator.type = index < 2 ? 'triangle' : 'sine'
        oscillator.frequency.setValueAtTime(freq, now)

        // Quick attack, long decay - characteristic of hand bells
        gainNode.gain.setValueAtTime(0.01, now)
        gainNode.gain.exponentialRampToValueAtTime(gains[index], now + 0.02)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(now)
        oscillator.stop(now + duration)
    })

    // Add slight metallic shimmer with noise
    addMetallicShimmer(audioContext, now, 0.5, 0.08)
}
