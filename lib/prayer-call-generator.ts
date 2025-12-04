import { PRAYER_PHRASES } from "./ai-voice-constants"

export interface PrayerCallOptions {
  includeArabic?: boolean
  includeTransliteration?: boolean
  includeEnglish?: boolean
  includeBasmala?: boolean
  includeTakbir?: boolean
  customMessage?: string
  voiceStyle?: 'traditional' | 'modern' | 'simple'
}

export interface PrayerCallContent {
  arabic: string
  transliteration: string
  english: string
  combined: string
  metadata: {
    prayer: string
    timestamp: number
    style: string
    components: string[]
  }
}

export class PrayerCallGenerator {
  private readonly TAKBIR = "الله أكبر الله أكبر" // Allahu Akbar Allahu Akbar
  private readonly TAKBIR_TRANSLITERATION = "Allahu Akbar Allahu Akbar"
  private readonly TAKBIR_ENGLISH = "Allah is the Greatest, Allah is the Greatest"

  private readonly BASMALA = "بسم الله الرحمن الرحيم" // Bismillah ar-Rahman ar-Raheem
  private readonly BASMALA_TRANSLITERATION = "Bismillah ar-Rahman ar-Raheem"
  private readonly BASMALA_ENGLISH = "In the name of Allah, the Most Gracious, the Most Merciful"

  private readonly SHAHADA = "أشهد أن لا إله إلا الله، أشهد أن محمداً رسول الله"
  private readonly SHAHADA_TRANSLITERATION = "Ashhadu an la ilaha illa Allah, Ashhadu anna Muhammadan rasul Allah"
  private readonly SHAHADA_ENGLISH = "I bear witness that there is no god but Allah, I bear witness that Muhammad is the messenger of Allah"

  generatePrayerCall(
    prayerName: string,
    options: PrayerCallOptions = {}
  ): PrayerCallContent {
    const defaultOptions: Required<PrayerCallOptions> = {
      includeArabic: true,
      includeTransliteration: true,
      includeEnglish: true,
      includeBasmala: false,
      includeTakbir: true,
      customMessage: '',
      voiceStyle: 'traditional'
    }

    const opts = { ...defaultOptions, ...options }
    const prayer = prayerName.toLowerCase()
    const components: string[] = []

    let arabicText = ''
    let transliterationText = ''
    let englishText = ''

    // Add Basmala if requested
    if (opts.includeBasmala) {
      if (opts.includeArabic) arabicText += this.BASMALA + '. '
      if (opts.includeTransliteration) transliterationText += this.BASMALA_TRANSLITERATION + '. '
      if (opts.includeEnglish) englishText += this.BASMALA_ENGLISH + '. '
      components.push('basmala')
    }

    // Add Takbir if requested
    if (opts.includeTakbir) {
      if (opts.includeArabic) arabicText += this.TAKBIR + '. '
      if (opts.includeTransliteration) transliterationText += this.TAKBIR_TRANSLITERATION + '. '
      if (opts.includeEnglish) englishText += this.TAKBIR_ENGLISH + '. '
      components.push('takbir')
    }

    // Add prayer-specific content
    const prayerContent = this.getPrayerSpecificContent(prayer)
    if (prayerContent) {
      if (opts.includeArabic) arabicText += prayerContent.arabic + '. '
      if (opts.includeTransliteration) transliterationText += prayerContent.transliteration + '. '
      if (opts.includeEnglish) englishText += prayerContent.english + '. '
      components.push('prayer-call')
    }

    // Add Shahada for traditional style
    if (opts.voiceStyle === 'traditional') {
      if (opts.includeArabic) arabicText += this.SHAHADA + '. '
      if (opts.includeTransliteration) transliterationText += this.SHAHADA_TRANSLITERATION + '. '
      if (opts.includeEnglish) englishText += this.SHAHADA_ENGLISH + '. '
      components.push('shahada')
    }

    // Add prayer time announcement
    const timeAnnouncement = this.getPrayerTimeAnnouncement(prayer)
    if (opts.includeEnglish) englishText += timeAnnouncement + '. '
    components.push('time-announcement')

    // Add custom message if provided
    if (opts.customMessage) {
      if (opts.includeEnglish) englishText += opts.customMessage + '. '
      components.push('custom-message')
    }

    // Create combined text based on style
    const combined = this.createCombinedText(
      arabicText.trim(),
      transliterationText.trim(),
      englishText.trim(),
      opts.voiceStyle
    )

    return {
      arabic: arabicText.trim(),
      transliteration: transliterationText.trim(),
      english: englishText.trim(),
      combined,
      metadata: {
        prayer: prayerName,
        timestamp: Date.now(),
        style: opts.voiceStyle,
        components
      }
    }
  }

