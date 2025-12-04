import type { AudioCacheManager, CacheMetadata, CacheStats } from "./ai-voice-types"
import { generateCacheKey } from "./ai-voice-constants"

// IndexedDB database configuration
const DB_NAME = "AIVoiceCache"
const DB_VERSION = 1
const AUDIO_STORE = "audioFiles"
const METADATA_STORE = "metadata"

interface StoredAudioData {
  key: string
  audioBuffer: ArrayBuffer
  metadata: CacheMetadata
}

interface StoredMetadata extends CacheMetadata {
  key: string
}

export class IndexedDBAudioCache implements AudioCacheManager {
  private db: IDBDatabase | null = null
  private initPromise: Promise<void> | null = null

  constructor() {
    this.initPromise = this.initializeDB()
  }

  private async initializeDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined" || !window.indexedDB) {
        reject(new Error("IndexedDB not available"))
        return
      }

      const request = indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = () => {
        reject(new Error("Failed to open IndexedDB"))
      }

      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result

        // Create audio files store
        if (!db.objectStoreNames.contains(AUDIO_STORE)) {
          const audioStore = db.createObjectStore(AUDIO_STORE, { keyPath: "key" })
          audioStore.createIndex("timestamp", "metadata.timestamp", { unique: false })
          audioStore.createIndex("provider", "metadata.provider", { unique: false })
          audioStore.createIndex("usage", "metadata.usage", { unique: false })
        }

        // Create metadata store for quick queries
        if (!db.objectStoreNames.contains(METADATA_STORE)) {
          const metadataStore = db.createObjectStore(METADATA_STORE, { keyPath: "key" })
          metadataStore.createIndex("timestamp", "timestamp", { unique: false })
          metadataStore.createIndex("provider", "provider", { unique: false })
          metadataStore.createIndex("size", "size", { unique: false })
          metadataStore.createIndex("usage", "usage", { unique: false })
        }
      }
    })
  }

  private async ensureDB(): Promise<IDBDatabase> {
    if (!this.initPromise) {
      this.initPromise = this.initializeDB()
    }
    await this.initPromise

    if (!this.db) {
      throw new Error("Database not initialized")
    }
    return this.db
  }

  async store(key: string, audio: AudioBuffer, metadata: CacheMetadata): Promise<void> {
    const db = await this.ensureDB()

    // Convert AudioBuffer to ArrayBuffer for storage
    const arrayBuffer = this.audioBufferToArrayBuffer(audio)

    const audioData: StoredAudioData = {
      key,
      audioBuffer: arrayBuffer,
      metadata: {
        ...metadata,
        timestamp: Date.now(),
        size: arrayBuffer.byteLength
      }
    }

    const metadataRecord: StoredMetadata = {
      key,
      ...audioData.metadata
    }

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([AUDIO_STORE, METADATA_STORE], "readwrite")
      
      transaction.onerror = () => {
        reject(new Error("Failed to store audio data"))
      }

      transaction.oncomplete = () => {
        resolve()
      }

      // Store audio data
      const audioStore = transaction.objectStore(AUDIO_STORE)
      audioStore.put(audioData)

      // Store metadata separately for quick queries
      const metadataStore = transaction.objectStore(METADATA_STORE)
      metadataStore.put(metadataRecord)
    })
  }

  async retrieve(key: string): Promise<AudioBuffer | null> {
    const db = await this.ensureDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([AUDIO_STORE, METADATA_STORE], "readwrite")
      const audioStore = transaction.objectStore(AUDIO_STORE)
      const metadataStore = transaction.objectStore(METADATA_STORE)

      const request = audioStore.get(key)

      request.onerror = () => {
        reject(new Error("Failed to retrieve audio data"))
      }

      request.onsuccess = () => {
        const result = request.result as StoredAudioData | undefined

        if (!result) {
          resolve(null)
          return
        }

        try {
          // Convert ArrayBuffer back to AudioBuffer
          const audioBuffer = this.arrayBufferToAudioBuffer(result.audioBuffer)
          
          // Update usage count
          const updateRequest = metadataStore.get(key)
          updateRequest.onsuccess = () => {
            const metadata = updateRequest.result as StoredMetadata
            if (metadata) {
              metadata.usage += 1
              metadataStore.put(metadata)
              
              // Also update in audio store
              result.metadata.usage += 1
              audioStore.put(result)
            }
          }

          resolve(audioBuffer)
        } catch (error) {
          reject(new Error("Failed to convert stored data to AudioBuffer"))
        }
      }
    })
  }

  async exists(key: string): Promise<boolean> {
    const db = await this.ensureDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(METADATA_STORE, "readonly")
      const store = transaction.objectStore(METADATA_STORE)
      const request = store.count(key)

      request.onerror = () => {
        reject(new Error("Failed to check if key exists"))
      }

      request.onsuccess = () => {
        resolve(request.result > 0)
      }
    })
  }

  async clear(pattern?: string): Promise<void> {
    const db = await this.ensureDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([AUDIO_STORE, METADATA_STORE], "readwrite")
      
      transaction.onerror = () => {
        reject(new Error("Failed to clear cache"))
      }

      transaction.oncomplete = () => {
        resolve()
      }

      if (!pattern) {
        // Clear all data
        transaction.objectStore(AUDIO_STORE).clear()
        transaction.objectStore(METADATA_STORE).clear()
      } else {
        // Clear data matching pattern
        this.clearByPattern(transaction, pattern)
      }
    })
  }

  private clearByPattern(transaction: IDBTransaction, pattern: string): void {
    const metadataStore = transaction.objectStore(METADATA_STORE)
    const audioStore = transaction.objectStore(AUDIO_STORE)
    
    const request = metadataStore.openCursor()
    
    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result as IDBCursorWithValue
      
      if (cursor) {
        const metadata = cursor.value as StoredMetadata
        
        // Simple pattern matching - check if key contains pattern
        if (metadata.key.includes(pattern) || 
            metadata.provider.includes(pattern) ||
            metadata.voice.includes(pattern)) {
          
          // Delete from both stores
          audioStore.delete(metadata.key)
          metadataStore.delete(metadata.key)
        }
        
        cursor.continue()
      }
    }
  }

  async getUsageStats(): Promise<CacheStats> {
    const db = await this.ensureDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(METADATA_STORE, "readonly")
      const store = transaction.objectStore(METADATA_STORE)
      const request = store.openCursor()

      let totalSize = 0
      let totalFiles = 0
      let totalUsage = 0
      let oldestFile = Date.now()
      let newestFile = 0

      request.onerror = () => {
        reject(new Error("Failed to get usage stats"))
      }

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result as IDBCursorWithValue

        if (cursor) {
          const metadata = cursor.value as StoredMetadata
          
          totalSize += metadata.size
          totalFiles += 1
          totalUsage += metadata.usage
          
          if (metadata.timestamp < oldestFile) {
            oldestFile = metadata.timestamp
          }
          
          if (metadata.timestamp > newestFile) {
            newestFile = metadata.timestamp
          }

          cursor.continue()
        } else {
          // Calculate hit rate (simplified - based on average usage)
          const hitRate = totalFiles > 0 ? (totalUsage / totalFiles) * 100 : 0

          resolve({
            totalSize,
            totalFiles,
            hitRate: Math.min(hitRate, 100), // Cap at 100%
            oldestFile: totalFiles > 0 ? oldestFile : 0,
            newestFile: totalFiles > 0 ? newestFile : 0
          })
        }
      }
    })
  }

  async cleanup(): Promise<void> {
    const stats = await this.getUsageStats()
    const maxSize = 100 * 1024 * 1024 // 100MB default
    const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds

    if (stats.totalSize <= maxSize) {
      // Only clean up old files if not over size limit
      await this.cleanupOldFiles(maxAge)
      return
    }

    // If over size limit, clean up least used files first
    await this.cleanupLeastUsedFiles(maxSize)
  }

  private async cleanupOldFiles(maxAge: number): Promise<void> {
    const db = await this.ensureDB()
    const cutoffTime = Date.now() - maxAge

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([AUDIO_STORE, METADATA_STORE], "readwrite")
      
      transaction.onerror = () => {
        reject(new Error("Failed to cleanup old files"))
      }

      transaction.oncomplete = () => {
        resolve()
      }

      const metadataStore = transaction.objectStore(METADATA_STORE)
      const audioStore = transaction.objectStore(AUDIO_STORE)
      const index = metadataStore.index("timestamp")
      
      const request = index.openCursor(IDBKeyRange.upperBound(cutoffTime))
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result as IDBCursorWithValue
        
        if (cursor) {
          const metadata = cursor.value as StoredMetadata
          
          // Delete old files
          audioStore.delete(metadata.key)
          metadataStore.delete(metadata.key)
          
          cursor.continue()
        }
      }
    })
  }

  private async cleanupLeastUsedFiles(maxSize: number): Promise<void> {
    const db = await this.ensureDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([AUDIO_STORE, METADATA_STORE], "readwrite")
      
      transaction.onerror = () => {
        reject(new Error("Failed to cleanup least used files"))
      }

      transaction.oncomplete = () => {
        resolve()
      }

      const metadataStore = transaction.objectStore(METADATA_STORE)
      const audioStore = transaction.objectStore(AUDIO_STORE)
      const index = metadataStore.index("usage")
      
      let currentSize = 0
      const request = index.openCursor() // Opens in ascending order (least used first)
      
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result as IDBCursorWithValue
        
        if (cursor && currentSize < maxSize) {
          const metadata = cursor.value as StoredMetadata
          currentSize += metadata.size
          
          if (currentSize > maxSize) {
            // Delete this file to get under the limit
            audioStore.delete(metadata.key)
            metadataStore.delete(metadata.key)
          }
          
          cursor.continue()
        }
      }
    })
  }

  // Utility methods for AudioBuffer conversion
  private audioBufferToArrayBuffer(audioBuffer: AudioBuffer): ArrayBuffer {
    const numberOfChannels = audioBuffer.numberOfChannels
    const length = audioBuffer.length
    const sampleRate = audioBuffer.sampleRate

    // Create a simple format: [numberOfChannels, length, sampleRate, ...channelData]
    const headerSize = 3 * 4 // 3 32-bit integers
    const dataSize = numberOfChannels * length * 4 // 32-bit floats
    const arrayBuffer = new ArrayBuffer(headerSize + dataSize)
    
    const headerView = new Int32Array(arrayBuffer, 0, 3)
    headerView[0] = numberOfChannels
    headerView[1] = length
    headerView[2] = sampleRate

    let offset = headerSize
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const channelData = audioBuffer.getChannelData(channel)
      const channelView = new Float32Array(arrayBuffer, offset, length)
      channelView.set(channelData)
      offset += length * 4
    }

    return arrayBuffer
  }

  private arrayBufferToAudioBuffer(arrayBuffer: ArrayBuffer): AudioBuffer {
    const headerView = new Int32Array(arrayBuffer, 0, 3)
    const numberOfChannels = headerView[0]
    const length = headerView[1]
    const sampleRate = headerView[2]

    // Create AudioContext if not available (for Node.js environments)
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    const audioContext = new AudioContext()
    
    const audioBuffer = audioContext.createBuffer(numberOfChannels, length, sampleRate)

    let offset = 3 * 4 // Skip header
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const channelView = new Float32Array(arrayBuffer, offset, length)
      const channelData = audioBuffer.getChannelData(channel)
      channelData.set(channelView)
      offset += length * 4
    }

    return audioBuffer
  }
}

// Factory function to create cache instance
export const createAudioCache = (): AudioCacheManager => {
  return new IndexedDBAudioCache()
}

// Singleton instance for global use
let cacheInstance: AudioCacheManager | null = null

export const getAudioCache = (): AudioCacheManager => {
  if (!cacheInstance) {
    cacheInstance = createAudioCache()
  }
  return cacheInstance
}