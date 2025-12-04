import type { AudioCacheManager, CacheMetadata, CacheStats, AIVoiceSettings } from "./ai-voice-types"
import { getAudioCache } from "./audio-cache"
import { generateCacheKey } from "./ai-voice-constants"

export class CacheManager {
  private cache: AudioCacheManager
  private settings: AIVoiceSettings | null = null

  constructor(cache?: AudioCacheManager) {
    this.cache = cache || getAudioCache()
  }

  updateSettings(settings: AIVoiceSettings): void {
    this.settings = settings
  }

  async storeAudio(
    text: string,
    voice: string,
    provider: string,
    audioBuffer: AudioBuffer
  ): Promise<void> {
    if (!this.settings?.cacheSettings.enabled) {
      return
    }

    const key = generateCacheKey(text, voice, provider)
    const metadata: CacheMetadata = {
      text: text.substring(0, 100), // Store first 100 chars for reference
      voice,
      provider,
      timestamp: Date.now(),
      size: this.estimateAudioBufferSize(audioBuffer),
      usage: 0
    }

    await this.cache.store(key, audioBuffer, metadata)
    
    // Check if cleanup is needed after storing
    await this.performMaintenanceIfNeeded()
  }

  async retrieveAudio(
    text: string,
    voice: string,
    provider: string
  ): Promise<AudioBuffer | null> {
    if (!this.settings?.cacheSettings.enabled) {
      return null
    }

    const key = generateCacheKey(text, voice, provider)
    return await this.cache.retrieve(key)
  }

  async hasAudio(
    text: string,
    voice: string,
    provider: string
  ): Promise<boolean> {
    if (!this.settings?.cacheSettings.enabled) {
      return false
    }

    const key = generateCacheKey(text, voice, provider)
    return await this.cache.exists(key)
  }

  async clearProviderCache(provider: string): Promise<void> {
    await this.cache.clear(provider)
  }

  async clearVoiceCache(voice: string): Promise<void> {
    await this.cache.clear(voice)
  }

  async clearAllCache(): Promise<void> {
    await this.cache.clear()
  }

  async getCacheStats(): Promise<CacheStats> {
    return await this.cache.getUsageStats()
  }

  async getCacheHealth(): Promise<{
    healthy: boolean
    issues: string[]
    recommendations: string[]
  }> {
    const stats = await this.getCacheStats()
    const issues: string[] = []
    const recommendations: string[] = []
    
    const maxSize = (this.settings?.cacheSettings.maxSize || 100) * 1024 * 1024 // Convert MB to bytes
    const maxAge = (this.settings?.cacheSettings.maxAge || 30) * 24 * 60 * 60 * 1000 // Convert days to ms

    // Check size
    if (stats.totalSize > maxSize * 0.9) {
      issues.push("Cache is approaching size limit")
      recommendations.push("Consider increasing cache size or cleaning up old files")
    }

    // Check age of oldest files
    const oldestAge = Date.now() - stats.oldestFile
    if (oldestAge > maxAge) {
      issues.push("Cache contains very old files")
      recommendations.push("Run cache cleanup to remove expired files")
    }

    // Check hit rate
    if (stats.hitRate < 20) {
      issues.push("Low cache hit rate")
      recommendations.push("Consider adjusting voice generation patterns or cache settings")
    }

    // Check file count
    if (stats.totalFiles > 1000) {
      issues.push("Large number of cached files")
      recommendations.push("Consider more aggressive cleanup policies")
    }

    return {
      healthy: issues.length === 0,
      issues,
      recommendations
    }
  }

  async performMaintenance(): Promise<{
    filesRemoved: number
    spaceSaved: number
    errors: string[]
  }> {
    const beforeStats = await this.getCacheStats()
    const errors: string[] = []

    try {
      await this.cache.cleanup()
    } catch (error) {
      errors.push(`Cleanup failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }

    const afterStats = await this.getCacheStats()
    
    return {
      filesRemoved: beforeStats.totalFiles - afterStats.totalFiles,
      spaceSaved: beforeStats.totalSize - afterStats.totalSize,
      errors
    }
  }

  private async performMaintenanceIfNeeded(): Promise<void> {
    if (!this.settings) return

    const stats = await this.getCacheStats()
    const maxSize = this.settings.cacheSettings.maxSize * 1024 * 1024 // Convert MB to bytes

    // Perform maintenance if over 90% of max size
    if (stats.totalSize > maxSize * 0.9) {
      try {
        await this.cache.cleanup()
      } catch (error) {
        console.warn("Cache maintenance failed:", error)
      }
    }
  }

  private estimateAudioBufferSize(audioBuffer: AudioBuffer): number {
    // Estimate size: numberOfChannels * length * 4 bytes per sample + overhead
    return audioBuffer.numberOfChannels * audioBuffer.length * 4 + 100
  }

  // Utility methods for cache optimization
  async getTopUsedVoices(limit: number = 10): Promise<Array<{
    voice: string
    provider: string
    usage: number
    size: number
  }>> {
    // This would require extending the cache interface to support more complex queries
    // For now, return empty array - can be implemented later if needed
    return []
  }

  async getCacheUsageByProvider(): Promise<Record<string, {
    files: number
    size: number
    usage: number
  }>> {
    // This would require extending the cache interface to support aggregation queries
    // For now, return empty object - can be implemented later if needed
    return {}
  }

  async optimizeCache(): Promise<{
    duplicatesRemoved: number
    spaceSaved: number
    optimizationApplied: string[]
  }> {
    const optimizationApplied: string[] = []
    let duplicatesRemoved = 0
    let spaceSaved = 0

    // Future optimization strategies:
    // 1. Remove duplicate content with different keys
    // 2. Compress old audio files
    // 3. Convert to more efficient formats
    // 4. Merge similar content

    optimizationApplied.push("Basic cleanup performed")

    try {
      const maintenanceResult = await this.performMaintenance()
      spaceSaved = maintenanceResult.spaceSaved
      optimizationApplied.push("Expired files removed")
    } catch (error) {
      console.warn("Cache optimization failed:", error)
    }

    return {
      duplicatesRemoved,
      spaceSaved,
      optimizationApplied
    }
  }
}

// Global cache manager instance
let cacheManagerInstance: CacheManager | null = null

export const getCacheManager = (): CacheManager => {
  if (!cacheManagerInstance) {
    cacheManagerInstance = new CacheManager()
  }
  return cacheManagerInstance
}

export const initializeCacheManager = (settings: AIVoiceSettings): CacheManager => {
  const manager = getCacheManager()
  manager.updateSettings(settings)
  return manager
}