  private getPrayerSpecificContent(prayer: string): {
    arabic: string
    transliteration: string
    english: string
  } | null {
    const prayerData = PRAYER_PHRASES[prayer as keyof typeof PRAYER_PHRASES]
    if (!prayerData) return null

    return {
      arabic: prayerData.arabic,
      transliteration: prayerData.transliteration,
      english: prayerData.english
    }
  }

  private getPrayerTimeAnnouncement(prayer: string): string {
    const prayerNames: Record<string, string> = {
      fajr: "Fajr prayer time",
      dhuhr: "Dhuhr prayer time", 
      asr: "Asr prayer time",
      maghrib: "Maghrib prayer time",
      isha: "Isha prayer time"
    }

    return prayerNames[prayer] || `${prayer.charAt(0).toUpperCase() + prayer.slice(1)} prayer time`
  }

  private createCombinedText(
    arabic: string,
    transliteration: string,
    english: string,
    style: 'traditional' | 'modern' | 'simple'
  ): string {
    switch (style) {
      case 'traditional':
        // Arabic first, then transliteration, then English
        return [arabic, transliteration, english].filter(Boolean).join(' ')
      
      case 'modern':
        // Mix Arabic and English for modern audiences
        return [arabic, english].filter(Boolean).join(' ')
      
      case 'simple':
        // English only for simplicity
        return english
      
      default:
        return [arabic, english].filter(Boolean).join(' ')
    }
  }

  // Generate prayer call for specific times with contextual content
  generateContextualPrayerCall(
    prayerName: string,
    currentTime: Date,
    options: PrayerCallOptions = {}
  ): PrayerCallContent {
    const hour = currentTime.getHours()
    const contextualOptions = { ...options }

    // Add contextual elements based on time
    switch (prayerName.toLowerCase()) {
      case 'fajr':
        // Dawn prayer - emphasize waking up
        contextualOptions.customMessage = "Wake up for the dawn prayer. Prayer is better than sleep."
        break
      
      case 'dhuhr':
        // Noon prayer - during work/school hours
        contextualOptions.customMessage = "Take a break from your activities for the noon prayer."
        break
      
      case 'asr':
        // Afternoon prayer
        contextualOptions.customMessage = "Time for the afternoon prayer before sunset."
        break
      
      case 'maghrib':
        // Sunset prayer - end of day
        contextualOptions.customMessage = "The sun has set. Time for Maghrib prayer."
        break
      
      case 'isha':
        // Night prayer
        contextualOptions.customMessage = "Complete your day with the night prayer."
        break
    }

    return this.generatePrayerCall(prayerName, contextualOptions)
  }

  // Generate prayer call with school-specific context
  generateSchoolPrayerCall(
    prayerName: string,
    schoolContext: {
      isSchoolHours?: boolean
      hasStudents?: boolean
      location?: string
    } = {},
    options: PrayerCallOptions = {}
  ): PrayerCallContent {
    const contextualOptions = { ...options }

    if (schoolContext.isSchoolHours && schoolContext.hasStudents) {
      // School-specific messaging
      const schoolMessages: Record<string, string> = {
        fajr: "Students and staff, it's time for Fajr prayer before school begins.",
        dhuhr: "Students and staff, please proceed to the prayer area for Dhuhr prayer.",
        asr: "Students and staff, time for Asr prayer. Classes will resume after prayer.",
        maghrib: "Students and staff, Maghrib prayer time. School day is ending.",
        isha: "Students and staff, time for Isha prayer before going home."
      }

      const schoolMessage = schoolMessages[prayerName.toLowerCase()]
      if (schoolMessage) {
        contextualOptions.customMessage = schoolMessage
      }
    }

    if (schoolContext.location) {
      contextualOptions.customMessage = 
        (contextualOptions.customMessage || '') + 
        ` Please gather at ${schoolContext.location}.`
    }

    return this.generatePrayerCall(prayerName, contextualOptions)
  }

