/**
 * Extended Natural School Bell Sounds
 * Additional realistic bell sounds for the school bell system
 */

/**
 * Brass School Bell - Large brass bell with deep resonance
 * Classic school bell mounted on wall, deep and authoritative
 */
export const playBrassSchoolBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const duration = 4.0

    // Lower frequencies for larger brass bell
    const frequencies = [600, 750, 900, 1200, 1500, 1800, 2400]
    const gains = [0.5, 0.4, 0.3, 0.2, 0.12, 0.08, 0.05]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(freq, now)

        // Instant strike, long resonance
        gainNode.gain.setValueAtTime(gains[index], now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(now)
        oscillator.stop(now + duration)
    })

    // Add metallic overtones
    addMetallicOvertones(audioContext, now, duration, 0.15)
}

/**
 * Vintage Bell - Old-fashioned mechanical bell
 * Warm, slightly muffled tone like bells from the 1950s-60s
 */
export const playVintageBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const duration = 3.5

    // Slightly detuned harmonics for vintage character
    const frequencies = [820, 1015, 1230, 1640]
    const gains = [0.4, 0.5, 0.25, 0.15]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        const filter = audioContext.createBiquadFilter()

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, now)

        // Low-pass filter for muffled vintage sound
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(2000, now)
        filter.Q.setValueAtTime(1, now)

        gainNode.gain.setValueAtTime(gains[index], now)
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration)

        oscillator.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(now)
        oscillator.stop(now + duration)
    })
}

/**
 * Mechanical Bell - Motorized bell with continuous ringing
 * Rapid mechanical striking like electric school bells
 */
export const playMechanicalBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const strikeDuration = 0.12
    const strikeCount = 12
    const strikeInterval = 0.15

    for (let i = 0; i < strikeCount; i++) {
        const strikeTime = now + (i * strikeInterval)
        playMechanicalStrike(audioContext, strikeTime, strikeDuration)
    }
}

/**
 * Fire Alarm Bell - Continuous loud ringing
 * Urgent, loud, continuous bell for emergencies
 */
export const playFireAlarmBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const strikeDuration = 0.1
    const strikeCount = 20
    const strikeInterval = 0.12

    for (let i = 0; i < strikeCount; i++) {
        const strikeTime = now + (i * strikeInterval)
        playFireAlarmStrike(audioContext, strikeTime, strikeDuration)
    }
}

/**
 * Recess Bell - Cheerful, energetic bell
 * Happy sound for break time and recess
 */
export const playRecessBell = (audioContext: AudioContext): void => {
    const now = audioContext.currentTime
    const ringDuration = 0.6
    const gap = 0.15

    // Three cheerful rings
    for (let i = 0; i < 3; i++) {
        const startTime = now + (ringDuration + gap) * i
        playCheerfulRing(audioContext, startTime, ringDuration)
    }
}

// Helper functions

const playMechanicalStrike = (audioContext: AudioContext, startTime: number, duration: number): void => {
    const frequencies = [900, 1100, 1800, 2200]
    const gains = [0.35, 0.45, 0.2, 0.12]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(freq, startTime)

        gainNode.gain.setValueAtTime(gains[index], startTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(startTime)
        oscillator.stop(startTime + duration)
    })
}

const playFireAlarmStrike = (audioContext: AudioContext, startTime: number, duration: number): void => {
    const frequencies = [1000, 1200, 2000, 2400, 3000]
    const gains = [0.4, 0.5, 0.3, 0.2, 0.15]

    frequencies.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'square'
        oscillator.frequency.setValueAtTime(freq, startTime)

        gainNode.gain.setValueAtTime(gains[index], startTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(startTime)
        oscillator.stop(startTime + duration)
    })
}

const playCheerfulRing = (audioContext: AudioContext, startTime: number, duration: number): void => {
    const frequencies = [1000, 1250, 1500, 2000]
    const gains = [0.35, 0.45, 0.25, 0.15]

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

const addMetallicOvertones = (audioContext: AudioContext, startTime: number, duration: number, volume: number): void => {
    // Add high-frequency metallic shimmer
    const frequencies = [3000, 4500, 6000, 7500]
    
    frequencies.forEach((freq) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, startTime)

        gainNode.gain.setValueAtTime(volume * 0.3, startTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration * 0.3)

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.start(startTime)
        oscillator.stop(startTime + duration * 0.3)
    })
}
