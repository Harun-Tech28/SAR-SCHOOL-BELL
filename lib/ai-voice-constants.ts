import type { AIVoiceProfile, ProviderCapabilities, AIVoiceProviderType } from "./ai-voice-types"

// Default voice profiles for each provider
export const DEFAULT_VOICE_PROFILES: Record<AIVoiceProviderType, AIVoiceProfile[]> = {
  openai: [
    {
      id: "openai-alloy",
      name: "Alloy",
      language: "english",
      gender: "neutral",
      category: "standard",
      provider: "openai"
    },
    {
      id: "openai-echo",
      name: "Echo",
      language: "english", 
      gender: "male",
      category: "announcement",
      provider: "openai"
    },
    {
      id: "openai-fable",
      name: "Fable",
      language: "english",
      gender: "neutral",
      category: "standard",
      provider: "openai"
    },
    {
      id: "openai-onyx",
      name: "Onyx",
      language: "english",
      gender: "male",
      category: "announcement",
      provider: "openai"
    },
    {
      id: "openai-nova",
      name: "Nova",
      language: "english",
      gender: "female",
      category: "standard",
      provider: "openai"
    },
    {
      id: "openai-shimmer",
      name: "Shimmer",
      language: "english",
      gender: "female",
      category: "announcement",
      provider: "openai"
    }
  ],
  elevenlabs: [
    {
      id: "elevenlabs-rachel",
      name: "Rachel",
      language: "english",
      gender: "female",
      accent: "american",
      category: "standard",
      provider: "elevenlabs"
    },
    {
      id: "elevenlabs-drew",
      name: "Drew",
      language: "english",
      gender: "male",
      accent: "american",
      category: "announcement",
      provider: "elevenlabs"
    },
    {
      id: "elevenlabs-clyde",
      name: "Clyde",
      language: "english",
      gender: "male",
      accent: "american",
      category: "standard",
      provider: "elevenlabs"
    },
    {
      id: "elevenlabs-paul",
      name: "Paul",
      language: "english",
      gender: "male",
      accent: "american",
      category: "announcement",
      provider: "elevenlabs"
    }
  ],
  azure: [
    {
      id: "azure-jenny",
      name: "Jenny",
      language: "english",
      gender: "female",
      accent: "american",
      category: "standard",
      provider: "azure"
    },
    {
      id: "azure-guy",
      name: "Guy",
      language: "english",
      gender: "male",
      accent: "american",
      category: "announcement",
      provider: "azure"
    },
    {
      id: "azure-aria",
      name: "Aria",
      language: "english",
      gender: "female",
      accent: "american",
      category: "announcement",
      provider: "azure"
    },
    {
      id: "azure-davis",
      name: "Davis",
      language: "english",
      gender: "male",
      accent: "american",
      category: "standard",
      provider: "azure"
    }
  ]
}

// Provider capabilities
export const PROVIDER_CAPABILITIES: Record<AIVoiceProviderType, ProviderCapabilities> = {
  openai: {
    maxCharacters: 4096,
    supportedLanguages: ["english", "spanish", "french", "german", "italian", "portuguese", "russian", "japanese", "korean", "chinese", "arabic"],
    supportedFormats: ["mp3", "opus", "aac", "flac"],
    realTimeGeneration: true,
    voiceCloning: false,
    emotionControl: false
  },
  elevenlabs: {
    maxCharacters: 5000,
    supportedLanguages: ["english", "spanish", "french", "german", "italian", "portuguese", "polish", "hindi", "arabic"],
    supportedFormats: ["mp3", "wav", "ogg"],
    realTimeGeneration: true,
    voiceCloning: true,
    emotionControl: true
  },
  azure: {
    maxCharacters: 10000,
    supportedLanguages: ["english", "spanish", "french", "german", "italian", "portuguese", "russian", "japanese", "korean", "chinese", "arabic", "hindi", "dutch", "swedish"],
    supportedFormats: ["mp3", "wav", "ogg", "webm"],
    realTimeGeneration: true,
    voiceCloning: false,
    emotionControl: true
  }
}

// Islamic prayer phrases in Arabic with transliteration
export const PRAYER_PHRASES = {
  fajr: {
    arabic: "حي على الصلاة، حي على الفلاح، الصلاة خير من النوم",
    transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah, as-salatu khayrun min an-nawm",
    english: "Come to prayer, come to success, prayer is better than sleep"
  },
  dhuhr: {
    arabic: "حي على الصلاة، حي على الفلاح",
    transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
    english: "Come to prayer, come to success"
  },
  asr: {
    arabic: "حي على الصلاة، حي على الفلاح",
    transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
    english: "Come to prayer, come to success"
  },
  maghrib: {
    arabic: "حي على الصلاة، حي على الفلاح",
    transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
    english: "Come to prayer, come to success"
  },
  isha: {
    arabic: "حي على الصلاة، حي على الفلاح",
    transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
    english: "Come to prayer, come to success"
  }
}

// Bell and announcement templates
export const AUDIO_TEMPLATES = {
  bell: {
    class: "School bell - Class time",
    break: "School bell - Break time",
    assembly: "School bell - Assembly time",
    dismissal: "School bell - Dismissal time"
  },
  announcement: {
    attention: "Attention students and staff",
    general: "This is a general announcement",
    emergency: "This is an emergency announcement"
  }
}

// Cache key generation
export const generateCacheKey = (text: string, voice: string, provider: string): string => {
  const hash = btoa(text + voice + provider).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32)
  return `ai-voice-${provider}-${voice}-${hash}`
}

// Cost estimation (approximate costs per 1000 characters)
export const PROVIDER_COSTS: Record<AIVoiceProviderType, number> = {
  openai: 0.015, // $0.015 per 1000 characters
  elevenlabs: 0.30, // $0.30 per 1000 characters
  azure: 0.016 // $0.016 per 1000 characters
}

// Rate limiting defaults
export const DEFAULT_RATE_LIMITS = {
  openai: {
    requestsPerMinute: 50,
    charactersPerDay: 50000
  },
  elevenlabs: {
    requestsPerMinute: 20,
    charactersPerDay: 20000
  },
  azure: {
    requestsPerMinute: 100,
    charactersPerDay: 100000
  }
}