  // Generate multiple language versions
  generateMultilingualPrayerCall(
    prayerName: string,
    languages: Array<'arabic' | 'english' | 'hausa' | 'twi'>,
    options: PrayerCallOptions = {}
  ): Record<string, PrayerCallContent> {
    const results: Record<string, PrayerCallContent> = {}

    for (const language of languages) {
      const langOptions = { ...options }
      
      switch (language) {
        case 'arabic':
          langOptions.includeArabic = true
          langOptions.includeEnglish = false
          langOptions.includeTransliteration = false
          break
        
        case 'english':
          langOptions.includeArabic = false
          langOptions.includeEnglish = true
          langOptions.includeTransliteration = true
          break
        
        case 'hausa':
        case 'twi':
          // For local languages, include English and transliteration
          langOptions.includeArabic = true
          langOptions.includeEnglish = true
          langOptions.includeTransliteration = true
          // Add local language greeting
          langOptions.customMessage = this.getLocalLanguageGreeting(language, prayerName)
          break
      }

      results[language] = this.generatePrayerCall(prayerName, langOptions)
    }

    return results
  }

  private getLocalLanguageGreeting(language: 'hausa' | 'twi', prayerName: string): string {
    const greetings: Record<string, Record<string, string>> = {
      hausa: {
        fajr: "Lokacin sallah ta asuba ya yi. Ku zo mu yi sallah.",
        dhuhr: "Lokacin sallah ta rana ya yi. Ku zo mu yi sallah.",
        asr: "Lokacin sallah ta yamma ya yi. Ku zo mu yi sallah.",
        maghrib: "Lokacin sallah ta magariba ya yi. Ku zo mu yi sallah.",
        isha: "Lokacin sallah ta dare ya yi. Ku zo mu yi sallah."
      },
      twi: {
        fajr: "Anɔpa mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
        dhuhr: "Awia mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
        asr: "Anwummere mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
        maghrib: "Anwummere mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
        isha: "Anadwo mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae."
      }
    }

    return greetings[language]?.[prayerName.toLowerCase()] || 
           `Time for ${prayerName} prayer. Come and pray.`
  }

  // Validate prayer call content
  validatePrayerCall(content: PrayerCallContent): {
    valid: boolean
    errors: string[]
    warnings: string[]
  } {
    const errors: string[] = []
    const warnings: string[] = []

    // Check if content is not empty
    if (!content.combined.trim()) {
      errors.push("Prayer call content is empty")
    }

    // Check for minimum required components
    if (!content.metadata.components.includes('prayer-call')) {
      warnings.push("Prayer call does not include traditional prayer phrases")
    }

    if (!content.metadata.components.includes('time-announcement')) {
      warnings.push("Prayer call does not include time announcement")
    }

    // Check Arabic content if included
    if (content.arabic && !this.containsArabicText(content.arabic)) {
      warnings.push("Arabic content may not contain proper Arabic text")
    }

    // Check length (should not be too long for voice generation)
    if (content.combined.length > 1000) {
      warnings.push("Prayer call content is very long and may affect voice generation quality")
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    }
  }

  private containsArabicText(text: string): boolean {
    // Check if text contains Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/
    return arabicRegex.test(text)
  }

  // Get prayer call statistics
  getContentStatistics(content: PrayerCallContent): {
    totalLength: number
    arabicLength: number
    englishLength: number
    wordCount: number
    estimatedDuration: number // in seconds
    components: string[]
  } {
    const words = content.combined.split(/\s+/).filter(word => word.length > 0)
    
    return {
      totalLength: content.combined.length,
      arabicLength: content.arabic.length,
      englishLength: content.english.length,
      wordCount: words.length,
      estimatedDuration: Math.ceil(words.length * 0.6), // ~0.6 seconds per word
      components: content.metadata.components
    }
  }
}

// Global prayer call generator instance
let prayerCallGeneratorInstance: PrayerCallGenerator | null = null

export const getPrayerCallGenerator = (): PrayerCallGenerator => {
  if (!prayerCallGeneratorInstance) {
    prayerCallGeneratorInstance = new PrayerCallGenerator()
  }
  return prayerCallGeneratorInstance
}

// Convenience functions
export const generateSimplePrayerCall = (prayerName: string): string => {
  const generator = getPrayerCallGenerator()
  const content = generator.generatePrayerCall(prayerName, {
    voiceStyle: 'simple',
    includeArabic: false,
    includeTransliteration: false,
    includeEnglish: true
  })
  return content.combined
}

export const generateTraditionalPrayerCall = (prayerName: string): string => {
  const generator = getPrayerCallGenerator()
  const content = generator.generatePrayerCall(prayerName, {
    voiceStyle: 'traditional',
    includeBasmala: true,
    includeTakbir: true
  })
  return content.combined
}

export const generateSchoolPrayerCall = (
  prayerName: string,
  isSchoolHours: boolean = true
): string => {
  const generator = getPrayerCallGenerator()
  const content = generator.generateSchoolPrayerCall(prayerName, {
    isSchoolHours,
    hasStudents: true,
    location: "prayer area"
  })
  return content.combined
}