import type { VoiceType, Language } from "./store"
import { VOICE_OPTIONS } from "./voice-utils"
import { getAvailableVoices } from "./voice-initialization"

export interface VoiceOption {
  id: VoiceType
  name: string
  provider: string
  language: Language
  description: string
  category: 'standard' | 'religious' | 'announcement' | 'bell'
  available: boolean
}

export class VoiceSelector {
  static getAllVoices(): VoiceOption[] {
    const availableVoices = getAvailableVoices()
    
    return Object.entries(VOICE_OPTIONS).map(([id, option]) => {
      const availableVoice = availableVoices.find(v => v.id === id)
      
      return {
        id: id as VoiceType,
        name: option.name,
        provider: availableVoice?.provider || "Browser TTS",
        language: option.language,
        description: option.description,
        category: this.categorizeVoice(id),
        available: true // All voices in VOICE_OPTIONS should be available
      }
    })
  }

  static getVoicesByProvider(provider: string): VoiceOption[] {
    return this.getAllVoices().filter(voice => 
      voice.provider.toLowerCase().includes(provider.toLowerCase())
    )
  }

  static getVoicesByLanguage(language: Language): VoiceOption[] {
    return this.getAllVoices().filter(voice => voice.language === language)
  }

  static getVoicesByCategory(category: 'standard' | 'religious' | 'announcement' | 'bell'): VoiceOption[] {
    return this.getAllVoices().filter(voice => voice.category === category)
  }

  static getAIVoices(): VoiceOption[] {
    return this.getAllVoices().filter(voice => 
      voice.provider !== "Browser TTS"
    )
  }

  static getTTSVoices(): VoiceOption[] {
    return this.getAllVoices().filter(voice => 
      voice.provider === "Browser TTS"
    )
  }

  static getRecommendedVoices(): {
    announcement: VoiceOption[]
    prayer: VoiceOption[]
    bell: VoiceOption[]
    general: VoiceOption[]
  } {
    const allVoices = this.getAllVoices()
    
    return {
      announcement: [
        ...allVoices.filter(v => v.id.includes('echo')),
        ...allVoices.filter(v => v.id.includes('guy')),
        ...allVoices.filter(v => v.id.includes('drew')),
        ...allVoices.filter(v => v.id === 'standard-male')
      ].slice(0, 4),
      
      prayer: [
        ...allVoices.filter(v => v.id === 'azan-islamic'),
        ...allVoices.filter(v => v.id === 'arabic'),
        ...allVoices.filter(v => v.id.includes('aria')),
        ...allVoices.filter(v => v.language === 'arabic')
      ].slice(0, 4),
      
      bell: [
        ...allVoices.filter(v => v.id.includes('shimmer')),
        ...allVoices.filter(v => v.id.includes('nova')),
        ...allVoices.filter(v => v.id === 'standard-female'),
        ...allVoices.filter(v => v.id.includes('jenny'))
      ].slice(0, 4),
      
      general: [
        ...allVoices.filter(v => v.id.includes('alloy')),
        ...allVoices.filter(v => v.id.includes('rachel')),
        ...allVoices.filter(v => v.id === 'standard-male'),
        ...allVoices.filter(v => v.id === 'standard-female')
      ].slice(0, 4)
    }
  }

  private static categorizeVoice(voiceId: string): 'standard' | 'religious' | 'announcement' | 'bell' {
    if (voiceId.includes('azan') || voiceId === 'arabic') {
      return 'religious'
    }
    
    if (voiceId.includes('echo') || voiceId.includes('guy') || 
        voiceId.includes('drew') || voiceId.includes('aria')) {
      return 'announcement'
    }
    
    if (voiceId.includes('shimmer') || voiceId.includes('nova')) {
      return 'bell'
    }
    
    return 'standard'
  }

  static searchVoices(query: string): VoiceOption[] {
    const searchTerm = query.toLowerCase()
    return this.getAllVoices().filter(voice =>
      voice.name.toLowerCase().includes(searchTerm) ||
      voice.provider.toLowerCase().includes(searchTerm) ||
      voice.description.toLowerCase().includes(searchTerm) ||
      voice.language.toLowerCase().includes(searchTerm)
    )
  }

  static getVoiceInfo(voiceId: VoiceType): VoiceOption | null {
    return this.getAllVoices().find(voice => voice.id === voiceId) || null
  }

  static isAIVoice(voiceId: VoiceType): boolean {
    const voice = this.getVoiceInfo(voiceId)
    return voice ? voice.provider !== "Browser TTS" : false
  }

  static getProviderVoices(): Record<string, VoiceOption[]> {
    const voices = this.getAllVoices()
    const providers: Record<string, VoiceOption[]> = {}
    
    voices.forEach(voice => {
      if (!providers[voice.provider]) {
        providers[voice.provider] = []
      }
      providers[voice.provider].push(voice)
    })
    
    return providers
  }

  static getLanguageVoices(): Record<Language, VoiceOption[]> {
    const voices = this.getAllVoices()
    const languages: Record<string, VoiceOption[]> = {}
    
    voices.forEach(voice => {
      if (!languages[voice.language]) {
        languages[voice.language] = []
      }
      languages[voice.language].push(voice)
    })
    
    return languages as Record<Language, VoiceOption[]>
  }

  // Get voice statistics
  static getVoiceStats(): {
    total: number
    byProvider: Record<string, number>
    byLanguage: Record<Language, number>
    byCategory: Record<string, number>
    aiVoices: number
    ttsVoices: number
  } {
    const voices = this.getAllVoices()
    
    const byProvider: Record<string, number> = {}
    const byLanguage: Record<string, number> = {}
    const byCategory: Record<string, number> = {}
    
    let aiVoices = 0
    let ttsVoices = 0
    
    voices.forEach(voice => {
      // Count by provider
      byProvider[voice.provider] = (byProvider[voice.provider] || 0) + 1
      
      // Count by language
      byLanguage[voice.language] = (byLanguage[voice.language] || 0) + 1
      
      // Count by category
      byCategory[voice.category] = (byCategory[voice.category] || 0) + 1
      
      // Count AI vs TTS
      if (voice.provider === "Browser TTS") {
        ttsVoices++
      } else {
        aiVoices++
      }
    })
    
    return {
      total: voices.length,
      byProvider,
      byLanguage: byLanguage as Record<Language, number>,
      byCategory,
      aiVoices,
      ttsVoices
    }
  }
}

// Export convenience functions
export const getAllVoices = () => VoiceSelector.getAllVoices()
export const getVoicesByProvider = (provider: string) => VoiceSelector.getVoicesByProvider(provider)
export const getVoicesByLanguage = (language: Language) => VoiceSelector.getVoicesByLanguage(language)
export const getVoicesByCategory = (category: 'standard' | 'religious' | 'announcement' | 'bell') => 
  VoiceSelector.getVoicesByCategory(category)
export const getAIVoices = () => VoiceSelector.getAIVoices()
export const getTTSVoices = () => VoiceSelector.getTTSVoices()
export const getRecommendedVoices = () => VoiceSelector.getRecommendedVoices()
export const searchVoices = (query: string) => VoiceSelector.searchVoices(query)
export const getVoiceInfo = (voiceId: VoiceType) => VoiceSelector.getVoiceInfo(voiceId)
export const isAIVoice = (voiceId: VoiceType) => VoiceSelector.isAIVoice(voiceId)
export const getProviderVoices = () => VoiceSelector.getProviderVoices()
export const getLanguageVoices = () => VoiceSelector.getLanguageVoices()
export const getVoiceStats = () => VoiceSelector.getVoiceStats()